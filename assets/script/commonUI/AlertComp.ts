
/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用alert
 */

import GamePersist from "../scene/GamePersist";
import BaseComponent from "../scene/base/BaseComponent";
import I18N from "../i18n/I18N";

const {ccclass, property} = cc._decorator;
@ccclass
export default class AlertComp extends BaseComponent {
    public static GetComponent(node: cc.Node): AlertComp {
      return node.getComponent(AlertComp);
    }

    // 显示内容
    @property(cc.Label)
    private labMessage: cc.Label = null;       

    // 显示标题
    @property(cc.Label) 
    private labTitle: cc.Label = null;        

    // 确认按钮
    @property(cc.Button)
    private btnOk: cc.Button = null;              

    // 取消按钮
    @property(cc.Button)
    private btnCancel: cc.Button = null;
    

    // ok/cancel按钮原始坐标
    private mOriginPosOKButton: cc.Vec2 = null;
    private pOriginosCancelButton: cc.Vec2 = null;

    private mTarget: any = null;
    private mOkCallback: Function = null;
    private mCancelCallback: Function = null;

    // 是否加载完
    private mIsInit: boolean = false;

    public onLoad() {
      super.onLoad();      
      this.mOriginPosOKButton     = this.btnOk.node.getPosition();
      this.pOriginosCancelButton  = this.btnCancel.node.getPosition();   

      this.btnOk.getComponentInChildren(cc.Label).string = I18N.getUIText("common_text10002");
      this.btnCancel.getComponentInChildren(cc.Label).string = I18N.getUIText("common_text10003");

      this.init();
    }

    public init() {
      this.mIsInit = true;
    }
    
    public start() {
    }

    public onDestroy() {
      super.onDestroy();
    }
    

    public onDisable() {
    }

    // 设置显示内容
    public setAlertMessage(pStrText: string) {
        this.labMessage.string = pStrText;
    }

    // 设置显示标题
    public setAlertTitle(pStrTitle: string) {
        this.labTitle.string = pStrTitle;
    }

    public configOnlyYes() {
      this.btnCancel.node.active = false;
      this.btnOk.node.x = 0;
    }

    // 设置OK文字
    public setOkText(pStr: string) {
      this.btnOk.getComponentInChildren(cc.Label).string = pStr;
    }

    // 设置取消文字
    public setCancelText(pStr: string) {
      this.btnCancel.getComponentInChildren(cc.Label).string = pStr;
    }

    /* 设置ok按钮回调
     * 注意：如果不设置 target 的值，那么callback一定要传入“箭头式函数”
    */
    public setOkBtnCallback(callback: () => void, target?: any) {
        this.mOkCallback = callback;
        if (target) {
          this.mTarget = target;
        }
    }

    /* 设置cancel按钮回调
     * 注意：如果不设置 target 的值，那么callback一定要传入“箭头式函数”
    */
    public setCancelBtnCallback(callback: () => void, target?: any) {
        this.mCancelCallback = callback;
        if (target) {
          this.mTarget = target;
        }
    }

    // ok 按钮
    private onBtnOkCallback() {
      if (this.mOkCallback) {
        if (this.mTarget) {
          this.mOkCallback.call(this.mTarget);
        } else {
          this.mOkCallback();
        }
      }
      GamePersist.INSTANCE.AlertPool.put(this.node);
    }

    // cancel 按钮
    private onBtnCancelCallback() {
      if (this.mCancelCallback) {
        if (this.mTarget) {
          this.mCancelCallback.call(this.mTarget);
        } else {
          this.mCancelCallback();
        }
      }
      GamePersist.INSTANCE.AlertPool.put(this.node);
    }

    private unuse() {
    }

    private reuse() {
      this.mTarget = null;
      this.mOkCallback = null;
      this.mCancelCallback = null;

      // 还原初始状态
      this.btnCancel.node.active = true;

      if (this.mOriginPosOKButton) {
        this.btnOk.node.setPosition(this.mOriginPosOKButton);  
      }
      if (this.pOriginosCancelButton) {
        this.btnCancel.node.setPosition(this.pOriginosCancelButton); 
      }
      this.btnOk.getComponentInChildren(cc.Label).string = I18N.getUIText("common_text10002");
      this.btnCancel.getComponentInChildren(cc.Label).string = I18N.getUIText("common_text10003");
    }
}
