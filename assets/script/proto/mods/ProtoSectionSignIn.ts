// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class SignInInfoC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 4352;

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
export class SignInDoneC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 4353;

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

export class SignInInfoS2C {
  public static EVENT_NAME: string = "SignInInfoS2C";

  public static decode(byteArray: ByteArray): SignInInfoS2C {
    const obj = new SignInInfoS2C();
    obj.days = byteArray.readUnsignedByte();
    obj.today = byteArray.readUnsignedByte();
    return obj;
  }

  // 已经签到天数
  public days: Uint8;
  // 今天是否签到 0没有 1已签到
  public today: Uint8;
}
