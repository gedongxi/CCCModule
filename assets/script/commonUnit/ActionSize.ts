/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：尺寸变化动画
 */

import Misc from "./Misc";
export default class ActionSize extends cc.ActionInterval {
  /**
   * 
   * @param duration      时间间隔
   * @param pNumEndCount  最终值
   */
  public static New(duration: number, pNumEndW: number, pNumEndH: number): ActionSize {
    const action: ActionSize = new ActionSize();
    if (action.init(duration, pNumEndW, pNumEndH)) {
       return action;
    } else {
      return null;
    }
  }

  private mTarget: cc.Node = null;
  private mNumStartW: number = 0;
  private mNumStartH: number = 0;
  private mNumEndW: number = 0;
  private mNumEndH: number = 0;

  // 初始化
  private init(duration: number, pNumEndW: number, pNumEndH: number) {  
    if (super.initWithDuration(duration)) { 
      this.mNumEndW = pNumEndW;  
      this.mNumEndH = pNumEndH;  
      return true;  
    }  
    return false;  
  }  

  public startWithTarget(target: cc.Node) {
    this.mTarget = target;
    super.startWithTarget(target);
    if (target) {
      this.mNumStartW = target.width;
      this.mNumStartH = target.height;
    } else {
      Misc.myError("SizeAction 目标不是cc.label");
    }
  }

  private update(dt: number) {
    if (this.mTarget) {
      const w = (this.mNumEndW - this.mNumStartW) * dt + this.mNumStartW;
      const h = (this.mNumEndH - this.mNumStartH) * dt + this.mNumStartH;
      this.mTarget.setContentSize(w, h); 
    }
  }

  private stop() {
    if (this.mTarget) {
      this.mTarget.setContentSize(this.mNumEndW, this.mNumEndH); 
    }
  }
}
