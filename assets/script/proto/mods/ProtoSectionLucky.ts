// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class LuckyDoC2S implements IProtoMsgC2S {

  //  1单抽 2 10连抽
  public type: Uint8;
  private MSG_ID: Uint16 = 6914;

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

export class LuckyInfoS2C {
  public static EVENT_NAME: string = "LuckyInfoS2C";

  public static decode(byteArray: ByteArray): LuckyInfoS2C {
    const obj = new LuckyInfoS2C();
    obj.count = byteArray.readUnsignedShort();
    return obj;
  }

  // 累计增加初始为0 目前第1次为免费 第2次为看广告免费
  public count: Uint16;
}
export class LuckyDoS2C {
  public static EVENT_NAME: string = "LuckyDoS2C";

  public static decode(byteArray: ByteArray): LuckyDoS2C {
    const obj = new LuckyDoS2C();
    let len;
    obj.type = byteArray.readUnsignedByte();
    obj.reward = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.reward.push(ProtoType.PLucky.decode(byteArray));
    }
    return obj;
  }

  //  1单抽 2 10连抽
  public type: Uint8;
  // 奖励
  public reward: ProtoType.PLucky[];
}
