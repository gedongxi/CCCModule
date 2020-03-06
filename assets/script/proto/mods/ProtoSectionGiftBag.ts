// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class GiftBagAskC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 11265;

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
export class GiftBagBuyC2S implements IProtoMsgC2S {

  // 礼包id
  public id: Uint32;
  private MSG_ID: Uint16 = 11266;

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

export class GiftBagAskS2C {
  public static EVENT_NAME: string = "GiftBagAskS2C";

  public static decode(byteArray: ByteArray): GiftBagAskS2C {
    const obj = new GiftBagAskS2C();
    let len;
    obj.gift = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.gift.push(ProtoType.PGiftBag.decode(byteArray));
    }
    return obj;
  }

  // 礼包
  public gift: ProtoType.PGiftBag[];
}
export class GiftBagBuyS2C {
  public static EVENT_NAME: string = "GiftBagBuyS2C";

  public static decode(byteArray: ByteArray): GiftBagBuyS2C {
    const obj = new GiftBagBuyS2C();
    obj.id = byteArray.readUnsignedInt();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 礼包id
  public id: Uint32;
  // 奖励 gem:100
  public reward: string;
}
export class GiftBagExpireInfoS2C {
  public static EVENT_NAME: string = "GiftBagExpireInfoS2C";

  public static decode(byteArray: ByteArray): GiftBagExpireInfoS2C {
    const obj = new GiftBagExpireInfoS2C();
    let len;
    obj.id = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.id.push(byteArray.readUnsignedInt());
    }
    return obj;
  }

  // 礼包id
  public id: Uint32[];
}
