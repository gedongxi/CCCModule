// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class ChallengeResetC2S implements IProtoMsgC2S {

  // 挑战类型 1消灭猴子2格挡训练3求生之路
  public type: Uint8;
  private MSG_ID: Uint16 = 7175;

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

export class ChallengeInfoS2C {
  public static EVENT_NAME: string = "ChallengeInfoS2C";

  public static decode(byteArray: ByteArray): ChallengeInfoS2C {
    const obj = new ChallengeInfoS2C();
    let len;
    obj.challenge = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.challenge.push(ProtoType.PChallengeTimes.decode(byteArray));
    }
    return obj;
  }

  // 挑战次数列表
  public challenge: ProtoType.PChallengeTimes[];
}
export class ChallengeUpdateS2C {
  public static EVENT_NAME: string = "ChallengeUpdateS2C";

  public static decode(byteArray: ByteArray): ChallengeUpdateS2C {
    const obj = new ChallengeUpdateS2C();
    let len;
    obj.challenge = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.challenge.push(ProtoType.PChallengeTimes.decode(byteArray));
    }
    return obj;
  }

  // 挑战次更新数列表
  public challenge: ProtoType.PChallengeTimes[];
}
export class ChallengeResetS2C {
  public static EVENT_NAME: string = "ChallengeResetS2C";

  public static decode(byteArray: ByteArray): ChallengeResetS2C {
    const obj = new ChallengeResetS2C();
    obj.challenge = ProtoType.PChallengeTimes.decode(byteArray);
    return obj;
  }

  // 挑战次数列表
  public challenge: ProtoType.PChallengeTimes;
}
