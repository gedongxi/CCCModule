// Auto Generated. Please don't change manually!

/// <reference path="../../commonUnit/NetByteArray.ts">

import { ByteArray } from "../../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, IProtoMsgC2S, Uint16, Uint32, Uint64, Uint8 } from "../ProtoDefine";
import * as ProtoType from "../ProtoType";
import * as ProtoCrypto from "../ProtoCrypto";

export class PropertyPracticeC2S implements IProtoMsgC2S {

  // 属性id
  public id: Uint16;
  private MSG_ID: Uint16 = 6401;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.id);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PropertyListC2S implements IProtoMsgC2S {

  private MSG_ID: Uint16 = 6404;

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
export class PropertyFindC2S implements IProtoMsgC2S {

  // 属性id列表
  public id: Uint16[];
  private MSG_ID: Uint16 = 6405;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);    let len;

    len = this.id.length;
    byteArray.writeUnsignedShort(len);
    for (let i = 0; i < len; i++) {
      byteArray.writeUnsignedShort(this.id[i]);
    }
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}
export class PropertyUpLvlC2S implements IProtoMsgC2S {

  // 属性id
  public id: Uint16;
  // 1花费金钱 2看广告
  public type: Uint8;
  private MSG_ID: Uint16 = 6407;

  public encode(): ByteArray {
    const byteArray = new ByteArray();

    byteArray.writeUnsignedShort(0);
    byteArray.writeByte(0);
    byteArray.writeUnsignedShort(this.MSG_ID);
    byteArray.writeUnsignedShort(this.id);
    byteArray.writeByte(this.type);
    byteArray.position = 0;
    byteArray.writeUnsignedShort(byteArray.length - 2);
    return byteArray;
  }

}

export class PropertyPracticeS2C {
  public static EVENT_NAME: string = "PropertyPracticeS2C";

  public static decode(byteArray: ByteArray): PropertyPracticeS2C {
    const obj = new PropertyPracticeS2C();
    obj.property = ProtoType.PPracticeProperty.decode(byteArray);
    return obj;
  }

  // 属性
  public property: ProtoType.PPracticeProperty;
}
export class PropertyPracticeListS2C {
  public static EVENT_NAME: string = "PropertyPracticeListS2C";

  public static decode(byteArray: ByteArray): PropertyPracticeListS2C {
    const obj = new PropertyPracticeListS2C();
    let len;
    obj.property = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.property.push(ProtoType.PPracticeProperty.decode(byteArray));
    }
    return obj;
  }

  // 属性
  public property: ProtoType.PPracticeProperty[];
}
export class PropertyPracticeUpdateS2C {
  public static EVENT_NAME: string = "PropertyPracticeUpdateS2C";

  public static decode(byteArray: ByteArray): PropertyPracticeUpdateS2C {
    const obj = new PropertyPracticeUpdateS2C();
    let len;
    obj.property = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.property.push(ProtoType.PPracticeProperty.decode(byteArray));
    }
    return obj;
  }

  // 属性
  public property: ProtoType.PPracticeProperty[];
}
export class PropertyListS2C {
  public static EVENT_NAME: string = "PropertyListS2C";

  public static decode(byteArray: ByteArray): PropertyListS2C {
    const obj = new PropertyListS2C();
    let len;
    obj.property = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.property.push(ProtoType.PProperty.decode(byteArray));
    }
    return obj;
  }

  // 所有属性
  public property: ProtoType.PProperty[];
}
export class PropertyFindS2C {
  public static EVENT_NAME: string = "PropertyFindS2C";

  public static decode(byteArray: ByteArray): PropertyFindS2C {
    const obj = new PropertyFindS2C();
    let len;
    obj.property = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.property.push(ProtoType.PProperty.decode(byteArray));
    }
    return obj;
  }

  // 属性
  public property: ProtoType.PProperty[];
}
export class PropertyUpdateS2C {
  public static EVENT_NAME: string = "PropertyUpdateS2C";

  public static decode(byteArray: ByteArray): PropertyUpdateS2C {
    const obj = new PropertyUpdateS2C();
    let len;
    obj.property = new Array();
    len = byteArray.readShort();
    for (let i = 0; i < len; i++) {
      obj.property.push(ProtoType.PProperty.decode(byteArray));
    }
    return obj;
  }

  // 属性
  public property: ProtoType.PProperty[];
}
export class PropertyUpLvlS2C {
  public static EVENT_NAME: string = "PropertyUpLvlS2C";

  public static decode(byteArray: ByteArray): PropertyUpLvlS2C {
    const obj = new PropertyUpLvlS2C();
    obj.property = ProtoType.PPracticeProperty.decode(byteArray);
    return obj;
  }

  // 属性
  public property: ProtoType.PPracticeProperty;
}
export class PropertyUpdateAllS2C {
  public static EVENT_NAME: string = "PropertyUpdateAllS2C";

  public static decode(byteArray: ByteArray): PropertyUpdateAllS2C {
    const obj = new PropertyUpdateAllS2C();
    obj.allProperty = byteArray.readUTF();
    return obj;
  }

  // 所有属性
  public allProperty: string;
}
