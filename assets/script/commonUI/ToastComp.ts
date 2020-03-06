/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用toast comp
 */

import GamePersist from "../scene/GamePersist";
import BaseComponent from "../scene/base/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ToastComp extends BaseComponent {
  public static GetComponent(node: cc.Node): ToastComp {
    return node.getComponent(ToastComp);
  }

  @property(cc.Label)
  public labText: cc.Label = null;

  @property(cc.Sprite)
  public sprBG: cc.Sprite = null;

  public start() {
  }

  public onDestroy() {
    super.onDestroy();
  }

  public onDisable() {
  }

  public setToastMessage(message: string) {
    this.labText.string = message;
    this.labText._updateRenderData(true);
    const textSize = this.labText.node.getContentSize();
    this.sprBG.node.setContentSize(textSize.width + 120, textSize.height + 40);

    this.node.opacity = 255;
    this.node.position = new cc.Vec2(0, 100);

    const delay   = cc.delayTime(0.6);
    const action  = cc.spawn([cc.moveBy(1.3, cc.v2(0, 70)), cc.fadeTo(1.3, 0)]);
    const recycle = cc.callFunc(function() {
      GamePersist.INSTANCE.ToastPool.put(this.node);
    }, this);
    const seqActions = cc.sequence([delay, action, recycle]);
    this.node.runAction(seqActions);
  }
}
