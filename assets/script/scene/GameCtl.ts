import * as ProtoDispatcher from "../proto/ProtoDispatcher";
import NetCtl from "../net/NetCtl";
import TransitionScene from "./transitionScene/TransitionScene";
import { EGameScene, DesignResolutionWidth, DesignResolutionHeight } from "./base/BaseDefine";
import { IRootUI } from "./base/IUI";
import BaseScene from "./base/BaseScene";
import GamePersist from "./GamePersist";
import AudioCtl from "../audio/AudioCtl";
import RuntimeManager from "../commonUnit/RuntimeManager";
import Misc from "../commonUnit/Misc";

interface ITextureUUID2RefCount {
  [uuid: number]: number;
}

export default class GameCtl {
  // 获取GamCtl单例
  public static get INSTANCE(): GameCtl {
    if (GameCtl.singleInstance === null) {
      this.singleInstance = new GameCtl();
    }
    return GameCtl.singleInstance;
  }
  private static singleInstance: GameCtl = null;

  // 当前ui
  private mCurUI: IRootUI = null;

  // 当前场景对象
  private mCurScene: BaseScene = null;

  // 当前场景name
  private mCurSceneName: EGameScene = EGameScene.InitScene;

  // 前一场景name
  private mPreSceneName: EGameScene  = EGameScene.InitScene;

  private mNumServerTime: number = 0;

  // 适配类型
  private nNumResolutionPolicy: number = 0;

  // 资源填充宽度
  private mNumAddAdaptationWidth = 0;

  // 资源填充高度
  private mNumAddAdaptationHeight = 0;

  // 资源的总宽度
  private mNumAdaptationWidth = 0;

  // 适配总高度
  private mNumAdaptationHeight = 0;

  public init() {
    
    // 协议各子模块事件触发器节点添加到NetController
    ProtoDispatcher.fillDispatcher(NetCtl.INSTANCE.node);

    // 初始化协议收发和协议处理
    NetCtl.INSTANCE.createNetHandler();

    // 音效控制
    AudioCtl.INSTANCE.init();

    // 运行时初始化
    RuntimeManager.INSTANCE.init();
    

    // 获取适配方案
    this.getResolutionPolicy();

    // 前端保持与服务器时间同步
    const self = this;
    setInterval(() => {
      self.mNumServerTime += 1;
    }, 1000);


    // 初始化sdk
    Partner.initSDK();
    
  }

  // 提出依赖资源
  private filterAsset() {
    const arrFileList: string[] = [
      "prefab/commonUI/AlertComp",
      "prefab/commonUI/WaitingComp",
      "prefab/commonUI/ToastComp",
      "prefab/mainScene/mutual/BannerAd",
      "prefab/commonUI/PromoteBannerAd",
      "prefab/commonUI/AddToMiniProgram",
      "prefab/mainScene/achievement/NewAchievementComp",
      "prefab/guide/GuidePanel",
      "prefab/guide/CGPanel",
      "prefab/mainScene/stage/StageComicComp",
      // "prefab/mainScene/pk/PkWebMap",
    ];

    arrFileList.forEach((file) => {
      const deps =  cc.loader.getDependsRecursively(file);
      deps.forEach((uuid) => {
        cc.loader.setAutoRelease(uuid, false);
      });
    });
  }

  // 切换场景
  public loadNextScene(sceneName: EGameScene, transtion: boolean = true) {

    this.filterAsset();
    
    this.mPreSceneName = this.mCurSceneName;
    this.mCurSceneName = sceneName;
    if (transtion) {
      TransitionScene.NextSceneName = sceneName;
      cc.director.loadScene(EGameScene.TransitionScene); 
    } else {
      cc.director.loadScene(sceneName); 
    }
  }

  public get CurSceneName(): EGameScene {
    return this.mCurSceneName;
  }
  public get PreSceneName(): EGameScene {
    return this.mPreSceneName;
  }

  public get CurrentScene(): BaseScene {
    return this.mCurScene;
  }

  public set CurrentScene(value: BaseScene) {
    this.mCurScene = value;
  }

  public set RootUI(value: IRootUI) {
    this.mCurUI = value;
  }

  public get RootUI(): IRootUI {
    return this.mCurUI;
  }

  public set ServerTime(value: number) {
    this.mNumServerTime = value;
  }
  public get ServerTime(): number {
    return this.mNumServerTime;
  }

  public get ResolutionPolicy(): number {
    return this.nNumResolutionPolicy;
  }

  public get AddAdaptationHeight(): number {
    return this.mNumAddAdaptationHeight;
  }

  public get AddAdaptationWidth(): number {
    return this.mNumAddAdaptationWidth;
  }

  // 获取游戏的适配方案
  private getResolutionPolicy(pNumDesignW?: number, pNumDesignH?: number) {

    // 设计分辨率，默认值是(720, 1280)
    pNumDesignW = pNumDesignW || DesignResolutionWidth;
    pNumDesignH = pNumDesignH || DesignResolutionHeight;

    // 获取设备分辨率
    const tFrameSize = cc.view.getFrameSize();

    // 设备宽高比
    const tFrameScale   = tFrameSize.width / tFrameSize.height;      

    // 资源宽高比
    const tDesignScale  = pNumDesignW / pNumDesignH;

    // 默认适配宽
    let type = cc.ResolutionPolicy.FIXED_WIDTH;

    if (tFrameScale >= tDesignScale) {
      // 设备宽高比>资源宽高比（宽屏设备），此时需要适应高，左右两边出现空隙
      type = cc.ResolutionPolicy.FIXED_HEIGHT;

      // 填充宽度 = (设计高/屏幕高) × 屏幕宽 - 设计宽
      this.mNumAddAdaptationWidth = (pNumDesignH / tFrameSize.height) * tFrameSize.width - pNumDesignW;

      // 高度不需要再填充
      this.mNumAddAdaptationHeight = 0;

    } else if (tFrameScale < tDesignScale) {
      // 设备宽高比<资源宽高比（高屏设备），此时需要适应宽，上线两边出现空隙
      type = cc.ResolutionPolicy.FIXED_WIDTH;

      // 填充总高度 = (设计宽/屏幕宽) × 屏幕高 - 设计高
      this.mNumAddAdaptationHeight = (pNumDesignW / tFrameSize.width) * tFrameSize.height - pNumDesignH;

      // 宽度不需要再填充
      this.mNumAddAdaptationWidth = 0;
    }

    this.mNumAdaptationWidth  = DesignResolutionWidth   + this.mNumAddAdaptationWidth;
    this.mNumAdaptationHeight = DesignResolutionHeight  + this.mNumAddAdaptationHeight;
    this.nNumResolutionPolicy = type;

    // 适配之后需要调整GamePersist的坐标
    GamePersist.INSTANCE.setNodePosByShift(this.mNumAddAdaptationWidth / 2, this.mNumAddAdaptationHeight / 2);
  }
}

