// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class TurntableDrawC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 3073;

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
export class TurntableVideoToTicketC2S implements IProtoMsgC2S {

  // 参数 预留
  public param: string;
  private MSG_ID: Uint16 = 3075;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class TurntableDrawS2C {
  public static EVENT_NAME: string = "TurntableDrawS2C";

  public static decode(byteArray: ByteArray): TurntableDrawS2C {
    const obj = new TurntableDrawS2C();
    obj.ticket = byteArray.readUnsignedInt();
    obj.id = byteArray.readUnsignedShort();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 剩余券数
  public ticket: Uint32;
  // 抽奖id
  public id: Uint16;
  // 奖励
  public reward: string;
}
export class TurntableRemainS2C {
  public static EVENT_NAME: string = "TurntableRemainS2C";

  public static decode(byteArray: ByteArray): TurntableRemainS2C {
    const obj = new TurntableRemainS2C();
    obj.ticket = byteArray.readUnsignedInt();
    obj.videoCount = byteArray.readUnsignedInt();
    return obj;
  }

  // 剩余券数
  public ticket: Uint32;
  // 每日看视频剩余次数
  public videoCount: Uint32;
}
export class TurntableVideoToTicketS2C {
  public static EVENT_NAME: string = "TurntableVideoToTicketS2C";

  public static decode(byteArray: ByteArray): TurntableVideoToTicketS2C {
    const obj = new TurntableVideoToTicketS2C();
    obj.ticket = byteArray.readUnsignedInt();
    obj.videoCount = byteArray.readUnsignedInt();
    return obj;
  }

  // 剩余券数
  public ticket: Uint32;
  // 每日看视频剩余次数
  public videoCount: Uint32;
}
