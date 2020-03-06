/**
 * author:陈晓亮
 * date: 2018/12/06
 * desc：全屏ui基类
 */

import BaseComponent from "./BaseComponent";
import { IPanel } from "./IUI";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";

export default class BaseFullPanel extends BaseComponent implements IPanel {

  public ViewNode(): cc.Node {
    return this.node;
  }

  private mIsLittleToBig: boolean = false;
  public start() {
    super.start();
  }
  
  public onLoad() {
    super.onLoad();
  }

  public onDestroy() {
    super.onDestroy();
    EventUtil.Dispatcher.emit(Events.EVENT_ON_OPEN_CLUB);
    EventUtil.Dispatcher.emit(Events.EVENT_MAIN_CLOSE_INSIDE_PANEL);

  }

  public littleToBig() {
    this.mIsLittleToBig = true;
    this.node.setScale(0);
    const tAction1 = cc.scaleTo(0.1, 1);
    this.node.runAction(tAction1);
  }

  // 从大到小出去
  public littleToBigOut() {
    const tAction1 = cc.scaleTo(0.1, 0);
    this.node.runAction(tAction1);
  }

  public onBtnClose() {
    if (this.mIsLittleToBig) {
      this.littleToBigOut();
      this.scheduleOnce(() => {
        this.node.destroy();
      }, 0.2);
      return;
    }
    
    this.node.destroy();
    
  }
}

