import BaseScene from "../base/BaseScene";
import Misc from "../../commonUnit/Misc";
import { EGameScene } from "../base/BaseDefine";
const { ccclass, property } = cc._decorator;

@ccclass
export default class PKScene extends BaseScene {
  @property(cc.Node)
  private nodRootUI: cc.Node = null;

  @property(cc.Prefab)
  private pfbPKUI: cc.Prefab = null;

  public onLoad() {
    Misc.myLog("PKScene - 创建");
    this.mStrSceneName = EGameScene.PKScene;
    super.onLoad();
    this.init();
  }

  public start() {
    super.start();
  }

  public onDestroy() {
    Misc.myLog("PKScene - 销毁");
  }

  private init() {
    const nodPKUI = cc.instantiate(this.pfbPKUI); 
    nodPKUI.parent =  this.nodRootUI;
  }
}
