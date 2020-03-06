; (function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory(global)
    : typeof define === 'function' && define.amd
      ? define(factory) : factory(global)
}((
  typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global
        : this
), function (global) {

  var Partner = global.Partner || {};
  var emptyFunc = function () { }

  Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }


  Partner.SERVER_GROUP = 0;
  Partner.SERVER_ID = 0;
  Partner.PARTNER_NAME = "Dev";
  Partner.PARTNER_ID = 0;
  Partner.CHANNEL = 0;
  Partner.CDN_HOST = "";
  Partner.HEAD_IMG_HOST = "https://dsqpk-cdn.dayukeji.com/resource/wxhead/";
  Partner.SHARE_IMG_HOST = "https://dsqpk-cdn.dayukeji.com/resource/like/crack/";

  Partner.OPPERATION_JSON_URL = "https://xcx-cdn.bb2b2bb.com/youxi/operation/gh_b575b4ab60da_crack.json";
  Partner.OPPERATION_JSON = {}

  Partner.toastCallback = null;
  Partner.userInfo = {};
  Partner.SHOW_GM = true;
  Partner.DEBUG_INFO = false;
  Partner.VS_WIN = true;
  Partner.SHOW_SERVER_LIST = true;
  Partner.AUDIT_VERSION = "1.0.0";

  Partner.extends = function () {
    // var obj = {};
    // Object.setPrototypeOf(obj, Partner)
    // obj.super = Partner;
    // return obj;
    return Partner;
  };

  Partner.getLaunchOptions = function () {
    return Partner.getLaunchQuery();
  }

  Partner.getLaunchQuery = function () {
    var url = location.search;
    if (!url) {
      return {};
    }
    var ret = new Object();
    if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        var tmpStrs = strs[i].split("=");
        if (tmpStrs.length > 2) {
          var string = strs[i].split(tmpStrs[0] + "=");
          ret[tmpStrs[0]] = string[1]
        } else {
          ret[tmpStrs[0]] = tmpStrs[1]
        }
      }
    }
    return ret;
  };

  Partner.getKeyChain = function (obj, chain) {
    if (!obj) { return undefined; }
    var params = chain.split(".");
    var flag = params.every(function (key) {
      if (obj[key]) {
        obj = obj[key];
        return true;
      }
      return false;
    });
    if (flag) {
      return obj;
    } else {
      return undefined;
    }
  }

  // 生成UUID（bit需要时4的倍数）
  var beeUUID = function(bit) {
    function uuidPart() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
    }

    if (bit % 4 !== 0) {
      Misc.myError("bit不合法");
      return "";
    }

    var uuid = "";
    for (var i = 0; i < bit / 4; i++) {
      uuid += uuidPart();
    }
    return uuid;
  }

  // 获取uuid
  Partner.getUUID = function() {
    var uuid  = cc.sys.localStorage.getItem("uuid");
    if (!uuid) {
      uuid = beeUUID(16);
      cc.sys.localStorage.setItem("uuid", uuid);
    }
    return uuid;
  }

  // 获取语言设置
  Partner.getLocale = function () {
    if (navigator.browserLanguage != "undefined" && navigator.browserLanguage != null) {
      if (navigator.systemLanguage == "zh-CN") {
        return "cn"
      }
    } else {
      if (navigator.language == "zh-CN") {
        return "cn"
      }
    }
    return "en"
  }

  // 进行账号授权操作
  Partner.doAccAuthorize = function (didAccAuthorizeCallback, inputAccountCallback, existSaved) {
    Partner.didAccAuthorizeCallback = didAccAuthorizeCallback;
    inputAccountCallback(1);
  }

  // 成功获取的账号授权
  Partner.didAccAuthorize = function (accData) {
    Partner.didAccAuthorizeCallback(accData);
  }

  // 尝试拿到授权
  Partner.getAuthorize = function (x, y, width, height, tAdaptation, callback) {
    callback({})
  }

  // 取消授权
  Partner.cancelAuthorize = function () {
  }

  Partner.copyToClipboard = function (str, success) {
    var el = document.createElement("textarea");
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.contain = 'strict';
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.style.fontSize = '12pt';
    document.body.appendChild(el);

    var selected = false;
    var selection = document.getSelection();
    if (selection.rangeCount > 0) {
      selected = selection.getRangeAt(0);
    }
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
    success();
  }

  // 获取系统信息
  Partner.getSystemInfo = function () {

  }

  // 进行邀请
  Partner.doInvite = function (params, inviteCallback) {
    var inviterUrl = location.origin + location.pathname + "?inviter=" + params;
    var callbackParam = {};
    callbackParam.url = inviterUrl;
    inviteCallback(true, callbackParam);
  }

  // 炫耀一下
  Partner.doFlaunt = function (params) {
    if (Partner.toastCallback) {
      Partner.toastCallback("当前平台不支持此功能");
    }
  }

  Partner.previewImg = function (params) {
    if (Partner.toastCallback) {
      Partner.toastCallback("当前平台不支持此功能");
    }
  }

  // 设置用户的数据到平台
  Partner.setUserStar = function (star) {
  }

  Partner.getSharedCanvas = function () {
    return null;
  }

  // Zip文件下载器
  Partner.zipDownloadHandler = function (item, callback) {
    var xhr = cc.loader.getXMLHttpRequest();
    xhr.open("GET", item.url, true);
    xhr.responseType = "arraybuffer";
    xhr.onload = function (evt) {
      var arrayBuffer = xhr.response;
      if (arrayBuffer) {
        callback(null, arrayBuffer);
      } else {
        callback(new Error("download zip failed" + evt));
      }
    }
    xhr.onerror = function (evt) {
      callback(new Error("download zip faied" + evt));
    }
    xhr.send(null)
  }

  // Zip文件加载器
  Partner.zipLoadHandler = function (item, callback) {
    var arrayBuffer = item.content;
    var zipFile = new JSZip(arrayBuffer);
    var zipObjects = zipFile.files;


    var files = {};
    for (var fileName in zipObjects) {
      if (zipObjects.hasOwnProperty(fileName)) {
        var zipObject = zipObjects[fileName];
        files[fileName] = zipObject.asUint8Array();
      }
    }

    item._owner.zip = files;
    callback(null, null);
  }

  Partner.registerZipLoad = function () {
    cc.loader.addDownloadHandlers({ "zip": Partner.zipDownloadHandler });
    cc.loader.addLoadHandlers({ "zip": Partner.zipLoadHandler });
  }

  // 资源更新
  Partner.resUpdate = function (callback) {
    callback();
  }

  // 只有原生游戏更新
  Partner.nativeUpdate = function(updateInfo, resultCallback, progressCallback) {
    resultCallback(0);
  }

  //显示分享按钮
  Partner.showShareMenu = function () {
  }

  //隐藏分享按钮
  Partner.hideShareMenu = function () {
  }

  // 注册分享app的回调
  Partner.registerShareAppCallback = function (callback) {
  }

  Partner.shareImgUrl = function (imgName) {
    return imgName;
  }

  Partner.registerOnShowCallback = function (callback) {
  }

  Partner.registerOnHideCallback = function (callback) {
  }

  Partner.registerOnAudioInterruptionEndCallback = function (callback) {
  }

  // Partner.registerExitGameCallback = function(callback) {
  // }

  Partner.registerToastCallback = function (callback) {
    Partner.toastCallback = callback;
  }

  Partner.sendDomainMsg = function (msg) {
  }

  Partner.supportSocialFriend = function () {
    return false;
  }

  Partner.supportUserInfo = function () {
    return false;
  }

  // 是否支持账号的获取
  Partner.supportAccount = function () {
    return false;
  }

  // 是否支持支付
  Partner.supportPay = function () {
    return false;
  }

  // 支持加载
  Partner.supportLoadingProgress = function () {
    return false;
  }

  // 是否支持分享
  Partner.supportShare = function () {
    return true;
  }

  // 是否支持右上角的分享
  Partner.supportTopShare = function () {
    return false;
  }

  Partner.setLoadingProgress = function (data) {
  }

  Partner.getCommendatoryData = function (params, callback) {
  }

  Partner.supportGoToWeb = function () {
    return false;
  }

  Partner.gotoWeb = function (param) {
  }

  // 初始化广告
  Partner.initVideoAd = function () {
  }

  // 预加载广告
  Partner.preloadVideoAd = function () {
  }

  // 奖励视频广告
  Partner.supportAd = function () {return false;}
  Partner.showVideoAd = function (callback, type) {}

  // banner广告
  Partner.supportBannerAd = function () {return false;}
  Partner.showBannerAd = function (pStrId, tAdaptation) {}
  Partner.hideBannerAd = function () {}

  // 插屏广告
  Partner.supportInsertAd = function () {return false;}
  Partner.showInsertAd = function () {}

  // 小游戏推荐弹窗组件
  Partner.supportGamePortal = function () {return false;}
  Partner.showGamePortal = function () {}

  // 全屏视频广告
  Partner.supportFullScreenAd = function() {return false;}
  Partner.showFullScreenAd = function() {}

  // 是否支持原生广告
  Partner.supportNativeAd = function () {return false;}
  Partner.showNativeAd = function (cb) {};


  Partner.nativeAdClick = function (cb) {};

  // 阿拉丁事件打点
  Partner.aldEvent = function (pName, pValue, pUserId) {
    
  }

  // 是否支持游戏圈
  Partner.IsSupportGameClub = function () {
    return false;
  }

  // 进入客服会话
  Partner.IsSupportCustomer = function () {
    return false;
  }

  Partner.setCloudStorage = function (kvlist) {
  };

  Partner.IsSupportRecorder = function () {
    return false;
  }

  // 初始化sdk
  Partner.initSDK = function () { }
  // 互推游戏
  Partner.pushToOtherGame = function () { }

  Partner.registerUpdata = function () { }

  // 判断机型
  Partner.checkModel = function () {
    // 1 安卓 2 ios 3 其他
    return 3;
  }

  // 获取屏幕截图
  Partner.toTempFilePath = function (height, y, scale) {

    var cutY = canvas.height / 2 - y * scale;

    return canvas.toTempFilePathSync({
      x: 0,
      y: cutY,
      width: canvas.width,
      height: height * scale,
      destWidth: 500,
      destHeight: 400,
    });
  }

  // 游戏暂停
  Partner.gamePause = function() {
  
  }

  // 重启游戏
  Partner.restartGame = function() {
    cc.game.restart();
  }

  // 是否支持创建btn 手动退出游戏
  Partner.supportBtnExitGame = function() {
    return false;
  }

  // 退出游戏
  Partner.exitGame = function () {

  }

  // 是否支持注销
  Partner.supportLogout = function() {
    return false;
  }

  // 注销登录
  Partner.logoutGame = function() {

  }

  // 注册注销回调
  Partner.registerLogoutCallback = function(callback) {

  }

  // 支付
  Partner.purchase = function(objPurchase) {
  }

  // 上传角色信息
  Partner.roleInfo = function(playerId, lv) {
  }

  Partner.createFollowButton = function() {}
  
  // 注册统计
  Partner.registerBI = function(playerId) {
  }

  // 登录统计
  Partner.loginBI = function(playerId) {
  }

  // 自定义统计
  Partner.eventBI = function(eventId, params) {
  }

  // 打开pk地图
  Partner.pkOpenPKMap = function(param) {
  }

  // 初始化pk地图
  Partner.pkInitPKMap = function(url) {
  }

  // 更新竞技场奖励
  Partner.pkRefreshAreanReward = function(objReward) {
  }

  // 更新竞技场钻石数量
  Partner.pkRefreshGemCount = function(count) {
  }

  // 领奖返回
  Partner.RewardRankBack = function() {
  }

  // 更新pk次数
  Partner.pkRefreshPKCount = function(count) {
  }

  // 可以pk回调
  Partner.pkRegisterStartPKCallback = function(callback) {
    Partner.startPKCallback = callback;
  }

  // 注册位置信息回调
  Partner.pkRegisterLoctionCallback = function(callback) {
    Partner.locationPKCallback = callback;
  }

  // 注册领取竞技场奖励
  Partner.pkRegisterRankRewardCallback = function(callback) {
    Partner.rankRewardPKCallback = callback;
  }

  Partner.onLevelChange = function(level) {
  }

  Partner.onVenturePass = function(stageId) {
  }

  Partner.onCreatePlayer = function(playerId) {
  }

  Partner.onVideoStart = function() {
  }

  Partner.onVideoFinish = function() {
  }

  Partner.onPayFinish = function(amount) {
  }

  Partner.isSupportModal = function() {
    return false;
  }

  Partner.createModal = function(callBack) {
  }

  // 长震动
  Partner.vibrateLong = function() {
    
  }

  // 获取内存使用
  Partner.memoryUsage = function() {
    return 0;
  };

  Partner.getResourseVersion = function() {
    return 0;
  }

  global.Partner = Partner;
}));
