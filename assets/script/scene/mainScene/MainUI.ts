import BaseUI from "../base/BaseUI";
import GameCtl from "../GameCtl";
import { EGameScene } from "../base/BaseDefine";
import GamePersist from "../GamePersist";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainUI extends BaseUI {

  public onDestroy() {
    super.onDestroy();
  }

  public onLoad() {
    super.onLoad();
  }

  public start() {
    super.start();
  }

  private onBtnPK() {
    GamePersist.INSTANCE.showToast("common_text30030");
    const compAlert =  GamePersist.INSTANCE.showAlert("common_text10005");
    if (compAlert) {
      compAlert.setOkBtnCallback( () => {
        GameCtl.INSTANCE.loadNextScene(EGameScene.PKScene);
      });
    }
  }
}
