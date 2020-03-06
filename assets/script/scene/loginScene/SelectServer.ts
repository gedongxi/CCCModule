import * as ConfigVO from "../../config/vo/ConfigVO";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";
import BaseComponent from "../base/BaseComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SelectServer extends BaseComponent {

  @property(cc.Node)
  private nodeServer: cc.Node = null;

  @property(cc.Node)
  private nodeContent: cc.Node = null;

  @property(cc.Button)
  private btnClose: cc.Button = null;

  private serverGroup: string = null;

  private groupLen: number = null;

  private grouplist: any = null;

  public onLoad() {
    super.onLoad();
    this.btnClose.node.on(cc.Node.EventType.TOUCH_END, this.close, this);
    // 获取服务器组id
    this.serverGroup = Partner.SERVER_GROUP;
    // 获取该分组的所有服务器 然后创建显示
    this.grouplist = ConfigVO.ServerList.getExtra("group_list")[this.serverGroup];
    this.groupLen = this.grouplist.length;
    for (let i = 0; i < this.groupLen; i++) {
      this.createPanel(ConfigVO.ServerList.get(this.grouplist[i]).name, i);
    }
  }

  // 显示每个服务器
  private createPanel(serverName: string, index: number) {
    const newNode = cc.instantiate(this.nodeServer);
    newNode.active = true;
    newNode.getComponentInChildren(cc.Label).string = serverName;
    newNode.parent = this.nodeContent;
    const self = this;
    newNode.getChildByName("btn").on(cc.Node.EventType.TOUCH_END, function(event) {
      self.switchServer(index);
    }, this);
  }

  // 切换逻辑
  private switchServer(index: number) {
    const serverId: string = this.grouplist[index];
    // 通知LoginUI进行切换服务器的逻辑显示
    EventUtil.Dispatcher.emit(Events.EVENT_LOGIN_SWITCH_SERVER, serverId);
    // 关闭选服界面
    this.close();
  }

  // 关闭
  private close() {
    this.node.destroy();
  }

}
