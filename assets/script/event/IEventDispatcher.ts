export default interface IEventDispatcher {
  emit(message: string, detail?: any);
  on(type: string, callback: (event: cc.Event.EventCustom) => void, target?: any, useCapture?: boolean): void;
  off(type: string, callback: Function, target?: any, useCapture?: boolean): void;
}
