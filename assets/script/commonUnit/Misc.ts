import I18N from "../i18n/I18N";
import { DiffTime, DesignResolutionWidth, DesignResolutionHeight } from "../scene/base/BaseDefine";
import GameCtl from "../scene/GameCtl";

export default class Misc {
  public static myLog(message?: any, ...optionalParams: any[]) {
    if (Partner.PARTNER_NAME === "Dev" || Partner.DEBUG_INFO) {
      console.log(message, ...optionalParams); 
    }
  }

  public static myWarn(message?: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams);
  }

  public static myError(message?: any, ...optionalParams: any[]) {

    // let text = message || "";
    // optionalParams.forEach((param) => {
    //   text += param;
    // });

    // try {
    //   throw new Error(text);
    // } catch (err) {
    //   text += "\n" + err.stack;
    //   alert(text);
    // }


    console.error(message, ...optionalParams);
  }

  // 获取整形随机数
  public static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 获取随机bool
  public static getRandomBoolean() {
    return !!(Misc.getRandomInt(0, 1));
  }

  // 根据name，递归查询对应节点
  public static seekNodeByName(parent: cc.Node, name: string): cc.Node {
    // Misc.myLog("name", parent.name);
    if (!parent) {
      Misc.myError("父节点为null");
      return null;
    }

    if (parent.name === name) {
      return parent;
    }

    if (parent.childrenCount === 0) {
      return null;
    }

    for (let i = 0; i < parent.childrenCount; i++) {
      const nodeResult = Misc.seekNodeByName(parent.children[i], name);
      if (nodeResult) {
        return nodeResult;
      }
    }
  }

  // 从n个数中获取m个不同的随机数 从beginValue 到 endValue中去m个不同的随机值
  public static getRandomValueArray(beginValue: number, endValue: number, m: number): number[] {
    if (m <= 0) {
      return [];
    }

    if (endValue - beginValue + 1 < m) {
      return [];
    }

    const result: number[] = [];

    for (let i = beginValue; i <= endValue; i++) {
      result.push(i);
    }

    result.sort( () => {
      return 0.5 - Math.random();
    });

    result.length = m;
    
    return result;
  }

  // 获取时间戳
  public static getCurrentDate(): number {
    return Date.now();
  }

  // 根据时间戳转换为显示格式
  public static getFormatDate1(inputTime: number, format?: string): string {
    const date = new Date(inputTime);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const strM = m < 10 ? ("0" + m) : ("" + m);
    const d = date.getDate();
    const strD = d < 10 ? ("0" + d) : ("" + d);
    const h = date.getHours();
    const strH = h < 10 ? ("0" + h) : ("" + h);
    const min = date.getMinutes();
    const strMin = min < 10 ? ("0" + min) : ("" + min);
    const sec = date.getSeconds();
    const strSec = sec < 10 ? ("0" + sec) : ("" + sec);
    if (!!format && format === "MDH") {
      return strM + "月" + strD + "日" + " " + strH + "点";
    } else if (!!format && format === "YMD") {
      // 1999-01-12
      return y + "-" + strM + "-" + strD;
    }
    return y + "-" + strM + "-" + strD + " " + strH + ":" + strMin + ":" + strSec;
  }

  // 00:00格式 (大于60分钟 00:00:00格式)
  public static getFormatDate2(tNumCD) {
    const tNumHour = Math.floor(tNumCD / 3600) < 10 ? "0" + Math.floor(tNumCD / 3600) : "" + Math.floor(tNumCD / 3600);
    const tNumMin = Math.floor(tNumCD / 60) - Math.floor(tNumCD / 3600) * 60 < 10 ?
      "0" + Math.floor(tNumCD / 60) % 60 : "" + Math.floor(tNumCD / 60) % 60;
    const tNumSecond = (tNumCD % 60) < 10 ? "0" + tNumCD % 60 : "" + tNumCD % 60;
    if (tNumHour !== "00") {
      return tNumHour + ":" + tNumMin + ":" + tNumSecond;
    }
    return tNumMin + ":" + tNumSecond;
  }

  // 00:00:00格式
  public static getFormatDate3(tNumCD: number, pIsShowSec: boolean = true) {
    const tNumHour = Math.floor(tNumCD / 3600) < 10 ? "0" + Math.floor(tNumCD / 3600) : "" + Math.floor(tNumCD / 3600);
    const tNewTime = tNumCD % 3600;
    const tNumMin = Math.floor(tNewTime / 60) < 10 ? "0" + Math.floor(tNewTime / 60) : "" + Math.floor(tNewTime / 60);
    const tNumSecond = (tNewTime % 60) < 10 ? "0" + tNewTime % 60 : "" + tNewTime % 60;
    if (pIsShowSec) {
      return tNumHour + ":" + tNumMin + ":" + tNumSecond;
    } else {
      return tNumHour + ":" + tNumMin;
    }
  }

  // 1小时1分30秒格式 (大于60分钟 00:00:00格式)
  public static getFormatDate4(tNumCD) {
    const tNumHour = Math.floor(tNumCD / 3600);
    const tNumMin = Math.floor(tNumCD / 60) - Math.floor(tNumCD / 3600) * 60;
    const tNumSecond = (tNumCD % 60);
    if (tNumHour !== 0) {
      return tNumHour + "小时" + tNumMin + "分" + tNumSecond + "秒";
    }
    return tNumMin + "分" + tNumSecond + "秒";
  }

  // 将时间戳转为日期 xx年xx月xx日 00:00:00
  public static formatDate(pNumTime: number) {
    const time = new Date(pNumTime * 1000);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const mm = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const s = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    return y + "年" + m + "月" + d + "日" + h + ":" + mm + ":" + s;
  }

  // 将时间戳转为日期 xx-xx-xx 00:00
  public static formatDate1(pNumTime: number) {
    const time = new Date(pNumTime * 1000);
    const y = time.getFullYear();
    const m = time.getMonth() + 1;
    const d = time.getDate();
    const h = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const mm = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const s = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    return y + "-" + m + "-" + d + " " + h + ":" + mm;
  }

  // 过去时间戳与当前时间戳 时间差(天，时，分)
  public static getCurrentDateDifference(someTime: number): DiffTime {
    const nowTime = Math.ceil(Misc.getCurrentDate() / 1000); // 10位 （到秒）
    const diffSecond = nowTime - someTime;
    const diffMinute = Math.floor(diffSecond / 60);
    const diffHour = Math.floor(diffSecond / (60 * 60));
    const diffDay = Math.floor(diffSecond / (60 * 60 * 24));
    const diffTime: DiffTime = new DiffTime();
    diffTime.mDiffDay = diffDay;
    diffTime.mDiffHour = diffHour;
    diffTime.mDiffMinute = diffMinute;
    diffTime.mDiffSecond = diffSecond;
    return diffTime;
  }

  // 离线状态下计算离线时间 && 私聊列表最后一条消息时间
  public static calOffOnlineTime(pNumTime: number): string {
    const tDeltaTime: DiffTime = Misc.getCurrentDateDifference(pNumTime);
    if (tDeltaTime.mDiffSecond > -60 && tDeltaTime.mDiffSecond < 60) {
      return I18N.getUIText("diff_time_justnow");
    } else if (tDeltaTime.mDiffSecond >= 60 && tDeltaTime.mDiffHour < 1) {
      const tMinute: number = parseInt(tDeltaTime.mDiffSecond / 60 + "", 10);
      return Misc.stringReplaceById("diff_time_minute", tMinute);
    } else if (tDeltaTime.mDiffHour >= 1 && tDeltaTime.mDiffDay < 1) {
      const tHour: number = tDeltaTime.mDiffHour;
      return Misc.stringReplaceById("diff_time_hour", tHour);
    } else if (tDeltaTime.mDiffDay >= 1 && tDeltaTime.mDiffDay < 14) {
      const tDay: number = tDeltaTime.mDiffDay;
      return Misc.stringReplaceById("diff_time_day", tDay);
    } else if (tDeltaTime.mDiffDay >= 14) {
      return Misc.stringReplaceById("diff_time_before_someday", 14);
    } else {
      return I18N.getUIText("diff_off_line");
    }
  }

  // 深复制
  public static deepClone(obj): any {
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === "object") {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 判断ojb子元素是否为对象，如果是，递归复制
          if (obj[key] && typeof obj[key] === "object") {
            objClone[key] = Misc.deepClone(obj[key]);
          } else {
            // 如果不是，简单复制
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }

  // 只替换换行符
  public static stringReplaceNewline(str: string): string {
    return str.replace(/{n}/g, "\n");
  }

  // 数组文本替换text中变量
  public static stringReplaceByArray(text: string, replaceArray): string {
    text = Misc.stringReplaceNewline(text);
    const size = replaceArray.length;
    for (let i = 0; i < size; i++) {
      text = text.replace("{" + i + "}", replaceArray[i]);
    }

    return text;
  }

  // 替换text中变量
  public static stringReplaceByText(text: string, ...replace): string {
    text = Misc.stringReplaceNewline(text);
    const size = replace.length;
    for (let i = 0; i < size; i++) {
      text = text.replace("{" + i + "}", replace[i]);
    }

    return text;
  }

  // 根据textId替换变量
  public static stringReplaceById(id: string, ...replace): string {
    const text: string = I18N.getUIText(id);
    return Misc.stringReplaceByText(text, ...replace);
  }

  // 数组去重
  public static unique(arr: any[]) {
    const hash: any[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === i) {
        hash.push(arr[i]);
      }
    }
    return hash;
  }

  // 数组打乱
  public static shuffle(arr: any[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
      const randomIndex: number = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = arr[randomIndex];
      arr[randomIndex] = arr[i];
      arr[i] = itemAtIndex;
    }
    return arr;
  }

  // 点击穿透 （按钮点击事件无法穿透）
  public static clickPenetrate(nodMask: any) {
    nodMask._touchListener.swallowTouches = false;
  }

  // 格式化签名(替换换行为空格)
  public static formatSign(pStrSign: string) {
    const reg: RegExp = new RegExp("\n", "g");
    pStrSign = pStrSign.replace(reg, " ");
    return pStrSign;
  }
  
  // 从数组中随机选择一个
  public static randSelect<T>(items: T[]): T {
    if (!items) {
      return;
    }
    const cnt = items.length;
    const index = Math.floor(cnt * Math.random());
    return items[index];
  }

  // 获取缩放比例
  public static getScale(): number {
    return GameCtl.INSTANCE.ResolutionPolicy === cc.ResolutionPolicy.FIXED_WIDTH ? canvas.width / DesignResolutionWidth : canvas.height / DesignResolutionHeight;
  }

  /**
   * 数字转短显示
   * 1~99999，按照全值显示
   * 100000~999999，902.3K格式来（有1个小数点）
   * 1000000~9999999，2345K格式来（无小数点）
   * 10000000~99999999,10.3M格式来（有1个小数点）
   * 100000000~999999999,234.5M格式来（有1个小数点）
   */
  public static getShortNumber(pNumber: number): string {
    if (pNumber <= 99999) {
      return "" + pNumber;
    } else if (pNumber >= 100000 && pNumber <= 999999) {
      const mod1 = Math.floor(pNumber / 1000);
      const rem = Math.floor(pNumber % 1000);
      const mod2 = Math.floor(rem / 100);
      if (mod2) {
        return "" + mod1 + "." + mod2 + "K";  
      } else {
        return "" + mod1 + "K";
      }  
    } else if (pNumber >= 1000000 && pNumber <= 9999999) {
      const mod1 = Math.floor(pNumber / 1000);
      return "" + mod1 + "K";
    } else if (pNumber >= 10000000) {
      const mod1 = Math.floor(pNumber / 1000000);
      const rem = Math.floor(pNumber % 1000000);
      const mod2 = Math.floor(rem / 100000);
      if (mod2) {
        return "" + mod1 + "." + mod2 + "M";  
      } else {
        return "" + mod1 + "M";
      }
    }

    // if (pNumber <= 999) {
    //   return "" + pNumber;
    // } else {
    //   const mod1 = Math.floor(pNumber / 1000);
    //   const rem = Math.floor(pNumber % 1000);
    //   const mod2 = Math.floor(rem / 100);
    //   if (mod2) {
    //     return "" + mod1 + "." + mod2 + "K";  
    //   } else {
    //     return "" + mod1 + "K";
    //   } 
    // }
  }

  // 数字转中文
  public static digitalToChinese(digit) {
    digit = typeof digit === "number" ? String(digit) : digit;
    const zh = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九", 
                "十", "十一", "十二", "十三", "十四", "十五", "十六", "十七", "十八", "十九", 
                "二十", "二十一"];
    return zh[digit];
  }

  // 防止越界
  public static clamp(value: number, min: number, max: number) {
    return (value > max) ? max : ((value < min) ? min : value);
  }

  // 是否是空对象
  public static isObjectEmpty(obj: any): boolean {
    const tArrKeys = Object.keys(obj);
    if (tArrKeys.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  public static wait(seconds: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, seconds * 1000);
    });
  }

  // 获取今天0点的时间戳
  public static getStartTime() {
    const tDate = new Date();
    tDate.setHours(0);
    tDate.setMinutes(0);
    tDate.setSeconds(0);
    tDate.setMilliseconds(0);
    return tDate.getTime();
  }

  // 是否为原生
  public static isNative() {
    if (cc.sys.isNative && Partner.PARTNER_NAME !== "Oppo") {
      return true;
    } else {
      return false;
    }
  }
}
