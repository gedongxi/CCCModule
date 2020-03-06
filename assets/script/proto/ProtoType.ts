// Auto Generate. Don't Change manually

/// <reference path="../commonUnit/NetByteArray.ts">

import { ByteArray } from "../commonUnit/NetByteArray";
import { Int16, Int32, Int64, Int8, Uint16, Uint32, Uint64, Uint8 } from "./ProtoDefine";

// 玩家信息
export class PPlayer {

  public static decode(byteArray: ByteArray): PPlayer {
    const obj = new PPlayer();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.sex = byteArray.readUnsignedByte();
    obj.lvl = byteArray.readUnsignedInt();
    obj.headImg = byteArray.readUTF();
    obj.headId = byteArray.readUnsignedInt();
    obj.skinId = byteArray.readUnsignedInt();
    obj.regTime = byteArray.readUnsignedInt();
    obj.province = byteArray.readUTF();
    obj.city = byteArray.readUTF();
    obj.district = byteArray.readUTF();
    obj.street = byteArray.readUTF();
    obj.totalFee = byteArray.readDouble();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 性别
  public sex: Uint8;
  // 玩家等级
  public lvl: Uint32;
  // 平台头像id
  public headImg: string;
  // 玩家游戏内角色头像id
  public headId: Uint32;
  // 玩家游戏内皮肤id
  public skinId: Uint32;
  // 注册时间
  public regTime: Uint32;
  // 省
  public province: string;
  // 市
  public city: string;
  // 区
  public district: string;
  // 街
  public street: string;
  // 累计支付金额
  public totalFee: Uint64;
}

// 被邀请者礼包
export class PInviteeGift {

  public static decode(byteArray: ByteArray): PInviteeGift {
    const obj = new PInviteeGift();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.sex = byteArray.readUnsignedByte();
    obj.headImg = byteArray.readUTF();
    obj.flag = byteArray.readUnsignedByte();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 性别
  public sex: Uint8;
  // 头像
  public headImg: string;
  // 是否已经领取0没有 1已经领取
  public flag: Uint8;
}

// 被邀请者礼包
export class PInvitee {

  public static decode(byteArray: ByteArray): PInvitee {
    const obj = new PInvitee();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.sex = byteArray.readUnsignedByte();
    obj.headImg = byteArray.readUTF();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 性别
  public sex: Uint8;
  // 头像
  public headImg: string;
}

// 活动信息
export class PActivity {

  public static decode(byteArray: ByteArray): PActivity {
    const obj = new PActivity();
    obj.actid = byteArray.readUnsignedByte();
    obj.status = byteArray.readUnsignedByte();
    obj.secsLeft = byteArray.readUnsignedInt();
    return obj;
  }

  // 活动id
  public actid: Uint8;
  // 0未开启 1本次活动已终止 2活动初始阶段 3准备阶段 4...
  public status: Uint8;
  // 剩余秒数
  public secsLeft: Uint32;
}

// 财富
export class PWealth {

  public static decode(byteArray: ByteArray): PWealth {
    const obj = new PWealth();
    obj.type = byteArray.readUnsignedByte();
    obj.value = byteArray.readUnsignedInt();
    return obj;
  }

  // 财富类型
  public type: Uint8;
  // 财富数量
  public value: Uint32;
}

// 物品信息
export class PGoods {

  public static decode(byteArray: ByteArray): PGoods {
    const obj = new PGoods();
    obj.goodsId = byteArray.readUnsignedInt();
    obj.goodsNum = byteArray.readUnsignedInt();
    return obj;
  }

  // 物品id
  public goodsId: Uint32;
  // 物品数量
  public goodsNum: Uint32;
}

// 英雄购买数量
export class PHeroBuy {

  public static decode(byteArray: ByteArray): PHeroBuy {
    const obj = new PHeroBuy();
    obj.lvl = byteArray.readUnsignedByte();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // 英雄等级
  public lvl: Uint8;
  // 已经购买的数量
  public count: Uint32;
}

// 槽位
export class PSlot {

  public static decode(byteArray: ByteArray): PSlot {
    const obj = new PSlot();
    obj.slotId = byteArray.readUnsignedShort();
    obj.skillId = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 槽位id
  public slotId: Uint16;
  // 技能id 没有为0
  public skillId: Uint32;
  // 0未解锁 1已解锁
  public status: Uint8;
}

// 技能
export class PSkill {

  public static decode(byteArray: ByteArray): PSkill {
    const obj = new PSkill();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedShort();
    obj.num = byteArray.readUnsignedShort();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 技能id
  public id: Uint32;
  // 技能等级
  public lvl: Uint16;
  // 勋章数量
  public num: Uint16;
  // 0未解锁 1已解锁
  public status: Uint8;
}

// 武器信息
export class PWeapon {

  public static decode(byteArray: ByteArray): PWeapon {
    const obj = new PWeapon();
    obj.weaponId = byteArray.readUnsignedByte();
    obj.state = byteArray.readUnsignedByte();
    return obj;
  }

  // 武器id
  public weaponId: Uint8;
  // 武器使用状态0已解锁代购买1使用中2已购买空闲中
  public state: Uint8;
}

// 酒
export class PWine {

  public static decode(byteArray: ByteArray): PWine {
    const obj = new PWine();
    obj.count = byteArray.readUnsignedShort();
    obj.wineId = byteArray.readUnsignedShort();
    obj.endTime = byteArray.readUnsignedInt();
    return obj;
  }

  // 当日喝酒次数
  public count: Uint16;
  // 酒id 没有为0
  public wineId: Uint16;
  // 醒酒时间 没有为0
  public endTime: Uint32;
}

// 属性
export class PProperty {

  public static decode(byteArray: ByteArray): PProperty {
    const obj = new PProperty();
    obj.id = byteArray.readUnsignedShort();
    obj.value = byteArray.readUnsignedInt();
    return obj;
  }

  // 属性id
  public id: Uint16;
  // 属性值
  public value: Uint32;
}

// 可训练属性
export class PPracticeProperty {

  public static decode(byteArray: ByteArray): PPracticeProperty {
    const obj = new PPracticeProperty();
    obj.id = byteArray.readUnsignedShort();
    obj.lvl = byteArray.readUnsignedShort();
    obj.value = byteArray.readUnsignedInt();
    return obj;
  }

  // 属性id
  public id: Uint16;
  // 属性等级
  public lvl: Uint16;
  // 属性值
  public value: Uint32;
}

// 奖励
export class PLucky {

  public static decode(byteArray: ByteArray): PLucky {
    const obj = new PLucky();
    obj.id = byteArray.readUnsignedInt();
    obj.num = byteArray.readUnsignedShort();
    return obj;
  }

  // 技能id
  public id: Uint32;
  // 奖励勋章数量
  public num: Uint16;
}

// 技能列表
export class PSkillSimple {

  public static decode(byteArray: ByteArray): PSkillSimple {
    const obj = new PSkillSimple();
    obj.id = byteArray.readUnsignedInt();
    obj.num = byteArray.readUnsignedShort();
    return obj;
  }

  // 技能id
  public id: Uint32;
  // 勋章数量
  public num: Uint16;
}

// 挑战次数
export class PChallengeTimes {

  public static decode(byteArray: ByteArray): PChallengeTimes {
    const obj = new PChallengeTimes();
    obj.type = byteArray.readUnsignedByte();
    obj.times = byteArray.readUnsignedShort();
    obj.resetTimes = byteArray.readUnsignedShort();
    return obj;
  }

  // 挑战类型 1消灭猴子2格挡训练3求生之路
  public type: Uint8;
  // 剩余次数
  public times: Uint16;
  // 重置次数
  public resetTimes: Uint16;
}

// 钻石兑换
export class PExchange {

  public static decode(byteArray: ByteArray): PExchange {
    const obj = new PExchange();
    obj.type = byteArray.readUnsignedByte();
    obj.resetTimes = byteArray.readUnsignedShort();
    return obj;
  }

  // 挑战类型 4换金币 5换体力
  public type: Uint8;
  // 当日购买次数
  public resetTimes: Uint16;
}

// 成就
export class PAchievement {

  public static decode(byteArray: ByteArray): PAchievement {
    const obj = new PAchievement();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedInt();
    obj.progress = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 成就Id
  public id: Uint32;
  // 成就阶段
  public lvl: Uint32;
  // 进度值
  public progress: Uint32;
  // 0未完成1已完成（待领奖）2已领奖
  public status: Uint8;
}

// 新手引导
export class PGuide {

  public static decode(byteArray: ByteArray): PGuide {
    const obj = new PGuide();
    obj.id = byteArray.readUnsignedShort();
    obj.backStage = byteArray.readUnsignedShort();
    return obj;
  }

  // 引导Id
  public id: Uint16;
  // 回退阶段
  public backStage: Uint16;
}

// 关卡信息
export class PStages {

  public static decode(byteArray: ByteArray): PStages {
    const obj = new PStages();
    obj.stageId = byteArray.readUnsignedByte();
    obj.remainTimes = byteArray.readUnsignedByte();
    obj.isDrop = byteArray.readUnsignedByte();
    obj.isPlay = byteArray.readUnsignedByte();
    obj.status = byteArray.readUnsignedByte();
    obj.shareCount = byteArray.readUnsignedByte();
    obj.score = byteArray.readUnsignedByte();
    return obj;
  }

  // 关卡id
  public stageId: Uint8;
  // 剩余次数
  public remainTimes: Uint8;
  // 剧情碎片拥有情况 0否1是
  public isDrop: Uint8;
  // 是否已播放条漫 0否1是
  public isPlay: Uint8;
  // 1已激活2已胜利
  public status: Uint8;
  // 条漫已经分享次数
  public shareCount: Uint8;
  // 历史最好评分 0失败,1:sss,2:ss,3:s,4:A
  public score: Uint8;
}

// 分享数据
export class PShare {

  public static decode(byteArray: ByteArray): PShare {
    const obj = new PShare();
    obj.id = byteArray.readUnsignedByte();
    obj.count = byteArray.readUnsignedByte();
    return obj;
  }

  // 分享类型id
  public id: Uint8;
  // 剩余次数
  public count: Uint8;
}

// 排行榜上的玩家
export class PRank {

  public static decode(byteArray: ByteArray): PRank {
    const obj = new PRank();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.lvl = byteArray.readUnsignedInt();
    obj.headImg = byteArray.readUTF();
    obj.headId = byteArray.readUnsignedInt();
    obj.value = byteArray.readUnsignedInt();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 玩家等级
  public lvl: Uint32;
  // 头像地址
  public headImg: string;
  // 玩家游戏内角色头像id
  public headId: Uint32;
  // 值
  public value: Uint32;
}

// 宠物
export class PPet {

  public static decode(byteArray: ByteArray): PPet {
    const obj = new PPet();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedInt();
    obj.feed = byteArray.readUnsignedInt();
    obj.adTimes = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    obj.use = byteArray.readUnsignedByte();
    return obj;
  }

  // 宠物id
  public id: Uint32;
  // 等级
  public lvl: Uint32;
  // 饲料
  public feed: Uint32;
  // 看广告次数
  public adTimes: Uint32;
  // 0试用1未激活(看广告)2已激活
  public status: Uint8;
  // 是否出战 0否1是
  public use: Uint8;
}

// 推广位置
export class PPos {

  public static decode(byteArray: ByteArray): PPos {
    const obj = new PPos();
    obj.id = byteArray.readUnsignedByte();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 展位id
  public id: Uint8;
  // 领奖状态0未领1已领
  public status: Uint8;
}

// 邀请好友
export class PInvite {

  public static decode(byteArray: ByteArray): PInvite {
    const obj = new PInvite();
    obj.pos = byteArray.readUnsignedInt();
    obj.id = byteArray.readDouble();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 第几位新玩家
  public pos: Uint32;
  // 玩家id
  public id: Uint64;
  // 0未领取 1已领取
  public status: Uint8;
}

// 宝箱
export class PTreasure {

  public static decode(byteArray: ByteArray): PTreasure {
    const obj = new PTreasure();
    obj.type = byteArray.readUnsignedByte();
    obj.times = byteArray.readUnsignedShort();
    return obj;
  }

  // 类型1钻石2金币3体力4经验
  public type: Uint8;
  // 当日剩余次数
  public times: Uint16;
}

// 天赋表
export class PTalent {

  public static decode(byteArray: ByteArray): PTalent {
    const obj = new PTalent();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedInt();
    return obj;
  }

  // 天赋id
  public id: Uint32;
  // 天赋等级
  public lvl: Uint32;
}

// 充值购买
export class PBuy {

  public static decode(byteArray: ByteArray): PBuy {
    const obj = new PBuy();
    obj.id = byteArray.readUnsignedInt();
    obj.count = byteArray.readUnsignedInt();
    obj.upTime = byteArray.readUnsignedInt();
    return obj;
  }

  // 充值id
  public id: Uint32;
  // 此id充值次数
  public count: Uint32;
  // 最后购买时间
  public upTime: Uint32;
}

// 竞技场对手
export class PEnemy {

  public static decode(byteArray: ByteArray): PEnemy {
    const obj = new PEnemy();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.lvl = byteArray.readUnsignedInt();
    obj.headId = byteArray.readUnsignedInt();
    obj.skinId = byteArray.readUnsignedInt();
    obj.rank = byteArray.readUnsignedInt();
    obj.robot = byteArray.readUnsignedByte();
    obj.province = byteArray.readUTF();
    obj.city = byteArray.readUTF();
    obj.district = byteArray.readUTF();
    obj.street = byteArray.readUTF();
    obj.subscribe = byteArray.readUnsignedByte();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 玩家等级
  public lvl: Uint32;
  // 头像icon
  public headId: Uint32;
  // 皮肤id
  public skinId: Uint32;
  // 排名
  public rank: Uint32;
  // 是否为机器人 0否1是
  public robot: Uint8;
  // 省
  public province: string;
  // 市
  public city: string;
  // 区
  public district: string;
  // 街
  public street: string;
  // 0 未订阅 1已订阅
  public subscribe: Uint8;
}

// 可训练属性
export class PPracticeEnemy {

  public static decode(byteArray: ByteArray): PPracticeEnemy {
    const obj = new PPracticeEnemy();
    obj.id = byteArray.readUnsignedShort();
    obj.lvl = byteArray.readUnsignedShort();
    return obj;
  }

  // 属性id
  public id: Uint16;
  // 属性等级
  public lvl: Uint16;
}

// 技能
export class PSkillEnemy {

  public static decode(byteArray: ByteArray): PSkillEnemy {
    const obj = new PSkillEnemy();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedShort();
    obj.slot = byteArray.readUnsignedByte();
    return obj;
  }

  // 技能id
  public id: Uint32;
  // 技能等级
  public lvl: Uint16;
  // 0不在槽位 大于0的为对应槽位
  public slot: Uint8;
}

// 宠物
export class PPetEnemy {

  public static decode(byteArray: ByteArray): PPetEnemy {
    const obj = new PPetEnemy();
    obj.id = byteArray.readUnsignedInt();
    obj.lvl = byteArray.readUnsignedInt();
    return obj;
  }

  // 宠物id
  public id: Uint32;
  // 等级
  public lvl: Uint32;
}

// 竞技场对手
export class PEnemyData {

  public static decode(byteArray: ByteArray): PEnemyData {
    const obj = new PEnemyData();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.lvl = byteArray.readUnsignedInt();
    obj.headId = byteArray.readUnsignedInt();
    obj.skinId = byteArray.readUnsignedInt();
    obj.rank = byteArray.readUnsignedInt();
    obj.robot = byteArray.readUnsignedByte();
    obj.province = byteArray.readUTF();
    obj.city = byteArray.readUTF();
    obj.district = byteArray.readUTF();
    obj.street = byteArray.readUTF();
    obj.subscribe = byteArray.readUnsignedByte();
    obj.detail = byteArray.readUTF();
    return obj;
  }

  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 玩家等级
  public lvl: Uint32;
  // 头像icon
  public headId: Uint32;
  // 皮肤id
  public skinId: Uint32;
  // 排名
  public rank: Uint32;
  // 是否为机器人 0否1是
  public robot: Uint8;
  // 省
  public province: string;
  // 市
  public city: string;
  // 区
  public district: string;
  // 街
  public street: string;
  // 0 未订阅 1已订阅
  public subscribe: Uint8;
  // json字符串 对手详情 如果是机器人为空                 weapon:使用武器id;                 practice:多个训练属性包含id,lvl;                 skill:多个技能 包含id lvl slot;                 pet:多个宠物 包含id lvl;             
  public detail: string;
}

// 头像信息
export class PHead {

  public static decode(byteArray: ByteArray): PHead {
    const obj = new PHead();
    obj.id = byteArray.readUnsignedInt();
    obj.video = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 头像id
  public id: Uint32;
  // 看视频次数
  public video: Uint32;
  // 状态 1激活 2解锁(可以使用)
  public status: Uint8;
}

// 限时礼包
export class PGiftBag {

  public static decode(byteArray: ByteArray): PGiftBag {
    const obj = new PGiftBag();
    obj.type = byteArray.readUnsignedShort();
    obj.id = byteArray.readUnsignedInt();
    obj.discount = byteArray.readUnsignedInt();
    obj.expire = byteArray.readUnsignedInt();
    return obj;
  }

  // 类型 1技能礼包 2战利品礼包
  public type: Uint16;
  // 礼包id
  public id: Uint32;
  // 折扣
  public discount: Uint32;
  // 过期时间
  public expire: Uint32;
}

// 支付累计成就
export class PPayAchieve {

  public static decode(byteArray: ByteArray): PPayAchieve {
    const obj = new PPayAchieve();
    obj.id = byteArray.readUnsignedInt();
    obj.totalFee = byteArray.readDouble();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 成就Id
  public id: Uint32;
  // 设定累计金额
  public totalFee: Uint64;
  // 0未完成1已完成（待领奖）2已领奖
  public status: Uint8;
}

// 皮肤信息
export class PSkin {

  public static decode(byteArray: ByteArray): PSkin {
    const obj = new PSkin();
    obj.id = byteArray.readUnsignedInt();
    obj.status = byteArray.readUnsignedByte();
    return obj;
  }

  // 皮肤id
  public id: Uint32;
  // 状态 0未解锁 1已解锁(可以使用)
  public status: Uint8;
}

// 计数器
export class PCounter {

  public static decode(byteArray: ByteArray): PCounter {
    const obj = new PCounter();
    obj.id = byteArray.readUnsignedInt();
    obj.count = byteArray.readUnsignedInt();
    return obj;
  }

  // id
  public id: Uint32;
  // 次数
  public count: Uint32;
}

// 竞技场排行榜上的玩家
export class PRankArena {

  public static decode(byteArray: ByteArray): PRankArena {
    const obj = new PRankArena();
    obj.pos = byteArray.readUnsignedInt();
    obj.id = byteArray.readDouble();
    obj.name = byteArray.readUTF();
    obj.robot = byteArray.readUnsignedByte();
    return obj;
  }

  // 榜位
  public pos: Uint32;
  // 玩家id
  public id: Uint64;
  // 名称
  public name: string;
  // 是否为机器人 0否1是
  public robot: Uint8;
}

// pk记录
export class PPkRecord {

  public static decode(byteArray: ByteArray): PPkRecord {
    const obj = new PPkRecord();
    obj.time = byteArray.readUnsignedInt();
    obj.fighter = byteArray.readUTF();
    obj.defender = byteArray.readUTF();
    obj.win = byteArray.readUnsignedByte();
    return obj;
  }

  // 时间戳
  public time: Uint32;
  // 挑战者名字
  public fighter: string;
  // 被挑战者名字
  public defender: string;
  // 1挑战者胜利2被挑战者胜利
  public win: Uint8;
}
