import { AccDispatcher } from "../../proto/ProtoDispatcher";
import { AccServertimeS2C, AccLoginS2C, AccLoginC2S, AccServertimeC2S, AccCreateS2C, AccEnterS2C, AccReloginC2S, AccReloginS2C, AccAuthUserInfoS2C, AccGuestS2C, AccAccountS2C } from "../../proto/mods/ProtoSectionAcc";
import DataAcc from "../../data/DataAcc";
import NetCtl from "../NetCtl";
import LoginCtl from "../../scene/loginScene/LoginCtl";
import GameCtl from "../../scene/GameCtl";
import DataPlayer from "../../data/DataPlayer";
import Misc from "../../commonUnit/Misc";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";

export default class AccNetHandler {
  // 时间同步
  private timerServerTime: number = null;

  constructor() {
    AccDispatcher.on(AccServertimeS2C.EVENT_NAME, this.handleServerTime, this);
    AccDispatcher.on(AccLoginS2C.EVENT_NAME, this.handleLoginS2C, this);
    AccDispatcher.on(AccCreateS2C.EVENT_NAME, this.handleCreateS2C, this);
    AccDispatcher.on(AccEnterS2C.EVENT_NAME, this.handleEnterS2C, this);
    AccDispatcher.on(AccReloginS2C.EVENT_NAME, this.handleReloginS2C, this);
    // 授权返回
    AccDispatcher.on(AccAuthUserInfoS2C.EVENT_NAME, this.handleAuthUserInfoS2C, this);
    // 是否为游客
    AccDispatcher.on(AccGuestS2C.EVENT_NAME, this.handleGuestS2C, this);
    // 用户授权账号更改 
    AccDispatcher.on(AccAccountS2C.EVENT_NAME, this.handleAccAccount, this);
  }
  
  // 请求登陆
  public requestLogin(gameAccountId: string, gameAccountSign: string) {
    if (!DataAcc.INSTANCE.accOpenId && !(gameAccountId && gameAccountSign)) {
      console.log(" ############ 客户端拒绝登录请求 ############ ", DataAcc.INSTANCE.accOpenId, gameAccountId, gameAccountSign);
      return;
    }

    const loginC2S            = new AccLoginC2S();
    loginC2S.platform         = "" + DataAcc.INSTANCE.accPlatform;
    loginC2S.channelParam     = "" + DataAcc.INSTANCE.accPlatformParam;
    loginC2S.channelOpenId    = "" + DataAcc.INSTANCE.accOpenId;
    loginC2S.gameAccountId    = "" + gameAccountId;
    loginC2S.gameAccountSign  = "" + gameAccountSign;
    loginC2S.mode             = 0;
    console.log(" ############ 正常登录请求 platform=%s channelParam=%s channelOpenId=%s gameAccountId=%s gameAccountSign=%s ############ ", loginC2S.platform, loginC2S.channelParam, loginC2S.channelOpenId, loginC2S.gameAccountId, loginC2S.gameAccountSign);
    NetCtl.INSTANCE.send(loginC2S);
  }

  // 请求重新登录
  public requestRelogin(gameAccountId: string, gameAccountSign: string) {
    const reloginC2S               = new AccReloginC2S();
    reloginC2S.platform            = DataAcc.INSTANCE.accPlatform;
    reloginC2S.id                  = DataPlayer.INSTANCE.PlayerId;
    reloginC2S.gameAccountId       = gameAccountId;
    reloginC2S.gameAccountSign     = gameAccountSign;
    reloginC2S.channelParam        = DataAcc.INSTANCE.accPlatformParam;
    console.log(" ############ 重新登录请求 ############ ", reloginC2S);
    NetCtl.INSTANCE.send(reloginC2S);
  }

  // 服务器返回的登陆结果
  public handleLoginS2C(event: any) {
    const msg: AccLoginS2C = event;
    console.log(" ############ 正常登录返回 ############ ", msg);
    LoginCtl.INSTANCE.onReceiveLoginS2C(msg);

    // 请求服务器时间
    this.startSyncServerTime();
  }

  public handleReloginS2C(data) {
    const msg: AccReloginS2C = data;
    console.log(" ############ 重新登录返回 ############ ", msg);
    LoginCtl.INSTANCE.onReceiveReloginS2C(msg);
  }

  // 请求服务器时间
  public requestServerTime() {
    if (NetCtl.INSTANCE.IsConnected) {
      const serverTime = new AccServertimeC2S();
      NetCtl.INSTANCE.send(serverTime);
    }
  }

  // 处理收到的服务器时间
  public handleServerTime(event: any) {
    const serverTime: AccServertimeS2C = event;
    GameCtl.INSTANCE.ServerTime = serverTime.time;
  }

  // 服务器返回创建角色的结果
  private handleCreateS2C(event: any) {
    const msg: AccCreateS2C = event;
    LoginCtl.INSTANCE.onReceiveCreateS2C(msg);
  }

  // 服务器返回确认成功进入游戏
  private handleEnterS2C(event: any) {
    const msg: AccEnterS2C = event;
    LoginCtl.INSTANCE.didEnterGame(msg);
  }

  // 开始同步时间
  public startSyncServerTime() {
    clearInterval(this.timerServerTime);
    this.timerServerTime = setInterval(() => {
      this.requestServerTime();
    }, 5000);

    // 自调一次
    this.requestServerTime();
  }

  // 授权返回
  public handleAuthUserInfoS2C(event: any) {
    Misc.myLog("授权登录返回", event);
    EventUtil.Dispatcher.emit(Events.EVENT_MAIN_RANK_AUTH_BACK);
  }

  // 是否为游客
  public handleGuestS2C(event: any) {
    const tGuest: AccGuestS2C = event;
    Misc.myLog("是否为游客：", tGuest);
  }

  //  用户授权账号更改 
  public handleAccAccount(event: any) {
    const tAccount: AccAccountS2C = event;
    Misc.myLog("用户授权账号更改：", tAccount);
    LoginCtl.INSTANCE.onAccountChange(JSON.parse(tAccount.info));
  }
}
