// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class GoodsInShopC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 5120;

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

export class GoodsInShopS2C {
  public static EVENT_NAME: string = "GoodsInShopS2C";

  public static decode(byteArray: ByteArray): GoodsInShopS2C {
    const obj = new GoodsInShopS2C();
    let len;
    obj.propsList = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.propsList.push(ProtoType.PGoods.decode(byteArray));
    }
    return obj;
  }

  // 道具列表
  public propsList: ProtoType.PGoods[];
}
export class GoodsPropsUpdateS2C {
  public static EVENT_NAME: string = "GoodsPropsUpdateS2C";

  public static decode(byteArray: ByteArray): GoodsPropsUpdateS2C {
    const obj = new GoodsPropsUpdateS2C();
    let len;
    obj.data = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.data.push(ProtoType.PGoods.decode(byteArray));
    }
    return obj;
  }

  // 道具列表
  public data: ProtoType.PGoods[];
}
export class GoodsPropsCountS2C {
  public static EVENT_NAME: string = "GoodsPropsCountS2C";

  public static decode(byteArray: ByteArray): GoodsPropsCountS2C {
    const obj = new GoodsPropsCountS2C();
    let len;
    obj.data = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.data.push(ProtoType.PGoods.decode(byteArray));
    }
    return obj;
  }

  // 变化列表
  public data: ProtoType.PGoods[];
}
