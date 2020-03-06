/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：抖动node，主要用于场景抖动
 */

const PI           = 3.1415926535897932;
const PI2          = PI * 2.0;

export default class ActionShakeB extends cc.ActionInterval {
  /**
   * 
   * @param duration 时间间隔
   * @param strengthX x轴幅度
   * @param strengthY y轴幅度
   * @param posTarget target的原始位置
   */

  public static New(duration: number, strength: number, posTarget: cc.Vec2): ActionShakeB {
    const action: ActionShakeB = new ActionShakeB();
    if (action.init(duration, strength, posTarget)) {
       return action;
    } else {
      return null;
    }
  }

  private mNumTimeTotal: number = 0;
  private mNumTimeLeft: number = 0;
  private mNumCycleTime: number = 0;
  private mNumCycleCount: number = 2;
  private mNumStrength: number = 0;
  private mNumOriginX: number = 0;
  private mNumOriginY: number = 0;


  // 初始化
  private init(duration: number, strength: number, originTarget: cc.Vec2) {  
    this.mNumCycleTime = duration;
    this.mNumTimeTotal = this.mNumTimeLeft = duration * this.mNumCycleCount;
    this.mNumOriginX = originTarget.x;   
    this.mNumOriginY = originTarget.y;  
    this.mNumStrength = strength; 
    if (super.initWithDuration(this.mNumTimeTotal)) { 
      return true;  
    }  
    return false;  
  }  

  private update(dt) {

    if (this.mNumTimeLeft > 0.0) {
      this.mNumTimeLeft -= dt;
      if (this.mNumTimeLeft < 0.0) {
        this.mNumTimeLeft = 0.0;
      }

      const tNumTimeInCycle = this.mNumTimeLeft - Math.floor(this.mNumTimeLeft / this.mNumCycleTime) * this.mNumCycleTime;
      const tNumAngle = PI2 * (tNumTimeInCycle / this.mNumCycleTime);
      const tNumResult = Math.sin(tNumAngle) * (this.mNumTimeLeft / this.mNumTimeTotal);
      this.getTarget().y = this.mNumOriginY + tNumResult * this.mNumStrength; 
    }
  }

  private stop() {
    this.getTarget().x = this.mNumOriginX;
    this.getTarget().y = this.mNumOriginY; 
  }
}
