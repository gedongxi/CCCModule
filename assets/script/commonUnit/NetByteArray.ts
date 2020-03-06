// 字段大小端定义
export class Endian {
  public static ENDIAN_LITTLE: string = "littleEndian";
  public static ENDIAN_BIG: string = "bigEndian";
}

// 字段大小端枚举
export const enum EndianConst {
  ENDIAN_LITTLE = 0,
  ENDIAN_BIG = 1,
}

// 类型字节大小
const enum ByteArraySize {
  SIZE_OF_BOOLEAN = 1,
  SIZE_OF_INT8 = 1,
  SIZE_OF_INT16 = 2,
  SIZE_OF_INT32 = 4,
  SIZE_OF_UINT8 = 1,
  SIZE_OF_UINT16 = 2,
  SIZE_OF_UINT32 = 4,
  SIZE_OF_FLOAT32 = 4,
  SIZE_OF_FLOAT64 = 8,
}

export class ByteArray {
  protected bufferExtSize = 0;
  protected data: DataView;
  protected bufBytes: Uint8Array;
  protected curPosition: number;
  protected writePosition: number; // 已经使用的字节偏移
  protected $endian: EndianConst;  // 字节大小端
  protected $isLittleEndian: boolean;

  private EOF_BYTE: number = -1;
  private EOF_CODE_POINT: number = -1;

  public get endian() {
    return this.$endian === EndianConst.ENDIAN_LITTLE ? Endian.ENDIAN_LITTLE : Endian.ENDIAN_BIG;
  }
  public set endian(value: string) {
    this.$endian = value === Endian.ENDIAN_LITTLE ? EndianConst.ENDIAN_LITTLE : EndianConst.ENDIAN_BIG;
    this.$isLittleEndian = this.$endian === EndianConst.ENDIAN_LITTLE;
  }

  constructor(buffer?: Uint8Array | ArrayBuffer, bufExtSize = 0) {
    if (bufExtSize < 0) {
      bufExtSize = 0;
    }
    this.bufferExtSize = bufExtSize;

    let bytes: Uint8Array;
    let wpos = 0;
    if (buffer) {
      let arrUnit8: Uint8Array;
      if (buffer instanceof Uint8Array) {
        arrUnit8 = buffer;
        wpos = buffer.length;
      } else {
        // 获取uint8 array的视图
        arrUnit8 = new Uint8Array(buffer);
        wpos = buffer.byteLength;
      }
      // 计算bytes
      if (bufExtSize === 0) {
        bytes = new Uint8Array(wpos);
      } else {
        const multi = ((wpos / bufExtSize) | 0) + 1;
        bytes = new Uint8Array(bufExtSize * multi);
      }
      // 拷贝已有的数据
      bytes.set(arrUnit8);
    } else {
      bytes = new Uint8Array(bufExtSize);
    }

    this.writePosition = wpos;
    this.curPosition = 0;
    this.bufBytes = bytes;
    this.data = new DataView(bytes.buffer);
    this.endian = Endian.ENDIAN_BIG;
  }

  public get readAvailable() {
    return this.writePosition - this.curPosition;
  }

  public get buffer(): ArrayBuffer {
    return this.data.buffer.slice(0, this.writePosition);
  }

  public set buffer(value: ArrayBuffer) {
    const wpos = value.byteLength;
    const arrUnit8 = new Uint8Array(value);
    const bufExtSize = this.bufferExtSize;
    let bytes: Uint8Array;

    if (bufExtSize === 0) {
      bytes = new Uint8Array(wpos);
    } else {
      const multi = (wpos / bufExtSize | 0) + 1;
      bytes = new Uint8Array(multi * bufExtSize);
    }
    bytes.set(arrUnit8);
    this.writePosition = wpos;
    this.bufBytes = bytes;
    this.data = new DataView(bytes.buffer);
  }

  public get rawBuffer(): ArrayBuffer {
    return this.data.buffer;
  }

  public get bytes(): Uint8Array {
    return this.bufBytes;
  }

  public get dataView(): DataView {
    return this.data;
  }

  public get bufferOffset(): number {
    return this.data.byteOffset;
  }

  public get position(): number {
    return this.curPosition;
  }

  public set position(value: number) {
    this.curPosition = value;
    if (value > this.writePosition) {
      this.writePosition = value;
    }
  }

  public get length(): number {
    return this.writePosition;
  }

  public set length(value: number) {
    this.writePosition = value;
    if (this.data.byteLength > value) {
      this.curPosition = value;
    }

    this._validateBuffer(value);
  }

  public get bytesAvailable(): number {
    return this.data.byteLength - this.curPosition;
  }

  public clear(): void {
    const buffer = new ArrayBuffer(this.bufferExtSize);
    this.data = new DataView(buffer);
    this.bufBytes = new Uint8Array(buffer);
    this.curPosition = 0;
    this.writePosition = 0;
  }

  public validate(len: number): boolean {
    const bl = this.bufBytes.length;
    if (bl > 0 && this.curPosition + len <= bl) {
      return true;
    } else {
      DyGame.$error(1);
    }
  }

  public readBoolean(): boolean {
    if (this.validate(ByteArraySize.SIZE_OF_BOOLEAN)) {
      return !!this.bufBytes[this.position++];
    }
  }

  public readByte(): number {
    if (this.validate(ByteArraySize.SIZE_OF_INT8)) {
      return this.data.getInt8(this.position++);
    }
  }

  // 读取字节内容 并写入到目标缓存
  public readBytes(dstBuffer: ByteArray, offset: number = 0, length: number = 0): void {
    if (!dstBuffer) {
      return;
    }

    const pos = this.curPosition;
    const available = this.writePosition - pos;
    if (available < 0) {
      DyGame.$error(1);
      return;
    }
    if (length === 0) {
      length = available;
    } else if (length > available) {
      DyGame.$error(1);
      return;
    }

    const position = dstBuffer.curPosition;
    dstBuffer.curPosition = 0; // 此处设为0 是想dstBuffer的长度就是offset + length
    dstBuffer.validateBuffer(offset + length);
    dstBuffer.curPosition = position;
    dstBuffer.bufBytes.set(this.bufBytes.subarray(pos, pos + length), offset); // 拷贝字节

    this.position += length; // 修改读取游标
  }

  public readDouble(): number {
    const low = this.readUnsignedInt();
    const high = this.readUnsignedInt();
    return low * 0x100000000 + high;
  }

  public readFloat(): number {
    if (this.validate(ByteArraySize.SIZE_OF_FLOAT32)) {
      const value = this.data.getFloat32(this.curPosition, this.$isLittleEndian);
      this.position += ByteArraySize.SIZE_OF_FLOAT32;
      return value;
    }
  }

  public readInt(): number {
    if (this.validate(ByteArraySize.SIZE_OF_INT32)) {
      const value = this.data.getInt32(this.curPosition, this.$isLittleEndian);
      this.position += ByteArraySize.SIZE_OF_INT32;
      return value;
    }
  }

  public readShort(): number {
    if (this.validate(ByteArraySize.SIZE_OF_INT16)) {
      const value = this.data.getInt16(this.curPosition, this.$isLittleEndian);
      this.position += ByteArraySize.SIZE_OF_INT16;
      return value;
    }
  }

  public readUnsignedByte(): number {
    if (this.validate(ByteArraySize.SIZE_OF_UINT8)) {
      return this.bufBytes[this.position++];
    }
  }

  public readUnsignedInt(): number {
    if (this.validate(ByteArraySize.SIZE_OF_UINT32)) {
      const value = this.data.getUint32(this.position, this.$isLittleEndian);
      this.position += ByteArraySize.SIZE_OF_UINT32;
      return value;
    }
  }

  public readUnsignedShort(): number {
    if (this.validate(ByteArraySize.SIZE_OF_UINT16)) {
      const value = this.data.getUint16(this.position, this.$isLittleEndian);
      this.position += ByteArraySize.SIZE_OF_UINT16;
      return value;
    }
  }

  public readUTF(): string {
    const length = this.readUnsignedShort();
    if (length > 0) {
      return this.readUTFBytes(length);
    } else {
      return "";
    }
  }

  public readUTFBytes(length: number): string {
    if (!this.validate(length)) {
      return;
    }
    const data = this.data;
    const bytes = new Uint8Array(data.buffer, data.byteOffset + this.curPosition, length);
    this.position += length;
    return this.decodeUTF8(bytes);
  }

  public writeBoolean(value: boolean): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_BOOLEAN);
    this.bufBytes[this.position++] = +value;
  }

  public writeByte(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_INT8);
    this.bufBytes[this.position++] = value & 0xff;
  }

  public writeBytes(bytesArr: ByteArray, offset: number, length: number): void {
    let writeLength: number;
    if (offset < 0) {
      return;
    }
    if (length < 0) {
      return;
    }

    if (length === 0) {
      writeLength = bytesArr.length - offset;
    } else {
      writeLength = Math.min(bytesArr.length - offset, length);
    }

    if (writeLength > 0) {
      this.validateBuffer(writeLength);
      this.bufBytes.set(bytesArr.bufBytes.subarray(offset, writeLength), this.curPosition);
      this.position = this.curPosition + writeLength;
    }
  }

  public writeDouble(value: number): void {
    const low = Math.floor(value / 0x100000000);
    this.writeUnsignedInt(low);
    this.writeUnsignedInt(((value & 0xffffffff) >>> 0));
  }

  public writeFloat(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_FLOAT32);
    this.data.setFloat32(this.curPosition, value, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_FLOAT32;
  }

  public writeInt(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_INT32);
    this.data.setInt32(this.curPosition, value, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_INT32;
  }

  public writeShort(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_INT16);
    this.data.setInt16(this.curPosition, value, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_INT16;
  }

  public writeUnsignedInt(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_UINT32);
    this.data.setUint32(this.curPosition, value, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_UINT32;
  }

  public writeUnsignedShort(value: number): void {
    this.validateBuffer(ByteArraySize.SIZE_OF_UINT16);
    this.data.setUint16(this.curPosition, value, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_UINT16;
  }

  public writeUTF(value: string): void {
    const utf8Bytes: ArrayLike<number> = this.encodeUTF8(value);
    const length: number = utf8Bytes.length;
    this.validateBuffer(ByteArraySize.SIZE_OF_UINT16 + length);
    this.data.setUint16(this.curPosition, length, this.$isLittleEndian);
    this.position += ByteArraySize.SIZE_OF_UINT16;
    this._writeUint8Array(utf8Bytes, false);
  }

  public writeUTFBytes(value: string): void {
    this._writeUint8Array(this.encodeUTF8(value));
  }

  public toString(): string {
    return "[ByteArray] length:" + this.length + ", bytesAvailable:" + this.bytesAvailable;
  }

  public _writeUint8Array(bytes: Uint8Array | ArrayLike<number>, validateBuffer: boolean = true): void {
    const pos = this.curPosition;
    const npos = pos + bytes.length;
    if (validateBuffer) {
      this.validateBuffer(npos);
    }
    this.bytes.set(bytes, pos);
    this.position = npos;
  }

  protected validateBuffer(len: number): void {
    // this.writePosition = len > this.writePosition ? len : this.writePosition;
    this.writePosition = Math.max(this.writePosition, len);
    len += this.curPosition;
    this._validateBuffer(len);
  }

  protected _validateBuffer(value: number) {
    if (this.data.byteLength < value) {
      const bufExt = this.bufferExtSize;
      let tmp: Uint8Array;
      if (bufExt === 0) {
        tmp = new Uint8Array(value);
      } else {
        const nLen = (((value / bufExt) >> 0) + 1) * bufExt;
        tmp = new Uint8Array(nLen);
      }
      tmp.set(this.bufBytes);
      this.bufBytes = tmp;
      this.data = new DataView(tmp.buffer);
    }
  }

  private inRange(a, min, max) {
    return min <= a && a <= max;
  }

  private div(n, d) {
    return Math.floor(n / d);
  }

  private encoderError(codePoint) {
    DyGame.$error(1026, codePoint);
  }

  private decoderError(fatal, optCodePoint?): number {
    if (fatal) {
      DyGame.$error(1);
    }
    return optCodePoint || 0xFFFD;
  }

  private encodeUTF8(str: string): Uint8Array {
    let pos: number = 0;
    const codePoints = this.stringToCodePoints(str);
    const outputBytes = [];

    while (codePoints.length > pos) {
      const codePoint: number = codePoints[pos++];

      if (this.inRange(codePoint, 0xD800, 0xDFFF)) {
        this.encoderError(codePoint);
      } else if (this.inRange(codePoint, 0x0000, 0x007f)) {
        outputBytes.push(codePoint);
      } else {
        let count;
        let offset;
        if (this.inRange(codePoint, 0x0080, 0x07FF)) {
          count = 1;
          offset = 0xC0;
        } else if (this.inRange(codePoint, 0x0800, 0xFFFF)) {
          count = 2;
          offset = 0xE0;
        } else if (this.inRange(codePoint, 0x10000, 0x10FFFF)) {
          count = 3;
          offset = 0xF0;
        }

        outputBytes.push(this.div(codePoint, Math.pow(64, count)) + offset);

        while (count > 0) {
          const temp = this.div(codePoint, Math.pow(64, count - 1));
          outputBytes.push(0x80 + (temp % 64));
          count -= 1;
        }
      }
    }
    return new Uint8Array(outputBytes);
  }

  private decodeUTF8(data: Uint8Array): string {
    const fatal: boolean = false;
    let pos: number = 0;
    let result: string = "";
    let codePoint: number;
    let utf8CodePoint = 0;
    let utf8BytesNeeded = 0;
    let utf8BytesSeen = 0;
    let utf8LowerBoundary = 0;

    while (data.length > pos) {
      const curByte = data[pos++];

      if (curByte === this.EOF_BYTE) {
        if (utf8BytesNeeded !== 0) {
          codePoint = this.decoderError(fatal);
        } else {
          codePoint = this.EOF_CODE_POINT;
        }
      } else {

        if (utf8BytesNeeded === 0) {
          if (this.inRange(curByte, 0x00, 0x7F)) {
            codePoint = curByte;
          } else {
            if (this.inRange(curByte, 0xC2, 0xDF)) {
              utf8BytesNeeded = 1;
              utf8LowerBoundary = 0x80;
              utf8CodePoint = curByte - 0xC0;
            } else if (this.inRange(curByte, 0xE0, 0xEF)) {
              utf8BytesNeeded = 2;
              utf8LowerBoundary = 0x800;
              utf8CodePoint = curByte - 0xE0;
            } else if (this.inRange(curByte, 0xF0, 0xF4)) {
              utf8BytesNeeded = 3;
              utf8LowerBoundary = 0x10000;
              utf8CodePoint = curByte - 0xF0;
            } else {
              this.decoderError(fatal);
            }
            utf8CodePoint = utf8CodePoint * Math.pow(64, utf8BytesNeeded);
            codePoint = null;
          }
        } else if (!this.inRange(curByte, 0x80, 0xBF)) {
          utf8CodePoint = 0;
          utf8BytesNeeded = 0;
          utf8BytesSeen = 0;
          utf8LowerBoundary = 0;
          pos--;
          codePoint = this.decoderError(fatal, curByte);
        } else {

          utf8BytesSeen += 1;
          utf8CodePoint = utf8CodePoint + (curByte - 0x80) * Math.pow(64, utf8BytesNeeded - utf8BytesSeen);

          if (utf8BytesSeen !== utf8BytesNeeded) {
            codePoint = null;
          } else {
            const cp = utf8CodePoint;
            const lowerBoundary = utf8LowerBoundary;
            utf8CodePoint = 0;
            utf8BytesNeeded = 0;
            utf8BytesSeen = 0;
            utf8LowerBoundary = 0;
            if (this.inRange(cp, lowerBoundary, 0x10FFFF) && !this.inRange(cp, 0xD800, 0xDFFF)) {
              codePoint = cp;
            } else {
              codePoint = this.decoderError(fatal, curByte);
            }
          }
        }
      }

      // Decode string
      if (codePoint !== null && codePoint !== this.EOF_CODE_POINT) {
        if (codePoint <= 0xFFFF) {
          if (codePoint > 0) {
            result += String.fromCharCode(codePoint);
          }
        } else {
          codePoint -= 0x10000;
          result += String.fromCharCode(0xD800 + ((codePoint >> 10) & 0x3ff));
          result += String.fromCharCode(0xDC00 + (codePoint & 0x3ff));
        }
      }
    }
    return result;
  }

  private stringToCodePoints(content: string) {
    /** @type {Array.<number>} */
    const cps = [];
    // Based on http://www.w3.org/TR/WebIDL/#idl-DOMString
    let i = 0;
    const n = content.length;
    while (i < content.length) {
      const c = content.charCodeAt(i);
      if (!this.inRange(c, 0xD800, 0xDFFF)) {
        cps.push(c);
      } else if (this.inRange(c, 0xDC00, 0xDFFF)) {
        cps.push(0xFFFD);
      } else { // (inRange(c, 0xD800, 0xDBFF))
        if (i === n - 1) {
          cps.push(0xFFFD);
        } else {
          const d = content.charCodeAt(i + 1);
          if (this.inRange(d, 0xDC00, 0xDFFF)) {
            const a = c & 0x3FF;
            const b = d & 0x3FF;
            i += 1;
            cps.push(0x10000 + (a << 10) + b);
          } else {
            cps.push(0xFFFD);
          }
        }
      }
      i += 1;
    }
    return cps;
  }
}
