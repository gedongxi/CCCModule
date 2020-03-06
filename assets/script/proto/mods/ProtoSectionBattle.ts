// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class BattleReadyC2S implements IProtoMsgC2S {

  // type 1 关卡战斗 2 挑战战斗 3 竞技场
  public type: Uint8;
  // 关卡(id: 关卡id) 挑战(id: 挑战类型id 1消灭猴子2 格挡训练 3 求生) 竞技场(id:对手id robot:0否1是) 
  public param: string;
  private MSG_ID: Uint16 = 7937;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class BattleFinishC2S implements IProtoMsgC2S {

  private static EncryptIndex: Uint8 = 0;
  // type 1 关卡战斗 2 挑战战斗 3 竞技场
  public type: Uint8;
  // 成就需要的4属性 block挡住主动攻击次数 atk_series连击数 no_damage 0受到伤害1没受到伤害 only_manual 仅使用手动技能 0否1是
  public extra: string;
  //                           关卡(id: 关卡id, pass_state: 结果1成功2失败, time:战斗耗时)                          挑战(id: 挑战类型id, score: 挑战分数, time:战斗耗时)                          竞技场(id:对手id, pass_state: 结果1成功2失败, time:战斗耗时 robot:机器人判断, rank:对手排名)                         
  public param: string;
  private MSG_ID: Uint16 = 7938;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.extra);
    byteArray.writeUTF(this.param);
    const index = (BattleFinishC2S.EncryptIndex + 1) % ProtoCrypto.KeyMask;
    BattleFinishC2S.EncryptIndex = index;
    return ProtoCrypto.encode(index, this.MSG_ID, byteArray);
  }
}
export class BattleGainRewardC2S implements IProtoMsgC2S {

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  //                      关卡(id:关卡id, reward_type: 单倍1 双倍2 )                     挑战(id:挑战id, reward_type: 单倍1 双倍2 )                 
  public param: string;
  private MSG_ID: Uint16 = 7939;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class BattlePauseC2S implements IProtoMsgC2S {

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id)挑战(id: 挑战类型id)
  public param: string;
  private MSG_ID: Uint16 = 7940;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class BattleResumeC2S implements IProtoMsgC2S {

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id) 挑战(id: 挑战类型id)
  public param: string;
  private MSG_ID: Uint16 = 7941;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class BattleStartC2S implements IProtoMsgC2S {

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id) 挑战(id: 挑战类型id)
  public param: string;
  private MSG_ID: Uint16 = 7942;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.type);
    byteArray.writeUTF(this.param);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class BattleReadyS2C {
  public static EVENT_NAME: string = "BattleReadyS2C";

  public static decode(byteArray: ByteArray): BattleReadyS2C {
    const obj = new BattleReadyS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    obj.allProperty = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗 3 竞技场
  public type: Uint8;
  // 关卡(id: 关卡id) 挑战(id: 挑战类型id) 竞技场(id:对手id, opponent_property:对手属性) 
  public data: string;
  // 所有属性
  public allProperty: string;
}
export class BattleFinishS2C {
  public static EVENT_NAME: string = "BattleFinishS2C";

  public static decode(byteArray: ByteArray): BattleFinishS2C {
    const obj = new BattleFinishS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.result = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗 3 竞技场
  public type: Uint8;
  //                      关卡(                             id: 关卡id,                             score: 1sss,2ss,3s, 4A, 0失败,                             chip_state: 剧情碎片0未获取 1已获取                             duration: 战斗用时s,                             medal_list: 技能勋章                             boss: 0/1是否为boss关第一次胜利(有特殊奖励))                     挑战(                             id: 挑战类型id                             score: 挑战分数                             money: 挑战金钱                             medal_list: 技能勋章                     )                     竞技场(                             result: 结果1成功2失败                             history: 历史最高排名                             now:当前排名                             pk_award: pk奖励                             rank_award:历史排名奖励                             info:对手排名是否已经变化提醒判定                             add:榜位增量                     )                 
  public result: string;
}
export class BattleGainRewardS2C {
  public static EVENT_NAME: string = "BattleGainRewardS2C";

  public static decode(byteArray: ByteArray): BattleGainRewardS2C {
    const obj = new BattleGainRewardS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id, chip_state:剧情碎片0未获取 1已获取) 挑战(id:挑战类型id)
  public data: string;
}
export class BattlePauseS2C {
  public static EVENT_NAME: string = "BattlePauseS2C";

  public static decode(byteArray: ByteArray): BattlePauseS2C {
    const obj = new BattlePauseS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id)挑战(id: 挑战类型id)
  public data: string;
}
export class BattleResumeS2C {
  public static EVENT_NAME: string = "BattleResumeS2C";

  public static decode(byteArray: ByteArray): BattleResumeS2C {
    const obj = new BattleResumeS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id)挑战(id: 挑战类型id)
  public data: string;
}
export class BattleStartS2C {
  public static EVENT_NAME: string = "BattleStartS2C";

  public static decode(byteArray: ByteArray): BattleStartS2C {
    const obj = new BattleStartS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // type 1 关卡战斗 2 挑战战斗
  public type: Uint8;
  // 关卡(id:关卡id)挑战(id: 挑战类型id)
  public data: string;
}
