// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class InviteGainAwardC2S implements IProtoMsgC2S {

  // 位置
  public pos: Uint8;
  private MSG_ID: Uint16 = 9474;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.pos);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class InviteGetPlayerC2S implements IProtoMsgC2S {

  // 玩家id
  public id: Uint64;
  private MSG_ID: Uint16 = 9476;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeDouble(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class InviteGainOffRewardC2S implements IProtoMsgC2S {

  // type:1表示倍数
  public param: string;
  private MSG_ID: Uint16 = 9483;

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

export class InviteListS2C {
  public static EVENT_NAME: string = "InviteListS2C";

  public static decode(byteArray: ByteArray): InviteListS2C {
    const obj = new InviteListS2C();
    let len;
    obj.invite = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.invite.push(ProtoType.PInvite.decode(byteArray));
    }
    return obj;
  }

  // 列表
  public invite: ProtoType.PInvite[];
}
export class InviteGainAwardS2C {
  public static EVENT_NAME: string = "InviteGainAwardS2C";

  public static decode(byteArray: ByteArray): InviteGainAwardS2C {
    const obj = new InviteGainAwardS2C();
    let len;
    obj.invite = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.invite.push(ProtoType.PInvite.decode(byteArray));
    }
    return obj;
  }

  // 领奖更新
  public invite: ProtoType.PInvite[];
}
export class InviteUpdateS2C {
  public static EVENT_NAME: string = "InviteUpdateS2C";

  public static decode(byteArray: ByteArray): InviteUpdateS2C {
    const obj = new InviteUpdateS2C();
    let len;
    obj.invite = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.invite.push(ProtoType.PInvite.decode(byteArray));
    }
    return obj;
  }

  // 领奖更新
  public invite: ProtoType.PInvite[];
}
export class InviteGetPlayerS2C {
  public static EVENT_NAME: string = "InviteGetPlayerS2C";

  public static decode(byteArray: ByteArray): InviteGetPlayerS2C {
    const obj = new InviteGetPlayerS2C();
    obj.player = byteArray.readUTF();
    return obj;
  }

  // 玩家信息
  public player: string;
}
export class InviteOffRewardS2C {
  public static EVENT_NAME: string = "InviteOffRewardS2C";

  public static decode(byteArray: ByteArray): InviteOffRewardS2C {
    const obj = new InviteOffRewardS2C();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 奖励字符串gem:100
  public reward: string;
}
export class InviteGainOffRewardS2C {
  public static EVENT_NAME: string = "InviteGainOffRewardS2C";

  public static decode(byteArray: ByteArray): InviteGainOffRewardS2C {
    const obj = new InviteGainOffRewardS2C();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 奖励字符串gem:100
  public reward: string;
}
