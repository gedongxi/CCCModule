// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class MiscGainAwardC2S implements IProtoMsgC2S {

  // 宝箱类型
  public type: Uint8;
  private MSG_ID: Uint16 = 9730;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class MiscModifyCounterC2S implements IProtoMsgC2S {

  // id
  public id: Uint32;
  // 次数
  public count: Uint32;
  private MSG_ID: Uint16 = 9735;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.id);
    byteArray.writeUnsignedInt(this.count);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class MiscGetCounterC2S implements IProtoMsgC2S {

  // id
  public id: Uint32;
  private MSG_ID: Uint16 = 9736;

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
export class MiscEggRewardC2S implements IProtoMsgC2S {

  // 0未领取消耗次数 1领取金币并消耗次数
  public type: Uint8;
  private MSG_ID: Uint16 = 9738;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class MiscTreasureS2C {
  public static EVENT_NAME: string = "MiscTreasureS2C";

  public static decode(byteArray: ByteArray): MiscTreasureS2C {
    const obj = new MiscTreasureS2C();
    let len;
    obj.list = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.list.push(ProtoType.PTreasure.decode(byteArray));
    }
    return obj;
  }

  // 列表
  public list: ProtoType.PTreasure[];
}
export class MiscGainAwardS2C {
  public static EVENT_NAME: string = "MiscGainAwardS2C";

  public static decode(byteArray: ByteArray): MiscGainAwardS2C {
    const obj = new MiscGainAwardS2C();
    let len;
    obj.treasure = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.treasure.push(ProtoType.PTreasure.decode(byteArray));
    }
    return obj;
  }

  // 领奖更新
  public treasure: ProtoType.PTreasure[];
}
export class MiscUpdateS2C {
  public static EVENT_NAME: string = "MiscUpdateS2C";

  public static decode(byteArray: ByteArray): MiscUpdateS2C {
    const obj = new MiscUpdateS2C();
    let len;
    obj.treasure = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.treasure.push(ProtoType.PTreasure.decode(byteArray));
    }
    return obj;
  }

  // 领奖更新
  public treasure: ProtoType.PTreasure[];
}
export class MiscCounterListS2C {
  public static EVENT_NAME: string = "MiscCounterListS2C";

  public static decode(byteArray: ByteArray): MiscCounterListS2C {
    const obj = new MiscCounterListS2C();
    let len;
    obj.counter = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.counter.push(ProtoType.PCounter.decode(byteArray));
    }
    return obj;
  }

  // 计数列表
  public counter: ProtoType.PCounter[];
}
export class MiscCounterListUpdateS2C {
  public static EVENT_NAME: string = "MiscCounterListUpdateS2C";

  public static decode(byteArray: ByteArray): MiscCounterListUpdateS2C {
    const obj = new MiscCounterListUpdateS2C();
    let len;
    obj.counter = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.counter.push(ProtoType.PCounter.decode(byteArray));
    }
    return obj;
  }

  // 计数列表
  public counter: ProtoType.PCounter[];
}
export class MiscModifyCounterS2C {
  public static EVENT_NAME: string = "MiscModifyCounterS2C";

  public static decode(byteArray: ByteArray): MiscModifyCounterS2C {
    const obj = new MiscModifyCounterS2C();
    obj.counter = ProtoType.PCounter.decode(byteArray);
    return obj;
  }

  // 计数列表
  public counter: ProtoType.PCounter;
}
export class MiscGetCounterS2C {
  public static EVENT_NAME: string = "MiscGetCounterS2C";

  public static decode(byteArray: ByteArray): MiscGetCounterS2C {
    const obj = new MiscGetCounterS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // count次数
  public count: Uint32;
}
export class MiscEggCountS2C {
  public static EVENT_NAME: string = "MiscEggCountS2C";

  public static decode(byteArray: ByteArray): MiscEggCountS2C {
    const obj = new MiscEggCountS2C();
    obj.count = byteArray.readUnsignedShort();
    return obj;
  }

  // 次数
  public count: Uint16;
}
export class MiscEggRewardS2C {
  public static EVENT_NAME: string = "MiscEggRewardS2C";

  public static decode(byteArray: ByteArray): MiscEggRewardS2C {
    const obj = new MiscEggRewardS2C();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 奖励 gold:100
  public reward: string;
}
