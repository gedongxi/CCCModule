import BaseFullPanel from "./BaseFullPanel";
import { IRootUI, ZORDER_UI_LAYER_PANEL, ZORDER_UI_LAYER_POPPANEL, ZORDER_UI_LAYER_ALERT, ZORDER_UI_LAYER_TOAST, ZORDER_UI_LAYER_WAITING, IPanel, ZORDER_UI_LAYER_TIMER } from "./IUI";
import LoadingComp from "../../commonUI/LoadingComp";
import ToastComp from "../../commonUI/ToastComp";
import AlertComp from "../../commonUI/AlertComp";
import { IWidgetSize, WidgetTop, WidgetBottom, WidgetLeft, WidgetRight, DesignResolutionWidth, DesignResolutionHeight } from "./BaseDefine";
import Misc from "../../commonUnit/Misc";
import ResourecLoader from "../../commonUnit/ResourceLoader";
import GameCtl from "../GameCtl";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";

// 所有场景入口UI的基类

export default class BaseUI extends BaseFullPanel implements IRootUI {
  public panelLayer: cc.Node = null;
  public poppanelLayer: cc.Node = null;
  public contaninerPanel: cc.Node = null;
  private toastLayer: cc.Node = null;
  private waitingLayer: cc.Node = null;
  private alertLayer: cc.Node = null;
  private tipsLayer: cc.Node = null;
  private timerLayer: cc.Node = null;
  /*
  ================
  生命周期回调
  ================
  */

  // pIsNotAdaptation参数 不需要适配与否
  public onLoad(pIsNotAdaptation?: boolean) {
    GameCtl.INSTANCE.RootUI = this;

    super.onLoad();

    // panel layer
    this.panelLayer = new cc.Node();
    this.panelLayer.parent = this.node;
    this.panelLayer.setPosition(0, 0);
    this.panelLayer.zIndex = ZORDER_UI_LAYER_PANEL;

    // pop panel layer
    this.poppanelLayer = new cc.Node();
    this.poppanelLayer.parent = this.node;
    this.poppanelLayer.setPosition(0, 0);
    this.poppanelLayer.zIndex = ZORDER_UI_LAYER_POPPANEL;

    // alert layer
    this.alertLayer = new cc.Node();
    this.alertLayer.parent = this.node;
    this.alertLayer.setPosition(0, 0);
    this.alertLayer.zIndex = ZORDER_UI_LAYER_ALERT;

    // toast layer
    this.toastLayer = new cc.Node();
    this.toastLayer.parent = this.node;
    this.toastLayer.x = 0;
    this.toastLayer.y = 230;
    this.toastLayer.zIndex = ZORDER_UI_LAYER_TOAST;

    // tips layer 
    this.tipsLayer = new cc.Node();
    this.tipsLayer.parent = this.node;
    this.tipsLayer.setPosition(0, 0);
    this.tipsLayer.zIndex = ZORDER_UI_LAYER_TOAST;

    // waiting layer
    this.waitingLayer = new cc.Node();
    this.waitingLayer.parent = this.node;
    this.waitingLayer.setPosition(0, 0);
    this.waitingLayer.zIndex = ZORDER_UI_LAYER_WAITING;

    // timer panel 
    this.timerLayer = new cc.Node();
    this.timerLayer.parent = this.node;
    this.timerLayer.setPosition(0, 0);
    this.timerLayer.zIndex = ZORDER_UI_LAYER_TIMER;

    this.screenAdaptation();
  }

  public start() {
    super.start();
  }

  public onDestroy() {
    super.onDestroy();
    GameCtl.INSTANCE.RootUI = null;
  }

  public getPanelLayer(): cc.Node {
    return this.panelLayer;
  }

  // 显示面板
  public showPanel(panel: IPanel) {
    const panelNode: cc.Node = panel.ViewNode();
    panelNode.parent = this.panelLayer;
    EventUtil.Dispatcher.emit(Events.EVENT_ON_CLOSE_CLUB);
  }

  // 显示pop panel 面板
  public showPopPanel(panel: IPanel) {
    const panelNode: cc.Node = panel.ViewNode();
    panelNode.parent = this.poppanelLayer;
    EventUtil.Dispatcher.emit(Events.EVENT_ON_CLOSE_CLUB);
  }

  // 销毁panel中的节点 
  public destroyPanel() {
    this.panelLayer.removeAllChildren(true);
  }

  public onAppHide() {
  }

  public onAppShow() {
  }

  public showInsidePanel(pNode: cc.Node, pNumId: number, pNumStrongId?: number) {

  }

  // ================================================
  // 显示loading
  public showWaiting(node: cc.Node, msg?: string, immediate?: boolean) {
    const waiting = LoadingComp.GetComponent(node);
    node.parent = this.waitingLayer;
    waiting.show(msg, immediate);
  }

  // 显示飘字
  public showToast(node: cc.Node, message: string) {
    node.parent = this.toastLayer;
    const toast: ToastComp = ToastComp.GetComponent(node);
    toast.setToastMessage(message);
  }

  // 显示Alter
  public showAlert(node: cc.Node, message: string, title?: string) {
    const alert = AlertComp.GetComponent(node);
    node.parent = this.alertLayer;
    alert.setAlertMessage(message);
    if (void 0 !== title) {
      alert.setAlertTitle(title);
    }
  }

  // pType 0 上部 1 下部  pSize距离顶部或者底部的大小
  public addWidget(node: cc.Node, type: number, size: IWidgetSize) {
    const widget: cc.Widget = node.addComponent(cc.Widget);
    widget.isAlignOnce   = true;
    widget.isAlignTop    = false;
    widget.isAlignBottom = false;
    widget.isAlignLeft   = false;
    widget.isAlignRight  = false;
    widget.target        = GameCtl.INSTANCE.CurrentScene.getComponent(cc.Canvas).node;
    if ((type & WidgetTop) === WidgetTop) {
      if (size.top === undefined) {
        Misc.myError("addWidget 没有 top值");
      } else {
        widget.isAlignTop    = true;
        widget.top           = size.top;
      }
    }

    if ((type & WidgetBottom) === WidgetBottom) {
      if (size.bottom === undefined) {
        Misc.myError("addWidget 没有 bottom 值");
      } else {
        widget.isAlignBottom  = true;
        widget.bottom         = size.bottom;
      }
    }

    if ((type & WidgetLeft) === WidgetLeft) {
      if (size.left === undefined) {
        Misc.myError("addWidget 没有 left 值");
      } else {
        widget.isAlignLeft    = true;
        widget.left           = size.left;
      }
    }

    if ((type & WidgetRight) === WidgetRight) {
      if (size.right === undefined) {
        Misc.myError("addWidget 没有 right 值");
      } else {
        widget.isAlignRight   = true;
        widget.right          = size.right;
      }
    }
  }

  // 屏幕适配
  private screenAdaptation() {
    // 需要填充的宽和高
    const tAddW = GameCtl.INSTANCE.AddAdaptationWidth;
    const tAddH = GameCtl.INSTANCE.AddAdaptationHeight;

    // 填充宽
    if (tAddW > 0) {
      {
        // 左
        const nodBgL = new cc.Node();
        const sprBgL = nodBgL.addComponent(cc.Sprite);
        nodBgL.setAnchorPoint(1.0, 0.5);
        nodBgL.setPosition(-DesignResolutionWidth / 2, 0);
        nodBgL.parent = this.node;
        nodBgL.zIndex = 10000;

        // 加载图片
        ResourecLoader.getFileDataAsyn("resTemp/singleColor", (resData) => {
          Misc.myLog("宽左补", tAddW / 2);
          sprBgL.spriteFrame = resData;
          sprBgL.type = cc.Sprite.Type.SIMPLE;
          // sprBgL.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprBgL.node.color = new cc.Color(0, 255, 255);
          sprBgL.node.addComponent(cc.BlockInputEvents);
          sprBgL.node.setContentSize(tAddW / 2, DesignResolutionHeight);
        }, cc.SpriteFrame);
      }

      {
        // 右
        const nodBgR = new cc.Node();
        const sprBgR = nodBgR.addComponent(cc.Sprite);
        nodBgR.setAnchorPoint(0, 0.5);
        nodBgR.setPosition(DesignResolutionWidth / 2, 0);
        nodBgR.parent = this.node;
        nodBgR.zIndex = 10000;

        // 加载图片
        ResourecLoader.getFileDataAsyn("resTemp/singleColor", (resData) => {
          Misc.myLog("宽右补", tAddW / 2);
          sprBgR.spriteFrame = resData;
          sprBgR.type = cc.Sprite.Type.SIMPLE;
          // sprBgR.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprBgR.node.color = new cc.Color(0, 255, 255);
          sprBgR.node.addComponent(cc.BlockInputEvents);
          sprBgR.node.setContentSize(tAddW / 2, DesignResolutionHeight);

        }, cc.SpriteFrame);
      }
    }

    if (tAddH > 0) {
      {
        // 上
        const nodBgT = new cc.Node();
        const sprBgT = nodBgT.addComponent(cc.Sprite);
        nodBgT.setAnchorPoint(0.5, 0);
        nodBgT.setPosition(0, DesignResolutionHeight / 2);
        nodBgT.parent = this.node;
        nodBgT.zIndex = 10000;
    
        // 加载图片
        ResourecLoader.getFileDataAsyn("resTemp/singleColor", (resData) => {
          Misc.myLog("高上补", tAddH / 2);
          sprBgT.spriteFrame = resData;
          sprBgT.type = cc.Sprite.Type.SIMPLE;
          sprBgT.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprBgT.node.color = new cc.Color(0, 255, 255);
          sprBgT.node.addComponent(cc.BlockInputEvents);
          sprBgT.node.setContentSize(DesignResolutionWidth, tAddH / 2);
        }, cc.SpriteFrame);
      }


      {
        // 下
        const nodBgB = new cc.Node();
        const sprBgB = nodBgB.addComponent(cc.Sprite);
        nodBgB.setAnchorPoint(0.5, 1.0);
        nodBgB.setPosition(0, -DesignResolutionHeight / 2);
        nodBgB.parent = this.node;
        nodBgB.zIndex = 10000;

        // 加载图片
        ResourecLoader.getFileDataAsyn("resTemp/singleColor", (resData) => {
          Misc.myLog("高下补", tAddH / 2);
          sprBgB.spriteFrame = resData;
          sprBgB.type = cc.Sprite.Type.SIMPLE;
          sprBgB.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprBgB.node.color = new cc.Color(0, 255, 255);
          sprBgB.node.addComponent(cc.BlockInputEvents);
          sprBgB.node.setContentSize(DesignResolutionWidth, tAddH / 2);
        }, cc.SpriteFrame);
      }
    }
  }

  
}
