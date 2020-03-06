import * as ConfigEntry from "../../config/ConfigEntry";
import BaseUI from "../base/BaseUI";
import GameCtl from "../GameCtl";
import { EGameScene } from "../base/BaseDefine";
import GamePersist from "../GamePersist";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InitUI extends BaseUI {

  @property(cc.Label)
  private labLoadingProgress: cc.Label = null;

  public onDestroy() {
    console.log("InitUI - onDestroy");
    super.onDestroy();
  }

  public onLoad() {
    console.log("InitUI - onLoad");

    super.onLoad(true);

    this.init();
  }


  public async start() {

    console.log("InitUI - start");
    
    super.start();    
  }

  private async init() {

    this.labLoadingProgress.string = "30%";

    this.loadConfig();
  }
  
  // 加载配置
  private loadConfig() {

    const self = this;

    const resultPromise = ConfigEntry.loadAllConfig();
    resultPromise.then(function(result: boolean) {
      
      self.labLoadingProgress.string = "50%";

      if (result) {
        GameCtl.INSTANCE.loadNextScene(EGameScene.LoginScene, false);
      } else {

      }
    });
  }
}
