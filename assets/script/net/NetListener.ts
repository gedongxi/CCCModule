import { Events } from "../event/Event";
import EventUtil from "../event/EventUtil";
import NetCtl from "./NetCtl";
import DataAcc from "../data/DataAcc";
import GamePersist from "../scene/GamePersist";
import { IServerListVO, ServerList } from "../config/vo/ConfigVO";
import { EGameScene } from "../scene/base/BaseDefine";
import GameCtl from "../scene/GameCtl";
import BaseComponent from "../scene/base/BaseComponent";

export default class NetListener extends BaseComponent {
  public static AttachToNode(node: cc.Node) {
    node.addComponent(NetListener);
  }

  private tryTimes: number = 0;

  // 从小程序回到前台的断线重连
  private mIsAppHide: boolean = false;

  public onDestroy() {
    super.onDestroy();
    EventUtil.Dispatcher.off(Events.EVENT_APP_ON_HIDE, this.onAppHide, this);
    EventUtil.Dispatcher.off(Events.EVENT_APP_ON_SHOW, this.onAppShow, this);
    EventUtil.Dispatcher.off(Events.EVENT_RECONNECT, this.scheduleCheck, this);
  }
  
  public onLoad() {
    EventUtil.Dispatcher.on(Events.EVENT_APP_ON_HIDE, this.onAppHide, this);
    EventUtil.Dispatcher.on(Events.EVENT_APP_ON_SHOW, this.onAppShow, this);
    EventUtil.Dispatcher.on(Events.EVENT_RECONNECT, this.scheduleCheck, this);
  }

  public start() {
  }

  // 应用进入前台
  private onAppShow(): void {
    console.log(" ......... NetListener onAppShow ......... ", NetCtl.INSTANCE.IsConnected);
    if (NetCtl.INSTANCE.IsConnected) {
      // 回到前台并确认socket还在连接状态
      // EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_SHOW_CONNECT);
      return;
    }
    this.scheduleCheck();
    this.tryConnect();
  }

  // 应用进入后台
  private onAppHide(): void {
    this.mIsAppHide = true;
    console.log(" ......... NetListener onAppHide ......... ");
    this.unsceduleCheck();
  }

  private tryConnect(): boolean {

    if (NetCtl.INSTANCE.GameSocket === null || NetCtl.INSTANCE.GameSocket.connected) {
      return false;
    }

    if (DataAcc.INSTANCE.serverId === null) {
      return false;
    }

    GamePersist.INSTANCE.showWaiting();
    // 重新连接
    const serverVo: IServerListVO = ServerList.get(DataAcc.INSTANCE.serverId);
    console.log(" ############ 重新连接服务器参数 ############ ", serverVo.ip, serverVo.port, serverVo.path, serverVo.security);
    // NetCtl.INSTANCE.connect(serverVo.ip, serverVo.port, serverVo.path, serverVo.security);
    const anyWindow: any = window;
    // 部分小小游戏运行时不支持wss 所以需要把端口降级到ws
    if (anyWindow && anyWindow.__DY_USE_DOWNGRADE_PORT) {
      console.log("###crack downgrade connect server:", serverVo.ip, serverVo.downgradePort, serverVo.path);
      NetCtl.INSTANCE.connect(serverVo.ip, serverVo.downgradePort, serverVo.path, false);
    } else {
      console.log("###crack connect server:", serverVo.ip, serverVo.port, serverVo.path, serverVo.security);
      NetCtl.INSTANCE.connect(serverVo.ip, serverVo.port, serverVo.path, serverVo.security);
    }
    return true;
  }

  private checkNetAccess() {
    
    console.log(" ################# 检测连接状态 第%d次 ################# ", this.tryTimes);

    if (NetCtl.INSTANCE.IsConnected) {

      console.log(" ################# 检测到连接成功 ################# ");

      // 从后台切回的断线重连成功
      if (this.mIsAppHide) {
        // EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_SHOW_CONNECT);
        this.mIsAppHide = false;
      }
      this.unsceduleCheck();
      return;
    }
    if (this.tryTimes > 20) {
      // TODO
      console.log("################# try times reach max #################");
    }
    if (this.tryConnect()) {
      this.tryTimes++; 
    }
  }

  private scheduleCheck() {
    if (GameCtl.INSTANCE.CurSceneName === EGameScene.InitScene) {
      console.log(" ~~~~~~~~ init场景不启动重连 ~~~~~~~~ ");
      return;
    }
    console.log(" ################# 开启连接检测 ################# ");
    this.tryTimes = 0;
    this.unschedule(this.checkNetAccess);
    this.schedule(this.checkNetAccess, 3);
  }

  private unsceduleCheck() {
    console.log(" ################# 关闭连接检测 ################# ");
    GamePersist.INSTANCE.hideWaiting();
    this.tryTimes = 0;
    this.unschedule(this.checkNetAccess);
  }
}
