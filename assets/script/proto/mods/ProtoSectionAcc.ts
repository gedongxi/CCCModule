// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class AccLoginC2S implements IProtoMsgC2S {

  // 平台名字
  public platform: string;
  // 游戏的账号Id
  public gameAccountId: string;
  // 游戏的账号Id的签名
  public gameAccountSign: string;
  // 渠道的用户id
  public channelOpenId: string;
  // 渠道其他参数
  public channelParam: string;
  // mode
  public mode: Uint8;
  private MSG_ID: Uint16 = 2560;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.platform);
    byteArray.writeUTF(this.gameAccountId);
    byteArray.writeUTF(this.gameAccountSign);
    byteArray.writeUTF(this.channelOpenId);
    byteArray.writeUTF(this.channelParam);
    byteArray.writeByte(this.mode);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AccCreateC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 2562;

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
export class AccCreateWithParamsC2S implements IProtoMsgC2S {

  // 头像Id
  public head: Uint8;
  // 性别
  public sex: Uint8;
  // 角色名字
  public name: string;
  // Json字符串
  public params: string;
  private MSG_ID: Uint16 = 2563;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeByte(this.head);
    byteArray.writeByte(this.sex);
    byteArray.writeUTF(this.name);
    byteArray.writeUTF(this.params);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AccEnterC2S implements IProtoMsgC2S {

  // 角色id
  public id: Uint64;
  private MSG_ID: Uint16 = 2564;

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
export class AccReloginC2S implements IProtoMsgC2S {

  // 平台名字
  public platform: string;
  // 游戏角色账号Id
  public gameAccountId: string;
  // 游戏角色账号签名
  public gameAccountSign: string;
  // 玩家Id
  public id: Uint64;
  // 参数
  public channelParam: string;
  private MSG_ID: Uint16 = 2566;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.platform);
    byteArray.writeUTF(this.gameAccountId);
    byteArray.writeUTF(this.gameAccountSign);
    byteArray.writeDouble(this.id);
    byteArray.writeUTF(this.channelParam);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class AccServertimeC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 2567;

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
export class AccAuthUserInfoC2S implements IProtoMsgC2S {

  // 用户基本信息的Json字符串
  public params: string;
  private MSG_ID: Uint16 = 2572;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUTF(this.params);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class AccLoginS2C {
  public static EVENT_NAME: string = "AccLoginS2C";

  public static decode(byteArray: ByteArray): AccLoginS2C {
    const obj = new AccLoginS2C();
    obj.code = byteArray.readUnsignedShort();
    obj.id = byteArray.readDouble();
    obj.channelOpenId = byteArray.readUTF();
    obj.gameAccountId = byteArray.readUTF();
    obj.gameAccountSign = byteArray.readUTF();
    obj.gameLoginKey = byteArray.readUTF();
    return obj;
  }

  // 错误码(0成功，其他:失败错误码)
  public code: Uint16;
  // 角色id
  public id: Uint64;
  // 运营平台的用户id
  public channelOpenId: string;
  // 游戏的账号Id
  public gameAccountId: string;
  // 游戏的账号Id的签名
  public gameAccountSign: string;
  // 登陆key 用于重登陆时发送
  public gameLoginKey: string;
}
export class AccCreateS2C {
  public static EVENT_NAME: string = "AccCreateS2C";

  public static decode(byteArray: ByteArray): AccCreateS2C {
    const obj = new AccCreateS2C();
    obj.code = byteArray.readUnsignedShort();
    obj.id = byteArray.readDouble();
    return obj;
  }

  // 错误码
  public code: Uint16;
  // 角色id
  public id: Uint64;
}
export class AccEnterS2C {
  public static EVENT_NAME: string = "AccEnterS2C";

  public static decode(byteArray: ByteArray): AccEnterS2C {
    const obj = new AccEnterS2C();
    obj.code = byteArray.readUnsignedShort();
    return obj;
  }

  // 错误码
  public code: Uint16;
}
export class AccKickOfflineS2C {
  public static EVENT_NAME: string = "AccKickOfflineS2C";

  public static decode(byteArray: ByteArray): AccKickOfflineS2C {
    const obj = new AccKickOfflineS2C();
    obj.content = byteArray.readUTF();
    return obj;
  }

  // 提示信息
  public content: string;
}
export class AccReloginS2C {
  public static EVENT_NAME: string = "AccReloginS2C";

  public static decode(byteArray: ByteArray): AccReloginS2C {
    const obj = new AccReloginS2C();
    obj.code = byteArray.readUnsignedShort();
    return obj;
  }

  // 错误码(0成功,1失败)
  public code: Uint16;
}
export class AccServertimeS2C {
  public static EVENT_NAME: string = "AccServertimeS2C";

  public static decode(byteArray: ByteArray): AccServertimeS2C {
    const obj = new AccServertimeS2C();
    obj.time = byteArray.readUnsignedInt();
    return obj;
  }

  // 服务器时间
  public time: Uint32;
}
export class AccBanS2C {
  public static EVENT_NAME: string = "AccBanS2C";

  public static decode(byteArray: ByteArray): AccBanS2C {
    const obj = new AccBanS2C();
    obj.reason = byteArray.readUnsignedByte();
    obj.endTime = byteArray.readUnsignedInt();
    return obj;
  }

  // 原因 1:账号 2:IP
  public reason: Uint8;
  // 结束时间戳
  public endTime: Uint32;
}
export class AccMaintainS2C {
  public static EVENT_NAME: string = "AccMaintainS2C";

  public static decode(byteArray: ByteArray): AccMaintainS2C {
    const obj = new AccMaintainS2C();
    obj.state = byteArray.readUnsignedShort();
    obj.desc = byteArray.readUTF();
    return obj;
  }

  // 状态码1 维护中
  public state: Uint16;
  // 描述
  public desc: string;
}
export class AccAuthUserInfoS2C {
  public static EVENT_NAME: string = "AccAuthUserInfoS2C";

  public static decode(byteArray: ByteArray): AccAuthUserInfoS2C {
    const obj = new AccAuthUserInfoS2C();
    return obj;
  }

}
export class AccGuestS2C {
  public static EVENT_NAME: string = "AccGuestS2C";

  public static decode(byteArray: ByteArray): AccGuestS2C {
    const obj = new AccGuestS2C();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 1游客(未授权)  0授权用户
  public status: Uint8;
}
export class AccAccountS2C {
  public static EVENT_NAME: string = "AccAccountS2C";

  public static decode(byteArray: ByteArray): AccAccountS2C {
    const obj = new AccAccountS2C();
    obj.info = byteArray.readUTF();
    return obj;
  }

  // 用户账号的的Json字符串account sign
  public info: string;
}
