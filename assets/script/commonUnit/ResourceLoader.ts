/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：请求资源工具类
 */

import Misc from "./Misc";
import GamePersist from "../scene/GamePersist";
import GameHttps from "../net/https/GameHttps";

export default class ResourecLoader {
  // static loadRes: Function;

  /////////////////////////////////////////// 加载文件 /////////////////////////////////////////

  // 同步加载
  public static getFileData(strPath: string, type?: typeof cc.Asset, tryCount: number = 3, loading: boolean = true): Promise<any> {
    if (loading) {
      GamePersist.INSTANCE.showWaiting(); 
    }
    return new Promise((resolve, reject) => {
      ResourecLoader.getFileDataAsyn(strPath, (res) => {
        if (loading) {
          GamePersist.INSTANCE.hideWaiting();  
        }
        if (res) {
          resolve(res);
        } else {
          reject(null);
        }
      }, type, tryCount);
    }).catch(
        (error) => {
          Misc.myWarn("文件加载失败", strPath);
        },
    );
  }

  // 异步加载
  public static getFileDataAsyn(strPath: string, callback: (res) => void, type?: typeof cc.Asset, tryCount: number = 3) {
    const funcLoadOne = () => {
      if (type) {
        cc.loader.loadRes(strPath, type, (error: Error, res: any) => {
          if (error) {
            tryCount --;
            if (tryCount > 0 ) {
              funcLoadOne();
            } else {
              Misc.myWarn("文件加载失败", strPath);
              callback(null);
            }
          } else {
            // 设置为自动释放(过滤掉音效文件)
            const deps = cc.loader.getDependsRecursively(res);
            deps.forEach((uuid) => {
              const item = cc.loader.getRes(uuid);              
              cc.loader.setAutoRelease(uuid, true); 
              if ((item instanceof cc.AudioClip)) { 
                cc.loader.setAutoRelease(uuid, false); 
              }
              const extname = cc.path.extname(uuid);
              if (extname === ".mp3") {
                cc.loader.setAutoRelease(uuid, false); 
              }
            });

            callback(res);
          }
        });
      } else {
        cc.loader.loadRes(strPath, (error: Error, res: any) => {
          if (error) {
            tryCount --;
            if (tryCount > 0 ) {
              funcLoadOne();
            } else {
              Misc.myWarn("文件加载失败", strPath);
              callback(null);
            }
          } else {
            // 设置为自动释放,过滤掉音效文件
            const deps = cc.loader.getDependsRecursively(res);
            deps.forEach((uuid) => {
              const item = cc.loader.getRes(uuid);
              cc.loader.setAutoRelease(uuid, true); 
              if ((item instanceof cc.AudioClip)) { 
                cc.loader.setAutoRelease(uuid, false); 
              }
              const extname = cc.path.extname(uuid);
              if (extname === ".mp3") {
                cc.loader.setAutoRelease(uuid, false); 
              }
            });

            callback(res);
          }
        });
      }
    };

    funcLoadOne();
  }

  // // 同步加载
  // public static getFileData(strPath: string, type?: typeof cc.Asset, loading: boolean = true): Promise<any> {

  //   return new Promise((resolve, reject) => {
  //     if (type) {
  //       cc.loader.loadRes(strPath, type, (error: Error, resource: any) => {
  //         if (error) {
  //           reject(null);
  //         } 
  //         resolve(resource);
  //       });
  //     } else {
  //       cc.loader.loadRes(strPath, (error: Error, resource: any) => {
  //         if (error) {
  //           reject(null);
  //         } 
  //         resolve(resource);
  //       });
  //     }
  //   }).catch(
  //     (error) => {
  //         Misc.myError("加载文件：%s 失败", strPath);
  //     },
  //   );
  // }
  // // 异步加载
  // public static getFileDataAsyn(strPath: string, callback: (res) => void , type?: typeof cc.Asset) {
  //   if (type) {
  //     cc.loader.loadRes(strPath, type, (error: Error, resource: any) => {
  //       if (error) {
  //         callback(null);
  //       } else {
  //         callback(resource);
  //       }
  //     });
  //   } else {
  //     cc.loader.loadRes(strPath, (error: Error, resource: any) => {
  //       if (error) {
  //         callback(null);
  //       } else {
  //         callback(resource);
  //       }
  //     });
  //   }
  // }

  /////////////////////////////////////////// //////// /////////////////////////////////////////


  /////////////////////////////////////////// 加载文件夹 ///////////////////////////////////////
  // 同步加载
  public static getDirData(strPath: string, type?: typeof cc.Asset): Promise<any> {
    return new Promise((resolve, reject) => {
      if (type) {
        cc.loader.loadResDir(strPath, type, (error: Error, resource: any[], urls: string[]) => {
          if (error) {
            return reject(null);
          } 
          resolve({res: resource, url: urls});
        });
      } else {
        cc.loader.loadResDir(strPath, (error: Error, resource: any[], urls: string[]) => {
          if (error) {
            return reject(null);
          } 
          resolve({res: resource, url: urls});
        });
      }
    }).catch(
      (error) => {
        Misc.myError("加载文件夹：%s 失败", strPath);
      },
    );
  }
  // 异步加载
  public static getDirDataAsyn(strPath: string, callback: (data) => void, type?: typeof cc.Asset) {
    if (type) {
      cc.loader.loadResDir(strPath, type, (error: Error, resource: any[], urls: string[]) => {
        if (error) {
          callback(null);                    
        } else {
          callback({res: resource, url: urls});
        }
      });
    } else {
      cc.loader.loadResDir(strPath, (error: Error, resource: any[], urls: string[]) => {
        if (error) {
          callback(null);                    
        } else {
          callback({res: resource, url: urls});
        }
      });
    }
  }
  /////////////////////////////////////////// //////// /////////////////////////////////////////


  /////////////////////////////////////////// 远程资源 /////////////////////////////////////////
  // 同步加载
  public static getRemoteData(strPath: string): Promise<any> {
    if (Misc.isNative()) {
      return new Promise<any>((resolve, reject) => {
        GameHttps.INSTANCE.httpsGet(strPath, (error: any, resource: any) => {
          if (error) {
            return reject(null);
          }
          resolve(resource);
        });
      }).catch(
        (error) => {
          Misc.myError("加载远程文件失败：%s ", strPath);
        },
      );
    } else {
      return new Promise((resolve, reject) => {
        cc.loader.load(strPath, (error: Error, resource: any) => {
          if (error) {
            return reject(null);
          } 
          resolve(resource);
        });
      }).catch(
        (error) => {
          Misc.myError("加载远程文件失败：%s", strPath);
        },
      );
    }

  }
  // 同步加载
  public static getRemoteDataAsyn(strPath: string, callback: (data) => void) {
    if (Misc.isNative()) {
      GameHttps.INSTANCE.httpsGet(strPath, (error: any, resource: any) => {
        if (error) {
          callback(null);
        } else {
          callback(resource);
        }
      });
    } else {
      cc.loader.load(strPath, (error: Error, resource: any) => {
        if (error) {
          callback(null);
        } else {
          callback(resource);
        }
      }); 
    }
  }
  /////////////////////////////////////////// //////// /////////////////////////////////////////

  // 并发加载多个文件,（期望返回的结果就是list的顺序）
  public static async getConcurrentFiles(filesList: Array<{"path": string, "type"?: typeof cc.Asset}>) {

    // 方法1
    const promises = filesList.map(async (item) => {
        return await this.getFileData(item.path, item.type);
      },
    );
    const result = await Promise.all(promises);
    return result;

    // // 方法2
    // const promises = filesList.map(
    //     async (item) => {
    //         return await this.getFileData(item.path, item.type);
    //     },
    // );
    // const result = [];
    // for (const promise of promises) {
    //     result.push(await promise);
    // }
    // return result;
  }
}
