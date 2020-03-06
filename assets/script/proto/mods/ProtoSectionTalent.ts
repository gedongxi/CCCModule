// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class TalentUpdateC2S implements IProtoMsgC2S {

  // 商品id
  public id: Uint32;
  private MSG_ID: Uint16 = 10242;

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
export class TalentPrepareC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10243;

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

export class TalentListS2C {
  public static EVENT_NAME: string = "TalentListS2C";

  public static decode(byteArray: ByteArray): TalentListS2C {
    const obj = new TalentListS2C();
    let len;
    obj.times = byteArray.readUnsignedInt();
    obj.talent = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.talent.push(ProtoType.PTalent.decode(byteArray));
    }
    return obj;
  }

  // 天赋升级次数 初始1
  public times: Uint32;
  // 已经激活的天赋列表
  public talent: ProtoType.PTalent[];
}
export class TalentUpdateS2C {
  public static EVENT_NAME: string = "TalentUpdateS2C";

  public static decode(byteArray: ByteArray): TalentUpdateS2C {
    const obj = new TalentUpdateS2C();
    let len;
    obj.times = byteArray.readUnsignedInt();
    obj.talent = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.talent.push(ProtoType.PTalent.decode(byteArray));
    }
    return obj;
  }

  // 天赋升级次数 初始1
  public times: Uint32;
  // 已经激活的天赋列表
  public talent: ProtoType.PTalent[];
}
export class TalentPrepareS2C {
  public static EVENT_NAME: string = "TalentPrepareS2C";

  public static decode(byteArray: ByteArray): TalentPrepareS2C {
    const obj = new TalentPrepareS2C();
    obj.times = byteArray.readUnsignedInt();
    return obj;
  }

  // 天赋升级次数 初始1
  public times: Uint32;
}
export class TalentFreeCountS2C {
  public static EVENT_NAME: string = "TalentFreeCountS2C";

  public static decode(byteArray: ByteArray): TalentFreeCountS2C {
    const obj = new TalentFreeCountS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 剩余免费次数
  public count: Uint32;
}
