/**
 * author:陈晓亮
 */
import Misc from "../commonUnit/Misc";
import { AUDIO_DIR, AUDIO_BGM_DIR, PK_AUDIO_DIR } from "../scene/base/BaseDefine";
import ResourecLoader from "../commonUnit/ResourceLoader";
import { Cartoon, ICartoonVO } from "../config/vo/ConfigVO";

interface IName2AudioClip {
  [name: string]: cc.AudioClip;
}

interface IName2Handler {
  [name: string]: number;
}

export enum AudioName {

  // 主背景音乐
  MusicMain                = "bgm_login",

  // 观看条漫背景音乐
  MusicStory               = "bgm_story",

  // 战斗中
  MusicBattle              = "bgm_battle",

  // 挑战木桶
  MisicChallengeWood       = "bgm_fun_2",

  // 挑战木桶
  MisicChallengeBlock      = "bgm_fun_1",

  // 挑战木桶
  MisicChallengeInfinite   = "bgm_battle",

  // 游戏开始cg
  MusicCg                  = "bgm_b",

  // 格挡训练中使用
  MusicFun1                = "bgm_fun_1",

  // 消灭猴猴中
  MusicFun2                = "bgm_fun_2",

  // 获得音效
  MusicCongraulation       = "sfx_congraulation",

  // 胜利音效
  MusicWin                 = "sfx_win",

  // 失败音效
  MusicFail                = "sfx_lose",

  // 对战开始音效
  MusicVs                  = "sfx_vs",

  // 按钮音效
  MusicBtn                 = "sfx_button",

  // Ko音效
  MusicKO                  = "sfx_ko",

  // 签到的音效
  MusicSign                = "sfx_peng",

  // 倒酒音效
  MusicPourWine            = "give_alcohol",

  // 喝酒音效1
  MusicDrink1              = "drink_1_big",

  // 喝酒音效2
  MusicDrink2              = "drink_1",

  // 抽奖音效
  MusicLottery             = "sfx_woda",
}

export default class AudioCtl {
  public static get INSTANCE(): AudioCtl {
    if (AudioCtl.singleInstance === null) {
      this.singleInstance = new AudioCtl();
    }
    return AudioCtl.singleInstance;
  }
  private static singleInstance: AudioCtl = null;

  private mObjName2AudioClip: IName2AudioClip = {};

  private mObjName2Handler: IName2Handler = {};

  private mIsEffect = true;
  private mIsMusic = true;
  private currentBgMusic = null;

  // 条漫音乐
  private mCurComicMusic = null;

  public init() {
    // const isEffect = cc.sys.localStorage.getItem("effect");
    const isMusic = cc.sys.localStorage.getItem("music");
    // if (!isEffect) {
    //   cc.sys.localStorage.setItem("effect", 1);
    // } else if (!Number(isEffect)) {
    //   this.mIsEffect = false;
    // }
    if (!isMusic) {
      cc.sys.localStorage.setItem("music", 1);
    } else if (!Number(isMusic)) {
      this.mIsMusic = false;
      this.mIsEffect = false;
    }

    // Misc.myLog("音效记录", isEffect, typeof(isEffect));
    Misc.myLog("音乐记录", isMusic, typeof(isMusic));
    Misc.myLog("音效开关", this.mIsEffect);
    Misc.myLog("音乐开关", this.mIsMusic);
  }

  public closeEffect() {
    this.mIsEffect = false;
    cc.sys.localStorage.setItem("effect", 0);
  }

  public openEffect() {
    this.mIsEffect = true;
    cc.sys.localStorage.setItem("effect", 1);
  }

  public get IsEffect(): boolean {
    return this.mIsEffect;
  }

  public closeMusic() {
    this.mIsMusic = false;
    this.mIsEffect = false;
    cc.sys.localStorage.setItem("music", 0);
    if (this.currentBgMusic !== null) {
      cc.audioEngine.stop(this.currentBgMusic);
      this.currentBgMusic = null;
    }
  }

  public openMusic() {
    this.mIsMusic = true;
    this.mIsEffect = true;
    cc.sys.localStorage.setItem("music", 1);
    this.playBackgroundMusic(AudioName.MusicMain);
  }

  public get IsMusic(): boolean {
    return this.mIsMusic;
  }

  public async playEffect(name: AudioName, loop: boolean = false) {
    if (!this.mIsEffect) {
      return;
    }
    let audioClip: cc.AudioClip = this.mObjName2AudioClip[name];
    let tNumClipId: number = null;
    if (audioClip) {
      tNumClipId = cc.audioEngine.play(audioClip, loop, 1.0);     
    } else {
      const strFilePath = AUDIO_DIR + name; // + ".mp3";
      // Misc.myLog("下载音效文件", strFilePath);
      audioClip = await ResourecLoader.getFileData(strFilePath, null);
      this.mObjName2AudioClip[name] = audioClip;
      tNumClipId = cc.audioEngine.play(audioClip, loop, 1.0);
    }

    this.mObjName2Handler[name] = tNumClipId;
  }

  public async playPKEffect(name: string, loop: boolean = false) {
    if (!this.mIsEffect) {
      return;
    }
    let audioClip: cc.AudioClip = this.mObjName2AudioClip[name];
    let tNumClipId: number = null;
    if (audioClip) {
      tNumClipId = cc.audioEngine.play(audioClip, loop, 1.0);     
    } else {
      const strFilePath = PK_AUDIO_DIR + name; // + ".mp3";
      // Misc.myLog("下载音效文件", strFilePath);
      audioClip = await ResourecLoader.getFileData(strFilePath, null);
      this.mObjName2AudioClip[name] = audioClip;
      tNumClipId = cc.audioEngine.play(audioClip, loop, 1.0);
    }

    this.mObjName2Handler[name] = tNumClipId;
  }

  public stopEffect(name: AudioName) {
    if (this.mObjName2Handler[name] !== null && this.mObjName2Handler[name] !== undefined) {
      cc.audioEngine.stop(this.mObjName2Handler[name]);
      this.mObjName2Handler[name] = null;
    }
  }

  public async playBackgroundMusic(name: AudioName | string, loop: boolean = true) {
    if (!this.mIsMusic) {
      return;
    }
    
    if (this.currentBgMusic !== null) {
      cc.audioEngine.stop(this.currentBgMusic);
      this.currentBgMusic = null;
    }
    let handler = null;
    let audioClip: cc.AudioClip = this.mObjName2AudioClip[name];
    if (audioClip) {
      if (AudioName.MusicStory === name) {
        handler = cc.audioEngine.play(audioClip, loop, 0.2);
      } else {
        handler = cc.audioEngine.play(audioClip, loop, 1.0);
      }
      
    } else {
      const strFilePath = AUDIO_BGM_DIR + name; // + ".mp3";
      Misc.myLog("下载音乐文件", strFilePath);
      audioClip = await ResourecLoader.getFileData(strFilePath);
      this.mObjName2AudioClip[name] = audioClip;
      if (AudioName.MusicStory === name) {
        // 故事音乐声音一半
        handler = cc.audioEngine.play(audioClip, loop, 0.2);
      } else {
        handler = cc.audioEngine.play(audioClip, loop, 1.0);
      }
      
    }
    this.currentBgMusic = handler;
  }

  public pauseBackgroundMusic() {
    if (this.currentBgMusic !== null) {
      cc.audioEngine.pause(this.currentBgMusic); 
    }
  }

  public resumeBackgroundMusic() {
    if (this.currentBgMusic !== null) {
      cc.audioEngine.resume(this.currentBgMusic); 
    }
  }

  // 暂停当前播放背景音乐
  public pauseMusic() {
    cc.audioEngine.pauseMusic();
  }

  // 恢复暂停背景音乐
  public resumMusic() {
    cc.audioEngine.resumeMusic();
  }
  

  public stopBackgroundMusic() {
    if (!this.mIsMusic) {
      return;
    }
    if (this.currentBgMusic !== null) {
      cc.audioEngine.stop(this.currentBgMusic);
      this.currentBgMusic = null;
    }
  }

  public async playSoundMusic(name: AudioName | string, loop: boolean = true) {
    if (!this.mIsMusic) {
      return;
    }
    if (this.mCurComicMusic !== null) {
      cc.audioEngine.stop(this.mCurComicMusic);
      this.mCurComicMusic = null;
    }
    let handler = null;
    let audioClip: cc.AudioClip = this.mObjName2AudioClip[name];
    if (audioClip) {
      handler = cc.audioEngine.play(audioClip, loop, 1.0);
    } else {
      const strFilePath = AUDIO_DIR + name; // + ".mp3";
      Misc.myLog("下载音乐文件", strFilePath);
      audioClip = await ResourecLoader.getFileData(strFilePath);
      this.mObjName2AudioClip[name] = audioClip;
      handler = cc.audioEngine.play(audioClip, loop, 1.0);
    }
    this.mCurComicMusic = handler;
  }

  public stopSoundMusic() {
    if (!this.mIsMusic) {
      return;
    }
    if (this.mCurComicMusic !== null) {
      cc.audioEngine.stop(this.mCurComicMusic);
      this.mCurComicMusic = null;
    }
  }

  // 加载条漫音乐
  public async loadComicEffect(pNumId: number) {
    const tSysCartoon: ICartoonVO = Cartoon.get(pNumId);
    const tArrMusic: string[] = tSysCartoon.preloadAudio;
    if (!tArrMusic) {
      return;
    }
    for (let i = 0; i < tArrMusic.length; i++ ) {
      const strFilePath = AUDIO_DIR + tArrMusic[i];
      Misc.myLog("下载音乐文件", strFilePath);
      await ResourecLoader.getFileData(strFilePath);
    }
  }

  // 播放对骂语音
  public async playAccent(pStrName: string) {
    if (!this.mIsEffect) {
      return;
    }
    const strFilePath = PK_AUDIO_DIR + pStrName;
    const audioClip = await ResourecLoader.getFileData(strFilePath, null);
    cc.audioEngine.play(audioClip, false, 1.0);
  }

  // 独立于其他音效 不打断也不被打断
  public async playEffectAlone(name: AudioName | string, loop: boolean = true) {
    if (!this.mIsMusic) {
      return;
    }
    
    let audioClip: cc.AudioClip = this.mObjName2AudioClip[name];
    if (audioClip) {
      cc.audioEngine.play(audioClip, loop, 1.0);
    } else {
      const strFilePath = AUDIO_DIR + name;
      Misc.myLog("下载音乐文件", strFilePath);
      audioClip = await ResourecLoader.getFileData(strFilePath);
      this.mObjName2AudioClip[name] = audioClip;
      cc.audioEngine.play(audioClip, loop, 1.0);
    }
  }
  
}
