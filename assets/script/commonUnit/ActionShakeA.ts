import Misc from "./Misc";

/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：抖动node
 */

export default class ActionShakeA extends cc.ActionInterval {
  /**
   * 
   * @param duration 时间间隔
   * @param strengthX x轴幅度
   * @param strengthY y轴幅度
   * @param posTarget target的原始位置
   */
  public static New(duration: number, strength: number, posTarget: cc.Vec2): ActionShakeA {
    const action: ActionShakeA = new ActionShakeA();
    if (action.init(duration, strength, posTarget)) {
       return action;
    } else {
      return null;
    }
  }

  private mNumStrength: number = 0;
  private mNumShakeCD: number = 0;
  private mNumOriginX: number = 0;
  private mNumOriginY: number = 0;

  // 初始化
  private init(duration: number, strength: number, originTarget: cc.Vec2) {  
    if (super.initWithDuration(duration)) { 
      this.mNumOriginX = originTarget.x;   
      this.mNumOriginY = originTarget.y;   
      this.mNumStrength = strength;   
      this.mNumShakeCD = 0.001;
      return true;  
    }  
    return false;  
  }  

  private update(dt) {
    if (this.mNumShakeCD > 0.0) {
      this.mNumShakeCD -= dt;
      if (this.mNumShakeCD < 0.1) {
        const rand = Misc.getRandomInt(0, 3);
        let shakeDelta: cc.Vec2 = null;
        switch (rand) {
          case 0:
            shakeDelta = cc.v2(-this.mNumStrength, -this.mNumStrength);
            break;
          case 1:
            shakeDelta = cc.v2(this.mNumStrength, -this.mNumStrength);
            break;
          case 2:
            shakeDelta = cc.v2(-this.mNumStrength, this.mNumStrength);
            break;
          case 3:
            shakeDelta = cc.v2(this.mNumStrength, this.mNumStrength);
            break;
          default:
            break;
        }

        if (shakeDelta) {
          this.getTarget().x = this.mNumOriginX + shakeDelta.x;
        }
      }
    }   
  }

  private stop() {
    this.getTarget().x = this.mNumOriginX;
    this.getTarget().y = this.mNumOriginY; 
  }
}
