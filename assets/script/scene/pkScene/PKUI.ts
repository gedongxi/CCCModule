import BaseUI from "../base/BaseUI";
import GamePersist from "../GamePersist";
import GameCtl from "../GameCtl";
import { EGameScene } from "../base/BaseDefine";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PlayUI extends BaseUI {


  public onDestroy() {
    super.onDestroy();
  }

  public onLoad() {
    super.onLoad();
    this.init();
  }

  public start() {
    super.start();
  }

  private init() {
  }

  private onBtnBack() {
    const compAlert = GamePersist.INSTANCE.showAlert("common_text10006");
    if (compAlert) {
      compAlert.setOkBtnCallback( () => {
        GameCtl.INSTANCE.loadNextScene(EGameScene.MainScene);
      });
    }
  }
}
