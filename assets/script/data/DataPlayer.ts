import { PPlayer } from "../proto/ProtoType";

// 玩家的数据
export default class DataPlayer {
  public static get INSTANCE(): DataPlayer {
    if (!DataPlayer.singleInstace) {
      DataPlayer.singleInstace = new DataPlayer();
    }
    return DataPlayer.singleInstace;
  }
  private static singleInstace: DataPlayer;

  // 玩家id
  private mNumID: number = 0;

  // 玩家id
  private mStrName: string = "";

  private mNumLvl: number = 0;

  private mNumSex: number = 0;

  // 玩家形象id
  private mNumFigure: number = 0;

  // 玩家头像地址
  private mStrHeadURL: string = "";

  // 体力值
  private mNumVigor: number = 0;

  // 金币
  private mNumMoney: number = null;

  // 钻石
  private mNumGem: number = null;

  // 经验值
  private mNumExperience: number = 0;


  public constructor() {
  }

  // 玩家id
  public set PlayerId(id: number) {
    this.mNumID = id;
  }
  public get PlayerId(): number {
    return this.mNumID;
  }

  // 玩家id
  public set PlayerLvl(lvl: number) {
    this.mNumLvl = lvl;
  }
  public get PlayerLvl(): number {
    return this.mNumLvl;
  }

  // 玩家id
  public set PlayerSex(sex: number) {
    this.mNumSex = sex;
  }
  public get PlayerSex(): number {
    return this.mNumSex;
  }

  // 玩家名字
  public set PlayerName(name: string) {
    this.mStrName = name;
  }
  public get PlayerName(): string {
    return this.mStrName;
  }

  // 玩家形象id
  public set PlayerFigure(figureId: number) {
    this.mNumFigure = figureId;
  }
  public get PlayerFigure(): number {
    return this.mNumFigure;
  }

  // 玩家头像路径
  public set PlayerHead(file: string) {
    this.mStrHeadURL = file;
  }
  public get PlayerHead(): string {
    return this.mStrHeadURL;
  }

  // 设置玩家数据
  public setPlayersInfo(data: PPlayer) {
    this.mNumID = data.id;
    this.mStrName = data.name;
    this.mNumLvl = data.lvl;
    this.mNumSex = data.sex;
  }

  // 设置用户体力
  public set Vigor(pNumVigor: number) {
    this.mNumVigor = pNumVigor;
  }

  public get Vigor(): number {
    return this.mNumVigor;
  }

  // 设置用户钱
  public set Money(pNumMoney: number) {
    this.mNumMoney = pNumMoney;
  }

  public get Money(): number {
    return this.mNumMoney;
  }

  // 设置用户钻石
  public set Gem(pNumGem: number) {
    this.mNumGem = pNumGem;
  }

  public get Gem(): number {
    return this.mNumGem;
  }

  // 设置用户经验
  public set Experience(pNumExperience: number) {
    this.mNumExperience = pNumExperience;
  }

  public get Experience(): number {
    return this.mNumExperience;
  }
}
