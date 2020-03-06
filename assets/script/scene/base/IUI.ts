import { IWidgetSize } from "./BaseDefine";

export const UI_LAYER_POP_TIPS: string  = "node-ui-pop-tips";
export const UI_LAYER_WAITING: string   = "node-ui-layer-waiting";

export const ZORDER_UI_LAYER_NEWS: number     = 99;
export const ZORDER_UI_LAYER_PANEL: number    = 100;
export const ZORDER_UI_LAYER_POPPANEL: number = 101;
export const ZORDER_UI_LAYER_PET_TIPS: number = 102;
export const ZORDER_UI_LAYER_GUIDE: number    = 103;
export const ZORDER_UI_LAYER_ALERT: number    = 104;
export const ZORDER_UI_LAYER_TOAST: number    = 105;
export const ZORDER_UI_LAYER_TIMER: number    = 106;
export const ZORDER_UI_LAYER_WAITING: number  = 107;
// export const ZORDER_UI_LAYER_TOKEN: number    = 108;

// banner广告 最高层级
export const ZORDER_UI_LAYER_BANNER: number   = 250;



export interface IPanel {
  ViewNode(): cc.Node;
}

export interface IRootUI {

 // ui tip feature 
 showToast(node: cc.Node, msg: string);
 showWaiting(node: cc.Node, msg?: string, immediate?: boolean);
 showAlert(node: cc.Node, msg: string, title?: string);

 // panel feature
 showPanel(panel: IPanel);
 destroyPanel();
 showPopPanel(panel: IPanel);

 // runtime feature
 onAppHide();
 onAppShow();

 // 元素定位
 addWidget(node: cc.Node, type: number, size: IWidgetSize);

 // 加载入主界面的中间ui中
 showInsidePanel(pNode: cc.Node, pNumId: number, pNumStrongId?: number);

 // panel节点获取
 getPanelLayer(): cc.Node;
}
