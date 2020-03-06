;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      ? module.exports = factory(global)
      : typeof define === 'function' && define.amd
      ? define(factory) : factory(global)
}(
// 第一个参数: 全局对象
(
  typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
    : typeof global !== 'undefined' ? global
    : this
), 
// 第二个参数: 一个函数
function(global) {
  var i18n =  global.i18n || {};
  Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }

  i18n.uiText = {};
  i18n.uiData    = {};
  i18n.sysData   = {};
  i18n.locale    = "cn";

  

  // UI上的文本内容
  i18n.ui = function(key) {
    // 先取运行时根据本地语言设定的
    if (!!i18n.uiData[key]) {
      return i18n.uiData[key];
    }
    // 然后取默认设定的语言
    if (!!i18n.uiText[key]) {
      return i18n.uiText[key];
    }
    return "";
  }

  // 配置数据的文本内容
  i18n.sys = function(key) {
    if (i18n.sysData[key]) {
      return i18n.sysData[key];
    }
    return ""
  }

  global.i18n = i18n;
}));
