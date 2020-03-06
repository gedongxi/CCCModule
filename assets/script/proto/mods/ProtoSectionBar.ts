// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class BarDrinkC2S implements IProtoMsgC2S {

  // 0免费1钻石
  public type: Uint8;
  // 酒id
  public wineId: Uint16;
  private MSG_ID: Uint16 = 6145;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUnsignedShort(this.wineId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class BarClearC2S implements IProtoMsgC2S {

  // 酒id
  public wineId: Uint16;
  private MSG_ID: Uint16 = 6146;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.wineId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class BarInfoS2C {
  public static EVENT_NAME: string = "BarInfoS2C";

  public static decode(byteArray: ByteArray): BarInfoS2C {
    const obj = new BarInfoS2C();
    obj.wine = ProtoType.PWine.decode(byteArray);
    return obj;
  }

  // 喝酒 次数
  public wine: ProtoType.PWine;
}
export class BarDrinkS2C {
  public static EVENT_NAME: string = "BarDrinkS2C";

  public static decode(byteArray: ByteArray): BarDrinkS2C {
    const obj = new BarDrinkS2C();
    obj.wine = ProtoType.PWine.decode(byteArray);
    return obj;
  }

  // 喝酒
  public wine: ProtoType.PWine;
}
export class BarClearS2C {
  public static EVENT_NAME: string = "BarClearS2C";

  public static decode(byteArray: ByteArray): BarClearS2C {
    const obj = new BarClearS2C();
    obj.wine = ProtoType.PWine.decode(byteArray);
    return obj;
  }

  // 醒酒时间5s容错 可以清除返回0,超出5s不能清除
  public wine: ProtoType.PWine;
}
