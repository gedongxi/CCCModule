;(function() {
  var ID = "ResRemoteUrl";
  var REGEX = /^\w+:\/\/.*/;

  var ResRemoteUrl = window.ResRemoteUrl = function () {
    this.id = ID;
    this.async = true;
    this.pipeline = null;
  };

  ResRemoteUrl.ID = ID;
  ResRemoteUrl.prototype.handle = function(item, callback) {
    if (REGEX.test(item.url)) {
      callback(null, null);
      return
    }

    if (window._DYMappings) {
      var strBuff = new DyGame.MixStringBuffer();
      strBuff.setOri(item.url);
      var pathKey = strBuff.toString();
      var relUrl = window._DYMappings[pathKey];
      if (!!relUrl) {
        item.url = Partner.CDN_HOST + "res/" + relUrl;
        //callback(null, item);
        callback(null, null);
        return;
      }
    }

    callback(null, null);
  }

  var resRemoteUrl = window.resRemoteUrl = new ResRemoteUrl();

  /*
  var prevPipe = cc.loader.md5Pipe || cc.loader.assetLoader;
  cc.loader.insertPipeAfter(prevPipe, resRemoteUrl);
  */
}());
