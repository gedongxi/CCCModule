// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class StageGainBossC2S implements IProtoMsgC2S {

  // 奖励 gold,gem,skill
  public type: string;
  private MSG_ID: Uint16 = 5633;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class StageCartoonC2S implements IProtoMsgC2S {

  // 关卡id
  public stageId: Uint8;
  private MSG_ID: Uint16 = 5646;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.stageId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class StageShareAwardC2S implements IProtoMsgC2S {

  // 关卡id
  public stageId: Uint8;
  private MSG_ID: Uint16 = 5647;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.stageId);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class StageExtraAwardC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 5648;

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
export class StageNewShareAwardC2S implements IProtoMsgC2S {

  // 参数 id:关卡id; type:奖励类型; num:奖励数量
  public param: string;
  private MSG_ID: Uint16 = 5650;

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
export class StageRestoreLifeC2S implements IProtoMsgC2S {

  // 复活方式 1钻石 2广告
  public type: Uint8;
  private MSG_ID: Uint16 = 5652;

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
export class StageGainAirC2S implements IProtoMsgC2S {

  // 参数预留
  public param: string;
  private MSG_ID: Uint16 = 5654;

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
export class StageAddCardC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 5656;

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
export class StageDecCardC2S implements IProtoMsgC2S {

  // 消耗数量
  public decCount: Uint32;
  private MSG_ID: Uint16 = 5657;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.decCount);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class StageGainBossS2C {
  public static EVENT_NAME: string = "StageGainBossS2C";

  public static decode(byteArray: ByteArray): StageGainBossS2C {
    const obj = new StageGainBossS2C();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 奖励 gold:100,gem:10,1:10
  public reward: string;
}
export class StageListS2C {
  public static EVENT_NAME: string = "StageListS2C";

  public static decode(byteArray: ByteArray): StageListS2C {
    const obj = new StageListS2C();
    let len;
    obj.stage = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.stage.push(ProtoType.PStages.decode(byteArray));
    }
    return obj;
  }

  // 关卡列表 所有激活关卡列表
  public stage: ProtoType.PStages[];
}
export class StageUpdateS2C {
  public static EVENT_NAME: string = "StageUpdateS2C";

  public static decode(byteArray: ByteArray): StageUpdateS2C {
    const obj = new StageUpdateS2C();
    let len;
    obj.stage = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.stage.push(ProtoType.PStages.decode(byteArray));
    }
    return obj;
  }

  // 关卡列表 更新
  public stage: ProtoType.PStages[];
}
export class StageRefreshS2C {
  public static EVENT_NAME: string = "StageRefreshS2C";

  public static decode(byteArray: ByteArray): StageRefreshS2C {
    const obj = new StageRefreshS2C();
    let len;
    obj.stage = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.stage.push(ProtoType.PStages.decode(byteArray));
    }
    return obj;
  }

  // 关卡列表 刷新
  public stage: ProtoType.PStages[];
}
export class StageNewPicS2C {
  public static EVENT_NAME: string = "StageNewPicS2C";

  public static decode(byteArray: ByteArray): StageNewPicS2C {
    const obj = new StageNewPicS2C();
    obj.aresId = byteArray.readUnsignedByte();
    return obj;
  }

  // 区域id
  public aresId: Uint8;
}
export class StageShareAwardS2C {
  public static EVENT_NAME: string = "StageShareAwardS2C";

  public static decode(byteArray: ByteArray): StageShareAwardS2C {
    const obj = new StageShareAwardS2C();
    obj.reward = byteArray.readUTF();
    obj.stage = ProtoType.PStages.decode(byteArray);
    return obj;
  }

  // 奖励 gold:100,gem:10,vigor:10
  public reward: string;
  // 关卡列表 领奖次数刷新
  public stage: ProtoType.PStages;
}
export class StageExtraAwardS2C {
  public static EVENT_NAME: string = "StageExtraAwardS2C";

  public static decode(byteArray: ByteArray): StageExtraAwardS2C {
    const obj = new StageExtraAwardS2C();
    let len;
    obj.count = byteArray.readUnsignedShort();
    obj.rewardSkill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.rewardSkill.push(ProtoType.PSkillSimple.decode(byteArray));
    }
    return obj;
  }

  // 剩余额外奖励次数
  public count: Uint16;
  // 奖励技能勋章
  public rewardSkill: ProtoType.PSkillSimple[];
}
export class StageExtraCountS2C {
  public static EVENT_NAME: string = "StageExtraCountS2C";

  public static decode(byteArray: ByteArray): StageExtraCountS2C {
    const obj = new StageExtraCountS2C();
    obj.count = byteArray.readUnsignedShort();
    return obj;
  }

  // 剩余额外奖励次数
  public count: Uint16;
}
export class StageNewShareAwardS2C {
  public static EVENT_NAME: string = "StageNewShareAwardS2C";

  public static decode(byteArray: ByteArray): StageNewShareAwardS2C {
    const obj = new StageNewShareAwardS2C();
    obj.reward = byteArray.readUTF();
    obj.stage = ProtoType.PStages.decode(byteArray);
    return obj;
  }

  // 奖励 gold:100,gem:10,vigor:10
  public reward: string;
  // 关卡列表 领奖次数刷新
  public stage: ProtoType.PStages;
}
export class StageLifeCounterS2C {
  public static EVENT_NAME: string = "StageLifeCounterS2C";

  public static decode(byteArray: ByteArray): StageLifeCounterS2C {
    const obj = new StageLifeCounterS2C();
    obj.videoCount = byteArray.readUnsignedInt();
    obj.gemCount = byteArray.readUnsignedInt();
    return obj;
  }

  // 每日看视频复活次数
  public videoCount: Uint32;
  // 每日购买复活次数
  public gemCount: Uint32;
}
export class StageRestoreLifeS2C {
  public static EVENT_NAME: string = "StageRestoreLifeS2C";

  public static decode(byteArray: ByteArray): StageRestoreLifeS2C {
    const obj = new StageRestoreLifeS2C();
    return obj;
  }

}
export class StageAirBagS2C {
  public static EVENT_NAME: string = "StageAirBagS2C";

  public static decode(byteArray: ByteArray): StageAirBagS2C {
    const obj = new StageAirBagS2C();
    let len;
    obj.endTime = byteArray.readUnsignedInt();
    obj.wealth = byteArray.readUTF();
    obj.skill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skill.push(ProtoType.PSkillSimple.decode(byteArray));
    }
    return obj;
  }

  // 截止时间
  public endTime: Uint32;
  // 奖励财富 gold:100,gem:10,vigor:10
  public wealth: string;
  // 奖励技能
  public skill: ProtoType.PSkillSimple[];
}
export class StageGainAirS2C {
  public static EVENT_NAME: string = "StageGainAirS2C";

  public static decode(byteArray: ByteArray): StageGainAirS2C {
    const obj = new StageGainAirS2C();
    obj.code = byteArray.readUnsignedShort();
    return obj;
  }

  // 0正常处理 非0为错误
  public code: Uint16;
}
export class StageCleanCardS2C {
  public static EVENT_NAME: string = "StageCleanCardS2C";

  public static decode(byteArray: ByteArray): StageCleanCardS2C {
    const obj = new StageCleanCardS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 扫荡券数量
  public count: Uint32;
}
export class StageAddCardS2C {
  public static EVENT_NAME: string = "StageAddCardS2C";

  public static decode(byteArray: ByteArray): StageAddCardS2C {
    const obj = new StageAddCardS2C();
    obj.count = byteArray.readUnsignedInt();
    obj.times = byteArray.readUnsignedInt();
    return obj;
  }

  // 扫荡券数量
  public count: Uint32;
  // 当日领取扫荡券剩余次数
  public times: Uint32;
}
export class StageDecCardS2C {
  public static EVENT_NAME: string = "StageDecCardS2C";

  public static decode(byteArray: ByteArray): StageDecCardS2C {
    const obj = new StageDecCardS2C();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 扫荡券数量
  public count: Uint32;
}
export class StageFreeTimesS2C {
  public static EVENT_NAME: string = "StageFreeTimesS2C";

  public static decode(byteArray: ByteArray): StageFreeTimesS2C {
    const obj = new StageFreeTimesS2C();
    obj.times = byteArray.readUnsignedInt();
    return obj;
  }

  // 当日领取扫荡券剩余次数
  public times: Uint32;
}
