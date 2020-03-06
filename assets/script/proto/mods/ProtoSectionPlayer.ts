// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class PlayerLvlRewardC2S implements IProtoMsgC2S {

  // 2 双倍奖励
  public type: Uint8;
  private MSG_ID: Uint16 = 2829;

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
export class PlayerFirstBattleC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 2830;

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

export class PlayerSelfInfoS2C {
  public static EVENT_NAME: string = "PlayerSelfInfoS2C";

  public static decode(byteArray: ByteArray): PlayerSelfInfoS2C {
    const obj = new PlayerSelfInfoS2C();
    obj.player = ProtoType.PPlayer.decode(byteArray);
    return obj;
  }

  // 玩家信息
  public player: ProtoType.PPlayer;
}
export class PlayerFortuneS2C {
  public static EVENT_NAME: string = "PlayerFortuneS2C";

  public static decode(byteArray: ByteArray): PlayerFortuneS2C {
    const obj = new PlayerFortuneS2C();
    obj.type = byteArray.readUnsignedByte();
    obj.val = byteArray.readUnsignedInt();
    return obj;
  }

  // 财富类型1:宝石 2:金币 3:体力 4: 经验 5: magic
  public type: Uint8;
  // 财富数值
  public val: Uint32;
}
export class PlayerVigorRegainCountdownS2C {
  public static EVENT_NAME: string = "PlayerVigorRegainCountdownS2C";

  public static decode(byteArray: ByteArray): PlayerVigorRegainCountdownS2C {
    const obj = new PlayerVigorRegainCountdownS2C();
    obj.time = byteArray.readUnsignedInt();
    return obj;
  }

  // 时间单位秒
  public time: Uint32;
}
export class PlayerOfflineDurationS2C {
  public static EVENT_NAME: string = "PlayerOfflineDurationS2C";

  public static decode(byteArray: ByteArray): PlayerOfflineDurationS2C {
    const obj = new PlayerOfflineDurationS2C();
    obj.secs = byteArray.readUnsignedInt();
    return obj;
  }

  // 离线时长 单位:秒
  public secs: Uint32;
}
export class PlayerLvlUpS2C {
  public static EVENT_NAME: string = "PlayerLvlUpS2C";

  public static decode(byteArray: ByteArray): PlayerLvlUpS2C {
    const obj = new PlayerLvlUpS2C();
    obj.lvl = byteArray.readUnsignedShort();
    return obj;
  }

  // 玩家等级
  public lvl: Uint16;
}
export class PlayerDailyClearedS2C {
  public static EVENT_NAME: string = "PlayerDailyClearedS2C";

  public static decode(byteArray: ByteArray): PlayerDailyClearedS2C {
    const obj = new PlayerDailyClearedS2C();
    return obj;
  }

}
export class PlayerStatisticS2C {
  public static EVENT_NAME: string = "PlayerStatisticS2C";

  public static decode(byteArray: ByteArray): PlayerStatisticS2C {
    const obj = new PlayerStatisticS2C();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // 打点数据 zd:(第一次战斗 0否1是), js:(第一次结算 0否1是) 
  public data: string;
}
export class PlayerStatisticUpdateS2C {
  public static EVENT_NAME: string = "PlayerStatisticUpdateS2C";

  public static decode(byteArray: ByteArray): PlayerStatisticUpdateS2C {
    const obj = new PlayerStatisticUpdateS2C();
    obj.data = byteArray.readUTF();
    return obj;
  }

  // 打点数据 zd:(第一次战斗 0否1是), js:(第一次结算 0否1是) 
  public data: string;
}
export class PlayerLvlRewardS2C {
  public static EVENT_NAME: string = "PlayerLvlRewardS2C";

  public static decode(byteArray: ByteArray): PlayerLvlRewardS2C {
    const obj = new PlayerLvlRewardS2C();
    return obj;
  }

}
export class PlayerFirstBattleS2C {
  public static EVENT_NAME: string = "PlayerFirstBattleS2C";

  public static decode(byteArray: ByteArray): PlayerFirstBattleS2C {
    const obj = new PlayerFirstBattleS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 是否使用过临时5倍战斗 0否 1是
  public status: Uint8;
}
