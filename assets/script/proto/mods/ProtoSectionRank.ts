// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class RankMyC2S implements IProtoMsgC2S {

  // 1关卡排行榜
  public type: Uint16;
  private MSG_ID: Uint16 = 8705;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class RankListC2S implements IProtoMsgC2S {

  // 1关卡排行榜
  public type: Uint16;
  // 起始
  public posStart: Uint32;
  // 结束
  public posEnd: Uint32;
  private MSG_ID: Uint16 = 8706;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.type);
    byteArray.writeUnsignedInt(this.posStart);
    byteArray.writeUnsignedInt(this.posEnd);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class RankMyS2C {
  public static EVENT_NAME: string = "RankMyS2C";

  public static decode(byteArray: ByteArray): RankMyS2C {
    const obj = new RankMyS2C();
    obj.myPos = byteArray.readUnsignedInt();
    return obj;
  }

  // 我的榜位
  public myPos: Uint32;
}
export class RankListS2C {
  public static EVENT_NAME: string = "RankListS2C";

  public static decode(byteArray: ByteArray): RankListS2C {
    const obj = new RankListS2C();
    let len;
    obj.myPos = byteArray.readUnsignedInt();
    obj.playmates = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.playmates.push(ProtoType.PRank.decode(byteArray));
    }
    return obj;
  }

  // 我的榜位
  public myPos: Uint32;
  // 玩家排行列表(已经排序)
  public playmates: ProtoType.PRank[];
}
