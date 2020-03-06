
const defaultLvlGenerator = {
  updateLvlData(template: any, lvl: number) {
    return template;
  },
};

interface ISparseArr<T> {
  [index: number]: T;
}

interface ILvlDataGenerator<T> {
  updateLvlData(template: T, lvl: number): T;
}

// 策划配置数据的泛型类
export default class BaseConfig<T> {
  public isInited: boolean = false;

  private data: ISparseArr<T> = [];
  private extraData: ISparseArr<T> = undefined;
  private lvlGenerator: ILvlDataGenerator<T> = undefined;
  private name: string;
  private clazz: new() => T;

  constructor(name: string) {
    this.name = name;
  }

  public setClass(clazz: any) {
    this.clazz = clazz || function() {};
  }

  public initData(obj: any) {
    if (!obj) {
      return;
    }
    const keys: any[] = obj.key;
    const data: any[] = obj.vals;
    const cols: any[] = obj.cols;
    obj.key = undefined;
    obj.vals = undefined;
    obj.cols = undefined;

    const keyCnt = keys.length;
    const colCnt = cols.length;
    const clazz = this.clazz;

    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      // 计算本条数据的索引
      let key: string = item[keys[0]];
      for (let j = 1; j < keyCnt; j++) {
        key += ("_" + item[keys[j]]);
      }
      // 将数据转换成一个对象实例
      const instance: any = new clazz();
      for (let j = 0; j < colCnt; j++) {
        const colName: string = cols[j] as string;
        instance[colName] = item[j];
      }
      // 如果对应的key已经存在一个值了 就把数据放在一个数组里
      const existedValue = this.data[key];
      if (existedValue) {
        if (Array.prototype === existedValue.__proto__) {
          existedValue.push(instance);
        } else {
          this.data[key] = instance;
        }
      } else {
        this.data[key] = instance;
      }
      this.isInited = true;
    }

    // 其他属性保持在extra里面
    for (const k in obj) {
      if (obj[k] !== undefined) {
        if (!this.extraData) {
          this.extraData = {};
        }
        this.extraData[k] = obj[k];
      }
    }
  }

  public get(...params): T {
    const key = params.join("_");
    return this.data[key] as T;
  }

  public getGroup(...params): T[] {
    const key = params.join("_");
    return this.data[key] as T[];
  }

  public getAll(): ISparseArr<T> {
    return this.data;
  }

  public getList(): T[] {
    let tmp;
    tmp = this.data;
    return tmp;
  }

  // 获取额外数据
  public getExtra(key: string) {
    return this.extraData[key];
  }

  // 设置额外数据
  public setExtra(key: string, value: any) {
    this.extraData[key] = value;
  }

  // 设置等级数据生成器
  public setLvlGenerator(generator: ILvlDataGenerator<T>) {
    this.lvlGenerator = generator;
  }

  // 根据等级获取数据
  public getByLvl(id: number, lvl: number): T {
    const key = id + "_" + lvl;
    let keyValue = this.data[key];
    const generator = this.lvlGenerator || defaultLvlGenerator;
    // 对应等级的数据没有，则去找其他等级的，然后根据生成规则计算出本等级的数值
    if (keyValue === undefined) {
      const originLvl = lvl;
      // 直到找到一个有对应等级的配置的数据
      let tmpKey;
      while (!keyValue && lvl > 0) {
        lvl --;
        tmpKey = id + "_" + lvl;
        keyValue = this.data[tmpKey];
      }
      // 如果找到了其他等级的值，就可以根据设定计算出来了
      if (keyValue) {
        const wantedKeyValue = generator.updateLvlData(keyValue, originLvl);
        this.data[key] = wantedKeyValue;
        keyValue = wantedKeyValue;
      } else {
        this.data[key] = null;
      }
      // 然后再计算一下中间等级数据 下次查找可以快一些
      const midLvl = Math.ceil((originLvl + lvl) / 2);
      if (midLvl !== lvl && midLvl !== originLvl) {
        const midKey = id + "_" + midLvl;
        const midKeyValue = keyValue ? generator.updateLvlData(keyValue, midLvl) : null;
        this.data[midKey] = midKeyValue;
      }
    }
    return keyValue;
  }
}
