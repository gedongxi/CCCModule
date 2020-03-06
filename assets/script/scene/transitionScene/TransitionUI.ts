import BaseUI from "../base/BaseUI";
import Misc from "../../commonUnit/Misc";
import { EGameScene } from "../base/BaseDefine";
import I18N from "../../i18n/I18N";
import GameCtl from "../GameCtl";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TransitionUI extends BaseUI {

  @property(cc.Label)
  private labTipsShow: cc.Label = null;

  private mArrTipsId: number[] = [30001, 30002, 30003, 30004, 30005, 30006, 30007, 30008, 30009, 30010, 30011];


  public onDestroy() {
    
    Misc.myLog("TransitionUI onDestroy");

    super.onDestroy();
  }

  public onLoad() {

    Misc.myLog("TransitionUI onLoad");

    super.onLoad(true);
    this.init();
  }

  public start() {
    super.start();
  }

  private init() {

    // 随机提示
    if (GameCtl.INSTANCE.PreSceneName === EGameScene.InitScene || GameCtl.INSTANCE.PreSceneName === EGameScene.LoginScene) {
      // this.labTipsShow.string = I18N.getUIText(DataTemp.INSTANCE.TipsId);
    } else {
      const tNumId: number = this.mArrTipsId[Math.round(Math.random() * (this.mArrTipsId.length - 1))];
      // this.labTipsShow.string = I18N.getSysText(tNumId);
    }
  }
}
