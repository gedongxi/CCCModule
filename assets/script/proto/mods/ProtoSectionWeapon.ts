// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class WeaponBuyWeaponC2S implements IProtoMsgC2S {

  // 武器id
  public weaponId: Uint16;
  private MSG_ID: Uint16 = 5890;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.weaponId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class WeaponUseWeaponC2S implements IProtoMsgC2S {

  // 武器id
  public weaponId: Uint16;
  private MSG_ID: Uint16 = 5891;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.weaponId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class WeaponListS2C {
  public static EVENT_NAME: string = "WeaponListS2C";

  public static decode(byteArray: ByteArray): WeaponListS2C {
    const obj = new WeaponListS2C();
    let len;
    obj.info = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.info.push(ProtoType.PWeapon.decode(byteArray));
    }
    return obj;
  }

  // 武器信息列表
  public info: ProtoType.PWeapon[];
}
export class WeaponBuyWeaponS2C {
  public static EVENT_NAME: string = "WeaponBuyWeaponS2C";

  public static decode(byteArray: ByteArray): WeaponBuyWeaponS2C {
    const obj = new WeaponBuyWeaponS2C();
    obj.weaponId = byteArray.readUnsignedShort();
    return obj;
  }

  // 武器id
  public weaponId: Uint16;
}
export class WeaponUseWeaponS2C {
  public static EVENT_NAME: string = "WeaponUseWeaponS2C";

  public static decode(byteArray: ByteArray): WeaponUseWeaponS2C {
    const obj = new WeaponUseWeaponS2C();
    obj.weaponId = byteArray.readUnsignedShort();
    return obj;
  }

  // 武器id
  public weaponId: Uint16;
}
export class WeaponUpdateS2C {
  public static EVENT_NAME: string = "WeaponUpdateS2C";

  public static decode(byteArray: ByteArray): WeaponUpdateS2C {
    const obj = new WeaponUpdateS2C();
    let len;
    obj.weapon = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.weapon.push(ProtoType.PWeapon.decode(byteArray));
    }
    return obj;
  }

  // 武器列表
  public weapon: ProtoType.PWeapon[];
}
