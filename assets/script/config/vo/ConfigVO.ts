import BaseConfig from "../BaseConfig";
export interface IServerListVO {
  id: number;
  platform: number;
  name: string;
  ip: string;
  opentime: string;
  opStage: number;
  default: number;
  port: number;
  downgradePort: number;
  security: boolean;
  path: string;
  group: number;
  httpUrl: string;
}
export interface IConfVO {
  mod: string;
  key: string;
  value: any;
}
export interface ISkillSystemVO {
  id: number;
  lvl: number;
  nameId: number;
  descId: number;
  type: number;
  color: number;
  unlockLvl: number;
  weapon: number;
  upDescId: number;
  effect: any;
  effectDescId: number;
  dir: string;
  res: string;
  medalDir: string;
  medalRes: string;
  costAnger: number;
}
export interface ISkillSlotVO {
  id: number;
  need: number;
}
export interface ISkillLvlVO {
  lvl: number;
  needNum: number;
  fullPrice: number;
  discount: number;
}
export interface ISkillVO {
  id: number;
  nameId: number;
  sloganId: any;
  sloganRate: number;
  skillType: number;
  template: string;
  costAnger: number;
  prob: number;
  cooldown: number;
  time: number;
  triggerType: number;
  maxRange: number;
  param: any;
}
export interface IPropertyVO {
  id: number;
  nameId: number;
  descId: number;
  type: number;
}
export interface IBarVO {
  id: number;
  nameId: number;
  descId: number;
  property: any;
  effectDescId: number;
  price: number;
  survive: number;
  icon: string;
}
export interface IAreaVO {
  id: number;
  nameId: number;
  unlockDescId: number;
  descIcon: string;
  mapNum: number;
  property: any;
  mapList: any;
  descId: number;
  pic: string;
}
export interface IStageEventVO {
  eventId: number;
  nameId: number;
  victimNameId: number;
  victimIcon: string;
  descId: number;
  siteId: number;
  cartoonId: number;
  bgm: string;
  monsterId: any;
  battleBg: string;
  newNameId: number;
  newDescId: number;
  haveCartoon: number;
  vitimIcon1: string;
  battleBg1: string;
}
export interface IStageVO {
  id: number;
  eventId: number;
  area: number;
  nameId: number;
  costVigor: number;
  reward: any;
  plotRate: number;
  skillDrop1: number;
  skillDrop2: number;
  stageLvl: number;
  tips: any;
  shareReward2: any;
  boss: number;
  coordinate: any;
  bossWealth: any;
  bossSkill: number;
  freeCount: number;
}
export interface ISkillTemplateVO {
  id: string;
  actions: any;
}
export interface ISkillCondVO {
  id: string;
  condition: any;
}
export interface IPropertyPracticeVO {
  id: number;
  lvl: number;
  value: number;
  price: number;
}
export interface ILvlVO {
  lvl: number;
  exp: number;
  reward: any;
  titleId: number;
  gold: number;
  addAtkByAd: number;
  winAward: any;
  failAward: any;
  titleId1: number;
}
export interface IWeaponVO {
  id: number;
  nameId: number;
  type: number;
  display: number;
  lockLvl: number;
  price: number;
  icon: string;
  descId: number;
  property: any;
  useObj: number;
  lockDay: number;
}
export interface ISkillMissileVO {
  id: string;
  missileType: number;
  time: number;
  prop: any;
  bounding: any;
  hitAnim: string;
  steadyPercent: number;
  push: number;
  rise: number;
  hitCount: number;
  hitInterval: number;
  rebound: number;
  layTarget: number;
  template: string;
  pause: string;
  scale: number;
  blockType: number;
}
export interface ISignVO {
  day: number;
  gem: number;
}
export interface IOpenVO {
  id: number;
  nameId: number;
  unlockLvl: number;
  res: string;
  icon: string;
}
export interface IActivityChallengeVO {
  id: number;
  nameId: number;
  icon: string;
  unlockLvl: number;
  costVigor: number;
  descId: number;
  rewardDescId: number;
  iconEnemy: string;
}
export interface IActivityVO {
  type: number;
  times: number;
  price: number;
}
export interface IMonsterAttrVO {
  lvl: number;
  attr: any;
}
export interface IMonsterVO {
  id: number;
  dialogId: number;
  battleIcon: string;
  enemyNameId: number;
  hpPercent: number;
  attackPercent: number;
  fixSkill: any;
  randomNum: any;
  randomSkill: any;
  randomWeapon: any;
  monsterLvl: number;
  skillLvl: number;
  activityCond: any;
  showIcon: string;
  buff: any;
  showIcon1: string;
}
export interface IAchievementVO {
  id: number;
  lvl: number;
  progress: number;
  descId: number;
  rewardGem: number;
  icon: string;
  isShow: number;
}
export interface ICartoonVO {
  id: number;
  res: string;
  method: any;
  preloadAudio: any;
}
export interface IRoleNameVO {
  id: number;
  sex: number;
  nameId: number;
}
export interface IRoleHeadVO {
  id: number;
  res: string;
  cost: any;
  skin: number;
  video: number;
  method: any;
}
export interface IRoleFirstNameVO {
  id: number;
  firstNameId: number;
}
export interface IGuideVO {
  id: number;
  triggerType: number;
  value: number;
  active: number;
}
export interface IGuideStepVO {
  id: number;
  stage: number;
  backStage: number;
  type: number;
  areaData: any;
  tipsData: any;
  finger: any;
  delay: number;
}
export interface IPkAccentVO {
  id: string;
  accent: any;
  rate: number;
}
export interface IHitSoundVO {
  id: string;
  sound: any;
}
export interface IShareVO {
  id: number;
  count: number;
  reward: any;
  res: any;
}
export interface IChallengeWoodVO {
  id: number;
  group: number;
  lvl: number;
  posx: string;
  idle: number;
}
export interface IChallengeBlockVO {
  id: number;
  total: number;
  badCount: any;
  missileIdle: any;
  groupIdle: any;
  missile: any;
}
export interface IChallengeInfiniteVO {
  id: number;
  stageTime: number;
  maxNum: number;
  lvModify: any;
  monsterIdle: any;
  monsterList: any;
}
export interface IHeroVO {
  id: number;
  heroLvl: number;
  figure: string;
  battleIcon: string;
  hpPercent: number;
  attackPercent: number;
  fixSkill: any;
  skillLvl: number;
  buff: any;
  nameId: number;
  lvlCost: number;
}
export interface IAccentVO {
  id: number;
  langId: number;
  res: string;
}
export interface ISignNewVO {
  day: number;
  type: number;
  wealth: any;
  property: any;
}
export interface IInviteVO {
  num: number;
  wealth: any;
  property: any;
}
export interface IServerChannelGroupVO {
  channelId: number;
  serverGroup: number;
  content: string;
}
export interface ITreasureVO {
  id: number;
  times: number;
  base: number;
  inc: number;
  max: number;
}
export interface IPaymentVO {
  plan: number;
  id: number;
  nameId: number;
  descId: number;
  thirdId: string;
  gainType: any;
  wealth: any;
  pet: any;
  rebate: number;
  rebate2: number;
  price: number;
  value: number;
  monthtype: number;
  icon: string;
  type: number;
}
export interface IPaymentChannelVO {
  channel: number;
  plan: number;
  rate: number;
  currencyName: string;
}
export interface ITalentVO {
  id: number;
  lvl: number;
  nameId: number;
  property: any;
  icon: string;
  color: string;
}
export interface ITalentTimesVO {
  times: number;
  cost: any;
}
export interface IStageOpenVO {
  stageId: number;
  text1Id: number;
  text2Id: number;
  icon: string;
  res: string;
}
export interface ISkinVO {
  id: number;
  nameId: number;
  headIcon: string;
  vsIcon: string;
  spineHead: string;
  openState: number;
  getChannel: string;
  headId: number;
}
export interface IOpenDescVO {
  id: number;
  nameId: number;
  res: string;
  icon: string;
  unlockStage: number;
  descId: number;
}
export interface IRobotOpponentVO {
  rankBottom: number;
  rankTop: number;
  monsterLvl: any;
  attrLvl: any;
  hpPercent: number;
  atkPercent: number;
  fixSkill: any;
  randomSkill: any;
  randomSkillNum: number;
  skillLvl: any;
  pet: any;
  randomWeapon: any;
  steady: number;
}
export interface IRankAwardVO {
  rankBottom: number;
  rankTop: number;
  award: any;
  treasure: any;
}
export interface IRobotBaseVO {
  id: number;
  nameId: number;
  nameCn: string;
  headId: number;
  skinId: number;
  province: string;
  city: string;
  district: string;
  street: string;
}
export interface IRankHistoryVO {
  rankBottom: number;
  rankTop: number;
  upBase: number;
  award: any;
}
export interface IRankAreaVO {
  rankBottom: number;
  rankTop: number;
  area: number;
  setNum: number;
  showRank: number;
  areaDesc: string;
  rankName: string;
  icon: string;
}
export interface IBattleFailVO {
  id: number;
  order: number;
  red: number;
  iconDir: string;
  iconRes: string;
  toPanel: number;
  descId: number;
  tips: any;
  stageId: number;
  rule: string;
}
export interface IVideoAdVO {
  id: number;
  channelId: number;
  slotId: number;
}
export interface IGiftBagVO {
  id: number;
  surviveTime: number;
  type: number;
  awardNum: number;
  price: number;
  icon: string;
  res: string;
}
export interface IPaymentAchievementVO {
  id: number;
  totalFee: number;
  wealthReward: any;
  skillNum: number;
  specialReward: any;
  slogan: string;
  sloganRes: string;
  icon: string;
  iconRes: string;
  packageName: string;
}
export interface IChapterVO {
  id: number;
  stageIds: any;
  bgImg: string;
}
export interface IRewardAdVO {
  id: number;
  wealth: any;
  skill: number;
  skin: any;
}

export let ServerList: BaseConfig<IServerListVO> = new BaseConfig<IServerListVO>("ServerList");
export let Conf: BaseConfig<IConfVO> = new BaseConfig<IConfVO>("Conf");
export let SkillSystem: BaseConfig<ISkillSystemVO> = new BaseConfig<ISkillSystemVO>("SkillSystem");
export let SkillSlot: BaseConfig<ISkillSlotVO> = new BaseConfig<ISkillSlotVO>("SkillSlot");
export let SkillLvl: BaseConfig<ISkillLvlVO> = new BaseConfig<ISkillLvlVO>("SkillLvl");
export let Skill: BaseConfig<ISkillVO> = new BaseConfig<ISkillVO>("Skill");
export let Property: BaseConfig<IPropertyVO> = new BaseConfig<IPropertyVO>("Property");
export let Bar: BaseConfig<IBarVO> = new BaseConfig<IBarVO>("Bar");
export let Area: BaseConfig<IAreaVO> = new BaseConfig<IAreaVO>("Area");
export let StageEvent: BaseConfig<IStageEventVO> = new BaseConfig<IStageEventVO>("StageEvent");
export let Stage: BaseConfig<IStageVO> = new BaseConfig<IStageVO>("Stage");
export let SkillTemplate: BaseConfig<ISkillTemplateVO> = new BaseConfig<ISkillTemplateVO>("SkillTemplate");
export let SkillCond: BaseConfig<ISkillCondVO> = new BaseConfig<ISkillCondVO>("SkillCond");
export let PropertyPractice: BaseConfig<IPropertyPracticeVO> = new BaseConfig<IPropertyPracticeVO>("PropertyPractice");
export let Lvl: BaseConfig<ILvlVO> = new BaseConfig<ILvlVO>("Lvl");
export let Weapon: BaseConfig<IWeaponVO> = new BaseConfig<IWeaponVO>("Weapon");
export let SkillMissile: BaseConfig<ISkillMissileVO> = new BaseConfig<ISkillMissileVO>("SkillMissile");
export let Sign: BaseConfig<ISignVO> = new BaseConfig<ISignVO>("Sign");
export let Open: BaseConfig<IOpenVO> = new BaseConfig<IOpenVO>("Open");
export let ActivityChallenge: BaseConfig<IActivityChallengeVO> = new BaseConfig<IActivityChallengeVO>("ActivityChallenge");
export let Activity: BaseConfig<IActivityVO> = new BaseConfig<IActivityVO>("Activity");
export let MonsterAttr: BaseConfig<IMonsterAttrVO> = new BaseConfig<IMonsterAttrVO>("MonsterAttr");
export let Monster: BaseConfig<IMonsterVO> = new BaseConfig<IMonsterVO>("Monster");
export let Achievement: BaseConfig<IAchievementVO> = new BaseConfig<IAchievementVO>("Achievement");
export let Cartoon: BaseConfig<ICartoonVO> = new BaseConfig<ICartoonVO>("Cartoon");
export let RoleName: BaseConfig<IRoleNameVO> = new BaseConfig<IRoleNameVO>("RoleName");
export let RoleHead: BaseConfig<IRoleHeadVO> = new BaseConfig<IRoleHeadVO>("RoleHead");
export let RoleFirstName: BaseConfig<IRoleFirstNameVO> = new BaseConfig<IRoleFirstNameVO>("RoleFirstName");
export let Guide: BaseConfig<IGuideVO> = new BaseConfig<IGuideVO>("Guide");
export let GuideStep: BaseConfig<IGuideStepVO> = new BaseConfig<IGuideStepVO>("GuideStep");
export let PkAccent: BaseConfig<IPkAccentVO> = new BaseConfig<IPkAccentVO>("PkAccent");
export let HitSound: BaseConfig<IHitSoundVO> = new BaseConfig<IHitSoundVO>("HitSound");
export let Share: BaseConfig<IShareVO> = new BaseConfig<IShareVO>("Share");
export let ChallengeWood: BaseConfig<IChallengeWoodVO> = new BaseConfig<IChallengeWoodVO>("ChallengeWood");
export let ChallengeBlock: BaseConfig<IChallengeBlockVO> = new BaseConfig<IChallengeBlockVO>("ChallengeBlock");
export let ChallengeInfinite: BaseConfig<IChallengeInfiniteVO> = new BaseConfig<IChallengeInfiniteVO>("ChallengeInfinite");
export let Hero: BaseConfig<IHeroVO> = new BaseConfig<IHeroVO>("Hero");
export let Accent: BaseConfig<IAccentVO> = new BaseConfig<IAccentVO>("Accent");
export let SignNew: BaseConfig<ISignNewVO> = new BaseConfig<ISignNewVO>("SignNew");
export let Invite: BaseConfig<IInviteVO> = new BaseConfig<IInviteVO>("Invite");
export let ServerChannelGroup: BaseConfig<IServerChannelGroupVO> = new BaseConfig<IServerChannelGroupVO>("ServerChannelGroup");
export let Treasure: BaseConfig<ITreasureVO> = new BaseConfig<ITreasureVO>("Treasure");
export let Payment: BaseConfig<IPaymentVO> = new BaseConfig<IPaymentVO>("Payment");
export let PaymentChannel: BaseConfig<IPaymentChannelVO> = new BaseConfig<IPaymentChannelVO>("PaymentChannel");
export let Talent: BaseConfig<ITalentVO> = new BaseConfig<ITalentVO>("Talent");
export let TalentTimes: BaseConfig<ITalentTimesVO> = new BaseConfig<ITalentTimesVO>("TalentTimes");
export let StageOpen: BaseConfig<IStageOpenVO> = new BaseConfig<IStageOpenVO>("StageOpen");
export let Skin: BaseConfig<ISkinVO> = new BaseConfig<ISkinVO>("Skin");
export let OpenDesc: BaseConfig<IOpenDescVO> = new BaseConfig<IOpenDescVO>("OpenDesc");
export let RobotOpponent: BaseConfig<IRobotOpponentVO> = new BaseConfig<IRobotOpponentVO>("RobotOpponent");
export let RankAward: BaseConfig<IRankAwardVO> = new BaseConfig<IRankAwardVO>("RankAward");
export let RobotBase: BaseConfig<IRobotBaseVO> = new BaseConfig<IRobotBaseVO>("RobotBase");
export let RankHistory: BaseConfig<IRankHistoryVO> = new BaseConfig<IRankHistoryVO>("RankHistory");
export let RankArea: BaseConfig<IRankAreaVO> = new BaseConfig<IRankAreaVO>("RankArea");
export let BattleFail: BaseConfig<IBattleFailVO> = new BaseConfig<IBattleFailVO>("BattleFail");
export let VideoAd: BaseConfig<IVideoAdVO> = new BaseConfig<IVideoAdVO>("VideoAd");
export let GiftBag: BaseConfig<IGiftBagVO> = new BaseConfig<IGiftBagVO>("GiftBag");
export let PaymentAchievement: BaseConfig<IPaymentAchievementVO> = new BaseConfig<IPaymentAchievementVO>("PaymentAchievement");
export let Chapter: BaseConfig<IChapterVO> = new BaseConfig<IChapterVO>("Chapter");
export let RewardAd: BaseConfig<IRewardAdVO> = new BaseConfig<IRewardAdVO>("RewardAd");

