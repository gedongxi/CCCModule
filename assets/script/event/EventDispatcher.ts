import IEventDispatcher from "./IEventDispatcher";

export default class EventDispatcher implements IEventDispatcher {
  protected coreNode: cc.Node;

  constructor(node?: cc.Node) {
    if (node) {
      this.coreNode = node;
    }
  }

  public get node(): cc.Node {
    return this.coreNode;
  }

  public set node(value: cc.Node) {
    this.coreNode = value;
  }

  public emit(message: string, detail?: any) {
    if (this.coreNode) {
      this.coreNode.emit(message, detail);
    }
  }

  public on(type: string, callback: (event: any) => void, target?: any, useCapture?: boolean): void {
    if (this.coreNode) {
      this.coreNode.on(type, callback, target, useCapture);
    }
  }

  public off(type: string, callback?: Function, target?: any, useCapture?: boolean): void {
    this.coreNode.off(type, callback, target, useCapture);
  }
}
