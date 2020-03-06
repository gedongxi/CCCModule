import EventDispatcher from "./EventDispatcher";
import GamePersist from "../scene/GamePersist";

// 因为EventDispatcher 如果有静态方法会导致莫名其妙的问题 所以暂时通过EventUtil来实现获得默认的Dispatcher
export default class EventUtil {
  // 默认的事件派发器
  public static get Dispatcher(): EventDispatcher {
    if (EventUtil.defaultInstance == null) {
      EventUtil.defaultInstance = new EventDispatcher(GamePersist.INSTANCE.NodeEvent);
    }
    return EventUtil.defaultInstance;
  }
  private static defaultInstance: EventDispatcher = null;
}
