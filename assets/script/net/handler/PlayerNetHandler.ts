import { PlayerDispatcher } from "../../proto/ProtoDispatcher";
import { PlayerSelfInfoS2C, PlayerFortuneS2C, PlayerLvlUpS2C, PlayerStatisticS2C, PlayerStatisticUpdateS2C, PlayerLvlRewardS2C, PlayerFirstBattleS2C } from "../../proto/mods/ProtoSectionPlayer";
import DataPlayer from "../../data/DataPlayer";
import EventUtil from "../../event/EventUtil";
import { Events } from "../../event/Event";
import Misc from "../../commonUnit/Misc";
import { EPlayFortune } from "../../scene/base/BaseDefine";

export default class PlayerNetHandler {
  constructor() {
    PlayerDispatcher.on(PlayerSelfInfoS2C.EVENT_NAME, this.handlePlayerSelfInfo, this);
    PlayerDispatcher.on(PlayerFortuneS2C.EVENT_NAME, this.handlePlayerFortuneS2C, this);
    PlayerDispatcher.on(PlayerLvlUpS2C.EVENT_NAME, this.handlePlayerLvlUpS2C, this);
  }

  // 玩家自己的信息
  private handlePlayerSelfInfo(event: any) {
    const respData: PlayerSelfInfoS2C = event;
    console.log("用户信息：", JSON.stringify(respData.player));
    DataPlayer.INSTANCE.setPlayersInfo(respData.player);
  }

  // 用户等级更新
  private handlePlayerLvlUpS2C(event: any) {
    const respData: PlayerLvlUpS2C = event;
    Misc.myLog("用户等级更新：", respData.lvl);
    DataPlayer.INSTANCE.PlayerLvl = respData.lvl;
    Partner.onLevelChange(respData.lvl);
    EventUtil.Dispatcher.emit(Events.EVENT_MAIN_SCENE_PLAYER_LVL_UPDATE);
  }

  // 用户财富更新
  private handlePlayerFortuneS2C(event: any) {
    const tPlayerFortuneS2C: PlayerFortuneS2C = event;
    switch (tPlayerFortuneS2C.type) {
      case EPlayFortune.Gem:
        Misc.myLog("财富更新的钻石更新：", tPlayerFortuneS2C.val);
        DataPlayer.INSTANCE.Gem = tPlayerFortuneS2C.val;
        break;
      case EPlayFortune.Money:
        Misc.myLog("财富更新的钱更新：", tPlayerFortuneS2C.val);
        DataPlayer.INSTANCE.Money = tPlayerFortuneS2C.val;
        break;
      case EPlayFortune.Vigor:
        Misc.myLog("财富更新的体力更新：", tPlayerFortuneS2C.val);
        DataPlayer.INSTANCE.Vigor = tPlayerFortuneS2C.val;
        break;
      case EPlayFortune.Experience:
        Misc.myLog("财富更新的经验更新：", tPlayerFortuneS2C.val);
        DataPlayer.INSTANCE.Experience = tPlayerFortuneS2C.val;
        break;
      default:
        break;
    }
    EventUtil.Dispatcher.emit(Events.EVENT_MAIN_SCENE_PLAYER_FORTUNE_UPDATE, tPlayerFortuneS2C); 
  }

}
