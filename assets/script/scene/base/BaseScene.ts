import Misc from "../../commonUnit/Misc";
import GameCtl from "../GameCtl";
import BaseComponent from "./BaseComponent";

export default class BaseScene extends BaseComponent {

  protected mStrSceneName = "";

  public onLoad() {
    GameCtl.INSTANCE.CurrentScene = this;
    if (GameCtl.INSTANCE.ResolutionPolicy === cc.ResolutionPolicy.FIXED_HEIGHT) {
      this.node.getComponent(cc.Canvas).fitHeight = true;
      this.node.getComponent(cc.Canvas).fitWidth = false;
      Misc.myLog("成功设置适配方案 fitHeight");
    } else if (GameCtl.INSTANCE.ResolutionPolicy === cc.ResolutionPolicy.FIXED_WIDTH) {
      this.node.getComponent(cc.Canvas).fitHeight = false;
      this.node.getComponent(cc.Canvas).fitWidth = true;
      Misc.myLog("成功设置适配方案 fitWidth");
    } else {
      Misc.myError("未能成功设置适配方案", GameCtl.INSTANCE.ResolutionPolicy);
    }
  }
  
  public start() {
  }

  public onDestroy() {
    super.onDestroy();
    // GameCtl.INSTANCE.releaseGameTexture();
  }

  // 获取场景名称
  public get SceneName(): string {
    return this.mStrSceneName;
  }
}
