import BaseScene from "../base/BaseScene";
import Misc from "../../commonUnit/Misc";
import { EGameScene } from "../base/BaseDefine";
const { ccclass, property } = cc._decorator;

@ccclass
export default class MainScene extends BaseScene {

  @property(cc.Node)
  private nodRootUI: cc.Node = null;

  @property(cc.Prefab)
  private pfbMainUI: cc.Prefab = null;

  public onLoad() {
    Misc.myLog("MainScene - 创建");
    this.mStrSceneName = EGameScene.MainScene;
    super.onLoad();
    this.init();
  }

  public start() {
    super.start();
  }

  public onDestroy() {
    Misc.myLog("MainScene - 销毁");
  }

  private init() {
    const nodMainUI = cc.instantiate(this.pfbMainUI); 
    nodMainUI.parent =  this.nodRootUI;
  }
}
