/**
 * author:陈晓亮
 * date: 2018/12/06
 * desc：弹框ui基类
 */

import BaseComponent from "./BaseComponent";
import ResourecLoader from "../../commonUnit/ResourceLoader";
import { DesignResolutionWidth, DesignResolutionHeight } from "./BaseDefine";
import { IPanel } from "./IUI";
import GameCtl from "../GameCtl";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";

export default class BasePopPanel extends BaseComponent implements IPanel {

  // 半透明适配背景
  protected nodAdaptationBg: cc.Node = null;

  public ViewNode(): cc.Node {
    return this.node;
  }

  private mIsLittleToBig: boolean = true;


  public start() {
    super.start();
  }
  
  public onLoad(pIsLittleToBig?: boolean) {
    super.onLoad();

    // 需要填充的宽和高
    const tFillW = GameCtl.INSTANCE.AddAdaptationWidth;
    const tFillH = GameCtl.INSTANCE.AddAdaptationHeight;

    const tNodeW = DesignResolutionWidth + tFillW;
    const tNodeH = DesignResolutionHeight + tFillH;

    // 设置该node本身的尺寸
    this.node.setContentSize(tNodeW, tNodeH);
    
    // 创建半透明适配背景，并置于最下层
    this.nodAdaptationBg = new cc.Node();
    const sprBg = this.nodAdaptationBg.addComponent(cc.Sprite);
    this.nodAdaptationBg.color = cc.Color.BLACK;
    // this.nodAdaptationBg.zIndex = -1;
    this.nodAdaptationBg.setAnchorPoint(0.5, 0.5);
    this.nodAdaptationBg.setPosition(0, 0);
    this.nodAdaptationBg.setContentSize(tNodeW, tNodeH);
    this.nodAdaptationBg.opacity = 215;
    this.node.parent.insertChild(this.nodAdaptationBg, this.node.parent.children.length - 1);
    // this.nodAdaptationBg.parent = this.node.parent;
    this.nodAdaptationBg.addComponent(cc.BlockInputEvents);
    // 加载图片
    ResourecLoader.getFileDataAsyn("resTemp/tempImg/singleColor", (resData) => {
      sprBg.spriteFrame = resData;
      sprBg.node.setContentSize(tNodeW, tNodeH);
    }, cc.SpriteFrame);

    // 默认不开启
    this.setTouchEndClosePanel(false);

    this.mIsLittleToBig = pIsLittleToBig === undefined ? true : pIsLittleToBig;

    if (this.mIsLittleToBig) {
      this.littleToBig();
    }
  }

  public onDestroy() {
    super.onDestroy();
    EventUtil.Dispatcher.emit(Events.EVENT_ON_OPEN_CLUB);
  }

  public setIsLittleToBig(pIsLittleToBig: boolean) {
    this.mIsLittleToBig = pIsLittleToBig;
  }

  // 从小到大进入

  public littleToBig() {
    this.node.setScale(0);
    const tAction1 = cc.scaleTo(0.1, 1);
    this.node.runAction(tAction1);
  }

  // 从大到小出去
  public littleToBigOut() {
    const tAction1 = cc.scaleTo(0.1, 0);
    this.node.runAction(tAction1);
  }

  // 设置适配背景的透明度
  public setAdaptationBgOpacity(opacity: number) {
    this.nodAdaptationBg.opacity = opacity;
  }

  // 是否开启触摸关闭界面
  public setTouchEndClosePanel(touch: boolean, callFun?: Function) {
    const func = (event) => {
      event.stopPropagation();
      if (!!callFun) {
        callFun();
      }
      this.onBtnClose();
    };
    if (touch) {
      this.nodAdaptationBg.on(cc.Node.EventType.TOUCH_END, func, this);
      this.nodAdaptationBg.removeComponent(cc.BlockInputEvents);
    } else {
      this.nodAdaptationBg.off(cc.Node.EventType.TOUCH_END, func, this);
      this.nodAdaptationBg.addComponent(cc.BlockInputEvents);
    }
  }

  public onBtnClose() {
    if (this.mIsLittleToBig) {
      this.littleToBigOut();
      this.scheduleOnce(() => {
        this.nodAdaptationBg.destroy();
        this.node.destroy();
      }, 0.2);
      return;
    }
    
    this.nodAdaptationBg.destroy();
    this.node.destroy();
    
  }
}

