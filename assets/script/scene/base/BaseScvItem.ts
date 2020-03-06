import BaseComponent from "./BaseComponent";

export default class BaseScvItem extends BaseComponent {

    private mNumItemId: number;

    public onLoad() {
      super.onLoad();
    }

    // 更新显示 由子类继承，初始化id
    public updateView(pNumId: number) {
      this.mNumItemId = pNumId;
    }

    // 获取该item id
    public getItemId(): number {
      return this.mNumItemId;
    }
}
