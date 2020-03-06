// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class PetListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 8961;

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
export class PetBuyC2S implements IProtoMsgC2S {

  // 宠物id
  public id: Uint32;
  // 1买2广告
  public type: Uint8;
  private MSG_ID: Uint16 = 8963;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.id);
    byteArray.writeByte(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PetUpgradeC2S implements IProtoMsgC2S {

  // 宠物id
  public id: Uint32;
  private MSG_ID: Uint16 = 8964;

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
export class PetBattleC2S implements IProtoMsgC2S {

  // 宠物id
  public id: Uint32;
  // 是否出战 0否1是
  public use: Uint8;
  private MSG_ID: Uint16 = 8965;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.id);
    byteArray.writeByte(this.use);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PetAdC2S implements IProtoMsgC2S {

  // 宠物id
  public id: Uint32;
  private MSG_ID: Uint16 = 8966;

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
export class PetBuyPetC2S implements IProtoMsgC2S {

  // 1钻石购买
  public type: Uint8;
  // 宠物id
  public id: Uint32;
  private MSG_ID: Uint16 = 8967;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUnsignedInt(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PetTrialPetC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 8969;

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

export class PetListS2C {
  public static EVENT_NAME: string = "PetListS2C";

  public static decode(byteArray: ByteArray): PetListS2C {
    const obj = new PetListS2C();
    let len;
    obj.pet = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.pet.push(ProtoType.PPet.decode(byteArray));
    }
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet[];
}
export class PetUpdateS2C {
  public static EVENT_NAME: string = "PetUpdateS2C";

  public static decode(byteArray: ByteArray): PetUpdateS2C {
    const obj = new PetUpdateS2C();
    let len;
    obj.pet = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.pet.push(ProtoType.PPet.decode(byteArray));
    }
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet[];
}
export class PetBuyS2C {
  public static EVENT_NAME: string = "PetBuyS2C";

  public static decode(byteArray: ByteArray): PetBuyS2C {
    const obj = new PetBuyS2C();
    obj.pet = ProtoType.PPet.decode(byteArray);
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet;
}
export class PetUpgradeS2C {
  public static EVENT_NAME: string = "PetUpgradeS2C";

  public static decode(byteArray: ByteArray): PetUpgradeS2C {
    const obj = new PetUpgradeS2C();
    obj.pet = ProtoType.PPet.decode(byteArray);
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet;
}
export class PetBattleS2C {
  public static EVENT_NAME: string = "PetBattleS2C";

  public static decode(byteArray: ByteArray): PetBattleS2C {
    const obj = new PetBattleS2C();
    obj.pet = ProtoType.PPet.decode(byteArray);
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet;
}
export class PetAdS2C {
  public static EVENT_NAME: string = "PetAdS2C";

  public static decode(byteArray: ByteArray): PetAdS2C {
    const obj = new PetAdS2C();
    obj.pet = ProtoType.PPet.decode(byteArray);
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet;
}
export class PetBuyPetS2C {
  public static EVENT_NAME: string = "PetBuyPetS2C";

  public static decode(byteArray: ByteArray): PetBuyPetS2C {
    const obj = new PetBuyPetS2C();
    obj.pet = ProtoType.PPet.decode(byteArray);
    return obj;
  }

  // 宠物列表
  public pet: ProtoType.PPet;
}
export class PetTrialS2C {
  public static EVENT_NAME: string = "PetTrialS2C";

  public static decode(byteArray: ByteArray): PetTrialS2C {
    const obj = new PetTrialS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 0否1是
  public status: Uint8;
}
export class PetTrialPetS2C {
  public static EVENT_NAME: string = "PetTrialPetS2C";

  public static decode(byteArray: ByteArray): PetTrialPetS2C {
    const obj = new PetTrialPetS2C();
    obj.code = byteArray.readUnsignedByte();
    return obj;
  }

  // 0正常 其他异常
  public code: Uint8;
}
