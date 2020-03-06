// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class RoleChangeHeadC2S implements IProtoMsgC2S {

  // 头像id
  public headId: Uint32;
  private MSG_ID: Uint16 = 10754;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.headId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class RoleActiveHeadC2S implements IProtoMsgC2S {

  // 头像id
  public headId: Uint32;
  private MSG_ID: Uint16 = 10755;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.headId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class RoleChangeNameC2S implements IProtoMsgC2S {

  // 名字
  public name: string;
  private MSG_ID: Uint16 = 10756;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.name);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class RoleChangeSkinC2S implements IProtoMsgC2S {

  // 皮肤id
  public skinId: Uint32;
  private MSG_ID: Uint16 = 10764;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.skinId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class RoleHeadListS2C {
  public static EVENT_NAME: string = "RoleHeadListS2C";

  public static decode(byteArray: ByteArray): RoleHeadListS2C {
    const obj = new RoleHeadListS2C();
    let len;
    obj.head = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.head.push(ProtoType.PHead.decode(byteArray));
    }
    return obj;
  }

  // 头像信息
  public head: ProtoType.PHead[];
}
export class RoleChangeHeadS2C {
  public static EVENT_NAME: string = "RoleChangeHeadS2C";

  public static decode(byteArray: ByteArray): RoleChangeHeadS2C {
    const obj = new RoleChangeHeadS2C();
    obj.headId = byteArray.readUnsignedInt();
    return obj;
  }

  // 头像id
  public headId: Uint32;
}
export class RoleActiveHeadS2C {
  public static EVENT_NAME: string = "RoleActiveHeadS2C";

  public static decode(byteArray: ByteArray): RoleActiveHeadS2C {
    const obj = new RoleActiveHeadS2C();
    let len;
    obj.head = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.head.push(ProtoType.PHead.decode(byteArray));
    }
    return obj;
  }

  // 头像信息
  public head: ProtoType.PHead[];
}
export class RoleChangeNameS2C {
  public static EVENT_NAME: string = "RoleChangeNameS2C";

  public static decode(byteArray: ByteArray): RoleChangeNameS2C {
    const obj = new RoleChangeNameS2C();
    obj.name = byteArray.readUTF();
    return obj;
  }

  // 名字
  public name: string;
}
export class RoleSkinListS2C {
  public static EVENT_NAME: string = "RoleSkinListS2C";

  public static decode(byteArray: ByteArray): RoleSkinListS2C {
    const obj = new RoleSkinListS2C();
    let len;
    obj.skin = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skin.push(ProtoType.PSkin.decode(byteArray));
    }
    return obj;
  }

  // 皮肤信息
  public skin: ProtoType.PSkin[];
}
export class RoleChangeSkinS2C {
  public static EVENT_NAME: string = "RoleChangeSkinS2C";

  public static decode(byteArray: ByteArray): RoleChangeSkinS2C {
    const obj = new RoleChangeSkinS2C();
    obj.skinId = byteArray.readUnsignedInt();
    return obj;
  }

  // 皮肤id
  public skinId: Uint32;
}
export class RoleUpdateSkinS2C {
  public static EVENT_NAME: string = "RoleUpdateSkinS2C";

  public static decode(byteArray: ByteArray): RoleUpdateSkinS2C {
    const obj = new RoleUpdateSkinS2C();
    let len;
    obj.skin = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skin.push(ProtoType.PSkin.decode(byteArray));
    }
    return obj;
  }

  // 皮肤信息
  public skin: ProtoType.PSkin[];
}
