/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：抖动node，主要用于场景抖动
 */

import Misc from "./Misc";
export default class ActionShake extends cc.ActionInterval {
  /**
   * 
   * @param duration 时间间隔
   * @param strengthX x轴幅度
   * @param strengthY y轴幅度
   * @param posTarget target的原始位置
   */
  public static New(duration: number, strengthX: number, strengthY: number, posTarget: cc.Vec2): ActionShake {
    const action: ActionShake = new ActionShake();
    if (action.init(duration, strengthX, strengthY, posTarget)) {
       return action;
    } else {
      return null;
    }
  }

  private mNumStrengthX: number = 0;
  private mNumStrengthY: number = 0;
  private mNumInitialX: number = 0;
  private mNumInitialY: number = 0;
  private mTargetPos: cc.Vec2 = null;

  // 初始化
  private init(duration: number, strengthX: number, strengthY: number, posTarget: cc.Vec2) {  
    if (super.initWithDuration(duration)) { 
      this.mTargetPos = posTarget;   
      this.mNumInitialX = posTarget.x;
      this.mNumInitialY = posTarget.y;
      this.mNumStrengthX = strengthX;  
      this.mNumStrengthY = strengthY;  
      return true;  
    }  
    return false;  
  }  

  private update() {
    const randx = this.rangeRand(-this.mNumStrengthX, this.mNumStrengthX);  
    const randy = this.rangeRand(-this.mNumStrengthY, this.mNumStrengthY);    
    this.getTarget().setPosition(cc.v2(this.mNumInitialX + randx, this.mNumInitialY + randy)); 
  }

  private rangeRand(min: number, max: number) {
    const rnd: number = Misc.getRandomInt(1, 10000) / 10000;  
    return rnd * ( max - min ) + min;  
  } 

  private stop() {
    this.getTarget().setPosition(this.mTargetPos);
  }
}
