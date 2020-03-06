import * as ConfigVO from "../../config/vo/ConfigVO";
import DataAcc from "../../data/DataAcc";
import NetCtl from "../../net/NetCtl";
import { AccLoginS2C, AccCreateS2C, AccEnterS2C, AccEnterC2S, AccReloginS2C, AccCreateC2S, AccAccountS2C } from "../../proto/mods/ProtoSectionAcc";
import { SOCKET_CONNECT } from "../../net/socket/SocketDefine";
import GamePersist from "../GamePersist";
import { EGameScene, GameBIType } from "../base/BaseDefine";
import GameCtl from "../GameCtl";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";
import DataPlayer from "../../data/DataPlayer";


/**
 * 登录流程：
 * 1，从init场景，进入login场景
 * 2，loginUI 初始化时执行Partner.doAccAuthorize，注册
 *    “成功获取用户信息”回调 -- getAccountCallback（带回用户数据）最终存储在 DataAcc 中
 *    “失败获取用户信息”回调 -- inputAccountCallback（决定显示“重新授权”按钮）
 *    Dev平台是通过手动输入账号，“登录按钮”中执行Partner.didAccAuthorize 模拟“获取用户信息”流程。
 * 3，成功获取用户信息之后，执行 LoginCtl.INSTANCE.didGetAuthorize 与服务器建立socket连接。
 * 4，socket连接成功后，通过“SOCKET_CONNECT”消息通知onServerConnected函数，执行loginc2s流程。
 * 5，requestLogin()函数中，执行loginc2s协议，参数如下
 *    platform        -- 从之前获取的用户信息（DataAcc：accPlatform）中获取
 *    channelParam    -- 从之前获取的用户信息（DataAcc：accPlatformParam）中获取
 *    channelOpenId   -- 从之前获取的用户信息（DataAcc：accOpenId）中获取
 *    gameAccountId   -- 尝试先从运行内存再从本地存储中获取 game_account_id
 *    gameAccountSign -- 尝试先从运行内存再从本地存储中获取 game_account_sign
 * 6，客户端收到logins2c的返回，数据包括
 *    gameAccountId（覆盖 DataAcc：gameAccountId和本地local）
 *    gameAccountSign（覆盖 DataAcc：gameAccountSign本地local）
 *    channelOpenId（覆盖 DataAcc：accOpenId）
 *    gameLoginKey（覆盖 DataAcc：accOpenKey）
 *    id（覆盖playerid）
 * 7，前端继续执行AccEnterC2S，等收到返回后正式进入游戏。
 */ 
export default class LoginCtl {
  // 获取LoginCtl单例
  public static get INSTANCE(): LoginCtl {
    if (LoginCtl.singleInstance === null) {
      this.singleInstance = new LoginCtl();
    }
    return LoginCtl.singleInstance;
  }
  private static singleInstance: LoginCtl = null;

  // 存储key
  private static gameAccountKey: string = "crack_game_account";

  constructor() {
    EventUtil.Dispatcher.on(SOCKET_CONNECT, this.onServerConnected, this);

    // 注册登出的回调
    Partner.registerLogoutCallback((result: boolean) => {
      if (result) {
        LoginCtl.INSTANCE.logout(); 
      }
    });
  }

  // 成功获取到用户账号的授权
  public didGetAuthorize(serverId: number, data: Partner.LoginData) {
    console.log("授权信息", serverId, data);
    DataAcc.INSTANCE.LoginData  = data;
    DataAcc.INSTANCE.serverId   = serverId; 


    if (NetCtl.INSTANCE.IsConnected) {
      // 已经建立连接--发送登陆协议
      this.requestLogin();
    } else {
      // 未建立连接--与服务器建立连接
      this.connectServer();
    }
  }

  // 连接服务器
  private connectServer() {
    const serverVo: ConfigVO.IServerListVO = ConfigVO.ServerList.get(DataAcc.INSTANCE.serverId);
    console.log(" ############ 正常连接服务器参数 ############ ", DataAcc.INSTANCE.serverId, serverVo.ip, serverVo.port, serverVo.path, serverVo.security);
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
  }

  // 当前服务器链接成功
  private onServerConnected() {
    console.log(" ############ 服务器连接成功 ############ ", GameCtl.INSTANCE.CurrentScene.SceneName);

    // 如果当前是已经进入游戏的状态 则走重新登录的逻辑
    if (GameCtl.INSTANCE.CurSceneName !== EGameScene.InitScene) {
      if (GameCtl.INSTANCE.CurSceneName === EGameScene.LoginScene) {
        console.log(" ############ 进入首次登录流程 ############ ");
        this.requestLogin();
      } else {
        console.log(" ############ 进入重新登录流程 ############ ");
        if (this.isExistSavedGameAccount()) {
          this.requestRelogin();
        } else {
          console.log(" ############ 不存在账号 回登录场景 ############ ");
          EventUtil.Dispatcher.emit(Events.EVENT_GUIDE_INIT);
          GameCtl.INSTANCE.loadNextScene(EGameScene.LoginScene);
          NetCtl.INSTANCE.close();
        }
      }
    }
  }

  // 登出
  public logout() {
    console.log(" ############ 注销账号 清空账号 回登录场景 断开socket ############ ");

    this.cleanGameAccount();
    EventUtil.Dispatcher.emit(Events.EVENT_GUIDE_INIT);
    GameCtl.INSTANCE.loadNextScene(EGameScene.LoginScene);
    NetCtl.INSTANCE.close();
  }
  
  // 请求登陆
  public requestLogin() {
    const gameAccount              = this.getGameAccount();
    const gameAccountId: string    = gameAccount.game_account_id;
    const gameAccountSign: string  = gameAccount.game_account_sign;
    NetCtl.INSTANCE.NetAcc.requestLogin(gameAccountId, gameAccountSign);
  }

  // 收到登陆请求的返回
  public onReceiveLoginS2C(msg: AccLoginS2C) {
    if (msg.code > 0) {
      // 登录失败
      console.log(" ############ 登录游戏失败 ############ ", msg.code);
      GamePersist.INSTANCE.showToast("login_text10012");
      
      
      if (Partner.PARTNER_NAME !== "Dev") {
        EventUtil.Dispatcher.emit(Events.EVENT_SHOW_ACC_INPUT, 2); 
      }
    } else {
      console.log(" ############ 登录游戏成功 gameAccountId=%s, gameAccountSign=%s, channelOpenId=%s, gameLoginKey=%s, code=%d ############", msg.gameAccountId, msg.gameAccountSign, msg.channelOpenId, msg.gameLoginKey, msg.code);
      EventUtil.Dispatcher.emit(Events.EVENT_LOGIN_SUCCESS);
      EventUtil.Dispatcher.emit(Events.EVENT_GUIDE_INIT);
      // GamePersist.INSTANCE.showToast("login_text10013");

      // 保存平台账号
      DataAcc.INSTANCE.gameAccountId   = msg.gameAccountId;
      DataAcc.INSTANCE.gameAccountSign = msg.gameAccountSign;
      DataAcc.INSTANCE.accOpenId       = msg.channelOpenId;
      DataAcc.INSTANCE.accOpenKey      = msg.gameLoginKey;
      this.saveGameAccount();
  
      // 玩家的Id
      const tNumPlayerId = msg.id;
      if (tNumPlayerId > 0) {
        DataPlayer.INSTANCE.PlayerId = tNumPlayerId;
        Partner.onCreatePlayer(tNumPlayerId);
        this.doEnterGame(tNumPlayerId);
      } else {
        this.doCreatePlayer();
      }
    }
  }

  // 请求重新登录 断线重连
  private requestRelogin() {
    const gameAccount             = this.getGameAccount();
    const gameAccountId: string   = gameAccount.game_account_id;
    const gameAccountSign: string = gameAccount.game_account_sign;
    NetCtl.INSTANCE.NetAcc.requestRelogin(gameAccountId, gameAccountSign);
  }

  // 收到重新登录的返回
  public onReceiveReloginS2C(msg: AccReloginS2C) {
    if (msg.code === 0) {
      console.log(" ############ 重新登录默默的成功 ############ ", msg.code);
      return;
    } else if (msg.code === 2200) {
      console.log(" ############ 重新登录成功 回主界面 ############ ", msg.code);
      GameCtl.INSTANCE.loadNextScene(EGameScene.MainScene);
    } else {
      console.log(" ############ 重新登录失败 回初始界面 ############ ", msg.code);
      EventUtil.Dispatcher.emit(Events.EVENT_GUIDE_INIT);
      GameCtl.INSTANCE.loadNextScene(EGameScene.LoginScene);
      NetCtl.INSTANCE.close();
    }
  }

  // 通知服务器 执行进入游戏的逻辑
  private doEnterGame(pNumPlayerId: number) {
    Partner.loginBI("" + pNumPlayerId);
    const tAccEnterGame = new AccEnterC2S();
    tAccEnterGame.id = pNumPlayerId;
    NetCtl.INSTANCE.send(tAccEnterGame);
  }

  // 服务器确认进入了游戏
  public didEnterGame(pMsg: AccEnterS2C) {
    if (pMsg.code > 0) {
      console.log(" ############ 进入游戏出错 ############ ", pMsg.code);
      GamePersist.INSTANCE.showToast("login_text10014");
    } else {
      console.log(" ############ 进入游戏正确 ############ ");
      GameCtl.INSTANCE.loadNextScene(EGameScene.MainScene);
    }
  }

  // 角色创建逻辑 如果平台支持获取用户信息 就不显示创建角色的界面
  private async doCreatePlayer() {
    const tAccCreateC2S  = new AccCreateC2S();
    NetCtl.INSTANCE.send(tAccCreateC2S);

    // const data = await ResourecLoader.getFileData("prefab/loginScene/CreatorRolePanel");
    // const nodPanel: cc.Node = cc.instantiate(data);
    // const tPanel: CreatorRolePanel = CreatorRolePanel.GetComponent(nodPanel);
    // GameCtl.INSTANCE.RootUI.showPanel(tPanel);

    // if (Partner.supportUserInfo()) {
    //   const tAccCreateC2S  = new AccCreateC2S();
    //   NetCtl.INSTANCE.send(tAccCreateC2S);
    // } else {
    //   const data = await ResourecLoader.getFileData("prefab/loginScene/CreatorRolePanel");
    //   const nodPanel: cc.Node = cc.instantiate(data);
    //   const tPanel: CreatorRolePanel = CreatorRolePanel.GetComponent(nodPanel);
    //   GameCtl.INSTANCE.RootUI.showPanel(tPanel);
    // }
  }

  // 服务器返回创建角色的结果
  public onReceiveCreateS2C(pMsg: AccCreateS2C) {
    if (pMsg.code > 0) {
      console.log(" ############ 创建角色失败 ############ ");
      GamePersist.INSTANCE.showToast("login_text10015");
      return;
    }
    console.log(" ############ 创建角色成功 ############ ");
    const tNumPlayerId = pMsg.id;
    DataPlayer.INSTANCE.PlayerId = tNumPlayerId;
    Partner.registerBI("" + tNumPlayerId);
    this.doEnterGame(tNumPlayerId);
    EventUtil.Dispatcher.emit(Events.EVENT_LOGIN_CREATOR_ROLE);
    Partner.onCreatePlayer(tNumPlayerId);
    Partner.aldEvent("新用户", " 注册成功", DataPlayer.INSTANCE.PlayerId);
  }

  // 是否存在保存的账号
  private isExistSavedGameAccount(): boolean {
    const gameAccount     = this.getGameAccount();
    const gameAccountId   = gameAccount.game_account_id;
    const gameAccountSign = gameAccount.game_account_sign;
    console.log(" ############ 当前记录的账号 gameAccountId ############ ", gameAccountId);
    console.log(" ############ 当前记录的账号 gameAccountSign ############ ", gameAccountSign);
    return gameAccountId !== "" && gameAccountSign !== "";
  }

  // 保存账号信息
  private saveGameAccount() {
    const gameAccount = {
      game_account_id:    DataAcc.INSTANCE.gameAccountId,
      game_account_sign:  DataAcc.INSTANCE.gameAccountSign,
    };
    const data: string = JSON.stringify(gameAccount);
    cc.sys.localStorage.setItem(DataAcc.INSTANCE.accOpenId + "_" + LoginCtl.gameAccountKey, data);

    if (Partner.PARTNER_NAME === "Toutiao") {
      cc.sys.localStorage.setItem(LoginCtl.gameAccountKey, data);
    }
  }

  // 用户授权账号更改 
  public onAccountChange(pMsg: any) {
    // 保存平台账号
    DataAcc.INSTANCE.gameAccountId   = pMsg.account;
    DataAcc.INSTANCE.gameAccountSign = pMsg.sign;
    this.saveGameAccount();
  }

  // 获取本地存储的账号信息
  private getGameAccount() {
    const gameAccount = {
      game_account_id:   DataAcc.INSTANCE.gameAccountId,
      game_account_sign: DataAcc.INSTANCE.gameAccountSign,
    };

    console.log(" ############ 运行内存中获取登录数据 id=%s, sign=%s ############ ", gameAccount.game_account_id, gameAccount.game_account_sign);

    if (gameAccount.game_account_id.length !== 0) {
      return gameAccount;
    }


    let data: string = cc.sys.localStorage.getItem(DataAcc.INSTANCE.accOpenId + "_" + LoginCtl.gameAccountKey);
    try {
      if (data) {
        const savedJson = JSON.parse(data);
        console.log(" ############ 缓存中获取登录数据 id=%s, sign=%s ############ ", savedJson.game_account_id, savedJson.game_account_sign);
        if (savedJson.game_account_id) {
          gameAccount.game_account_id   = savedJson.game_account_id;
          gameAccount.game_account_sign = savedJson.game_account_sign;
        }
      }
    } catch (e) {
      cc.warn("failed parse account data");
    }

    if (Partner.PARTNER_NAME === "Toutiao") {
      data = cc.sys.localStorage.getItem(LoginCtl.gameAccountKey);
      try {
        if (data) {
          const savedJson1 = JSON.parse(data);
          console.log(" ############ 缓存中获取登录数据 id=%s, sign=%s ############ ", savedJson1.game_account_id, savedJson1.game_account_sign);
          if (savedJson1.game_account_id) {
            gameAccount.game_account_id   = savedJson1.game_account_id;
            gameAccount.game_account_sign = savedJson1.game_account_sign;
          }
        }
      } catch (e) {
        cc.warn("failed parse account data");
      }
    }

    return gameAccount;
  }

  // 清除账号信息
  private cleanGameAccount() {
    console.log(" ########### 清除缓存数据 ############ ");
    DataAcc.INSTANCE.gameAccountId = "";
    DataAcc.INSTANCE.gameAccountSign = "";
    DataAcc.INSTANCE.LoginData = null;
    // cc.sys.localStorage.removeItem(LoginCtl.gameAccountKey);
  }
}
