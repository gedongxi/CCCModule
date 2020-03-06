// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class MapPassListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 5633;

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
export class MapActionC2S implements IProtoMsgC2S {

  // 关卡id
  public passId: Uint16;
  private MSG_ID: Uint16 = 5634;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.passId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class MapPassListS2C {
  public static EVENT_NAME: string = "MapPassListS2C";

  public static decode(byteArray: ByteArray): MapPassListS2C {
    const obj = new MapPassListS2C();
    let len;
    obj.breakInfo = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.breakInfo.push(ProtoType.PBreak.decode(byteArray));
    }
    return obj;
  }

  // 关卡列表
  public breakInfo: ProtoType.PBreak[];
}
export class MapActionS2C {
  public static EVENT_NAME: string = "MapActionS2C";

  public static decode(byteArray: ByteArray): MapActionS2C {
    const obj = new MapActionS2C();
    let len;
    obj.picId = byteArray.readUnsignedShort();
    obj.medalList = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.medalList.push(ProtoType.PGoods.decode(byteArray));
    }
    return obj;
  }

  // 剧情碎片id
  public picId: Uint16;
  // 勋章奖励列表
  public medalList: ProtoType.PGoods[];
}
