// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class SkillDownC2S implements IProtoMsgC2S {

  // 槽位id
  public slotId: Uint16;
  // 技能id
  public skillId: Uint32;
  private MSG_ID: Uint16 = 5377;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.slotId);
    byteArray.writeUnsignedInt(this.skillId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SkillUpC2S implements IProtoMsgC2S {

  // 槽位id
  public slotId: Uint16;
  // 技能id
  public skillId: Uint32;
  private MSG_ID: Uint16 = 5378;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.slotId);
    byteArray.writeUnsignedInt(this.skillId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SkillUnlockC2S implements IProtoMsgC2S {

  // 槽位id
  public slotId: Uint16;
  private MSG_ID: Uint16 = 5379;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.slotId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SkillUpgradeC2S implements IProtoMsgC2S {

  // 技能id
  public skillId: Uint32;
  // 升几级 1或多级
  public skillLvl: Uint32;
  private MSG_ID: Uint16 = 5383;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.skillId);
    byteArray.writeUnsignedInt(this.skillLvl);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class SkillBuySkillC2S implements IProtoMsgC2S {

  // 技能id
  public skillId: Uint32;
  private MSG_ID: Uint16 = 5385;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.skillId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class SkillSlotListS2C {
  public static EVENT_NAME: string = "SkillSlotListS2C";

  public static decode(byteArray: ByteArray): SkillSlotListS2C {
    const obj = new SkillSlotListS2C();
    let len;
    obj.slot = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.slot.push(ProtoType.PSlot.decode(byteArray));
    }
    return obj;
  }

  // 技能槽位
  public slot: ProtoType.PSlot[];
}
export class SkillDownS2C {
  public static EVENT_NAME: string = "SkillDownS2C";

  public static decode(byteArray: ByteArray): SkillDownS2C {
    const obj = new SkillDownS2C();
    obj.slot = ProtoType.PSlot.decode(byteArray);
    return obj;
  }

  // 技能槽位更新
  public slot: ProtoType.PSlot;
}
export class SkillUpS2C {
  public static EVENT_NAME: string = "SkillUpS2C";

  public static decode(byteArray: ByteArray): SkillUpS2C {
    const obj = new SkillUpS2C();
    obj.slot = ProtoType.PSlot.decode(byteArray);
    return obj;
  }

  // 技能槽位更新
  public slot: ProtoType.PSlot;
}
export class SkillUnlockS2C {
  public static EVENT_NAME: string = "SkillUnlockS2C";

  public static decode(byteArray: ByteArray): SkillUnlockS2C {
    const obj = new SkillUnlockS2C();
    obj.slot = ProtoType.PSlot.decode(byteArray);
    return obj;
  }

  // 技能槽位更新
  public slot: ProtoType.PSlot;
}
export class SkillUpdateSlotS2C {
  public static EVENT_NAME: string = "SkillUpdateSlotS2C";

  public static decode(byteArray: ByteArray): SkillUpdateSlotS2C {
    const obj = new SkillUpdateSlotS2C();
    let len;
    obj.slot = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.slot.push(ProtoType.PSlot.decode(byteArray));
    }
    return obj;
  }

  // 技能槽位更新
  public slot: ProtoType.PSlot[];
}
export class SkillSkillListS2C {
  public static EVENT_NAME: string = "SkillSkillListS2C";

  public static decode(byteArray: ByteArray): SkillSkillListS2C {
    const obj = new SkillSkillListS2C();
    let len;
    obj.skill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skill.push(ProtoType.PSkill.decode(byteArray));
    }
    return obj;
  }

  // 技能列表
  public skill: ProtoType.PSkill[];
}
export class SkillUpgradeS2C {
  public static EVENT_NAME: string = "SkillUpgradeS2C";

  public static decode(byteArray: ByteArray): SkillUpgradeS2C {
    const obj = new SkillUpgradeS2C();
    let len;
    obj.skill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skill.push(ProtoType.PSkill.decode(byteArray));
    }
    return obj;
  }

  // 技能列表
  public skill: ProtoType.PSkill[];
}
export class SkillSkillUpdateS2C {
  public static EVENT_NAME: string = "SkillSkillUpdateS2C";

  public static decode(byteArray: ByteArray): SkillSkillUpdateS2C {
    const obj = new SkillSkillUpdateS2C();
    let len;
    obj.skill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skill.push(ProtoType.PSkill.decode(byteArray));
    }
    return obj;
  }

  // 技能列表
  public skill: ProtoType.PSkill[];
}
export class SkillBuySkillS2C {
  public static EVENT_NAME: string = "SkillBuySkillS2C";

  public static decode(byteArray: ByteArray): SkillBuySkillS2C {
    const obj = new SkillBuySkillS2C();
    obj.skillId = byteArray.readUnsignedInt();
    return obj;
  }

  // 技能id
  public skillId: Uint32;
}
