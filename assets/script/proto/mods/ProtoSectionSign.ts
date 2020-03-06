// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class SignInfoC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 6657;

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
export class SignDoC2S implements IProtoMsgC2S {

  //  1单倍 2双倍
  public type: Uint8;
  private MSG_ID: Uint16 = 6658;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SignShareC2S implements IProtoMsgC2S {

  // 分享类型id 1表示分享获得体力 2表示增加钻石(图鉴集齐碎片)
  public id: Uint8;
  // type:倍数 没有为空
  public param: string;
  private MSG_ID: Uint16 = 6659;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.id);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SignAdC2S implements IProtoMsgC2S {

  // 看视频类型 1表示增加关卡次数 2表示 开宝箱
  public type: Uint8;
  // 类型1(id:关卡id) 类型2(空字符串)
  public param: string;
  private MSG_ID: Uint16 = 6661;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class SignInfoS2C {
  public static EVENT_NAME: string = "SignInfoS2C";

  public static decode(byteArray: ByteArray): SignInfoS2C {
    const obj = new SignInfoS2C();
    obj.day = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 签到天数
  public day: Uint32;
  // 状态 0未签 1已签
  public status: Uint8;
}
export class SignDoS2C {
  public static EVENT_NAME: string = "SignDoS2C";

  public static decode(byteArray: ByteArray): SignDoS2C {
    const obj = new SignDoS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.day = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  //  1单倍 2双倍
  public type: Uint8;
  // 签到天数
  public day: Uint32;
  // 状态 0未签 1已签
  public status: Uint8;
}
export class SignShareS2C {
  public static EVENT_NAME: string = "SignShareS2C";

  public static decode(byteArray: ByteArray): SignShareS2C {
    const obj = new SignShareS2C();
    obj.id = byteArray.readUnsignedByte();
    return obj;
  }

  // 分享类型id 1表示分享获得体力 2表示增加钻石(图鉴集齐碎片)
  public id: Uint8;
}
export class SignShareInfoS2C {
  public static EVENT_NAME: string = "SignShareInfoS2C";

  public static decode(byteArray: ByteArray): SignShareInfoS2C {
    const obj = new SignShareInfoS2C();
    let len;
    obj.data = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.data.push(ProtoType.PShare.decode(byteArray));
    }
    return obj;
  }

  // 分享数据
  public data: ProtoType.PShare[];
}
export class SignAdS2C {
  public static EVENT_NAME: string = "SignAdS2C";

  public static decode(byteArray: ByteArray): SignAdS2C {
    const obj = new SignAdS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // 看视频类型 1表示增加关卡次数 2表示 开宝箱
  public type: Uint8;
  // 类型1(空字符串), 类型2(count:剩余次数, time:时间戳, r_type:下次奖励类型gold gem vigor, r_num:下次奖励数量)
  public data: string;
}
