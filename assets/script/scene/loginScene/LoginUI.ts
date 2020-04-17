import BaseUI from "../base/BaseUI";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";
import LoginCtl from "./LoginCtl";
import GamePersist from "../GamePersist";
import Misc from "../../commonUnit/Misc";
import { ServerList, ServerChannelGroup } from "../../config/vo/ConfigVO";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoginUI extends BaseUI {

  @property(cc.Node)
  private nodeAccInput: cc.Node = null;

  @property(cc.EditBox)
  private edbAcc: cc.EditBox = null;

  @property(cc.Label)
  private labServer: cc.Label = null;

  @property(cc.Button)
  private btnLogin: cc.Button = null;

  @property(cc.Button)
  private btnServer: cc.Button = null;
  
  @property(cc.Button)
  private btnReAuthorize: cc.Button = null;

  @property(cc.Label)
  private labLoadingProgress: cc.Label = null;
  
  private serverId: number = 0; // 当前选择的服务器

  public onLoad() {
    
    console.log("LoginUI - onLoad");
    super.onLoad(true);
    EventUtil.Dispatcher.on(Events.EVENT_LOGIN_SWITCH_SERVER, this.onSwitchServer, this);
    EventUtil.Dispatcher.on(Events.EVENT_SHOW_ACC_INPUT, this.onShowAccInput, this);
    EventUtil.Dispatcher.on(Events.EVENT_LOGIN_SUCCESS, this.onRespLoginSuccess, this);

    this.labLoadingProgress.string = "50%";
    
    this.initLoginUI();
    if (!Partner.SHOW_SERVER_LIST) {
      this.btnServer.node.active = false;
    }

    // if (Partner.PARTNER_NAME === "WechatHot") {
    //   this.sprLogo1.node.active = false;
    //   this.sprLogo2.node.active = true;
    // } else {
    //   this.sprLogo1.node.active = true;
    //   this.sprLogo2.node.active = false;
    // }

    if (Misc.isNative()) {
      this.btnServer.node.active = false;
    }
  }

  public start() {
    console.log("LoginUI - start");
    super.start();
  }

  public onDestroy() {
    super.onDestroy();
    EventUtil.Dispatcher.off(Events.EVENT_LOGIN_SWITCH_SERVER, this.onSwitchServer, this);
    EventUtil.Dispatcher.off(Events.EVENT_SHOW_ACC_INPUT, this.onShowAccInput, this);
    EventUtil.Dispatcher.off(Events.EVENT_LOGIN_SUCCESS, this.onRespLoginSuccess, this);
  }

  public onRespLoginSuccess() {
    if (this.labLoadingProgress.node.active) {
      this.labLoadingProgress.string = "80%";
    }
  }

  private initLoginUI() {
    // 选取默认服务器
    // Misc.myLog(ServerList);
    // Misc.myLog(ServerList.getExtra("group_list"));
    // const grouplist = ServerList.getExtra("group_list")[Partner.SERVER_GROUP];
    // for (let i = 0; i < grouplist.length; i++) {
    //   const serverId: number = grouplist[i];
    //   // 是默认服务器或者已经遍历到最后一个
    //   if (ServerList.get(serverId).default === 1 || i === grouplist.length - 1) {
    //     this.setServerData(serverId);
    //     break;
    //   }
    // }

    // 计算服务器分组 如果当前是在审核状态则走审核服务器组
    let serverGroup: string = Partner.SERVER_GROUP;
    const anyWindow: any = window;
    // AUDIT_SERVER_GROUP
    if (anyWindow._DY_VERSION_STATUS === "audit" && Partner.AUDIT_SERVER_GROUP) {
      serverGroup = Partner.AUDIT_SERVER_GROUP;
    }

    // 如果某个渠道指定了服务器分组
    console.log("###crack CHANNEL_SERVER_GROUP:" + anyWindow.CHANNEL_SERVER_GROUP);
    if (anyWindow.CHANNEL_SERVER_GROUP) {
      const channelServerGroupKey: string = anyWindow.CHANNEL_SERVER_GROUP;
      const tChannelServerGroup = ServerChannelGroup.get(channelServerGroupKey);
      if (tChannelServerGroup) {
        console.log("###crack serverGroup:" + tChannelServerGroup.serverGroup);
        serverGroup = "" + tChannelServerGroup.serverGroup;
      } else {
        console.log("###crack serverGroup: undefine");
      }
    }
    Partner.SERVER_GROUP = serverGroup;
    

    // 选取默认服务器
    Misc.myLog(ServerList.getExtra("group_list"));
    const grouplist = ServerList.getExtra("group_list")[serverGroup];
    for (let i = 0; i < grouplist.length; i++) {
      const serverId: number = grouplist[i];
      // 是默认服务器或者已经遍历到最后一个
      if (ServerList.get(serverId).default === 1 || i === grouplist.length - 1) {
        this.setServerData(serverId);
        break;
      }
    }
    

    const self = this;
    // 用户信息授权
    console.log("~~~~~~~~~~~~~~~~~~~ 向不同渠道获取授权 ~~~~~~~~~~~~~~~~~~~ ", Partner.PARTNER_NAME);

    Partner.doAccAuthorize(function(data: Partner.LoginData) {
      self.serverId = self.serverId;
      LoginCtl.INSTANCE.didGetAuthorize(self.serverId, data);
    }, function(howTo: number) {
      if (howTo === 2) {
      }
      self.onShowAccInput(howTo);
    }, false);
  }

  // 该回调决定 是否可以用户自定义输入
  public onShowAccInput(howTo: number) {
    if (howTo === 0) {
      this.nodeAccInput.active = false;
      this.btnReAuthorize.node.active = false;
      return;
    }
    // 隐藏进度数字
    if (this.labLoadingProgress.node.active) {
      this.labLoadingProgress.node.active = false;
    }

    if (howTo === 1) {
      this.nodeAccInput.active = true;
      this.btnReAuthorize.node.active = false;
    } else if (howTo === 2) {
      this.btnReAuthorize.node.active = true;
      this.nodeAccInput.active = false;
    }
  }

  // 玩家通过选服界面进行了选服
  private onSwitchServer(event: any) {
    const serverId: number = event;
    cc.sys.localStorage.setItem("server", serverId);
    this.setServerData(serverId);
  }

  // 设置服务器数据
  private setServerData(serverId: number) {
    this.serverId = serverId;
    // this.serverId = 6;     // 微信审核
    // this.serverId = 21; // ttad_android 准备舍弃
    // this.serverId = 22; // 小米
    // this.serverId = 23; // oppo
    // this.serverId = 24; // uc
    // this.serverId = 25; // vivo
    // this.serverId = 26; // ttad_ios
    // this.serverId = 27; // baidu
    // this.serverId = 28; // ttad_android 新
    // this.serverId = 29; // 4399  
    // this.serverId = 34;    // ttad1211s
    // this.serverId = 224;   
    // this.serverId = 215;   

    // this.serverId = 31;
    // this.serverId = 32; // 测试地图PK  
    console.log("############### serverId ###############", this.serverId);
    Partner.SERVER_ID = this.serverId;
    console.log("===loginUI==ServerId" + Partner.SERVER_ID);
    this.labServer.string = ServerList.get(serverId) .name;
  }

  private onBtnLoginWithInput() {
    // this.test();
    const account: string = this.edbAcc.string;
    if (!account || account.length < 1) {
      GamePersist.INSTANCE.showToast("login_text10016");
      return;
    }
    const data: any = {};
    data.openid = account;
    data.openkey = account;
    data.platform = Partner.PARTNER_NAME;
    // data.params = "";

    const extrData: any = {};
    const launchOpts = Partner.getLaunchOptions();
    console.log("#################附带参数launchOpts", launchOpts);
    const tObjParam: any = {query: {}};
    if (!!launchOpts.RefereeId && Number(launchOpts.RefereeId) > 0) {
      tObjParam.query.referee_id = launchOpts.RefereeId;
      extrData.launch = tObjParam;
    }
    data.params = JSON.stringify(extrData);
    console.log("#################附带参数 data.params", data.params);
    Partner.didAccAuthorize(data);
  }

  // 在登录界面的重新登录
  private onBtnReAuthorize() {
    if (Partner.supportGoToWeb()) {
      Partner.gotoWeb();
    } else {
      // if (NetCtl.INSTANCE.IsConnected) {
      //   LoginCtl.INSTANCE.requestLogin();
      // } else 
      {
        // 必须要再次拉起授权框，因为有些sdk必须在login界面中登录成功才算成功（比如快游戏）
        const self = this;
        // 用户信息授权
        Partner.doAccAuthorize(function(data: Partner.LoginData) {
          LoginCtl.INSTANCE.didGetAuthorize(self.serverId, data);
        }, function(howTo: number) {
          if (howTo === 2) {
          }
          self.onShowAccInput(howTo);
        }, false);
      }

    }
  }

  private onBtnSelectServer() {
    if (Partner.SHOW_SERVER_LIST) {
      const self = this;
      cc.loader.loadRes("prefab/loginScene/SelectServer", function(err, prefabSelect: cc.Prefab) {
        const selectNode: cc.Node = cc.instantiate(prefabSelect);
        selectNode.parent = self.node;
        selectNode.setPosition(0, 0);
      });
    }
    
  }

  private test() {
    // GamePersist.INSTANCE.showWaiting();
  }
}
