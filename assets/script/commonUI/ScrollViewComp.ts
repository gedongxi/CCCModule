import BaseComponent from "../scene/base/BaseComponent";


const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollViewComp extends BaseComponent {
  @property(cc.ScrollView)
  private scvView: cc.ScrollView = null;

  @property(cc.Node)
  private nodContent: cc.Node = null;

  @property(cc.Node)
  private nodView: cc.Node = null;

  private mRectView: cc.Rect = null;

  private mPosContent: cc.Vec2 = null;

  private mNumChildCount: number = 0;


  public onLoad() {
    const anchorX = this.nodView.anchorX;
    const anchorY = this.nodView.anchorY;
    const posView = this.nodView.position;
    const sizeView = this.nodView.getContentSize();
    this.mRectView = cc.rect(posView.x - sizeView.width * anchorX, posView.y - sizeView.height * anchorY , sizeView.width, sizeView.height);

    this.mPosContent = this.nodContent.position;
  }
  
  public start() {

  }

  protected update(dt) {

    const children = this.nodContent.children;
    const posCurContent = this.nodContent.position;

    if (children.length === 0) {
      return;
    }

    // 垂直
    if (this.scvView.vertical) {
      if (Math.abs(this.mPosContent.y - posCurContent.y) < 5 && this.mNumChildCount === children.length) {
        return;
      }

      this.mPosContent.y = posCurContent.y;
      this.mNumChildCount = children.length;
    } 

    // 水平
    if (this.scvView.horizontal) {
      if (Math.abs(this.mPosContent.x - posCurContent.x) < 5 && this.mNumChildCount === children.length) {
        return;
      }

      this.mPosContent.x = posCurContent.x;
      this.mNumChildCount = children.length;
    }
    
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const anchorX = child.anchorX;
      const anchorY = child.anchorY;
      const posView = child.position;
      const sizeView = child.getContentSize();
      const rectView = cc.rect(posView.x - sizeView.width * anchorX + posCurContent.x, 
                              posView.y - sizeView.height * anchorY + posCurContent.y, 
                              sizeView.width, 
                              sizeView.height);

      if (!this.mRectView.intersects(rectView)) {
        child.opacity = 0;
      } else {
        child.opacity = 255;
      }
    } 
  }
}
