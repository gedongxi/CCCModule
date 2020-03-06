// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class PromoteListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 9217;

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
export class PromoteRewardC2S implements IProtoMsgC2S {

  // 广告展位id
  public id: Uint8;
  private MSG_ID: Uint16 = 9219;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PromoteOtherRewardC2S implements IProtoMsgC2S {

  // 广告展位id
  public id: Uint8;
  private MSG_ID: Uint16 = 9220;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class PromoteListS2C {
  public static EVENT_NAME: string = "PromoteListS2C";

  public static decode(byteArray: ByteArray): PromoteListS2C {
    const obj = new PromoteListS2C();
    let len;
    obj.promote = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.promote.push(ProtoType.PPos.decode(byteArray));
    }
    return obj;
  }

  // 推广列表
  public promote: ProtoType.PPos[];
}
export class PromoteWaitS2C {
  public static EVENT_NAME: string = "PromoteWaitS2C";

  public static decode(byteArray: ByteArray): PromoteWaitS2C {
    const obj = new PromoteWaitS2C();
    let len;
    obj.promote = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.promote.push(ProtoType.PPos.decode(byteArray));
    }
    return obj;
  }

  // 推广等待领奖
  public promote: ProtoType.PPos[];
}
export class PromoteRewardS2C {
  public static EVENT_NAME: string = "PromoteRewardS2C";

  public static decode(byteArray: ByteArray): PromoteRewardS2C {
    const obj = new PromoteRewardS2C();
    obj.id = byteArray.readUnsignedByte();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 广告展位id
  public id: Uint8;
  // 奖励 gold:100,gem:10,vigor:10
  public reward: string;
}
