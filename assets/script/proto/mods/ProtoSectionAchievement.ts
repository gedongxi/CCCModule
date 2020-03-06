// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class AchievementListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 7681;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AchievementAwardC2S implements IProtoMsgC2S {

  // 1 正常单倍领奖 3 表示三倍领奖
  public type: Uint8;
  // 成就Id
  public id: Uint32;
  // 成就阶段
  public lvl: Uint32;
  private MSG_ID: Uint16 = 7683;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUnsignedInt(this.id);
    byteArray.writeUnsignedInt(this.lvl);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AchievementWatchedAdC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 7684;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AchievementRewardAdC2S implements IProtoMsgC2S {

  // 广告次数成就id
  public id: Uint32;
  private MSG_ID: Uint16 = 7686;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class AchievementListS2C {
  public static EVENT_NAME: string = "AchievementListS2C";

  public static decode(byteArray: ByteArray): AchievementListS2C {
    const obj = new AchievementListS2C();
    let len;
    obj.achievement = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.achievement.push(ProtoType.PAchievement.decode(byteArray));
    }
    return obj;
  }

  // 成就列表
  public achievement: ProtoType.PAchievement[];
}
export class AchievementUpdateS2C {
  public static EVENT_NAME: string = "AchievementUpdateS2C";

  public static decode(byteArray: ByteArray): AchievementUpdateS2C {
    const obj = new AchievementUpdateS2C();
    let len;
    obj.achievement = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.achievement.push(ProtoType.PAchievement.decode(byteArray));
    }
    return obj;
  }

  // 成就列表
  public achievement: ProtoType.PAchievement[];
}
export class AchievementAwardS2C {
  public static EVENT_NAME: string = "AchievementAwardS2C";

  public static decode(byteArray: ByteArray): AchievementAwardS2C {
    const obj = new AchievementAwardS2C();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedInt();
    return obj;
  }

  // 成就Id
  public id: Uint32;
  // 成就阶段
  public lvl: Uint32;
}
export class AchievementWatchedAdS2C {
  public static EVENT_NAME: string = "AchievementWatchedAdS2C";

  public static decode(byteArray: ByteArray): AchievementWatchedAdS2C {
    const obj = new AchievementWatchedAdS2C();
    obj.times = byteArray.readUnsignedInt();
    return obj;
  }

  // 广告次数
  public times: Uint32;
}
export class AchievementTimesAdS2C {
  public static EVENT_NAME: string = "AchievementTimesAdS2C";

  public static decode(byteArray: ByteArray): AchievementTimesAdS2C {
    const obj = new AchievementTimesAdS2C();
    let len;
    obj.times = byteArray.readUnsignedInt();
    obj.adAchievement = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.adAchievement.push(byteArray.readUnsignedInt());
    }
    return obj;
  }

  // 广告次数
  public times: Uint32;
  // 观看广告成就列表
  public adAchievement: Uint32[];
}
export class AchievementRewardAdS2C {
  public static EVENT_NAME: string = "AchievementRewardAdS2C";

  public static decode(byteArray: ByteArray): AchievementRewardAdS2C {
    const obj = new AchievementRewardAdS2C();
    obj.id = byteArray.readUnsignedInt();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 广告次数成就id
  public id: Uint32;
  // 奖励 gold:100,gem:10,1:2,skin:10
  public reward: string;
}
