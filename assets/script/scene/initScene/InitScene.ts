import BaseScene from "../base/BaseScene";
import { EGameScene } from "../base/BaseDefine";
const { ccclass, property } = cc._decorator;

@ccclass
export default class InitScene extends BaseScene {

  @property(cc.Node)
  private nodRootUI: cc.Node = null;

  @property(cc.Prefab)
  private pfbInitUI: cc.Prefab = null;

  public onLoad() {
    
    console.log("InitScene - 创建");
    
    this.mStrSceneName = EGameScene.InitScene;
    
    super.onLoad();

    this.init();
  }
  
  public start() {
    super.start();
  }

  public onDestroy() {

    console.log("InitScene - 销毁");
    
    super.onDestroy();
  }
  
  private init() {
    const nodInitUI = cc.instantiate(this.pfbInitUI); 
    nodInitUI.parent =  this.nodRootUI;
  }
}
