/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用 spine，不需要comp
 */

import Misc from "./Misc";
import BaseComponent from "../scene/base/BaseComponent";

export default class CommonSpine extends BaseComponent {
 
  // // 异步获取
  // public static NewAsync(pStrIconDir: string, pStrIconName: string, callback: (spine: sp.Skeleton) => void = null): CommonSpine {
  //   const tSpineNode: cc.Node = new cc.Node();
  //   tSpineNode.addComponent(sp.Skeleton);
  //   const tCommonSpine = tSpineNode.addComponent(CommonSpine);
  //   tCommonSpine.getSpineFigureAsync(pStrIconDir, pStrIconName, callback);
  //   return tCommonSpine;
  // }

  // 异步获取
  public static async NewAsync(pStrIconDir: string, pStrIconName: string, callback: (nodSpine: cc.Node) => void = null) {
    const tSpineNode: cc.Node = new cc.Node();
    tSpineNode.addComponent(sp.Skeleton);
    const tCommonSpine = tSpineNode.addComponent(CommonSpine);
    const nodSpine = await tCommonSpine.getSpineFigureSync(pStrIconDir, pStrIconName);
    callback(nodSpine);
  }

  // 同步加载
  public static NewSync(pStrIconDir: string, pStrIconName: string): Promise<any> {
    const tSpineNode: cc.Node = new cc.Node();
    tSpineNode.addComponent(sp.Skeleton);
    const tCommonSpine = tSpineNode.addComponent(CommonSpine);
    return tCommonSpine.getSpineFigureSync(pStrIconDir, pStrIconName);
  }

  public onLoad() {

  }

  public start() {

  }

  public onDestroy() {
    super.onDestroy();
  }

  // // 异步加载
  // private getSpineFigureAsync(pStrDir: string, pStrRes: string, callFunc?: Function) {
  //   const mStrPath = pStrDir + "/" + pStrRes;
  //   const spine = this.node.getComponent(sp.Skeleton);
  //   ResourecLoader.getFileDataAsyn(mStrPath, (res: sp.SkeletonData) => {
  //     if (res) {
  //       if (spine) {
  //         spine.skeletonData = res;
  //         if (callFunc) {
  //           callFunc(spine);
  //         }
  //       }
  //     } else {
  //       Misc.myError("%s spine 加载失败", mStrPath);
  //     }
  //   }, sp.SkeletonData);
  // }

  protected getSpineFigureSync(pStrDir: string, pStrRes: string): Promise<any> {
    // const nodSpine = new cc.Node();
    const spine: sp.Skeleton = this.node.getComponent(sp.Skeleton);
    const mStrPath = pStrDir + "/" + pStrRes;
    return new Promise((resolve, reject) => {
      cc.loader.loadRes(mStrPath, sp.SkeletonData, (error: Error, res: any) => {
        if (error) {
          return reject(null);
        }
        spine.skeletonData = res;
        resolve(this.node);
      });
    }).catch(
      (error) => {
        Misc.myError("加载文件：%s 失败", mStrPath);
      },
    );
  }
}

