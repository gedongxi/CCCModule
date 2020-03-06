declare module Partner {
  
  class LoginData {
    platform: string;
    openid:   string;
    openkey:  string;
    params?:  string;
  }
  
  declare let SERVER_GROUP: string;
  declare let SERVER_ID: number;
  declare const AUDIT_SERVER_GROUP: string;
  declare const PARTNER_NAME: string;
  declare const PARTNER_ID: number;
  declare const CHANNEL: number;
  declare const CDN_HOST: string;
  declare const HEAD_IMG_HOST: string;
  declare const SHARE_IMG_HOST: string;
  declare const userInfo: any;
  declare const SHOW_GM: boolean;             // 显示gm开关
  declare const DEBUG_INFO: boolean;          // 显示日志信息
  declare const VS_WIN: boolean;              // 战斗一键胜利
  declare const SHOW_SERVER_LIST: boolean;
  declare let OPPERATION_JSON_URL: string; 
  declare let OPPERATION_JSON: any;
  declare let AUDIT_VERSION: string;
  declare let OTHER_GAME_JSON_URL: string; 
  declare let OTHER_GAME_JSON: any;
  
  // 获取uuid
  function getUUID(): string;

  //本地化相关
  function getLocale(): string;

  // 获取账号授权
  function doAccAuthorize(getAccountCallback :(data: LoginData) =>any, inputAccountCallback:(howTo: number) => void, exitSaved: boolean);
  // 获得授权
  function didAccAuthorize(data: LoginData);

  function getAuthorize(x: number, y: number, width: number, height: number, tAdaptation: number, callback: Function);
  function cancelAuthorize();

  // 进行邀请
  function doInvite(params: any, inviteCallback:(success:boolean, data: any) => void);
  function copyToClipboard(content: string, success: Function);

  // 炫耀一下
  function doFlaunt(params: any, callback: Function);

  function previewImg(params: any);

  // 注册zip文件的下载和加载处理
  function registerZipLoad();

  // 资源更新 (只有原生平台需要确认是否更新)
  function resUpdate(bootCallback: Function, confirmCallback: Function, openUrlCallback: Function);
  function nativeUpdate(updateInfo: any, resultCallback: Function, progressCallback: Function);


  function shareImgUrl(imgName: string): string;


  function getSharedCanvas(): any;

  function setCloudStorage(kvlist: {key: string, value: string}[]);

  function sendDomainMsg(msg: any);

  // 注册分享app的回调
  function showShareMenu();
  function hideShareMenu();
  function registerShareAppCallback(callback: Function);

  // 生命周期相关
  function registerOnShowCallback(callback: Function);
  function registerOnHideCallback(callback: Function);
  function registerOnAudioInterruptionEndCallback(callback: Function);
  
  function registerToastCallback(callback: Function);
  // function registerExitGameCallback(callback: Function);

  function getKeyChain(): any;
  function getLaunchOptions(): any;  
  function getLaunchQuery(): any;

  function registerUpdata();

  // 支持相关
  function supportAccount(): boolean;
  function supportSocialFriend(): boolean;
  function supportUserInfo(): boolean;
  function supportPay(): boolean;

  function supportLoadingProgress(): boolean;
  function supportShare(): boolean;
  function supportTopShare(): boolean;

  // 获取推荐页
  function getCommendatoryData(params: any, callback: Function);

  function supportGoToWeb(): boolean;
  // 跳转
  function gotoWeb();

  // 初始化广告
  function initVideoAd(params?: any);

  // 预加载广告
  function preloadVideoAd();

  // 奖励视频广告
  function supportAd(): boolean;
  function showVideoAd(callBack: Function, type: number);

  // banner广告
  function supportBannerAd():boolean;
  function showBannerAd(pStrId: string, tAdaptation: number);
  function hideBannerAd();

  // 插屏广告
  function supportInsertAd():boolean;
  function showInsertAd();

  // 小游戏推荐弹窗组件
  function supportGamePortal():boolean;
  function showGamePortal();

  // 全屏广告
  function supportFullScreenAd():boolean;
  function showFullScreenAd();

  // 原生广告
  function supportNativeAd():boolean;

  // 原生广告
  function showNativeAd(cb: Function);

  function nativeAdClick(adId: any);
  
  // 阿拉丁
  function aldEvent(pName: string, pValue: string, pUserId: number);

  // 获取屏幕截图
  function toTempFilePath(height: number, y: number, scale: number);

  // 是否支持游戏圈
  function IsSupportGameClub();
  function showGameClub(x: number, y: number, scale: number);
  function hideGameClub();

  // 是否支持客服
  function IsSupportCustomer();
  function openCustomer(isShowMessageCard: boolean, messageInfo: any, callback: Function);

  // 录屏
  function IsSupportRecorder();
  function registGameRecorder(callBack: Function);
  function RecorderClip(res: any, call: Function);
  function RecorderShare(res: any, call: Function);
  function Recordstart();
  function RecordStop();
  function RecordPause();
  function RecordResume();
  function RecorderClipNoTime(res: any, call: Function);
  function RecorderRecordClip(startTime, endTime);

  // 设置加载进度
  function setLoadingProgress(data: number);
  function initSDK();

  // 互推游戏
  function pushToOtherGame(appId, path, extraData?, envVersion?, success? , fail?, complete?);

  // 判断是ios还是安卓
  function checkModel();

  
  // 返回基本信息
  function getSystemInfo();

  // 游戏暂停
  function gamePause();

  // 重启游戏
  function restartGame();
  
  // 是否支持主动退出游戏
  function supportBtnExitGame();

  // 退出游戏
  function exitGame();

  // 是否支持注销
  function supportLogout();

  // 注销
  function logoutGame();

  // 注册注销回调
  function registerLogoutCallback(callback: Function);

  // 支付初始化
  function purchaseInit(objPurchase: any, callback?: any);

  // 支付
  function purchase(objPurchase: any, callback?: any);

  // 上传角色信息
  function roleInfo(playerId: number, lv: number);

  function createFollowButton();

  // bi统计
  // 注册统计
  function registerBI(playerId?: string);

  // 登录统计
  function loginBI(playerId?: string);

  // 自定义统计
  function eventBI(eventId: string, params: any = "");

  // 打开pk地图
  function pkOpenPKMap(param: string);

  // 初始化pk地图
  function pkInitPKMap(url: string);

  // 更新竞技场奖励
  function pkRefreshAreanReward(objReward: any);

  // 更新竞技场钻石数量
  function pkRefreshGemCount(count: number);

  // 更新pk次数
  function pkRefreshPKCount(count: number);
  
  // 开始pk回调
  function pkRegisterStartPKCallback(callback: Function);

  // 领奖返回
  function RewardRankBack();
  
  // 注册位置信息回调
  function pkRegisterLoctionCallback(callback: Function);

  // 注册位置信息回调
  function pkRegisterRankRewardCallback(callback: Function);


  // 玩家升级
  function onLevelChange(level: number);

  // 玩家过关
  function onVenturePass(stageId: number);

  // 创建角色
  function onCreatePlayer(playerId: number);
  // 开始看视频
  function onVideoStart();
  // 看视频结束
  function onVideoFinish();
  // 支付成功
  function onPayFinish(amount);

  // 是否支持创建模态对话框
  function isSupportModal();
  // 创建模态对话框
  function createModal(callBack: Function);

  // 头条互跳
  function createMoreGamesButton(x: number, y: number, scale: number);
  function showMoreGamesButton();
  function hideMoreGamesButton();

  // 打开外部链接
  function openUrl(url: string);

  // 长震动
  function vibrateLong();

  // 获取内存使用
  function memoryUsage(): number;

  // 获取资源版本号
  function getResourseVersion(): number;
}
