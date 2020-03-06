import EventUtil from "../event/EventUtil";
import { Events } from "../event/Event";
import AudioCtl from "../audio/AudioCtl";
import { AudioName } from "../audio/AudioCtl";
import Misc from "./Misc";
import NetCtl from "../net/NetCtl";

export default class RuntimeManager {
  public static get INSTANCE(): RuntimeManager {
    if (!RuntimeManager.singleInstance) {
      RuntimeManager.singleInstance = new RuntimeManager();
    }
    return RuntimeManager.singleInstance;    
  }

  // 当前是否在后台
  private mIsBackground: boolean = false;

  private static singleInstance: RuntimeManager;

  public init() {
    const self = this;

    if (Misc.isNative()) {
      cc.game.on(cc.game.EVENT_SHOW, this.onShow, this);
      cc.game.on(cc.game.EVENT_HIDE, this.onHide, this); 
    }

    Partner.registerOnShowCallback(function(res) {
      self.onShow(res);
    });
    Partner.registerOnHideCallback(function() {
      self.onHide();
    });

    Partner.registerOnAudioInterruptionEndCallback(function() {
      console.log("~~~~~~~~~~~~~~~~~~~~~~~事件之后才可再次播放成功~~~~~~~~~~~~~~~~~~~~~~~~");
      self.onAudioInterruptionEnd();
    });
    
    Partner.registerUpdata();
  }

  // 获取当前是否在后台
  public get IsBackGround(): boolean {
    return this.mIsBackground;
  }

  // 监听音频中断结束事件
  private onAudioInterruptionEnd(pause: boolean = true) {
    /**
     * 注意：必须要先强行调用 cc.audioEngine.pauseMusic,再调用cc.audioEngine.resumeMusic， 
     * 因为这个声音是微信小游戏关掉的，Cocos Creator的音乐管理器并不知情
     */
    if (pause) {
      AudioCtl.INSTANCE.pauseBackgroundMusic();  
    }
    AudioCtl.INSTANCE.resumeBackgroundMusic();
    setTimeout( () => {
      // 暂时处理--微信端从后台切回，有概率无法恢复音效，需要随便一个音效触发一下。
      AudioCtl.INSTANCE.playEffect(AudioName.MusicBtn);
    }, 2000);
  }

  // 隐藏到后台,锁屏、按 HOME 键退到桌面、显示在聊天顶部等时的回调
  private onHide() {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~切到后台~~~~~~~~~~~~~~~~~~~~~~~~");
    this.mIsBackground = true;
    AudioCtl.INSTANCE.pauseBackgroundMusic();
    // AudioCtl.INSTANCE.stopBackgroundMusic();
    EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_HIDE);
  }

  // 回到前台时的回调
  private onShow(launchOptions: any) {
    console.log("~~~~~~~~~~~~~~~~~~~~~~~切回前台~~~~~~~~~~~~~~~~~~~~~~~~", launchOptions);
    if (!this.mIsBackground) {
      return;
    }

    this.mIsBackground = false;
    EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_SHOW);
    if (NetCtl.INSTANCE.IsConnected) {
      console.log("~~~~~~~~~~~~~~~~~~~~~~~切回前台~~~~~~~~~~~~~~~~~~~~~~~~未断开 1秒后检测连接状态");
      // 这时未断开连接 但是可能存在从后台切入前台才接收到断开协议 因此需要再次延时1秒监测
      setTimeout(() => {
        if (NetCtl.INSTANCE.IsConnected) {
          console.log("~~~~~~~~~~~~~~~~~~~~~~~切回前台~~~~~~~~~~~~~~~~~~~~~~~~1秒后未断开连接");
          EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_SHOW_AND_CONNECT);
        } else {
          console.log("~~~~~~~~~~~~~~~~~~~~~~~切回前台~~~~~~~~~~~~~~~~~~~~~~~~1秒后断开连接 0.5秒后重连再检测");
          this.waitOnContect();
        }
      }, 1000);
    } else {
      this.waitOnContect();
    }
    this.onAudioInterruptionEnd(false);
  }

  private waitOnContect() {
    const mTimeHandler = setInterval(() => {
      if (NetCtl.INSTANCE.IsConnected) {    
        console.log("~~~~~~~~~~~~~~~~~~~~~~~间隔0.5秒检测重新连上");
        EventUtil.Dispatcher.emit(Events.EVENT_APP_ON_SHOW_AND_CONNECT);
        clearInterval(mTimeHandler);
      }
    }, 500); 
  }
}
