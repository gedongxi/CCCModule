
// /**
//  * author:陈晓亮
//  * date: 2019/03/01
//  * desc：通用loading comp 固定图片做法
//  */

// import BaseComponent from "../scene/base/BaseComponent";
// import Misc from "../commonUnit/Misc";

// const {ccclass, property} = cc._decorator;

// @ccclass
// export default class LoadingComp extends BaseComponent {

//   public static GetComponent(node: cc.Node): LoadingComp {
//     if (node.isValid) {
//       return node.getComponent(LoadingComp);
//     }
//   }

//   @property(cc.Sprite)
//   private sprBG: cc.Sprite = null;

//   @property(cc.Node)
//   private nodAnim: cc.Node = null;

//   @property(cc.Sprite)
//   private sprAnim1: cc.Sprite = null;

//   @property(cc.Sprite)
//   private sprAnim2: cc.Sprite = null;

//   public onLoad() {
//     Misc.myLog("WaitingComp onLoad");
//     super.onLoad();
//   }

//   public start() {
//   }

//   // immediate：是否需要立即显示，可避免频繁显示
//   public show(pStrText?: string, pIsImmediate?: boolean) {

//     // 是否需要立即显示, 默认为false
//     pIsImmediate = pIsImmediate ? pIsImmediate : false;

//     // 先取消定时器，确保原始状态
//     this.unschedule(this.showConten);

//     if (!pIsImmediate) {
//       this.nodAnim.active = false;
//       this.sprBG.node.active = false;
//       this.scheduleOnce(this.showConten, 1.0);
//     } else {
//       this.showConten();
//     }
//   }

//   private showConten() {
//     this.nodAnim.active = true;
//     this.sprBG.node.active = true;

//     // 动画2
//     const action1 = cc.repeatForever(
//       cc.spawn(cc.rotateBy(4.0, 360),
//       cc.sequence(
//         cc.scaleTo(2.0, 1.5), 
//         cc.scaleTo(2.0, 0.5)),
//       ),
//     );
//     this.sprAnim1.node.runAction(action1);

//     // 动画1
//     const action2 = cc.repeatForever(cc.rotateBy(4.0, 360));
//     this.sprAnim2.node.runAction(action2);
//   }
// }


/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用loading comp 分帧显示做法
 */

import BaseComponent from "../scene/base/BaseComponent";
import Misc from "../commonUnit/Misc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingComp extends BaseComponent {

  public static GetComponent(node: cc.Node): LoadingComp {
    if (node.isValid) {
      return node.getComponent(LoadingComp);
    }
  }

  @property(cc.Sprite)
  private sprBG: cc.Sprite = null;

  @property(cc.SpriteAtlas)
  private atlasLoading: cc.SpriteAtlas = null;

  // loading 动画
  private animLoading: cc.Animation = null;

  public onLoad() {
    Misc.myLog("WaitingComp onLoad");
    super.onLoad();
    const nodFrameAnim: cc.Node = new cc.Node();
    nodFrameAnim.parent = this.node;
    const animSprite: cc.Sprite = nodFrameAnim.addComponent(cc.Sprite);
    animSprite.trim = false;
    animSprite.sizeMode = cc.Sprite.SizeMode.RAW;
    const animLoading: cc.Animation =  nodFrameAnim.addComponent(cc.Animation);
    const frames: cc.SpriteFrame[] = this.atlasLoading.getSpriteFrames();
    const clip = cc.AnimationClip.createWithSpriteFrames(frames, frames.length);
    clip.name = "loading";
    clip.wrapMode = cc.WrapMode.Loop; 
    animLoading.addClip(clip);
    this.animLoading = animLoading;
  }

  public start() {
  }

  // immediate：是否需要立即显示，可避免频繁显示
  public show(pStrText?: string, pIsImmediate?: boolean) {

    // 是否需要立即显示, 默认为false
    pIsImmediate = pIsImmediate ? pIsImmediate : false;

    // 先取消定时器，确保原始状态
    this.unschedule(this.showConten);

    if (!pIsImmediate) {
      this.animLoading.node.active = false;
      this.sprBG.node.active = false;
      this.scheduleOnce(this.showConten, 1.0);
    } else {
      this.showConten();
    }
  }

  private showConten() {
    this.animLoading.node.active = true;
    this.sprBG.node.active = true;
    this.animLoading.play("loading");
  }
}
