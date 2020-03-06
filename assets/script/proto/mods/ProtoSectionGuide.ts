// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class GuideUpdateC2S implements IProtoMsgC2S {

  // 引导Id
  public id: Uint16;
  // 阶段
  public stage: Uint16;
  private MSG_ID: Uint16 = 8194;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.id);
    byteArray.writeUnsignedShort(this.stage);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class GuideFirstC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 8195;

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

export class GuidePullS2C {
  public static EVENT_NAME: string = "GuidePullS2C";

  public static decode(byteArray: ByteArray): GuidePullS2C {
    const obj = new GuidePullS2C();
    let len;
    obj.guidList = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.guidList.push(ProtoType.PGuide.decode(byteArray));
    }
    return obj;
  }

  // 引导列表
  public guidList: ProtoType.PGuide[];
}
export class GuideUpdateS2C {
  public static EVENT_NAME: string = "GuideUpdateS2C";

  public static decode(byteArray: ByteArray): GuideUpdateS2C {
    const obj = new GuideUpdateS2C();
    obj.id = byteArray.readUnsignedShort();
    obj.stage = byteArray.readUnsignedShort();
    return obj;
  }

  // 引导Id
  public id: Uint16;
  // 阶段
  public stage: Uint16;
}
export class GuideFirstS2C {
  public static EVENT_NAME: string = "GuideFirstS2C";

  public static decode(byteArray: ByteArray): GuideFirstS2C {
    const obj = new GuideFirstS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 0否1是
  public status: Uint8;
}
