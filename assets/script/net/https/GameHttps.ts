import Misc from "../../commonUnit/Misc";
import GamePersist from "../../scene/GamePersist";
import DataPlayer from "../../data/DataPlayer";
export default class GameHttps {
  public static get INSTANCE(): GameHttps {
    if (!GameHttps.singleInstance) {
      GameHttps.singleInstance = new GameHttps();
    }
    return GameHttps.singleInstance;
  }
  private static singleInstance: GameHttps;

  // private url: string = "http://192.168.20.111/api/statistic/";
  private geturl: string    = "https://xyx-stats02.dayukeji.com/crack/api/statistic/";
  // private posturl: string   = "http://192.168.20.111/api/statistic/ad";
  private posturl: string   = "https://xyx-stats02.dayukeji.com/crack/api/statistic/ad";

  private get2url: string    = "https://xyx-stats02.dayukeji.com/crack/api/statistic/click/";

  private getAdurl: string    = "https://xyx-stats02.dayukeji.com/crack/api/statistic/super/ad/";

  private getmutualUrl: string = "https://xyx-stats02.dayukeji.com/crack/api/statistic/point/";

  private myLog(message?: any, ...optionalParams: any[]) {
    // console.log(message, ...optionalParams); 
  }

  // 通用 httpGet 请求
  public httpsGet(requestURL: string, handler?: Function) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 5000;
    this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https send url (get module) ~~~~~~~~~~~~~~~~~~~~ ", requestURL);
    xhr.open("GET", requestURL, true);
    if (Misc.isNative()) {
      // xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    }

    // 数据返回
    xhr.onreadystatechange = () => {
      this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(get module) xhr readyState status ~~~~~~~~~~~~~~~~~~~~ ", xhr.readyState, xhr.status);
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const ret = JSON.parse(xhr.responseText);
          this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(get module) data ~~~~~~~~~~~~~~~~~~~~ ", ret);
          if (handler) {
            handler(null, ret);
          }    
        } else {
          this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(post module) data  error ~~~~~~~~~~~~~~~~~~~~ ", xhr.status);
          if (handler) {
            handler({error : "" + xhr.status}, null);
          }
        }                  
      }
    };

    xhr.send(); 
  }

  // 通用 httpsPost 请求
  public httpsPost(requestURL: string, data: any, handler?: Function) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 5000;
    xhr.open("POST", requestURL, true);
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    // 数据返回
    xhr.onreadystatechange = () => {
      this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(post module) xhr readyState status ~~~~~~~~~~~~~~~~~~~~ ", xhr.readyState,  xhr.status);
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const ret = JSON.parse(xhr.responseText);
          this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(post module) data ~~~~~~~~~~~~~~~~~~~~ ", ret);
          if (handler) {
            handler(null, ret);
          } 
        } else {
          this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https receive(post module) data  error ~~~~~~~~~~~~~~~~~~~~ ", xhr.status);
          handler({error : "" + xhr.status}, null);
        }                 
      }
    };
    const strData = JSON.stringify(data);
    xhr.send(escape(strData));
    this.myLog(" ~~~~~~~~~~~~~~~~~~~~ https send(post module) data ~~~~~~~~~~~~~~~~~~~~ ", JSON.stringify(data));
  }

  // get 请求
  public sendLoginPointBI(path, data, handler, extraUrl = null) {
    if (Partner.PARTNER_NAME !== "Dev") {
      // 拼接地址
      let requestURL = "";
      if (extraUrl) {
        requestURL += extraUrl;
      } else {
        requestURL += this.geturl;
      }
      if (path) {
        requestURL += path + "/";
      }
      if (data) {
        requestURL += Partner.PARTNER_ID + "/";
        requestURL += GamePersist.INSTANCE.GameUUID + "/";
        requestURL += data;
      }

      this.httpsGet(requestURL, handler);
    }
  }


  // post 请求
  public sendTestHttpsPost(path, data, handler, extraUrl = null) {
    if (Partner.PARTNER_NAME !== "Dev") {
  
      // 拼接地址
      let requestURL = "";
      if (extraUrl) {
        requestURL += extraUrl;
      } else {
        requestURL += this.posturl;
      }
      if (path) {
        requestURL += path;
      }

      this.httpsPost(requestURL, data, handler);
    }
  }
}
