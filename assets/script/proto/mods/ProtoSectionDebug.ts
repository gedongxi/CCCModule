// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class DebugErrorS2C {
  public static EVENT_NAME: string = "DebugErrorS2C";

  public static decode(byteArray: ByteArray): DebugErrorS2C {
    const obj = new DebugErrorS2C();
    obj.msgid = byteArray.readUnsignedShort();
    obj.code = byteArray.readUnsignedShort();
    return obj;
  }

  // 协议Id
  public msgid: Uint16;
  // 错误码
  public code: Uint16;
}
