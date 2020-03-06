// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class ExchangeGemGoldC2S implements IProtoMsgC2S {

  // 钻石数量
  public gem: Uint32;
  // 金钱数量
  public gold: Uint32;
  private MSG_ID: Uint16 = 7427;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.gem);
    byteArray.writeUnsignedInt(this.gold);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class ExchangeGemVigorC2S implements IProtoMsgC2S {

  // 钻石数量
  public gem: Uint32;
  // 体力数量
  public vigor: Uint32;
  private MSG_ID: Uint16 = 7428;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.gem);
    byteArray.writeUnsignedInt(this.vigor);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class ExchangeInfoS2C {
  public static EVENT_NAME: string = "ExchangeInfoS2C";

  public static decode(byteArray: ByteArray): ExchangeInfoS2C {
    const obj = new ExchangeInfoS2C();
    let len;
    obj.exchange = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.exchange.push(ProtoType.PExchange.decode(byteArray));
    }
    return obj;
  }

  // 钻石换购信息
  public exchange: ProtoType.PExchange[];
}
export class ExchangeUpdateS2C {
  public static EVENT_NAME: string = "ExchangeUpdateS2C";

  public static decode(byteArray: ByteArray): ExchangeUpdateS2C {
    const obj = new ExchangeUpdateS2C();
    let len;
    obj.exchange = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.exchange.push(ProtoType.PExchange.decode(byteArray));
    }
    return obj;
  }

  // 钻石换购信息
  public exchange: ProtoType.PExchange[];
}
export class ExchangeGemGoldS2C {
  public static EVENT_NAME: string = "ExchangeGemGoldS2C";

  public static decode(byteArray: ByteArray): ExchangeGemGoldS2C {
    const obj = new ExchangeGemGoldS2C();
    obj.gold = byteArray.readUnsignedInt();
    obj.rate = byteArray.readUnsignedByte();
    return obj;
  }

  // 金钱数量
  public gold: Uint32;
  // 暴击倍数 0 没有暴击
  public rate: Uint8;
}
export class ExchangeGemVigorS2C {
  public static EVENT_NAME: string = "ExchangeGemVigorS2C";

  public static decode(byteArray: ByteArray): ExchangeGemVigorS2C {
    const obj = new ExchangeGemVigorS2C();
    obj.vigor = byteArray.readUnsignedInt();
    return obj;
  }

  // 体力数量
  public vigor: Uint32;
}
