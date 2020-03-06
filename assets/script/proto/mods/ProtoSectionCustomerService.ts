// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class CustomerServiceGainAwardC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 8449;

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

export class CustomerServiceGainAwardS2C {
  public static EVENT_NAME: string = "CustomerServiceGainAwardS2C";

  public static decode(byteArray: ByteArray): CustomerServiceGainAwardS2C {
    const obj = new CustomerServiceGainAwardS2C();
    obj.times = byteArray.readUnsignedByte();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 领取奖励剩余次数
  public times: Uint8;
  // 奖励 gold:100,gem:10,vigor:10
  public reward: string;
}
export class CustomerServiceInfoS2C {
  public static EVENT_NAME: string = "CustomerServiceInfoS2C";

  public static decode(byteArray: ByteArray): CustomerServiceInfoS2C {
    const obj = new CustomerServiceInfoS2C();
    obj.times = byteArray.readUnsignedByte();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 领取奖励剩余次数
  public times: Uint8;
  // 奖励 gold:100,gem:10,vigor:10
  public reward: string;
}
