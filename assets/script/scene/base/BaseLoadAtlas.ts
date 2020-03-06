// import GamePersist from "../GamePersist";

// /*
// 这个组件作为显示需要用到SpriteAtlas的组件的基类
// 并且这个组件所需要的SpriteAtlas的加载是通过Scene进行统一加载
// 然后组件从Scene获取SpriteAtlas
// */

// interface IWaitTime {
//   [index: string]: number;
// }

// export default class BaseLoadAtlas extends BaseComponent {
  
//   private waitTimeMap: IWaitTime = {};   // 加载图集已经等待的时间

//   public start() {
//   }
//   public onLoad() {
//   }

//   // 获取SpriteAtals
//   protected getSpriteAtlas(dt: number, spriteAtlasName: string): cc.SpriteAtlas {
//     const spriteAtlas: cc.SpriteAtlas = GamePersist.INSTANCE.CurrentScene.getSpriteAtlas(spriteAtlasName);
//     if (!spriteAtlas) {
//       const waitTime: number = this.waitTimeMap[spriteAtlasName] || 4;
//       if (waitTime > 2) {
//         GamePersist.INSTANCE.CurrentScene.loadSpriteAtlas(spriteAtlasName);
//         this.waitTimeMap[spriteAtlasName] = 0;
//       } else {
//         this.waitTimeMap[spriteAtlasName] = waitTime + dt;
//       }
//     } else {
//       delete this.waitTimeMap[spriteAtlasName];
//     }
//     return spriteAtlas;
//   }

// }
