// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class ArenaPraiseC2S implements IProtoMsgC2S {

  // 玩家id
  public id: Uint64;
  private MSG_ID: Uint16 = 10496;

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
export class ArenaMyPosC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10497;

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
export class ArenaEnemyC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10498;

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
export class ArenaEnemyInfoC2S implements IProtoMsgC2S {

  // 玩家id
  public id: Uint64;
  private MSG_ID: Uint16 = 10499;

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
export class ArenaGainRewardC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10501;

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
export class ArenaAddPkCountC2S implements IProtoMsgC2S {

  // 1广告 2钻石
  public type: Uint8;
  // 如果是钻石购买发送钻石数量 广告0
  public price: Uint32;
  private MSG_ID: Uint16 = 10503;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUnsignedInt(this.price);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class ArenaLocationC2S implements IProtoMsgC2S {

  // json字符串 包含province city district street
  public area: string;
  private MSG_ID: Uint16 = 10505;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.area);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class ArenaEnemyListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10506;

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
export class ArenaRankListC2S implements IProtoMsgC2S {

  // 起始
  public posStart: Uint32;
  // 结束
  public posEnd: Uint32;
  private MSG_ID: Uint16 = 10507;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedInt(this.posStart);
    byteArray.writeUnsignedInt(this.posEnd);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class ArenaGainTreasureC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 10510;

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

export class ArenaPraiseS2C {
  public static EVENT_NAME: string = "ArenaPraiseS2C";

  public static decode(byteArray: ByteArray): ArenaPraiseS2C {
    const obj = new ArenaPraiseS2C();
    return obj;
  }

}
export class ArenaMyPosS2C {
  public static EVENT_NAME: string = "ArenaMyPosS2C";

  public static decode(byteArray: ByteArray): ArenaMyPosS2C {
    const obj = new ArenaMyPosS2C();
    obj.myPos = byteArray.readUnsignedInt();
    return obj;
  }

  // 我的竞技场榜位
  public myPos: Uint32;
}
export class ArenaEnemyS2C {
  public static EVENT_NAME: string = "ArenaEnemyS2C";

  public static decode(byteArray: ByteArray): ArenaEnemyS2C {
    const obj = new ArenaEnemyS2C();
    let len;
    obj.list = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.list.push(ProtoType.PEnemy.decode(byteArray));
    }
    return obj;
  }

  // 竞技场对手列表
  public list: ProtoType.PEnemy[];
}
export class ArenaEnemyInfoS2C {
  public static EVENT_NAME: string = "ArenaEnemyInfoS2C";

  public static decode(byteArray: ByteArray): ArenaEnemyInfoS2C {
    const obj = new ArenaEnemyInfoS2C();
    let len;
    obj.weapon = byteArray.readUnsignedInt();
    obj.practice = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.practice.push(ProtoType.PPracticeEnemy.decode(byteArray));
    }
    obj.skill = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.skill.push(ProtoType.PSkillEnemy.decode(byteArray));
    }
    obj.pet = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.pet.push(ProtoType.PPetEnemy.decode(byteArray));
    }
    return obj;
  }

  // 使用武器id
  public weapon: Uint32;
  // 可训练属性
  public practice: ProtoType.PPracticeEnemy[];
  // 技能
  public skill: ProtoType.PSkillEnemy[];
  // 宠物
  public pet: ProtoType.PPetEnemy[];
}
export class ArenaRewardS2C {
  public static EVENT_NAME: string = "ArenaRewardS2C";

  public static decode(byteArray: ByteArray): ArenaRewardS2C {
    const obj = new ArenaRewardS2C();
    obj.pos = byteArray.readUnsignedInt();
    return obj;
  }

  // 结算竞技场榜位
  public pos: Uint32;
}
export class ArenaGainRewardS2C {
  public static EVENT_NAME: string = "ArenaGainRewardS2C";

  public static decode(byteArray: ByteArray): ArenaGainRewardS2C {
    const obj = new ArenaGainRewardS2C();
    return obj;
  }

}
export class ArenaPkCountS2C {
  public static EVENT_NAME: string = "ArenaPkCountS2C";

  public static decode(byteArray: ByteArray): ArenaPkCountS2C {
    const obj = new ArenaPkCountS2C();
    obj.count = byteArray.readUnsignedInt();
    obj.videoCount = byteArray.readUnsignedInt();
    return obj;
  }

  // 剩余pk次数
  public count: Uint32;
  // 看广告领取pk的剩余次数
  public videoCount: Uint32;
}
export class ArenaAddPkCountS2C {
  public static EVENT_NAME: string = "ArenaAddPkCountS2C";

  public static decode(byteArray: ByteArray): ArenaAddPkCountS2C {
    const obj = new ArenaAddPkCountS2C();
    return obj;
  }

}
export class ArenaBuyTimesS2C {
  public static EVENT_NAME: string = "ArenaBuyTimesS2C";

  public static decode(byteArray: ByteArray): ArenaBuyTimesS2C {
    const obj = new ArenaBuyTimesS2C();
    obj.times = byteArray.readUnsignedInt();
    return obj;
  }

  // 当日购买pk次数
  public times: Uint32;
}
export class ArenaLocationS2C {
  public static EVENT_NAME: string = "ArenaLocationS2C";

  public static decode(byteArray: ByteArray): ArenaLocationS2C {
    const obj = new ArenaLocationS2C();
    return obj;
  }

}
export class ArenaEnemyListS2C {
  public static EVENT_NAME: string = "ArenaEnemyListS2C";

  public static decode(byteArray: ByteArray): ArenaEnemyListS2C {
    const obj = new ArenaEnemyListS2C();
    let len;
    obj.enemy = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.enemy.push(ProtoType.PEnemyData.decode(byteArray));
    }
    return obj;
  }

  // 对手信息 包含技能等数据
  public enemy: ProtoType.PEnemyData[];
}
export class ArenaRankListS2C {
  public static EVENT_NAME: string = "ArenaRankListS2C";

  public static decode(byteArray: ByteArray): ArenaRankListS2C {
    const obj = new ArenaRankListS2C();
    let len;
    obj.ranker = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.ranker.push(ProtoType.PRankArena.decode(byteArray));
    }
    return obj;
  }

  // 玩家竞技场排行榜列表(已经排序)
  public ranker: ProtoType.PRankArena[];
}
export class ArenaTreasureCountS2C {
  public static EVENT_NAME: string = "ArenaTreasureCountS2C";

  public static decode(byteArray: ByteArray): ArenaTreasureCountS2C {
    const obj = new ArenaTreasureCountS2C();
    obj.count = byteArray.readUnsignedShort();
    return obj;
  }

  // 段位宝箱次数
  public count: Uint16;
}
export class ArenaTreasureUpdateS2C {
  public static EVENT_NAME: string = "ArenaTreasureUpdateS2C";

  public static decode(byteArray: ByteArray): ArenaTreasureUpdateS2C {
    const obj = new ArenaTreasureUpdateS2C();
    obj.count = byteArray.readUnsignedShort();
    return obj;
  }

  // 段位宝箱次数更新
  public count: Uint16;
}
export class ArenaGainTreasureS2C {
  public static EVENT_NAME: string = "ArenaGainTreasureS2C";

  public static decode(byteArray: ByteArray): ArenaGainTreasureS2C {
    const obj = new ArenaGainTreasureS2C();
    obj.count = byteArray.readUnsignedShort();
    obj.reward = byteArray.readUTF();
    return obj;
  }

  // 段位宝箱次数
  public count: Uint16;
  // 奖励 magic:100
  public reward: string;
}
export class ArenaPkRecordS2C {
  public static EVENT_NAME: string = "ArenaPkRecordS2C";

  public static decode(byteArray: ByteArray): ArenaPkRecordS2C {
    const obj = new ArenaPkRecordS2C();
    let len;
    obj.record = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.record.push(ProtoType.PPkRecord.decode(byteArray));
    }
    return obj;
  }

  // pk记录
  public record: ProtoType.PPkRecord[];
}
