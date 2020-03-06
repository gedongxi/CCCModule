import BaseScene from "../base/BaseScene";
import { EGameScene, GameBIType } from "../base/BaseDefine";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginScene extends BaseScene {

  @property(cc.Node)
  private nodRootUI: cc.Node = null;

  @property(cc.Prefab)
  private pfbLoginUI: cc.Prefab = null;

  public onLoad() {
    console.log("LoginScene - 创建");
    this.mStrSceneName = EGameScene.LoginScene;
    super.onLoad();
    this.init();
  }
  
  public start() {
    super.start();
  }

  public onDestroy() {
    console.log("LoginScene - 销毁");
    super.onDestroy();
  }
  
  private init() {
    const nodLoginUI = cc.instantiate(this.pfbLoginUI); 
    nodLoginUI.parent =  this.nodRootUI;
  }
}
