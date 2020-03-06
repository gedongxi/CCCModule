// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class VipUpdateSubscribeAdC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 11012;

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

export class VipSubscribeStatusS2C {
  public static EVENT_NAME: string = "VipSubscribeStatusS2C";

  public static decode(byteArray: ByteArray): VipSubscribeStatusS2C {
    const obj = new VipSubscribeStatusS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 0未订阅 1已经订阅
  public status: Uint8;
}
export class VipSubscribeS2C {
  public static EVENT_NAME: string = "VipSubscribeS2C";

  public static decode(byteArray: ByteArray): VipSubscribeS2C {
    const obj = new VipSubscribeS2C();
    return obj;
  }

}
export class VipSubscribeAdS2C {
  public static EVENT_NAME: string = "VipSubscribeAdS2C";

  public static decode(byteArray: ByteArray): VipSubscribeAdS2C {
    const obj = new VipSubscribeAdS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 订阅免看广告剩余次数
  public count: Uint32;
}
export class VipUpdateSubscribeAdS2C {
  public static EVENT_NAME: string = "VipUpdateSubscribeAdS2C";

  public static decode(byteArray: ByteArray): VipUpdateSubscribeAdS2C {
    const obj = new VipUpdateSubscribeAdS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 订阅免看广告剩余次数
  public count: Uint32;
}
export class VipSubscribeDailyS2C {
  public static EVENT_NAME: string = "VipSubscribeDailyS2C";

  public static decode(byteArray: ByteArray): VipSubscribeDailyS2C {
    const obj = new VipSubscribeDailyS2C();
    return obj;
  }

}
export class VipSubscribeDailyTimeS2C {
  public static EVENT_NAME: string = "VipSubscribeDailyTimeS2C";

  public static decode(byteArray: ByteArray): VipSubscribeDailyTimeS2C {
    const obj = new VipSubscribeDailyTimeS2C();
    return obj;
  }

}
export class VipInfiniteVigorS2C {
  public static EVENT_NAME: string = "VipInfiniteVigorS2C";

  public static decode(byteArray: ByteArray): VipInfiniteVigorS2C {
    const obj = new VipInfiniteVigorS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 0否 1是
  public status: Uint8;
}
export class VipMonthCardS2C {
  public static EVENT_NAME: string = "VipMonthCardS2C";

  public static decode(byteArray: ByteArray): VipMonthCardS2C {
    const obj = new VipMonthCardS2C();
    obj.endTime = byteArray.readUnsignedInt();
    return obj;
  }

  // 0没有购买 大于0为到期时间戳
  public endTime: Uint32;
}
export class VipMonthS2C {
  public static EVENT_NAME: string = "VipMonthS2C";

  public static decode(byteArray: ByteArray): VipMonthS2C {
    const obj = new VipMonthS2C();
    return obj;
  }

}
export class VipMonthDailyS2C {
  public static EVENT_NAME: string = "VipMonthDailyS2C";

  public static decode(byteArray: ByteArray): VipMonthDailyS2C {
    const obj = new VipMonthDailyS2C();
    return obj;
  }

}
export class VipMonthDailyTimeS2C {
  public static EVENT_NAME: string = "VipMonthDailyTimeS2C";

  public static decode(byteArray: ByteArray): VipMonthDailyTimeS2C {
    const obj = new VipMonthDailyTimeS2C();
    return obj;
  }

}
