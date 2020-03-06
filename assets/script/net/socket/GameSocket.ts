import { SOCKET_CLOSE, SOCKET_CONNECT, SOCKET_DATA, SOCKET_ERROR as SOCKET_ERROR } from "./SocketDefine";
import { ByteArray } from "../../commonUnit/NetByteArray";
import Misc from "../../commonUnit/Misc";
import EventUtil from "../../event/EventUtil";

export default class GameSocket {
  public static TYPE_STRING: string = "webSocketTypeString";
  public static TYPE_BINARY: string = "webSocketTypeBinary";

  // public node: cc.Node; // 用于派发事件的节点

  private webSocket: WebSocket = null;

  // 对于文本类型的socket数据时 写入内容暂存数据
  private writeMessage: string = "";
  // 对于文本类型的socket数据是 读取内容暂存数据
  private readMessage: string = "";

  // 读取缓存 从socket读取数据
  private readBuffer: ByteArray;
  // 写入缓存 往socket写入数据
  private writeBuffer: ByteArray;

  // 是否已有字节写入
  private isBytesWritten: boolean = false;
  // 是否已经连接
  private isConnected: boolean = false;
  // 是否正在进行连接
  private isConnecting: boolean = false;

  // socket数据类型
  private socketType: string = GameSocket.TYPE_STRING;

  private host: string = "";
  private port: number = 0;
  private url: string = "";

  constructor() {
    // super();

    this.isConnected = false;
    this.writeMessage = "";
    this.readMessage = "";
    // this.node = new cc.Node("dygame-websocket");
  }

  public get type(): string {
    return this.socketType;
  }

  public set type(value: string) {
    this.socketType = value;
    if (value === GameSocket.TYPE_BINARY && !this.writeBuffer) {
      this.readBuffer  = new ByteArray();
      this.writeBuffer = new ByteArray();
    }
  }

  // socket 是否已经连接
  public get connected(): boolean {
    return this.isConnected;
  }

  // 指定host和port进行连接
  public connect(host: string, port: number) {
    console.log("GameSocket connect", host, port, this.isConnecting, this.isConnected);
    if (!this.isConnecting && !this.isConnected) {
      this.isConnecting = true;
      this.host = host;
      this.port = port;
      this.url  = "";
      const socketServerUrl = "ws://" + this.host + ":" + this.port;
      this.webSocket = new WebSocket(socketServerUrl);
      this.webSocket.binaryType = "arraybuffer";
      this.bindEvent();
    }
  }

  // 根据url连接服务器
  public connectByUrl(url: string): void {
    console.log("GameSocket connectByUrl", this.isConnecting, this.isConnected);
    if (!this.isConnecting && !this.isConnected) {
      this.isConnecting = true;
      this.host = "";
      this.port = 0;
      this.url  = url;
      this.webSocket = new WebSocket(this.url);
      this.webSocket.binaryType = "arraybuffer";
      this.bindEvent();
    }
  }

  // 关闭socket连接
  public close(): void {
    if (this.isConnected) {
      this.webSocket.close();
    }
  }

  // 立即往socket写入数据
  public flush(): void {
    if (!this.isConnected) {
      return;
    }
    // console.log("############new flush");

    if (this.writeMessage) {
      // console.log("############new flush1111");

      this.webSocket.send(this.writeMessage);
      this.writeMessage = "";
    }
    if (this.isBytesWritten) {
      // console.log("############new flush2222", this.writeBuffer.buffer);
      this.webSocket.send(this.writeBuffer.buffer);
      // console.log("############new flush3333");
      this.isBytesWritten = false;
      this.writeBuffer.clear();
    }
  }

  // 发送文本
  public writeUTF(message: string): void {
    if (!this.isConnected) {
      return;
    }

    if (this.socketType === GameSocket.TYPE_BINARY) {
      this.isBytesWritten = true;
      this.writeBuffer.writeUTF(message);
    } else {
      this.writeMessage += message;
    }

    this.flush();
  }

  // 读取文本
  public readUTF(): string {
    let message: string;
    if (this.socketType === GameSocket.TYPE_BINARY) {
      this.readBuffer.position = 0;
      message = this.readBuffer.readUTF();
      this.readBuffer.clear();
    } else {
      message = this.readMessage;
      this.readMessage = "";
    }
    return message;
  }

  // 写入字节
  public writeBytes(bytes: ByteArray, offset: number = 0, length: number = 0): void {
    if (!this.isConnected) {
      return;
    }
    if (!this.writeBuffer) {
      DyGame.$error(1);
      return;
    }

    this.isBytesWritten = true;
    this.writeBuffer.writeBytes(bytes, offset, length);
    // console.log("############new writeBytes");
    this.flush();
  }

  // 读取字节内容写入到目标缓存
  public readBytes(dstBuffer: ByteArray, offset: number = 0, length: number = 0): void {
    if (!this.readBuffer) {
      DyGame.$error(1);
      return;
    }
    this.readBuffer.position = 0;
    this.readBuffer.readBytes(dstBuffer, offset, length);
    this.readBuffer.clear();
  }

  // socket 连接成功时回调
  private onConnect(): void {
    console.log("GameSocket onConnect");
    this.isConnected = true;
    this.isConnecting = false;
    EventUtil.Dispatcher.emit(SOCKET_CONNECT);
  }

  // socket 连接断开时回调
  private onClose(): void {
    console.log("GameSocket onClose", Misc.getFormatDate1(Date.now()));
    this.isConnected = false;
    this.isConnecting = false;
    EventUtil.Dispatcher.emit(SOCKET_CLOSE);
  }

  // socket 出现错误时回调
  private onError(): void {
    console.log("GameSocket onError");
    this.isConnecting = false;
    this.isConnected = false;
    EventUtil.Dispatcher.emit(SOCKET_ERROR);
  }

  // socket 收到数据
  private onSocketData(message: any): void {
    if (typeof message === "string") {
      this.readMessage += message;
    } else {
      this.readBuffer._writeUint8Array(new Uint8Array(message));
    }
    EventUtil.Dispatcher.emit(SOCKET_DATA);
  }

  // 绑定事件
  private bindEvent() {
    const self = this;
    this.webSocket.onclose = function() {
      self.onClose();
    };
    this.webSocket.onerror = function() {
      self.onClose();
    };
    this.webSocket.onmessage = function(e: any) {
      self.onSocketData(e.data);
    };
    this.webSocket.onopen = function() {
      self.onConnect();
    };
  }

}
