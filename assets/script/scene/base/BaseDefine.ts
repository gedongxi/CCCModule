import { Invite } from "../../config/vo/ConfigVO";

// 游戏资源的设计分辨率
export const DesignResolutionWidth  = 720;
export const DesignResolutionHeight = 1280;

// 分帧加载list时，单次加载数量
export const LoadBatchCount = 1;
export const LoadBatchInterval = 0.05;
export const LoadBatchInterval2 = 0.1;

// widget的类型
export const WidgetTop    = 1 << 0;
export const WidgetBottom = 1 << 1;
export const WidgetLeft   = 1 << 2;
export const WidgetRight  = 1 << 3;

// 对其数据
export interface IWidgetSize {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

// 游戏 网络 持久化节点的根节点
export const GAME_PERSIST_NODE_ROOT_NET: string = "node-game-persist-net-root";
export const GAME_PERSIST_NODE_ROOT_MODULE: string = "node-game-persist-module-root";
export const GAME_PERSIST_NODE_ROOT_REDPOINT: string = "node-game-persist-redpoint-root";

// 配置文件的游戏资源目录
export const RESOURCE_CONFIG_PATH_ROOT = "config/";

// 配置文件的游戏资源目录
export const RESOURCE_FONT_PATH_ROOT = "font/";

// 音效路径
export const AUDIO_DIR = "res/audio/sound/";

// 战斗音效路径
export const PK_AUDIO_DIR = "res/audio/pk_sound/";

// 音乐bgm路径
export const AUDIO_BGM_DIR = "res/audio/bgm/";


// 通用图集路径
export const TONG_YONG_DIR = "res/ui/pack/TongYong";

// 红点图集路径
export const RED_POINT_DIR = "res/ui/pack/HongDian";

// 头像
export const HEAD_DIR = "res/ui/pack/icon/ZhuJiaoTouXiang";

// 战斗中的头像
export const BATTLE_HEAD_DIR = "res/ui/pack/JiaoSeShouShangTouXiang/";

// 场景图片路径
export const STAGE_BG_DIR = "res/ui/pic/pic_bg/";

// spine
export const SPINE_DIR = "res/spine/pet/";

// 天赋 icon 路径
export const TALENT_DIR = "res/ui/pack/JieMian/TianFu";

// 段位路径
export const DUAN_DIR = "res/ui/pack/JieMian/DuanWei";
             

// 音乐音效开关图片路径
export const MUSIC_LIST_ITEM_DIR      = "res/ui/pack/JieMian/WanJiaXinXi";
export const MUSIC_LIST_ITEM_ON       = "ui-pack-JieMian-WanJiaXinXi-AnNiu_Guan";
export const MUSIC_LIST_ITEM_OFF      = "ui-pack-JieMian-WanJiaXinXi-AnNiu_Kai";

// 头像路径地址
export const HEAD_IMG_HOST_PATH = "http://192.168.20.140/animal/cdn/resource/wxhead/";

// 物品路径
export const SKILL_DIR = "res/ui/pack/icon/";
// 物品文件名前缀
export const SKILL_NAME_PREFIX = "skill_";

// 物品路径
export const MEDAL_DIR = "res/ui/pack/icon/";
// 物品文件名前缀
export const MEDAL_NAME_PREFIX = "sp_";

// 酒icon的路径
export const WINE_ICON_DIR = "res/ui/pack/icon/Jiu";

// 宠物头像路径
export const PET_ICON_DIR = "res/ui/pack/JieMian/ChongWu";

// 宠物骨骼路径(h5)
export const PET_SPINE_H5_DIR = "resTemp/spineTemp_h5/";

// 宠物骨骼路径(原生)
export const PET_SPINE_NATIVE_DIR = "resTemp/spineTemp_native/";
// 签到
export const SIGN_ICON_DIR = "res/ui/pack/JieMian/QianDao";

// 拼图碎片的路径
export const PUZZLE_ICON_DIR = "res/ui/pack/JieMian/PinTu"; 

// 界面的路径
export const JIEMIAN_DIR = "res/ui/pack/JieMian/"; 

// npc预展示icon图集路径
export const ATLAS_NPC = "res/plot";
// NPC预展示icon文件名前缀
export const NPC_NAME_PREFIX = "plot-";

// 武器图集路径
export const WEAPON_ITEM_DIR = "res/ui/pack/icon/WuQi";

// 功能按钮图片
export const MENU_ICON_DIR = "res/ui/pack/JieMian/CaiDan";

// 挑战图标
export const CHALLENGE_ICON_DIR = "res/ui/pack/JieMian/TiaoZhan";

// 技能图标缓存
export const RED_POINT_SKILL_TYPE = "red_point_skill_type";

// 宠物图标缓存
export const RED_POINT_PET_TYPE = "red_point_pet_type";

// 挑战图标缓存
export const RED_POINT_CHALLENGE_TYPE = "red_point_challenge_type";

// 训练红点图标缓存
export const RED_POINT_PRACTICE_TYPE  = "red_point_practice_type";

// 其他红点图标缓存
export const RED_POINT_OTHER_TYPE  = "red_point_other_type";

// 关卡红点图标缓存
export const RED_POINT_STAGE_TYPE  = "red_point_stage_type";

// 每日奖励红点图标缓存
export const RED_POINT_DAILY_REWARD_TYPE  = "red_point_daily_reward_type";

// 商店图标缓存
export const RED_POINT_RECHARGE_TYPE = "red_point_recharge_type";

// 小星星未点亮
export const STAR_NOT_LIGHT_DIR = "res/ui/pack/TongYong";
export const STAR_NOT_LIGHT_PREFIX = "bg_106";

// 小星星点亮
export const STAR_LIGHT_DIR = "res/ui/pack/icon/TongYong";
export const STAR_LIGHT_PREFIX = "star";

// 成就
export const ACHIEVEMENT_DIR = "res/ui/pack/icon/ChengJiu";

// 角色头
export const ENEMY_DIR = "res/ui/pack/icon/JiaoSeTou";

// 关卡解锁功能的图标
export const STAGE_OPEN_DIR = "res/ui/pack/";

// 技能框
export const SKILL_QUALITY_DIR = "res/ui/pack/icon/JiNengTuBiao";
export const SKILL_QUALITY_PREFIX = "bg_";

// 充值图标
export const RECHARGE_ICON_DIR = "res/ui/pack/JieMian/ChongZhi";
export const RECHARGE_ICON_PREFIX = "icon_";

// 新章节地址
export const NEW_AREA_DIR = "res/ui/pack/JieMian/XinZhangJie";

// 邀请每日首次缓存
export const RED_POINT_MENU_INVITE  = "red_point_menu_invite";

// 商城每日首次缓存
export const RED_POINT_MENU_PAYMENT  = "red_point_menu_payment";

// 首充每日首次缓存
export const RED_POINT_MENU_ACHIEVE  = "red_point_menu_achieve";

// 商城每日是否打开缓存
export const RED_POINT_PAYMENT_OPEN  = "red_point_payment_open";

// 公告是否弹出缓存
export const NOTICE_IS_POP  = "notice_is_pop";

// 登录日期
export const DAILY_LOGIN_TIME      = "daily_login_time";

// 每日登录次数
export const DAILY_LOGIN_COUNT      = "daily_login_count";

// 每日分享次数
export const DAILY_SHARE_COUNT      = "daily_share_count";

// 首充礼包
export const FIRST_RECHARGE = "res/ui/pack/JieMian/ShouChongLiBao";

// 地图前缀
export const STAGE_AREA_DIR_PREFIX = "res/ui/pic/map/";

// 游戏中的场景
export enum EGameScene {
  TransitionScene      = "TransitionScene",
  InitScene            = "InitScene",
  LoginScene           = "LoginScene",
  MainScene            = "MainScene",
  PKScene              = "PKScene",
  NativeBattleScene    = "NativeBattleScene",
}

// 数据统计
export enum GameBIType {
  OpenGame    = "000_opengame",     // 打开游戏（目前只有微信平台）
  ISLoad1     = "001_ISLoad",       // 进入 init场景onload 
  IULoad2     = "002_IULoad",       // 进入 initui onload
  IRes3       = "003_IRes",         // initui 开始加载资源
  IZipSuc4    = "004_IZipSuc",      // 下载zip成功
  IResSuc5    = "005_IResSuc",      // initui 资源加载失败
  IResErr6    = "006_IResErr",      // initui 资源加载失败

  LSLoad7     = "007_ISLoad",       // 进入 login场景onload 
  LULoad8     = "008_IULoad",       // 进入 loginui onload 

  AthFir9      = "009_AthFir",     // 首次开始授权 
  AthFirSuc10  = "010_AthFirSuc",  // 首次授权成功 
  AthFirErr11  = "011_AthFirErr",  // 首次授权失败

  AthSec12     = "012_AthSec",     // 再次开始授权 
  AthSecSuc13  = "013_AthSecSuc",  // 再次授权成功 
  AthSecErr14  = "014_AthSecErr",  // 再次授权失败

  AthAllSuc15  = "015_AthAllSuc",  // 所有授权成功 

  SckFir16     = "016_SckFir",    // 首次socket连接
  SckFirSuc17  = "017_SckFirSuc", // 首次socket连接成功

  LgFir18      = "018_LgFir",      // 首次登陆
  LgSec19      = "019_LgSec",      // 再次登陆
  LgSuc20      = "020_LgSuc",      // 登录成功
  LgErr21      = "021_LgErr",      // 登录失败

  Player22     = "022_Player",    // 尝试创角
  PlayerSuc23  = "023_PlayerSuc", // 创角成功
  PlayerErr24  = "024_PlayerErr", // 创角失败

  EnterNew25   = "025_EnterNew",  // 尝试进入游戏
  EnterOld26   = "026_EnterOld",  // 尝试进入游戏
  EnterSuc27   = "027_EnterSuc",  // 进入游戏成功
  EnterErr28   = "028_EnterErr",  // 进入游戏失败

  Comic29      = "029_Comic1",    // 第一个条漫
  Battle30     = "030_Battle",    // 第一次点击不能忍

  // 第二次打点
  MutualOpen31    = "031_MutualOpen",     // 打开左侧互推  玩家游戏跳转列表展开按钮点击次数统计
  Mini32          = "032_MutualMini",     // 游戏互推跳转
  Customer33      = "033_Customer",       // 客服按钮点击次数
  Box34           = "034_Box",            // 玩家点击免费礼包的次数统计
  SkillLvl35      = "035_SkillLvl",       // 玩家点击拳馆中各技能升级按钮的次数统计
  Lottery36       = "036_Lottery",        // 玩家点击贩卖机按钮的次数统计
  Pet37           = "037_Pet",            // 玩家点击宠物店按钮的次数统计
  Challenge38     = "038_Challenge",      // 玩家点击每日挑战按钮的次数统计
  BattleFail39    = "039_BattleFail",     // 每一关卡的死亡界面展示次数统计
  BattleWin40     = "040_BattleWin",      // 每一关卡的胜利界面展示次数统计
  Lvl41           = "041_Lvl",            // 升职界面展示次数统计
  ComicShare42    = "042_ComicShare",     // 玩家条漫分享次数统计统计
  FailShare43     = "043_FailShare",      // 玩家死亡界面分享按钮点击次数统计
  FailShareSuc44  = "044_FailShareSuc",   // 玩家死亡界面分享按钮点击次数统计
  WinShare45      = "045_WinShare",       // 胜利界面分享按钮点击次数统计
  WinShareSuc46   = "046_WinShareSuc",    // 胜利界面分享成功次数统计
  AddGold47       = "047_AddGold",        // 玩家点击左上角金币“+”的次数统计
  AddVigor48      = "047_AddVigor",       // 玩家点击左上角体力“+”的次数统计

  Gift49          = "049_Gift",           // 礼包icon点击次数
  GiftPanel50     = "050_GiftPanel",      // 礼包页面展示次数
  PetBuy51        = "051_PetBuy",         // 草泥马购买点击次数
  GiftBuy52       = "052_GiftBuy",        // 礼包购买拉起情况(成功，失败)次数

  Lvl1To2_53      = "053_Lvl1To2",         // 升级1级升2级显示弹框
  Lvl1To2Sure_54  = "054_Lvl1To2Sure",     // 升级1级升2级点击确定 
  Lvl2To3_55      = "055_Lvl2To3",         // 升级2级升3级显示弹框
  Lvl2To3Close_56 = "056_Lvl2To3Close",    // 升级2级升3级点击返回 
  Lvl3To4_57      = "057_Lvl3To4",         // 升级3级升4级显示弹框
  Lvl3To4Close_58 = "058_Lvl3To4Sure",     // 升级3级升4级点击返回 
  SignFirst_59    = "059_SignFirst",       // 第一次签到                  
  SignFirstCancel_60    = "060_SignFirstCancel",       // 第一次签到取消
  SignFirstSure_61      = "061_SignFirstSure",         // 第一次签到确定 
  SignFirstClose_62     = "062_SignFirstClose",        // 第一次签到关闭                 
  Stage3_63        = "063_Stage3",         // 第三关点击
  Stage3Panel_64   = "064_Stage3Panel",    // 第三关弹出面板           
  Stage3Fight_65   = "065_Stage3Fight",    // 第三关点击不能忍           
  GymPopPanel_66   = "066_GymPopPanel",    // 健身房解锁弹出面板
  GymPopSure_67    = "067_GymPopSure",     // 健身房解锁弹出面板点击我知道了
  Stage4_68        = "068_Stage4",         // 第四关点击
  Stage5_69        = "069_Stage5",         // 第五关点击
  Lvl4To5_70       = "070_Lvl4To5",        // 升级4级升5级显示弹框
  Lvl4To5Close_71  = "071_Lvl4To5Sure",    // 升级4级升5级点击返回 
  Skill1Open_72    = "072_Skill1Open",     // 旋风腿解锁
  Skill1Close_73   = "073_Skill1Close",     // 旋风腿解锁点击我知道了

  MutualBanner_74       = "074_MutualBanner",    // 外部导量banner显示
  MutualBannerClick_75  = "075_MutualBanner",    // 外部导量banner点击
  MutualIcon_76         = "076_MutualIcon",      // 外部导量Icon显示
  MutualIconClick_77    = "077_MutualIcon",      // 外部导量Icon点击

  PkClick_78     = "078_PkClick",    // 点击pk
}


export interface IProtoError {
  errCode: number;
  errMsg: string;
  protoName: string;
}

export enum EProperty {
  Hp                  = 1,   // 生命值
  Atk                 = 2,   // 攻击力
  MaxAnger            = 3,   // 怒气上限
  AddAngerByCD        = 4,   // 怒气回复
  BlockRate           = 5,   // 格挡免伤率
  AddHpByCD           = 6,   // 3秒生命回复
  SubSkillCD          = 7,   // 降低技能冷却
  SubAngerBySkill     = 8,   // 技能消耗怒气
  AddAngerByAtk       = 9,   // 攻击回复怒气
  AddAngerByBlock     = 10,  // 格挡回复努力
  CritRate            = 11,  // 暴击率
  SubStiffRate        = 12,  // 降低硬直值消耗百分比
  AddHpRateByCD       = 13,  // 每3秒回复当前生命值的百分比
  AddHpRate           = 100, // 生命值增加百分比
  AddAtkRate          = 101, // 攻击力增加百分比
  AddAngerRateByAtk   = 102, // 攻击获得怒气增加百分比
  AddAngerRateByBlock = 104, // 格挡获得怒气增加百分比
  SubSkillCDRate      = 105, // 技能冷却时间缩短百分比
}

// menu type
export enum EMenuType {
  Story          = 1, // 剧情
  Practice       = 2, // 训练
  DailyReward    = 3, // 日常礼包
  Pk             = 4, // pk
  Other          = 5, // 其他
  Illustrate1    = 6, // 左上角碎片
  Challenge      = 7, // 挑战
  Illustrate2    = 8, // 右下角碎片
  Illustrate     = 9, // 图鉴功能
}

// 属性升级方式
export enum ELvlUpType {
  Gold     = 1, // 花费金币
  Ad       = 2, // 看广告
}
// 玩家性别
export enum EPlayerSex {
  Unknown       = 0, // 未知
  Male          = 1, // 男
  Female        = 2, // 女
}

// 技能解锁
export enum ESkillStatus {
  Lock       = 0, // 未解锁
  UnLock     = 1, // 已解锁
}

// 槽解锁
export enum ESlotStatus {
  Lock       = 0, // 未解锁
  UnLock     = 1, // 已解锁
}

// 品质
export enum ESkillQuality {
  Green  = 2, // 绿
  Blue   = 3, // 蓝
  Purple = 4, // 紫
  Orange = 5, // 橙
}

// 技能类型
export enum ESkillType {
  Auto   = 0, // 被动
  Hand   = 1, // 主动
}

// 通用获取情况
export enum ENormalGet {
  Unget      = 0, // 未获取
  Got        = 1, // 已获取
}

// 关卡通关情况
export enum EStagePass {
  Locked     = 0, // 未开启
  Passed     = 1, // 已通关
  UnPass     = 2, // 未通关
}

// 关卡状态
export enum EStageStatus {
  Open     = 1, // 已激活
  Pass     = 2, // 已胜利通关
}

// 条漫播放情况
export enum EPlayState {
  NotPlay     = 0, // 未播放
  Played      = 1, // 已播放
}

// 武器使用状态
export enum EWeaponUsingState {
  ToBuy        = 0, // 已解锁待购买
  Using        = 1, // 使用中
  ToUse        = 2, // 已购买待使用 
}

// 武器类型
export enum EWeaponType {
  Short        = 1, // 短武器
  Long         = 2, // 长武器
}
// 用户财富类型
export enum EPlayFortune {
  Gem          = 1, // 钻石
  Money        = 2, // 钱
  Vigor        = 3, // 体力
  Experience   = 4, // 经验
}

// 关卡闯关得分
export enum EStageScore {
  Fail      = 0,
  SSS       = 1,
  SS        = 2,
  S         = 3,
  A         = 4,
}

// 是否是Boss关
export enum EIsBoss {
  IsBoss      = 1, // 是Boss
  NotBoss     = 0, // 不是Boss
}

// 动画面板关闭方式
export enum EAnimPanelClose {
  Hand      = 1, // 手动关闭 属性
  Auto      = 2, // 自动关闭 喝酒
}

// 被动弹窗的优先级
export enum EPopPanel {
  PopClipPanel           = 1, // 剧情碎片
  IllustrateUnlockPanel  = 2, // 解锁新区域
  NewAreaOpenPanel       = 3, // 新区域解锁动画
  PopLvlUpPanel          = 4, // 等级
  PopSkillUnlockPanel    = 5, // 新招式解锁
  PopMenuOpenPanel       = 6, // 开放新功能
  PetFeed                = 7, // 宠物喂食
  PetTryOver             = 8, // 宠物结束
  OfflineReward          = 9, // 离线收益
  SubscribeRewardPanel   = 10, // 订阅每日奖励
  SignPanel              = 11, // 签到
  GiftPanel              = 12, // 礼包面板 
  NoticePanel            = 13, // 公告
  SubscribePanel         = 14, // 订阅面板
  InfiniteVigorPanel     = 15, // 无限体力面板
  MonthCard              = 16, // 月卡
  FirstChargePanel       = 17, // 首充提示弹窗
  AccumulativeRecharge   = 18, // 累计充值面板
  GiftBagPanel           = 19, // 限时礼包弹框
  AirdropPanel           = 20, // 空投弹框

}

// 是否展示或者怎么展示礼包弹框
export enum EPackBagShowType {
  NoShow                = 1, // 不展示
  ShowNow               = 2, // 立刻展示
  ShowPop               = 3, // popPanel展示
}

// 签到详情
export enum ESignStatus {
  AlreadySign          = 1, // 已签
  NoSign               = 0, // 未签
}

// 功能id对应
export enum EMenuId {
  MenuCompany          = 1, // 滴滴打人公司
  MenuIllustrate       = 2, // 图鉴
  MenuSkill            = 3, // 武馆（技能）
  MenuGym              = 4, // 健身房
  MenuWeapon           = 5, // 武器店
  MenuLottery          = 6, // 勋章贩售机
  MenuZen              = 7, // 少林禅院
  MenuChallenge1       = 8, // 挑战任务
  MenuBar              = 9, // 酒吧
  MenuPet              = 10, // 宠物
  MenuChallenge2       = 11, // 无尽之路
  MenuChallenge3       = 14, // 训练格挡
  MenuTalent           = 15, // 天赋
  MenuPk               = 16, // pk
}

// 展示功能对应的id  新的UI
export enum ENewMenuId {
  NewMenuSkill            = 1, // 武馆（技能）
  NewMenuGym              = 2, // 健身房
  NewMenuWeapon           = 3, // 武器店
  NewMenuZen              = 4, // 禅院
  NewMenuTalent           = 5, // 天赋
  NewMenuTreasure         = 6, // 宝箱
  NewMenuSign             = 7, // 签到
  NewMenuLottery          = 8, // 贩售机
  NewMenuBar              = 9, // 酒吧
  NewMenuCustomer         = 10, // 客服
  NewMenuAchievement      = 11, // 成就
  NewMenuRank             = 12, // 排行榜
  NewMenuPet              = 13, // 宠物
  NewMenuIllustrate       = 14, // 图鉴
  NewMenuRecharge         = 15, // 商城
  NewMenuTurntable        = 16, // 转盘
  NewMenuChallenge        = 101, // 挑战
}

// 品质颜色
export enum EQualityColor {
  Green        = 2, // 绿色
  Blue         = 3, // 蓝色
  Purple       = 4, // 紫色
  Orange       = 5, // 橙色
}

// 宠物Id
export enum EPetId {
  Dog            = 1, // 狗
  Alpaca         = 2, // 羊驼
  Chicken        = 3, // 尖叫鸡 （属于武器）
}

// 激励广告类型
export enum EAdType {
  AdNormalGem          = 1, // 日常奖励（免费礼包）钻石
  AdStage              = 2, // 关卡结算双倍
  AdSign               = 3, // 签到双倍
  AdChallenge          = 4, // 挑战双倍
  AdStageTimes         = 5, // 看广告得关卡次数
  PetFeed              = 6, // 看广告喂食
  PetGetDog            = 7, // 看广告得狗狗
  PetGetAlpaca         = 8, // 看广告得草泥马
  Property             = 9, // 属性升级
  BattleAgain          = 10, // 再战一次
  LvlUp                = 11, // 升级2倍
  VigorGet             = 12, // 看视频得体力（oppo、头条和微信）以前是100
  ComicReward          = 13, // 条漫页面领奖看广告（除了头条的其他平台） 以前是101
  OfflineReward        = 14, // 离线收益
  AddPkTimes           = 15, // 看视频得pk次数
  AchievementThree     = 16, // 3倍领取成就
  RecoverHp            = 17, // 复活
  ChangeHead           = 18, // 换头
  AdNormalGold         = 19, // 日常奖励（免费礼包）金币
  Lottery              = 20, // 每日一次贩卖机
  SkinAbout            = 21, // 皮肤相关
  Turntable            = 22, // 转盘抽奖
  Illustrate           = 23, // 图鉴双倍
  Airdrop              = 24, // 空投
  DrinkAd              = 25, // 免费喝酒
  PetTrial             = 26, // 草泥马试用
  FlopAd               = 27, // boss关结算翻牌广告
  DuanBox              = 28, // 段位宝箱
  Sweep                = 29, // 扫荡券获取
  SettlementReward     = 102, // 结算领奖看广告（除了头条、微信、qq的其他平台）
  Common               = 103, // 通用
}

// banner广告类型
export enum EBannerType {
  SignPanel               = 20,     // 签到窗口界面
  StageAlertPanel         = 21,     // 关卡挑战界面
  SettlementPanel         = 22,     // 结算窗口
  LotteryPanel            = 23,     // 贩卖机窗口
  PausePanel              = 24,     // 游戏暂停窗口
  LvlUpPanel              = 25,     // 升级成功窗口
  PuzzleGetPanel          = 26,     // 剧情碎片获得窗口
  NewSkillPanel           = 27,     // 技能招式解锁窗口
  SkillUpPanel            = 28,     // 技能升级面板窗口
  BoxTreasurePanel        = 29,     // 免费礼包窗口
  PetPanel                = 30,     // 宠物窗口
  ChallengePanel          = 31,     // 挑战功能窗口
  LvlThreePanel           = 32,     // 三级
  LvlFourPanel            = 33,     // 四级
  InvitePanel             = 34,     // 好友助力
  OfflineRewardPanel      = 35,     // 离线奖励
  GymPanel                = 36,     // 健身房
  ZenPanel                = 37,     // 禅院
  DailyRewardPanel        = 38,     // 每日奖励菜单
  EggPanel                = 39,     // 砸金蛋
  ExchangePanel           = 40,     // 兑换窗口
  AddTurnTablePanel       = 41,     // 转盘券看广告窗口
  DrinkPanel              = 42,     // 喝酒窗口
  AchievementThreePanel   = 43,     // 成就领取看广告面板
  PackPanel               = 44,     // 限时礼包面板
  CustomerPanel           = 45,     // 客服面板
  PetTryPanel             = 46,     // 宠物免费试用面板
  BattleStartPanel        = 47,     // 开战前的vs面板
  MenuOpenPanel           = 48,     // 新功能解锁面板
  PetTryOverPanel         = 49,     // 宠物使用结束面板
  TalentSelectPanel       = 50,     // 天赋选择面板
}

// bannerId配置
export enum EBannerAdId {
  SignPanel               = "adunit-7d1c7b90fb862d52", // 签到窗口界面
  StageAlertPanel         = "adunit-6eca9e250feb3b30", // 关卡挑战界面
  SettlementPanel         = "adunit-ab98f0b3cc661f15", // 结算窗口
  LotteryPanel            = "adunit-adc759a1b7a1df55", // 贩卖机窗口
  PausePanel              = "adunit-393dbd41dbd5a3d0", // 游戏暂停窗口
  LvlUpPanel              = "adunit-e9990e646167d3db", // 升级成功窗口
  PuzzleGetPanel          = "adunit-3ae35f2ed5e5264f", // 剧情碎片获得窗口
  NewSkillPanel           = "adunit-e906f00f176c7f45", // 技能招式解锁窗口
  SkillUpPanel            = "adunit-a80ebc30bf477ed5", // 技能升级面板窗口
  BoxTreasurePanel        = "adunit-30972c76fd2e6416", // 免费礼包窗口
  PetPanel                = "adunit-1880677983aa2ebe", // 宠物窗口
  ChallengePanel          = "adunit-0633cd76a1134577", // 挑战功能窗口
  LvlThreePanel           = "adunit-30b171cece1e1aa8", // 三级
  LvlFourPanel            = "adunit-0efee315f235e4aa", // 四级
  InvitePanel             = "adunit-7d1c7b90fb862d52", // 好友助力
  OfflineRewardPanel      = "adunit-7d1c7b90fb862d52", // 离线奖励
}

// 充值类型
export enum ERechargeType {
  Gift           = 1,   // 礼包
  BuyGem         = 2,   // 购买钻石
  MonthCard      = 3,   // 购买钻石
  Subscribe      = 51,   // 连续包月
}


// 兑换类型
export enum EExchangeType {
  GemToGold       = 4, // 钻石兑换金币
  GemToVigor      = 5, // 钻石兑换体力
  BuyPkTimes      = 6, // 购买挑战次数
  GemRecover      = 7, // 钻石复活
}

// 红点类型
export enum ERedPointType {
  Normal       = 0, // 默认正常红点
  Arrow        = 1, // 箭头
  New          = 2, // new字
  Free         = 3, // 免费
  Gem          = 4, // 钻石
  Charge       = 5, // 首充
}

// 训练中心红点
export enum EPracticeCtlType {
  Zen     = 1, // 禅院
  Gym     = 2, // 健身房
  Talent  = 3, // 天赋
  Pet     = 4, // 宠物
}

// 成就状态
export enum EAchievementStatus {
  UnFinish       = 0, // 未完成
  Finish         = 1, // 已完成未领取
  Reward         = 2, // 已领取
}

// 计数器id
export enum ECounterId {
  petTrialAd        = 1, // 草泥马试用看广告
  petTrialTimes     = 2, // 草泥马试用次数
}


// 条漫出来方向
export enum ECartoonMode {
  Left       = 1, // 左出
  Right      = 2, // 右出
}

// 成就是否展示进度
export enum EAchievementIsShow {
  Show       = 1, // 展示
  UnShow     = 0, // 不展示
}

// 分享类型
export enum EShareType {
  GetVigor            = 1, // 分享获得体力
  GetGem              = 2, // 分享获得钻石
  Customer            = 3, // 客服分享小程序
  ComicShare          = 102, // 条漫第一次奖励
  CommonShare         = 101, // 右上角分享
  WinExtra            = 5, // 成功分享奖励
  FailExtra           = 4, // 失败分享奖励
  Invite              = 100, // 邀请好友
}

// 看视频类型
export enum EAdType1 {
  AddStageTimes       = 1, // 增加关卡次数
  OpenTreasure        = 2, // 开宝箱
}

// 宝箱奖励类型
export enum ETreasureRewardType {
  Gem       = "gem", // 钻石
  Gold      = "gold", // 金币
  Vigor     = "vigor",  // 体力
  Magic     = "magic",  // 战利品
}

// 宠物状态
export enum EPetStatus {
  Try       = 0, // 试用
  Lock      = 1, // 未激活
  Unlock    = 2, // 已激活
}

// 宠物饱食度状态
export enum EPetFoodStatus {
  Hungry       = 1, // 饥饿 食物小于20
  Full         = 2, // 有精力 食物大于80
  UnLock       = 3, // 新解锁
  Try          = 4, // 试用结束
  UnUse        = 5, // 未使用
}

// 宠物状态
export enum EPetSpine {
  Use       = "Actor4", // 使用
  NoUse     = "Actor3", // 未使用
  ToUse     = "Actor1", // 未使用到使用
  ToNoUse   = "Actor2", // 使用到未使用
}

// 宠物试用状态
export enum EPetTrialStatus {
  NoTry  = 0, // 无试用
  Try    = 1, // 有试用
}

// 签到类型
export enum ESignType {
  FirstSign       = 1, // 前七天签到
  NormalSign      = 2, // 后七天签到
}

// 增加挑战次数类型
export enum EAddTimesType {
  AddTimesByAd       = 1, // 广告
  AddTimesByGem      = 2, // 钻石
}

export class DiffTime {
  public mDiffDay: number  = 0;
  public mDiffHour: number = 0;
  public mDiffMinute: number = 0;
  public mDiffSecond: number = 0;
}

// 录屏类型
export enum ERecordType {
  No           = 0, // 无录屏状态
  User         = 1, // 用户录屏
  Battle       = 2, // 自动录屏
  Comic        = 3, // 条漫录屏
}

// 推广类型
export enum EPromoteType {
  One           = 1, // 只显示一个待领取钻石
  More          = 2, // 显示多个待领取钻石
}

export enum EAuthType {
  Rank          = 1, // 排行榜拉起授权
  Invite        = 2, // 邀请列表拉起授权
}

// 充值礼包
export enum EGiftType {
  One           = 1, // 一元礼包
  Pet           = 2, // 宠物礼包
  Subscribe     = 51,  // 订阅
  InfiniteVigor = 12, // 无限体力
  MonthCard     = 13, // 月卡
}

// 充值礼包
export enum EGiftBagType {
  Skill           = 1, // 技能礼包
  Magic           = 2, // 战利品礼包
}

// 奖励类型
export enum EGainType {
  Wealth           = "wealth", // 财富类
  Pet              = "pet",    // 宠物
}

// 互推显示类型
export enum EMutualType {
  Top           = 1, // 顶部
  Bottom        = 2, // 底部
  LeftRight     = 3, // 左右
  One           = 4, // 显示一个
  List          = 5, // 列表
}

// PK对手类型
export enum EPkEnemyType {
  Player       = 0, // 玩家
  Robot        = 1, // npc
}

// PK结果
export enum EPkResult {
  Win         = 1, // 成功
  Fail        = 2, // 失败
}

// PK结果对方排名有没有发生变化
export enum EPkResultInfo {
  NoChange         = 0, // 未发生变化
  Change           = 1, // 发生了变化
}

// 奖励类型
export enum ESkinGetType {
  Free           = "free",      // 免费
  Invite         = "invite",    // 邀请
  Recharge       = "recharge",  // 充值         
}

// 头像解锁状态
export enum ERoleHeadStatus {
  Active     = 1, // 激活
  Unlock     = 2, // 解锁
}

export interface IFlyData {
  node: cc.Node;      // 执行飞动作的节点
  startPos: cc.Vec2;  // 飞的起始位置
  endPos?: cc.Vec2;   // 飞的终点位置
  duration: number;   // 飞行时间
  callFun?: Function; // 飞行结束执行方法
  endType?: EMenuType; // 飞行终点类型
}

export enum EPanelToId {
  Skill      = 1, // 武馆
  Gym        = 2, // 健身房
  Zen        = 3, // 禅院
  Lottery    = 4, // 贩卖机
  Talent     = 5, // 天赋
  Gift       = 6, // 充值
  Pet        = 7, // 宠物
  Illustrate = 8, // 图鉴
  Weapon     = 9, // 武器店
  Pk         = 10, // Pk
  Achievement= 11, // 成就
  Bar        = 12, // 酒吧
  Recharge   = 13, // 钻石兑换
  Chapter    = 14, // 章节

  ChangeSkin  = 110, // 换肤
}

// 订阅状态
export enum ESubscribeStatus {
  UnSubscribe      = 0, // 未定
  Subscribe        = 1, // 已定
}

// 无线体力购买状态
export enum EInfiniteVigorStatus {
  UnInfiniteVigor      = 0, // 未定
  InfiniteVigor        = 1, // 已定
}

// 限时礼包类型
export enum EPackType {
  Skill      = 1, // 技能
  Magic      = 2, // 战利品
}

// 累计充值奖励领取状态  0未完成1已完成（待领奖）2已领奖
export enum EPayAchieveStatus {
  UnFinish        = 0, // 未完成
  UnReward        = 1, // 已完成未领奖
  Reward          = 2, // 已领奖
}

// 皮肤解锁状态
export enum ESkinStatus {
  Lock          = 0, // 未解锁
  UnLock        = 1, // 已解锁
}

// 奖励类型
export enum ERewardType {
  Wealth          = "wealth", // 未解锁
  Skill           = "skill", // 已解锁
}

// 战利品不足时显示
export enum EMagicNotEnough {
  BagPack          = 1, // 限时礼包
  Original         = 2, // 原逻辑
}

// 挑战id
export enum EChallengeType {
  Challenge1          = 1, // 消灭猴猴
  Challenge2          = 2, // 格挡训练
  Challenge3          = 3, // 求生之路
}

// 排名
export enum EPkRank {
  First         = 1, // 第一名
  Second        = 2, // 第二名
  Third         = 3, // 第三名
  Fourth        = 4, // 第四名
  Fifth         = 5, // 第五
}

// Pk记录的胜利失败
export enum EPkRecordResult {
  Fail         = 1, // 我自己失败
  Win          = 2,  // 我自己胜利
}


















