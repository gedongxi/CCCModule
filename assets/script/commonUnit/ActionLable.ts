/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：lable数字的累加效果
 * const action = LableAction.New(0.1, total);
 * lab.node.runaction(action);
 */

import Misc from "./Misc";
export default class ActionLable extends cc.ActionInterval {
  /**
   * 
   * @param duration      时间间隔
   * @param pNumEndCount  最终值
   */
  public static New(duration: number, pNumEndCount: number): ActionLable {
    const action: ActionLable = new ActionLable();
    if (action.init(duration, pNumEndCount)) {
       return action;
    } else {
      return null;
    }
  }

  private labTarget: cc.Label = null; 
  private mNumStartCount: number = 0;
  private mNunEndCount: number = 0;

  // 初始化
  private init(duration: number, pNumEndCount: number) {  
    if (super.initWithDuration(duration)) { 
      this.mNunEndCount = pNumEndCount;  
      return true;  
    }  
    return false;  
  }  

  public startWithTarget(target: cc.Node) {
    super.startWithTarget(target);
    const labTarget = target.getComponent(cc.Label);
    if (labTarget) {
      this.mNumStartCount = Number(labTarget.string);
      this.labTarget = labTarget;
    } else {
      Misc.myError("LableAction 目标不是cc.label");
    }
  }

  private update(dt: number) {
    if (this.labTarget) {
      const tNumCount = Math.floor((this.mNunEndCount - this.mNumStartCount) * dt + this.mNumStartCount);
      this.labTarget.string = "" + tNumCount; 
    }
  }

  private stop() {
    if (this.labTarget) {
      this.labTarget.string = "" + this.mNunEndCount; 
    }
  }
}
