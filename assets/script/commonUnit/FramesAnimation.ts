/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用 序列帧动画，不需要comp
 */

import Misc from "./Misc";
import ResourecLoader from "./ResourceLoader";
import BaseComponent from "../scene/base/BaseComponent";

export interface IFramesInfo {
  id: number;
  startFrame: number;
  totalFrame: number;
  animName: string;
  atlasPrefix: string;
  tNumSample: number;
  spriteAtlasName: string;
}
export default class FramesAnimation extends BaseComponent {
  public static animList = [
    {
      id: 1,
      animName: "dice",
      startFrame: 1,
      totalFrame: 12,
      tNumSample: 12, 
      atlasPrefix: "ui-pack-JieMian-TouZiXuLie-dice-",
      spriteAtlasName: "res/ui/pack/JieMian/TouZiXuLie",
    },
    {
      id: 2,
      animName: "yanwu",
      startFrame: 1,
      totalFrame: 8,
      tNumSample: 8, 
      atlasPrefix: "effect-yanwu-",
      spriteAtlasName: "res/effect/yanwu",
    },
    {
      id: 3,
      animName: "anger",
      startFrame: 0,
      totalFrame: 8,
      tNumSample: 8, 
      atlasPrefix: "nuqi_",
      spriteAtlasName: "res/ui/pack/JieMian/ZhanDou",
    },
    {
      id: 4,
      animName: "fire",
      startFrame: 1,
      totalFrame: 5,
      tNumSample: 6, 
      atlasPrefix: "Image ",
      spriteAtlasName: "res/ui/pack/JieMian/XinZhuJieMian/HuoYanXuLieZhen",
    },
  ];

  // // 是否初始化完成
  // private isInit: boolean = false;    

  // // 是否加载完成了图集
  // private isLoaded: boolean = false;

   // 动作
  private ccAnimation: cc.Animation; 

  // 动作
  private ccAnimationClip: cc.AnimationClip; 

  // 动画加载完成后的回调
  private funcLoadComp: Function = null;

  // 动画信息
  private animationInfo: IFramesInfo = null;

  // 根据id 
  public static NewAnimationById(animId: number, callback: (anim: cc.Animation) => void = null): FramesAnimation {
    let animInfo = null;
    for (let i = 0; i < this.animList.length; i++) {
      if (this.animList[i].id === animId) {
        animInfo = this.animList[i];
        break;
      }
    }
    if (!animInfo) {
      Misc.myError(`load animation:${animId} config not exist`);
      return null;
    }

    return this.NewAnimationByInfo(animInfo, callback);
  }

  // 根据信息
  public static NewAnimationByInfo(animInfo: IFramesInfo, callback: (anim: cc.Animation) => void = null): FramesAnimation {
    const nodAnim: cc.Node = new cc.Node();
    const sprAnim: cc.Sprite = nodAnim.addComponent(cc.Sprite);
    sprAnim.trim = false;
    sprAnim.sizeMode = cc.Sprite.SizeMode.RAW;
    const ccAnimation: cc.Animation = nodAnim.addComponent(cc.Animation);
    const framesAnimation: FramesAnimation = nodAnim.addComponent(FramesAnimation);
    framesAnimation.init(animInfo, ccAnimation, callback);
    return framesAnimation;
  }

  public onDestroy() {
    super.onDestroy();
  }  

  public dispose() {
    this.node.destroy();
  }

  public init(animInfo: IFramesInfo, ccAnimation: cc.Animation, callback: (anim: cc.Animation) => void = null) {
    // this.isInit = true;
    // this.isLoaded = false;
    this.animationInfo = animInfo;
    this.ccAnimation = ccAnimation;
    this.funcLoadComp = callback;
    this.loadSprite();
  }

  // public update(dt: number) {
  //   if (!this.isInit) {
  //     return;
  //   }
  //   if (!this.isLoaded) {
  //     this.loadSprite(dt);
  //     return;
  //   }
  // }

  // 播放
  public play(loop: boolean = true) {
    if (!this.ccAnimationClip || !this.ccAnimation) {
      return;
    }
    if (loop) {
      this.ccAnimationClip.wrapMode = cc.WrapMode.Loop; 
    } else {
      this.ccAnimationClip.wrapMode = cc.WrapMode.Normal; 
    }
    this.ccAnimation.play(this.animationInfo.animName);
  }

  // 停止
  public stop() {
    if (!this.ccAnimation) {
      return;
    }
    this.ccAnimation.stop(this.animationInfo.animName);
  }

  // 当前 cc.Animation
  public get CCAnimation(): cc.Animation {
    return this.ccAnimation;
  }

  // 当前 cc.AnimationClip
  public get CCAnimationClip(): cc.AnimationClip {
    return this.ccAnimationClip;
  }

  // 加载图集并做成动画
  protected loadSprite() {
    ResourecLoader.getFileDataAsyn(this.animationInfo.spriteAtlasName, (atlasSprite: cc.SpriteAtlas) => {
      const frames: cc.SpriteFrame[] = [];
      for (let i = this.animationInfo.startFrame; i < this.animationInfo.totalFrame + this.animationInfo.startFrame; i++) {
        const frameName = this.animationInfo.atlasPrefix + i;
        const frame = atlasSprite.getSpriteFrame(frameName);
        frames.push(frame);
      }
      const clip = cc.AnimationClip.createWithSpriteFrames(frames, this.animationInfo.tNumSample);
      clip.name = this.animationInfo.animName;
      this.ccAnimation.addClip(clip);
      this.ccAnimationClip = clip;
      if (this.funcLoadComp) {
        this.funcLoadComp(this.ccAnimation);
      }
      Misc.myLog("动画加载完成", this.animationInfo.animName);
      // this.isLoaded = true;
    }, cc.SpriteAtlas);
  }
}
