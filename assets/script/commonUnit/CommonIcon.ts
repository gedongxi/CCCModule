import ResourecLoader from "./ResourceLoader";
import BaseComponent from "../scene/base/BaseComponent";

/**
 * author:王秋月
 * date: 2019/03/01
 * desc：通用 icon，不需要comp
 */

export default class CommonIcon extends BaseComponent {

  public static GetComponent(pNode: cc.Node): CommonIcon {
    return pNode.getComponent(CommonIcon);
  }

  public static New(pStrIconDir: string, pStrIconName: string, callback: () => void = null): CommonIcon {
    
    const tIconNode: cc.Node = new cc.Node();
    const tIconSprite: cc.Sprite = tIconNode.addComponent(cc.Sprite);
    const tCommonIconShow = tIconNode.addComponent(CommonIcon);
    tCommonIconShow.initCommonIcon(pStrIconDir, pStrIconName, callback);
    return tCommonIconShow;
  }

  private mStrIconDir: string;        // 图集名
  private mStrIconName: string;        // 图片名
  private callbackLoadComp: Function = null;  // 加载完成后的对调

  public onDestroy() {
    super.onDestroy();
  }  
  public start() {
  }
  public onLoad() {
  }

  public dispose() {
    this.node.destroy();
  }

  private initCommonIcon(pStrIconDir: string, pStrIconName: string, callback: () => void = null) {
    this.mStrIconDir = pStrIconDir;
    this.mStrIconName = pStrIconName;
    this.callbackLoadComp = callback;
    this.loadSprite();
  }

  public resetCommonIcon(pStrIconDir: string, pStrIconRes: string, callback: () => void = null) {
    if (this.mStrIconDir === pStrIconDir && this.mStrIconName === pStrIconRes) {
      if (this.callbackLoadComp) {
        this.callbackLoadComp();
      }
      return;
    }
    this.mStrIconDir = pStrIconDir;
    this.mStrIconName = pStrIconRes;
    this.callbackLoadComp = callback;
    this.loadSprite();
  }

  // 设置anchor
  public setCommonIconAnchor(pAnchor: number[]) {
    this.node.setAnchorPoint(pAnchor[0], pAnchor[1]);
  }

  // 设置scal
  public setCommonIconScale(pNumScale: number) {
    this.node.setScale(pNumScale);
  }

  // 设置大小 pX 
  public setCommonIconSize(pX: number, pY: number) {
    const tOriginalSize = this.node.getComponent(cc.Sprite).spriteFrame.getOriginalSize();
    if (pX === 0 && pY !== 0) {
      // 根据y调整大小
      this.node.setScale(pY / tOriginalSize.height);
    } else if (pY === 0 && pX !== 0) {
      // 根据x调整大小
      this.node.setScale(pX / tOriginalSize.width);
    } else if (pX !== 0 && pY !== 0) {
      // x,y各自调整大小
      this.node.setScale(pX / tOriginalSize.width, pY / tOriginalSize.height);
    }
  }

  // 加载图集
  protected loadSprite() {
    ResourecLoader.getFileDataAsyn(this.mStrIconDir, (pSpriteAtlas: cc.SpriteAtlas) => {
      if (!this.node || !this.node.isValid) {
        return;
      }
      const tSpriteFrame = pSpriteAtlas.getSpriteFrame(this.mStrIconName);
      this.node.getComponent(cc.Sprite).spriteFrame = tSpriteFrame;
      if (this.callbackLoadComp) {
        this.callbackLoadComp();
      }
      
    }, cc.SpriteAtlas);
  }
}
