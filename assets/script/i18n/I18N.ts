export default class I18N {
  
  // 设置按钮的文本显示
  public static button(button: cc.Button, languageKey: string) {
    const btnText: string = i18n.ui(languageKey);
    const btnLabel: cc.Label = button.node.getComponentInChildren(cc.Label);
    btnLabel.string = btnText;
  }

  // 设置按钮的文本显示
  public static label(label: cc.Label, languageKey: string) {
    const labelText: string = i18n.ui(languageKey);
    label.string = labelText;
  }

  // 获取UI文本
  public static getUIText(languageKey: string): string {
    return i18n.ui(languageKey);
  }

  // 获取配置文本
  public static getSysText(languageId: number): string {
    const key = "" + languageId;
    return i18n.sys(key);
  }
}
