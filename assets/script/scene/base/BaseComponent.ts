import GamePersist from "../GamePersist";
import I18N from "../../i18n/I18N";

export default class BaseComponent extends cc.Component {
  public start() {
  }
  
  public onLoad() {
    this.replaceLabel();
  }

  public onDestroy() {
  }

  private replaceLabel() {
    const arrLabel =  this.node.getComponentsInChildren(cc.Label);
    arrLabel.forEach((lab) => {
      const textId =  lab.string;
      if (!lab.font) {
        lab.font = GamePersist.INSTANCE.fontNormal;  
      }
      lab.string = I18N.getUIText(textId);
    });
  }
}
