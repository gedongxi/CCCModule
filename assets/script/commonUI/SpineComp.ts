/**
 * author:陈晓亮
 * date: 2019/03/01
 * desc：通用spine comp
 */

import ResourecLoader from "../commonUnit/ResourceLoader";
import Misc from "../commonUnit/Misc";
import { SPINE_DIR } from "../scene/base/BaseDefine";
import BaseComponent from "../scene/base/BaseComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SpineComp extends BaseComponent {
  public static GetComponent(node: cc.Node): SpineComp {
    return node.getComponent(SpineComp);
  }

  @property(sp.Skeleton)
  private spine: sp.Skeleton = null;

  public onLoad() {

  }

  public start() {

  }

  public onDestroy() {
    super.onDestroy();
  }

  // 异步加载
  public getSpineFigureAsyn(pStrDir: string, pStrRes: string, callFunc?: Function) {
    const mStrPath = pStrDir + "/" + pStrRes;
    ResourecLoader.getFileDataAsyn(mStrPath, (res: sp.SkeletonData) => {
      if (res) {
        if (this.spine) {
          this.spine.skeletonData = res;
          if (callFunc) {
            callFunc(this.spine);
          }
        }
      } else {
        Misc.myError("%s spine 加载失败", mStrPath);
      }
    }, sp.SkeletonData);
  }

  // 同步加载
  public getSpineFigure(pStrDir: string, pStrRes: string): Promise<any> {
    const mStrPath = SPINE_DIR +  pStrDir + "/" + pStrRes;
    return new Promise((resolve, reject) => {
      cc.loader.loadRes(mStrPath, sp.SkeletonData, (error: Error, res: any) => {
        if (error) {
          return reject(null);
        }
        this.spine.skeletonData = res;
        resolve(this.spine);
      });
    }).catch(
      (error) => {
        Misc.myError("加载文件：%s 失败", mStrPath);
      },
    );
  }
}

