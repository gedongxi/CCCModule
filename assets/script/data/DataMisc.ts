import { PCounter } from "../proto/ProtoType";

// 杂项
interface IId2Counter {
  [id: number]: PCounter;
}


export default class DataMisc {
  // 获取单例
  public static get INSTANCE(): DataMisc {
    if (!DataMisc.singleInstace) {
      DataMisc.singleInstace = new DataMisc();
    }
    return DataMisc.singleInstace;
  }
  private static singleInstace: DataMisc;

  // 剩余砸金蛋次数
  private mNumGoldEggCount: number = 0;

  // 计数器
  private mArrCounter: PCounter[] = [];
  private mObjCounter: IId2Counter = {};
  
  public constructor() {
    this.mArrCounter = [];
    this.mObjCounter = {};
  }

  // 砸金蛋次数
  public setGoldEggCount(count: number) {
    this.mNumGoldEggCount = count;
  }
  public getGoldEggeCount() {
    return this.mNumGoldEggCount;
  }

  // 设置计数器
  public setCounter(pArrCounter: PCounter[]) {
    this.mArrCounter = pArrCounter;
    pArrCounter.forEach((elem) => {
      this.mObjCounter[elem.id] = elem;
    });
  }

  // 计数器更新
  public updateCounter(pArrCounter: PCounter[]) {
    pArrCounter.forEach((elem) => {
      this.mObjCounter[elem.id].count = elem.count;
    });
  }

  // 获取计数器
  public getCounter(pNumId: number): any {
    if (pNumId) {
      return this.mObjCounter[pNumId];
    }
    return this.mArrCounter;
  }
}
