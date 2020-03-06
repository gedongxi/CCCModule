import BaseScene from "../base/BaseScene";
import Misc from "../../commonUnit/Misc";
import { EGameScene } from "../base/BaseDefine";
import GameCtl from "../GameCtl";
const { ccclass, property } = cc._decorator;

@ccclass
export default class TransitionScene extends BaseScene {
  @property(cc.Node)
  private nodRootUI: cc.Node = null;

  @property(cc.Prefab)
  private pfbTransitionUI: cc.Prefab = null;

  // 上一个场景
  public static PreSceneName: EGameScene = null;

  // 下一个场景
  public static NextSceneName: EGameScene = null;

  // 额外参数
  public static ExtendParams: any = {};

  public onLoad() {
    Misc.myLog("TransitionScene - 创建");
    this.mStrSceneName = EGameScene.TransitionScene;

    super.onLoad();
    this.init();
    
  }

  public start() {
    super.start();
  }

  public onDestroy() {
    Misc.myLog("TransitionScene - 销毁");
    super.onDestroy();
  } 

  private init() {
    Misc.myLog("~~~~~~~~~~~~~~~~~~~~~~~切换到过度场景~~~~~~~~~~~~~~~~~~~~", TransitionScene.NextSceneName);
    const nodTransitionUI = cc.instantiate(this.pfbTransitionUI); 
    nodTransitionUI.parent =  this.nodRootUI;

    console.log("TransitionScene - 创建");

    this.scheduleOnce( () => {
      cc.director.loadScene(TransitionScene.NextSceneName);
    }, 1.0);
  }
}
