// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class PaymentCommitOrderC2S implements IProtoMsgC2S {

  private static EncryptIndex: Uint8 = 0;
  // 商品id
  public id: Uint32;
  private MSG_ID: Uint16 = 9986;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedInt(this.id);
    const index = (PaymentCommitOrderC2S.EncryptIndex + 1) % ProtoCrypto.KeyMask;
    PaymentCommitOrderC2S.EncryptIndex = index;
    return ProtoCrypto.encode(index, this.MSG_ID, byteArray);
  }
}
export class PaymentFinishOrderC2S implements IProtoMsgC2S {

  private static EncryptIndex: Uint8 = 0;
  // 游戏订单
  public orderNo: string;
  // 参数1 支付环境 测试 正式
  public param1: string;
  // 参数2 商品id
  public param2: string;
  // 参数3 第三方订单号
  public param3: string;
  // 参数4 第三方票据
  public param4: string;
  // 参数5
  public param5: string;
  private MSG_ID: Uint16 = 9989;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUTF(this.orderNo);
    byteArray.writeUTF(this.param1);
    byteArray.writeUTF(this.param2);
    byteArray.writeUTF(this.param3);
    byteArray.writeUTF(this.param4);
    byteArray.writeUTF(this.param5);
    const index = (PaymentFinishOrderC2S.EncryptIndex + 1) % ProtoCrypto.KeyMask;
    PaymentFinishOrderC2S.EncryptIndex = index;
    return ProtoCrypto.encode(index, this.MSG_ID, byteArray);
  }
}
export class PaymentAchieveListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 9995;

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
export class PaymentGainAchieveC2S implements IProtoMsgC2S {

  // 成就Id
  public id: Uint32;
  private MSG_ID: Uint16 = 9997;

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

export class PaymentInfoS2C {
  public static EVENT_NAME: string = "PaymentInfoS2C";

  public static decode(byteArray: ByteArray): PaymentInfoS2C {
    const obj = new PaymentInfoS2C();
    let len;
    obj.product = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.product.push(ProtoType.PBuy.decode(byteArray));
    }
    return obj;
  }

  // 已经充值购买的id列表
  public product: ProtoType.PBuy[];
}
export class PaymentCommitOrderS2C {
  public static EVENT_NAME: string = "PaymentCommitOrderS2C";

  public static decode(byteArray: ByteArray): PaymentCommitOrderS2C {
    const obj = new PaymentCommitOrderS2C();
    obj.code = byteArray.readUnsignedShort();
    obj.id = byteArray.readUnsignedInt();
    obj.orderNo = byteArray.readUTF();
    return obj;
  }

  // 错误码 (0成功 其他失败错误码)
  public code: Uint16;
  // 商品id
  public id: Uint32;
  // 订单号
  public orderNo: string;
}
export class PaymentNotifyS2C {
  public static EVENT_NAME: string = "PaymentNotifyS2C";

  public static decode(byteArray: ByteArray): PaymentNotifyS2C {
    const obj = new PaymentNotifyS2C();
    obj.code = byteArray.readUnsignedShort();
    obj.id = byteArray.readUnsignedInt();
    obj.amount = byteArray.readUnsignedInt();
    obj.orderNo = byteArray.readUTF();
    return obj;
  }

  // 错误码 (0成功 其他失败错误码)
  public code: Uint16;
  // 商品id
  public id: Uint32;
  // 实际支付金额 单位分
  public amount: Uint32;
  // 订单号
  public orderNo: string;
}
export class PaymentUpdateS2C {
  public static EVENT_NAME: string = "PaymentUpdateS2C";

  public static decode(byteArray: ByteArray): PaymentUpdateS2C {
    const obj = new PaymentUpdateS2C();
    let len;
    obj.product = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.product.push(ProtoType.PBuy.decode(byteArray));
    }
    return obj;
  }

  // 已经充值购买的id列表
  public product: ProtoType.PBuy[];
}
export class PaymentFinishOrderS2C {
  public static EVENT_NAME: string = "PaymentFinishOrderS2C";

  public static decode(byteArray: ByteArray): PaymentFinishOrderS2C {
    const obj = new PaymentFinishOrderS2C();
    obj.code = byteArray.readUnsignedShort();
    obj.orderNo = byteArray.readUTF();
    return obj;
  }

  // 错误码 (0成功 其他失败错误码)
  public code: Uint16;
  // 游戏订单
  public orderNo: string;
}
export class PaymentAchieveListS2C {
  public static EVENT_NAME: string = "PaymentAchieveListS2C";

  public static decode(byteArray: ByteArray): PaymentAchieveListS2C {
    const obj = new PaymentAchieveListS2C();
    let len;
    obj.payAchieve = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.payAchieve.push(ProtoType.PPayAchieve.decode(byteArray));
    }
    return obj;
  }

  // 支付累计成就列表
  public payAchieve: ProtoType.PPayAchieve[];
}
export class PaymentAchieveUpdateS2C {
  public static EVENT_NAME: string = "PaymentAchieveUpdateS2C";

  public static decode(byteArray: ByteArray): PaymentAchieveUpdateS2C {
    const obj = new PaymentAchieveUpdateS2C();
    let len;
    obj.payAchieve = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.payAchieve.push(ProtoType.PPayAchieve.decode(byteArray));
    }
    return obj;
  }

  // 支付累计成就列表
  public payAchieve: ProtoType.PPayAchieve[];
}
export class PaymentGainAchieveS2C {
  public static EVENT_NAME: string = "PaymentGainAchieveS2C";

  public static decode(byteArray: ByteArray): PaymentGainAchieveS2C {
    const obj = new PaymentGainAchieveS2C();
    obj.data = byteArray.readUTF();
    obj.payAchieve = ProtoType.PPayAchieve.decode(byteArray);
    return obj;
  }

  // 游戏奖励随机技能
  public data: string;
  // 支付累计成就列表
  public payAchieve: ProtoType.PPayAchieve;
}
