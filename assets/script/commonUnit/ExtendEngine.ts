import AudioCtl, { AudioName } from "../audio/AudioCtl";

// 防止按钮连点问题
let mIsTouch = false;

cc.Button.prototype.touchEndClone = cc.Button.prototype._onTouchEnded;
cc.Button.prototype._onTouchEnded = function(event, customEventData) {
  if (!mIsTouch) {
    // if (this.clickEvents && this.clickEvents.length > 0) {
    //   if (this.clickEvents[0]["customEventData"] === "1000") {
    //     console.log(" !!!!!!!!!!!!!!!!!!!!!!!!!! ok !!!!!!!!!!!!!!!!!!!!!!");
    //   }
    // }
    // AudioCtl.INSTANCE.playEffect(AudioName.MusicBtn);
    this.touchEndClone(event);

    mIsTouch = true;

    setTimeout(() => {
      mIsTouch = false;
    }, 200);
  } 
};
