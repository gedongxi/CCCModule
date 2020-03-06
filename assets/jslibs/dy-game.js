;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      ? module.exports = factory(global)
      : typeof define === 'function' && define.amd
      ? define(factory) : factory(global)
}((
  typeof self !== 'undefined' ? self
      : typeof window !== 'undefined' ? window
      : typeof global !== 'undefined' ? global
      : this
), function(global) {
  
  var _error = function(code) {
    console.log("#error:" + code);
    throw new Error("#" + code);
  }

  function MixStringBuffer() {
    this._strings_ = new Array();
  }

  var MixHash = [0,97,100,48,122,117,49,115,51,57,111,100,111,113,57,51,116,107,101,54,113,107,98,120,113,50,97,53,103,102,56,52,112,108,53,110,101,54,100,104,103,48,117,51,113,56,50,54,51,100,120,104,110,98,113,116,115,122,104,109,108,111,98,52,45,102,50,95,101,117,114,121,103,49,55,109,119,53,54,107,48,99,105,118,45,52,57,106,112,108,97,54,117,48,104,111,45,102,50,95,101,117,114,121,103,49,55,109,119,53,54,107,48,99,105,118,45,52,57,106,112,108,97,104,119,54,108,106];

  MixStringBuffer.prototype.setOri = function(oriStr) {
    var cnt = oriStr.length;
    cnt = cnt - 1;
    for(var i = 0; i <= cnt; i++) {
      var charCode = oriStr.charCodeAt(cnt - i);
      var magicCharCode = MixHash[charCode];
      this._strings_.push(String.fromCharCode(magicCharCode));
    }
  }

  MixStringBuffer.prototype.toString = function() {
    return this._strings_.join("");
  }


  global.DyGame = global.DyGame || {};
  global.DyGame.$error = _error;
  global.DyGame.MixStringBuffer = MixStringBuffer;


  global.DANCE_RES_REMOTE_SERVER_ROOT = "";
}));
