import { GAME_PERSIST_NODE_ROOT_NET, GAME_PERSIST_NODE_ROOT_REDPOINT, ERecordType } from "./base/BaseDefine";
import GameCtl from "./GameCtl";
import RuntimeManager from "../commonUnit/RuntimeManager";
import AlertComp from "../commonUI/AlertComp";
import Misc from "../commonUnit/Misc";
import I18N from "../i18n/I18N";
import UIText from "../i18n/UIText";

import BaseComponent from "./base/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GamePersist extends BaseComponent {

  public static get INSTANCE() {
    return GamePersist.singleInstance;
  }
  
  private static singleInstance: GamePersist;


  @property(cc.Prefab)
  public pfbToast: cc.Prefab = null;

  @property(cc.Prefab)
  public pfbForceWaiting: cc.Prefab = null;

  @property(cc.Prefab)
  public pfbAlert: cc.Prefab = null;

  // @property(cc.Font)
  public fontNormal: cc.Font = null;

  // 游戏uuid
  private strGameUUID: string = null;

  private nodePoolAlert: cc.NodePool = null;
  private nodePoolWaiting: cc.NodePool = null;
  private nodePoolToast: cc.NodePool = null;

  private nodeNetRoot: cc.Node = null;
  private nodeEvent: cc.Node = null;
  private nodeWaiting: cc.Node = null;
  
  public onLoad() {

    console.log("###################### GamePersist onLoad ########################");

    this.strGameUUID = Partner.getUUID();

    console.log("###################### 当前 uuid ########################", this.strGameUUID);
    
    cc.debug.setDisplayStats(false);
    Misc.myLog("GamePersist onLoad");
    GamePersist.singleInstance = this;
    cc.game.addPersistRootNode(this.node);

    // i18n 相关设置默认的语言内容
    i18n.uiText = UIText;

    // 注册zip文件下载
    Partner.registerZipLoad();

    // toast pool
    this.nodePoolToast = new cc.NodePool();
    for (let i = 0; i < 5; i++) {
      this.nodePoolToast.put(cc.instantiate(this.pfbToast));
    }

    // waiting pool
    this.nodePoolWaiting = new cc.NodePool();
    this.nodePoolWaiting.put(cc.instantiate(this.pfbForceWaiting));
    this.nodeWaiting = null;

    // alert pool
    this.nodePoolAlert = new cc.NodePool("AlertComp");
    this.nodePoolAlert.put(cc.instantiate(this.pfbAlert));

    // 网络的root节点
    this.nodeNetRoot = new cc.Node(GAME_PERSIST_NODE_ROOT_NET);
    this.node.addChild(this.nodeNetRoot);

    // 默认的事件派发器使用的节点
    this.nodeEvent = new cc.Node();
    this.node.addChild(this.nodeEvent);

    // 游戏控制
    GameCtl.INSTANCE.init();

    // 注册原生返回按键
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

    this.init();
  }

  public init() {

  }

  public start() {
  }

  public setNodePosByShift(pNumShiftX, pNumShiftY) {
    this.node.x = this.node.x + pNumShiftX;
    this.node.y = this.node.y + pNumShiftY;
  }

  public get GameUUID() {
    return this.strGameUUID;
  }

  public get NodeNetRoot(): cc.Node {
    return this.nodeNetRoot;
  }

  // 默认的事件派发器使用的节点
  public get NodeEvent(): cc.Node {
    return this.nodeEvent;
  }

  public get ToastPool(): cc.NodePool {
    return this.nodePoolToast;
  }

  public get AlertPool(): cc.NodePool {
    return this.nodePoolAlert;
  }

  public get WaitingPool(): cc.NodePool {
    return this.nodePoolWaiting;
  }

  // 显示loading 提示玩家进行等待
  public showWaiting(msg?: string, immediate?: boolean) {
    if (!GameCtl.INSTANCE.RootUI || !this.nodePoolWaiting || this.nodePoolWaiting.size() <= 0 || RuntimeManager.INSTANCE.IsBackGround || !this.pfbForceWaiting) {
      return;
    }
    const waiting: cc.Node = this.nodePoolWaiting.get();
    GameCtl.INSTANCE.RootUI.showWaiting(waiting, msg, immediate);
    this.nodeWaiting = waiting;
  }

  // 取消loading
  public hideWaiting() {
    if (!this.nodeWaiting) {
      return;
    }
    if (!this.nodeWaiting.isValid) {
      this.nodePoolWaiting.put(cc.instantiate(this.pfbForceWaiting));
      this.nodeWaiting = null;
      return;
    }
    this.nodePoolWaiting.put(this.nodeWaiting);
    this.nodeWaiting = null;
  }

  // 显示alert （args是针对text的替换参数）
  public showAlert(textId: string, titleId?: string, ...args): AlertComp {
    if (!GameCtl.INSTANCE.RootUI || !this.nodePoolAlert || this.nodePoolAlert.size() <= 0 || RuntimeManager.INSTANCE.IsBackGround || !this.pfbAlert) {
      return null;
    }
    const node: cc.Node = this.nodePoolAlert.get();
    let tStrText = "";
    let tStrTitle = "";

    if (args.length > 0) {
      tStrText = Misc.stringReplaceById(textId, ...args);
    } else {
      tStrText = I18N.getUIText(textId);
    }

    if (titleId) {  
      tStrTitle = I18N.getUIText(titleId);
    }
    GameCtl.INSTANCE.RootUI.showAlert(node, tStrText, tStrTitle);
    return AlertComp.GetComponent(node);
  }

  public showToast(textId: string, ...args) {
    if (!GameCtl.INSTANCE.RootUI || !this.nodePoolToast || this.nodePoolToast.size() <= 0 || RuntimeManager.INSTANCE.IsBackGround || !this.pfbToast) {
      return;
    }
    const node: cc.Node = this.nodePoolToast.get();
    let tStrText = "";
    if (args.length > 0) {
      tStrText = Misc.stringReplaceById(textId, ...args);
    } else {
      tStrText = I18N.getUIText(textId);
    }
    GameCtl.INSTANCE.RootUI.showToast(node, tStrText);
  }


  private onKeyDown(event) {
    console.log(" ################### 退出游戏 event.keyCode ################### ", event.keyCode);

    switch (event.keyCode) {
      // 对应于android平台的返回键
      case cc.macro.KEY.back:
      case cc.macro.KEY.escape:
        // 暂时只应用到jsb环境上
        const tmpWindown: any = window;
        if (tmpWindown && tmpWindown.jsb) {
          console.log(" ################### 退出游戏 ################### ");
          Partner.exitGame();
        }
        break;
      default:
        break;
    }
  }
}
