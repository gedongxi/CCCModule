export enum Events {
  /**
   *  通用
   */
  // pop panel 显示
  EVENT_MAINUI_POP_PANEL                  = "event_mainui_pop_panel",
  // pop panel 显示前关闭加载
  EVENT_MAINUI_POP_PANEL_CLOSE_WAITING    = "event_mainui_pop_panel_close_waiting",
  // 节点fly
  EVENT_NODE_FLY                          = "event_node_fly",
  // 节点飞至菜单
  EVENT_NODE_FLY_TO_MENU                  = "event_node_fly_to_menu",
  // 节点飞至菜单结束
  EVENT_FLY_TO_MENU_OVER                  = "event_fly_to_menu_over",

  // 钻石换金币
  EVENT_GEM_TO_GOLD                       = "event_gem_to_gold",
  // 钻石换体力
  EVENT_GEM_TO_VIGOR                      = "event_gem_to_vigor",
  // 兑换次数更新
  EVENT_EXCHANGE_TIMES_UPDATE             = "event_exchange_times_update",
  // 打开面板触发游戏圈
  EVENT_ON_CLOSE_CLUB                     = "event_on_open_club",
  // 关闭面板触发游戏圈
  EVENT_ON_OPEN_CLUB                      = "event_on_close_club",

  // 通知主页面关闭inside panel
  EVENT_MAIN_CLOSE_INSIDE_PANEL           = "event_main_close_inside_panel",

  // 关闭所有面板
  EVENT_CLOSE_ALL_PANEL                   = "event_close_all_panel",
  // 打开最新关卡
  EVENT_OPEN_LASTEST_STAGE                = "event_open_lastest_stage",
  // 打开PK界面
  EVENT_OPEN_PK                           = "event_open_ok",


  // 子域消息传递
  SUBDOMAIN_UPDATE                        = "subdomain_update",
  // 红点
  // 总公司 成就通知ui
  EVENT_RED_POINT_MENU_ACHIEVEMENT        = "event_red_point_menu_achievement",
  // 总公司 成就
  EVENT_RED_POINT_ACHIEVEMENT             = "event_red_point_achievement",
  // 酒吧通知menu
  EVENT_RED_POINT_MENU_BAR                = "event_red_point_menu_bar",
  // 酒吧
  EVENT_RED_POINT_BAR                     = "event_red_point_bar",
  // 禅院红点更新
  EVENT_RED_POINT_MENU_ZEN                = "event_red_point_menu_zen",
  // 禅院 怒气
  EVENT_RED_POINT_ZEN_ANGER               = "event_red_point_zen_anger",
  // 禅院 怒气 免费
  EVENT_RED_POINT_ZEN_ANGER_FREE          = "event_red_point_zen_anger_free",
  // 禅院 怒气恢复
  EVENT_RED_POINT_ZEN_RECOVER             = "event_red_point_zen_recover",
  // 禅院 怒气恢复免费
  EVENT_RED_POINT_ZEN_RECOVER_FREE        = "event_red_point_zen_recover_free",
  // 健身房红点更新
  EVENT_RED_POINT_MENU_GYM                = "event_red_point_menu_gym",
  // 健身房 攻击力
  EVENT_RED_POINT_GYM_POWER               = "event_red_point_gym_power",
  // 健身房 攻击力 免费
  EVENT_RED_POINT_GYM_POWER_FREE          = "event_red_point_gym_power_free",
  // 健身房 生命值
  EVENT_RED_POINT_GYM_LIFE                = "event_red_point_gym_life",
  // 健身房 生命值 免费
  EVENT_RED_POINT_GYM_LIFE_FREE           = "event_red_point_gym_life_free",
  // 武器店通知menu
  EVENT_RED_POINT_MENU_WEAPON             = "event_red_point_menu_weapon",
  // 武器店
  EVENT_RED_POINT_WEAPON                  = "event_red_point_weapon",
  // 技能红点更新通知menu
  EVENT_RED_POINT_MENU_SKILL              = "event_red_point_menu_skill",
  // 技能可升级
  EVENT_RED_POINT_SKILL_LVL_UP            = "event_red_point_skill_lvl_up",
  // 技能新解锁
  EVENT_RED_POINT_SKILL_NEW               = "event_red_point_skill_new",
  // 技能红点更改图标通知
  EVENT_RED_POINT_SKILL_ICON_CHANGE       = "event_red_point_skill_icon_change",


  // 挑战剩余次数
  EVENT_RED_POINT_CHALLENGE_LEFTCOUNT     = "event_red_point_challenge_leftcount",
  // 挑战图标更改通知ui
  EVENT_RED_POINT_CHALLENGE_CHANGE_UI     = "event_red_point_challenge_change_ui",
  // 挑战新解锁
  EVENT_RED_POINT_CHALLENGE_NEW           = "event_red_point_challenge_new",
  // 挑战红点更新通知menu
  EVENT_RED_POINT_MENU_CHALLENGE          = "event_red_point_menu_challenge",

  // 关卡红点修改通知主页面
  EVENT_RED_POINT_MENU_STAGE              = "event_red_point_menu_stage",

  // 贩卖机红点首次
  EVENT_RED_POINT_LOTTERY                 = "event_red_point_lottery",
  // 贩卖机红点更新通知menu
  EVENT_RED_POINT_MENU_LOTTERY            = "event_red_point_menu_lottery",
  // 商城红点更新通知menu
  EVENT_RED_POINT_MENU_RECHARGE           = "event_red_point_menu_recharge",
  // 商城更改图标通知
  EVENT_RED_POINT_RECHARGE_ICON_CHANGE    = "event_red_point_recharge_icon_change", 
  // 转盘红点
  EVENT_RED_POINT_TURNTABLE               = "event_red_point_turntable",
  // 转盘红点更新通知menu
  EVENT_RED_POINT_MENU_TURNTABLE          = "event_red_point_menu_turntable",

  // 宝箱红点
  EVENT_RED_POINT_TREASURE                = "event_red_point_treasure",
  // 宝箱红点更新通知menu
  EVENT_RED_POINT_MENU_TREASURE           = "event_red_point_menu_treasure",
  // 宠物升级红点
  EVENT_RED_POINT_PET                     = "event_red_point_pet",
  // 宠物升级红点更新通知menu
  EVENT_RED_POINT_MENU_PET                = "event_red_point_menu_pet",  
  // 宠物狗狗可以解锁状态红点
  EVENT_RED_POINT_PET_LOCK                = "event_red_point_pet_lock",
  // 宠物更改图标通知
  EVENT_RED_POINT_PET_ICON_CHANGE         = "event_red_point_pet_icon_change",  
  // 宠物升级红点通知主界面
  EVENT_RED_POINT_PET_MAINUI              = "event_red_point_pet_mainui",

  // 累计充值礼包红点
  EVENT_RED_POINT_PAY_ACHIEVE             = "event_red_point_pay_achieve",
  // 每日累计充值礼包
  EVENT_RED_POINT_DAILY_ACHIEVE           = "event_red_point_daily_achieve",
  // 累计充值礼包红点
  EVENT_RED_POINT_MENU_PAY_ACHIEVE         = "event_red_point_menu_pay_achieve",


  // 好友助力
  EVENT_RED_POINT_INVITE                  = "event_red_point_invite",
  // 好友助力每日首登录
  EVENT_RED_POINT_INVITE_DAY_FIRST        = "event_red_point_invite_day_first",
  // 好友助力更新通知menu
  EVENT_RED_POINT_MENU_INVITE             = "event_red_point_menu_invite",  

  // 签到红点
  EVENT_RED_POINT_SIGN                    = "event_red_point_sign",
  // 签到红点更新通知menu
  EVENT_RED_POINT_MENU_SIGN               = "event_red_point_menu_sign",  
  // 客服红点
  EVENT_RED_POINT_CUSTOMER                = "event_red_point_customer",
  // 客服红点更新通知menu
  EVENT_RED_POINT_MENU_CUSTOMER           = "event_red_point_menu_customer",  
  // 天赋红点
  EVENT_RED_POINT_TALENT                  = "event_red_point_talent",  
  // 天赋红点更新通知menu
  EVENT_RED_POINT_MENU_TALENT             = "event_red_point_menu_talent",  

  // 训练红点更改
  EVENT_RED_POINT_PRACTICE_CHANGE         = "event_red_point_practice_change",

  // 训练中心红点派发
  EVENT_RED_POINT_PRACTICECTL_CHANGE      = "event_red_point_practicectl_change",

  // 每日礼包红点更改
  EVENT_RED_POINT_DAILY_REWARD_CHANGE     = "event_red_point_daily_reward_change",
  // 其他奖励红点更改
  EVENT_RED_POINT_OTHER_CHANGE            = "event_red_point_other_change",

  // Pk 红点图标更改
  EVENT_RED_POINT_PK_CHNAGE               = "event_red_point_pk_change",

  // Pk红点
  EVENT_RED_POINT_PK_TIMES                   = "event_red_point_pk_times",  
  // pk红点更新通知menu
  EVENT_RED_POINT_MENU_PK_TIMES              = "event_red_point_menu_pk_times",  

  // 
  // 段位宝箱红点
  EVENT_RED_POINT_DUAN_BOX                = "event_red_point_duan_box",  
  // 宝箱红点通知menu
  EVENT_RED_POINT_DUAN_BOX_ARENA          = "event_red_point_duan_box_arena",  
  // 段位奖励红点
  EVENT_RED_POINT_DUAN_REWARD             = "event_red_point_duan_reward",  
  // 段位奖励红点通知menu
  EVENT_RED_POINT_DUAN_REWARD_ARENA       = "event_red_point_duan_reward_arena",  
  

  // 商城每日红点
  EVENT_RED_POINT_PAYMENT_DAY_FIRST       = "event_red_point_payment_day_first",
  // 商城首充
  EVENT_RED_POINT_PAYMENT_FIRST_CHARGE    = "event_red_point_payment_first_charge",

  // 引导
  // 进入主场景
  EVENT_ENTER_MAINSCENE                   = "event_guide_mainscene",
  // 初始化引导数据
  EVENT_GUIDE_INIT_DATA                   = "event_guide_init_data",
  // 关卡解锁通知
  EVENT_GUIDE_STAGE_OPEN                  = "event_guide_stage_open",
  // 引导数据更新
  EVENT_UPDATA_GUIDE                      = "event_updata_guide",    
  // 引导结束
  EVENT_GUIDE_OVER                        = "event_guide_over",
  // 引导状态还原
  EVENT_GUIDE_INIT                        = "event_guide_init",
  // 过场动画数据
  EVENT_GUIDE_FIRST                       = "event_guide_first",
  // 引导开启
  EVENT_GUIDE_OPEN                        = "event_guide_open",
  // container panel 弹完
  EVENT_CONTAINER_OVER                    = "event_container_over",
  /**
   *  InitScene
   */


  /**
   * LoginScene
   */
  // 程序进入后台
  EVENT_APP_ON_HIDE                      = "event_app_background",        
  
  // 程序进入前台
  EVENT_APP_ON_SHOW                      = "event_app_show", 
  
  // 程序进入前台并确定已经连上socket
  EVENT_APP_ON_SHOW_CONNECT              = "event_app_show_connect", 

  // 程序由后端进入前端 并且连上socket
  EVENT_APP_ON_SHOW_AND_CONNECT          = "event_app_on_show_and_connect",

  // 通知netwatcher重连
  EVENT_RECONNECT                        = "event_reconnect",             

  // 在选服界面切换服务器
  EVENT_LOGIN_SWITCH_SERVER               = "event_login_switch_server",  

  // 选头像
  EVENT_LOGIN_CHOOSE_HEAD                 = "event_login_choose_head",

  // 创建角色成功
  EVENT_LOGIN_CREATOR_ROLE                = "event_login_creator_role",

  // 显示输入情形
  EVENT_SHOW_ACC_INPUT                    = "event_show_acc_input",

  // 成功登录
  EVENT_LOGIN_SUCCESS                     = "event_login_success",
  /**
   * MainScene
   */

  // 变强位置通知
  EVENT_MAIN_STRONG_POS                   = "event_main_strong_pos",
  
  // 显示顶层砖石金币体力
  EVENT_MAINUI_SHOW_TOP                   = "event_mainui_show_top",
  // 隐藏顶层砖石金币体力
  EVENT_MAINUI_HIDE_TOP                   = "event_mainui_hide_top",

  // 试玩游戏面板关闭
  EVENT_MAINUI_TRYGAME_CLOSE              = "event_mainui_trygame_close",

  // 关卡

  EVENT_STAGE_INFORM_CHOSE_STAGE          = "event_stage_inform_chose_stage",
  // 开始战斗
  EVENT_STAGE_ENTER_BATTLE                = "event_stage_enter_battle",
  // 战斗结算
  EVENT_STAGE_COMPLETE_BATTLE             = "event_stage_complete_battle",
  // 关卡列表更新
  EVENT_STAGE_UPDATE                      = "event_stage_update",
  // 解锁新的区域
  EVENT_STAGE_NEXT_AREA                   = "event_stage_next_area",
  // 双倍领取返回
  EVENT_MAIN_STAGE_DOUBLE                 = "event_main_stage_double",
  // 显示关卡列表
  EVENT_STAGE_SHOW_LIST                   = "event_stage_show_list",
  // 关闭关卡列表
  EVENT_STAGE_HIDE_LIST                   = "event_stage_hide_list",
  // 打开固定的关卡
  EVENT_STAGE_BY_STAGE_ID                 = "event_stage_by_stage_id",
  // 点击关卡item
  EVENT_STAGE_ITEM_CLICK                  = "event_stage_item_click",
  // 开启新关卡
  EVENT_STAGE_NEW_OPEN                    = "event_stage_new_open",
  // 增加关卡次数
  EVENT_STAGE_ADD_TIMES                   = "event_stage_add_times",
  // 关卡数据更新
  EVENT_STAGE_DATA_UPDATE                 = "event_stage_data_update",
  // 结算额外奖励返回
  EVENT_SETTLEMENT_REWARD                 = "event_settlement_reward",
  // 结算翻牌返回
  EVENT_SETTLEMENT_CARD_BACK              = "event_settlement_card_back",

  // 扫荡券消耗返回
  EVENT_SWEET_COST_BACK                   = "event_sweet_cost_back",
  // 扫荡券领取返回
  EVENT_SWEET_GET_BACK                    = "event_sweet_get_back",

  // 条漫
  // 条漫分享领奖返回
  EVENT_COMIC_SHARE_REWARD                = "event_comic_share_reward",
  

  // 武器
  // 更新武器列表
  EVENT_WEAPON_UPDATE_LIST                = "event_weapon_update_list",
  // 使用武器
  EVENT_WEAPON_USE_WEAPON                 = "event_weapon_use_weapon",
  // 购买武器
  EVENT_WEAPON_BUY_WEAPON                 = "event_weapon_buy_weapon",
  // 武器更新
  EVENT_WEAPON_UPDATE                     = "event_weapon_update",
  
  // 技能
  // 槽位技能卸下
  EVENT_MAIN_SKILL_SLOT_DOWN                   = "event_main_skill_slot_down",
  // 槽位技能替换/添加
  EVENT_MAIN_SKILL_SLOT_UP                     = "event_main_skill_slot_up",
  // 解锁槽位
  EVENT_MAIN_SKILL_SLOT_UNLOCK                 = "event_main_skill_slot_unslot",
  // 槽位技能更新
  EVENT_MAIN_SKILL_SLOT_UPDATE                 = "event_main_skill_slot_update",
  // 技能升级
  EVENT_MAIN_SKILL_UPGRADE                     = "event_main_skill_upgrade",
  // 技能列表解锁
  EVENT_MAIN_SKILL_UNLOCK                      = "event_main_skill_unlock",
  // 首充技能列表解锁
  EVENT_MAIN_SKILL_UNLOCK_FIRSTCHARGE          = "event_main_skill_unlock_firstcharge",
  // 技能勋章更新
  EVENT_MAIN_SKILL_MEDAL_UPDATE                = "event_main_medal_update",
  // 打开技能列表
  EVENT_MAIN_SKILL_OPEN_SKILL_LIST             = "event_main_skill_open_skill_list",
  // 技能切换
  EVENT_MAIN_SKILL_SLOT_CHANGE                 = "event_main_skill_slot_change",
  // 自动技能槽销毁
  EVENT_MAIN_SKILL_AUTO_SKILL_UNUP             = "event_main_skill_auto_skill_unup",
  // 技能购买返回
  EVENT_MAIN_SKILL_BUY_RETURN                  = "event_main_skill_buy_return",

  // 酒吧
  // 切换元素
  EVENT_MAIN_SCENE_BAR_CHANGE_WINE = "event_main_scene_bar_change_wine",
  // 选中元素，弹出框
  EVENT_MAIN_SCENE_BAR_SELECT_WINE = "event_main_scene_bar_select_wine",
  // 酒吧信息更新
  EVENT_MAIN_SCENE_BAR_UPDATE = "event_main_scene_bar_update",
  // 喝酒返回
  EVENT_MAIN_SCENE_BAR_DRINK_BACK = "event_main_scene_bar_drink_back",
  // 计时结束清除返回
  EVENT_MAIN_SCENE_BAR_CLEAR_BACK = "event_main_scene_bar_clear_back",

  // 拼图
  // 点击拼图出现详情
  EVENT_MAIN_SCENE_PUZZLE_SELECT = "event_main_scene_puzzle_select",
  // 关闭其他碎片的操作按钮
  EVENT_MAIN_SCENE_PUZZLE_CLOSE_OPERATION = "event_main_scene_puzzle_close_operation",
  // 解锁新的区域
  EVENT_MAIN_SCENE_PUZZLE_NEW_AREA = "event_main_scene_puzzle_new_area",
  // 左上角数字-1
  EVENT_MAIN_SCENE_PUZZLE_MINUS = "event_main_scene_puzzle_minus",
  

  // 用户信息
  EVENT_MAIN_SCENE_PLAYER_FORTUNE_UPDATE = "event_main_scene_player_fortune_update",
  EVENT_MAIN_SCENE_PLAYER_LVL_UPDATE     = "event_main_scene_player_lvl_update",
  // 升级双倍返回
  EVENT_MAIN_SCENE_PLAYER_LVL_REWARD     = "event_main_scene_player_lvl_reward",

  // 健身房，禅院

  // 升级返回
  EVENT_MAIN_PRACTICE_LVL_UP          = "event_main_practice_lvl_up",

  // 属性更新
  EVENT_MAIN_PRACTICE_UPDATE          = "event_main_practice_update",
  // 属性查找
  EVENT_MAIN_PRACTICE_FIND            = "event_main_practice_find",
  // 生命增加百分比更新
  EVENT_MAIN_HP_RATE_UPDATE           = "event_main_hp_rate_update",
  // 攻击力增加百分比更新
  EVENT_MAIN_ATK_RATE_UPDATE          = "event_main_atk_rate_update",

  // 签到相关
  // 签到更新 或返回
  EVENT_MAIN_SIGN_UPDATE              = "event_main_sign_update",
  EVENT_MAIN_SIGN_BACK                = "event_main_sign_back",
  EVENT_MAIN_SIGN_GET_BACK            = "event_main_sign_get_back",
  // 分享返回
  EVENT_MAIN_SHARE_BACK               = "event_main_share_back",

  // 贩卖机
  // 单抽是否为首次
  EVENT_LOTTERY_IS_FIRST              = "event_lottery_is_first",
  // 抽奖返回
  EVENT_LOTTERY_RETURN                = " event_lottery_return",


  // 挑战相关
  // 挑战信息更新
  EVENT_MAIN_CHALLENGE_UPDATE         = " event_main_challenge_update",
  // 开始挑战返回
  EVENT_MAIN_CHALLENGE_START          = " event_main_challenge_start",
  // 钻石重置返回
  EVENT_MAIN_CHALLENGE_RESET          = " event_main_challenge_reset",
  // 挑战双倍领取返回
  EVENT_MAIN_CHALLENGE_DOUBLE         = " event_main_challenge_double",
  // 挑战结束返回
  EVENT_MAIN_CHALLENGE_FINISH         = " event_main_challenge_finish",

  // 成就相关
  // 成就信息更新
  EVENT_MAIN_ACHIEVEMENT_UPDATE       = " event_main_achievement_update",
  // 成就领取返回
  EVENT_MAIN_ACHIEVEMENT_REWARD_BACK  = " event_main_achievement_reward_back",

  // 看广告返回
  EVENT_MAIN_WATCH_AD_BACK            = " event_main_watch_ad_back",
  // 累计观看广告次数成就
  EVENT_MAIN_TIMES_AD_BACK            = " event_main_times_ad_back",
  // 观看广告次数达成领奖
  EVENT_MAIN_REWARD_AD_BACK           = " event_main_reward_ad_back",
  // 看广告状态
  EVENT_MAIN_VIDEO_AD                 = "event_main_video_ad",
  

  // 宝箱相关
  EVENT_MAIN_TREASURE_OPEN_BACK       = " event_main_treasure_open_back",
  // 宝箱每日更新
  EVENT_MAIN_TREASURE_UPDATE          = " event_main_treasure_update",

  // 排行榜
  EVENT_MAIN_RANK_LIST                = " event_main_rank_list",
  // 客服相关
  EVENT_MAIN_CUSTOMER_BACK            = "event_main_customer_back",
  EVENT_MAIN_CUSTOMER_TIMES_UPDATE    = "event_main_customer_times_update",

  // 计数器
  // 计数器更新
  EVENT_MAIN_COUNTER_UPDATE           = "event_main_counter_update",

  // 砸金蛋奖励
  EVENT_MAIN_GOLD_EGG_AWARD           = "event_main_gold_egg_award",
  
  // 录屏
  // 开始录屏
  EVENT_MAIN_RECORD_START             = "event_main_record_start",
  // 录屏结束
  EVENT_MAIN_RECORD_FINISH            = "event_main_record_finish",
  // 隐藏录屏功能
  EVENT_MAIN_HIDE_RECORD              = "event_main_hide_record",
  // 展示录屏功能 
  EVENT_MAIN_SHOW_RECORD              = "event_main_show_record",
  // 条漫录屏结束
  EVENT_MAIN_COMIC_RECORD_OVER        = "event_main_comic_record_over",
  // 条漫小于3秒
  EVENT_MAIN_COMIC_RECORD_LESS        = "event_main_comic_record_less",
  // 剪辑视频失败
  EVENT_MAIN_CLIP_RECORD_FAIL         = "event_main_clip_record_fail",
  
  // 宠物

  // 买狗粮
  EVENT_MAIN_PET_BUY                  = "event_main_pet_buy",
  // 升级
  EVENT_MAIN_PET_UPGRADE              = "event_main_pet_upgrade",
  // 上阵下阵
  EVENT_MAIN_PET_BATTLE               = "event_main_pet_battle",
  // 更新
  EVENT_MAIN_PET_UPDATE               = "event_main_pet_update",
  // 看广告返回
  EVENT_MAIN_PET_AD                   = "event_main_pet_ad",
  // 列表返回
  EVENT_MAIN_PET_LIST                 = "event_main_pet_list",
  // 宠物提示
  EVENT_MAIN_PET_TIPS                 = "event_main_pet_tips",
  // 宠物item更新通知
  EVENT_MAIN_PET_ITEM_UPDATE          = "event_main_pet_item_update",
  // 宠物财富购买返回
  EVENT_MAIN_PET_TREASURE_BUY         = "event_main_pet_treasure_buy",
  // 试用返回
  EVENT_MAIN_PET_TRIAL_RETURN         = "event_main_pet_trial_return",
  // 根据试用结束打开的面板 关闭
  EVENT_MAIN_PET_TRIAL_CLOSE_PANEL    = "event_main_pet_trial_close_panel",

  // 排行榜相关
  // 授权返回
  EVENT_MAIN_RANK_AUTH_BACK           = "event_main_rank_auth_back",


  // 推广相关

  // 等待开奖
  EVENT_MAIN_WAIT_PROMOTE             = "event_main_wait_promote",
  // 推广数据领奖
  EVENT_MAIN_PROMOTE_REWARD           = "event_main_promote_reward",

  // 邀请
  // 获取玩家信息
  EVENT_MAIN_INVITE_GET_PLAYER        = "event_main_invite_get_player",
  // 领奖返回
  EVENT_MAIN_INVITE_GET_REWARD        = "event_main_invite_get_reward",
  // 新数据添加
  EVENT_MAIN_INVITE_NEW_INVITE        = "event_main_invite_new_invite",

  // 离线收益
  EVENT_MAIN_OFFLINE_REWARD           = "event_main_offline_reward", 

  // 天赋
  // 天赋升级返回
  EVENT_MAIN_TALENT_UPGRADE_BACK      = "event_main_talent_upgrade_back",
  // 天赋选择展示详细信息
  EVENT_MAIN_TALENT_DETAIL            = "event_main_talent_detail",
  // 天赋付钱返回
  EVENT_MAIN_TALENT_PAY_BACK          = "event_main_talent_pay_back",
  // 天赋免费次数变化
  EVENT_MAIN_TALENT_FREE_COUNT        = "event_main_talent_free_count",


  // 空投
  // 子节点动画播完
  EVENT_MAIN_AIRDROP_ITEM_ANIMOVER    = "event_main_airdrop_item_animover",
  // 空投领奖
  EVENT_MAIN_AIRDROP_REWARD           = "event_main_airdrop_reward",
  // 空投数据过期(服务端: 领奖返回)
  EVENT_MAIN_AIRDROP_DATA_OUTTIME     = "event_main_airdrop_data_outtime",
  // 显示item数量
  EVENT_MAIN_AIRDROP_SHOW_COUNT       = "event_main_airdrop_show_count",
  // 空投详情页面关闭
  EVENT_MAIN_AIRDROP_PANEL_CLOSE      = "event_main_airdrop_panel_close",
  // 空投动画播放完
  EVENT_MAIN_AIRDROP_ANIM_OVER        = "event_main_airdrop_anim_over",
  
  // 支付相关
  // 提交订单返回
  EVENT_MAIN_PAYMENT_ORDER            = "event_main_payment_order",
  // 充值信息更新
  EVENT_MAIN_PAYMENT_UPDATE           = "event_main_payment_update",
  // 服务器处理票据结果
  EVENT_MAIN_RECEPIT_RESULT           = "event_main_receipt_result",
  // 充值结果返回
  EVENT_MAIN_PAYMENT_RETURN           = "event_main_payment_return",
  // 无限体力购买成功
  EVENT_MAIN_INFINITE_VIGOR           = "event_main_infinite_vigor",
  // 无限体力状态变化通知
  EVENT_MAIN_INFINITE_VIGOR_STATUS    = "event_main_infinite_vigor_status",
  // 宠物礼包购买成功
  EVENT_MAIN_PET_GIFT                 = "event_main_pet_gift",
  // 支付成就列表更新
  EVENT_MAIN_GIFT_ACHIEVE_UPDATE      = "event_main_gift_achieve_update",
  // 支付成就领取返回
  EVENT_MAIN_GIFT_ACHIEVE_BACK        = "event_main_gift_achieve_back",
  // 打开对应的奖励页面 如武器店 皮肤店 技能面板
  EVENT_MAIN_GIFT_ACHIEVE_HREF        = "event_main_gift_achieve_href",
  // 充值总金额发生变化
  EVENT_MAIN_RECHARGE_TOTAL_CHANGE    = "event_main_recharge_total_change",

  // 订阅相关
  // 订阅成功通知
  EVENT_MAIN_SUBSCRIBE_SUCCESS        = "event_main_subscribe_success",
  // 订阅免看广告剩余次数更新
  EVENT_MAIN_SUBSCRIBE_AD_UPDATE      = "event_main_subscribe_ad_update",

  // 月卡相关
  // 月卡购买成功通知
  EVENT_MAIN_MONTH_CARD_SUCCESS        = "event_main_month_card_success",
  // 月卡状态改变
  EVENT_MAIN_MONTH_CARD_CHANGE         = "event_main_month_card_change",



  // 换肤相关
  EVENT_MAIN_SKIN_SELECT              = "event_main_skin_select",

  // pk相关
  // 请求对手列表返回
  EVENT_MAIN_ARENA_ENEMY_LIST         = "event_main_arena_enemy_list",
  // pk次数更新
  EVENT_MAIN_ARENA_PK_TIMES           = "event_main_arena_pk_times",
  // pk次数购买次数更新
  EVENT_MAIN_ARENA_BUY_TIMES          = "event_main_arena_buy_times",
  // 我的排名更新
  EVENT_MAIN_ARENA_MY_POS             = "event_main_arena_my_pos",
  // 获取对手信息返回
  EVENT_MAIN_ARENA_ENEMY_INFO         = "event_main_arena_enemy_info",
  // 领取排行榜奖励返回
  EVENT_MAIN_ARENA_REWARD_BACK        = "event_main_arena_reward_back",
  // 结算竞技场榜位更新
  EVENT_MAIN_ARENA_SETTLE_POS         = "event_main_arena_settle_pos",
  // 排名区域突然发生变化
  EVENT_MAIN_ARENA_POS_AREA_CHANGE    = "event_main_arena_pos_area_change",
  // 领取段位宝箱返回
  EVENT_MAIN_ARENA_DUAN_GAIN_BACK     = "event_main_arena_duan_gain_back",
  // 段位宝箱次数更新
  EVENT_MAIN_ARENA_DUAN_TIMES         = "event_main_arena_duan_times",
  // 排行榜查询返回
  EVENT_MAIN_ARENA_RANK_BACK          = "event_main_arena_rank_back",
  // 根据排名获取详细数据返回
  EVENT_MAIN_ARENA_RANK_DETAIL_BACK   = "event_main_arena_rank_detail_back",



  // 换头像
  EVENT_MAIN_ROLE_CHANGE_HEAD         = "event_main_role_change_head",
  // 头像激活
  EVENT_MAIN_ROLE_HEAD_ACTIVE         = "event_main_role_head_active",
  // 改名
  EVENT_MAIN_ROLE_CHANGE_NAME         = "event_main_role_change_name",
  // 改名失败
  EVENT_MAIN_ROLE_CHANGE_NAME_FAIL    = "event_main_role_change_name_fail",

  // 皮肤相关
  // 换皮肤返回
  EVENT_MAIN_ROLE_SKIN_BACK           = "event_main_role_skin_back",
  // 皮肤状态更新
  EVENT_MAIN_ROLE_SKIN_UPDATE         = "event_main_role_skin_update",


  // 限时礼包相关
  EVENT_MAIN_GIFT_BAG_BACK            = "event_main_gift_bag_back",
  // 领取限时礼包返回
  EVENT_MAIN_GIFT_BAG_GAIN_BACK       = "event_main_gift_bag_gain_back",
  // 删除限时礼包
  EVENT_MAIN_GIFT_BAG_DELETE          = "event_main_gift_bag_delete",
  // 服务端到时删除限时礼包
  EVENT_MAIN_GIFT_BAG_SERVER_DELETE   = "event_main_gift_bag_server_delete",


  // 打开recharge panel
  EVENT_MAIN_OPEN_RECHARGE_PANEL      = "event_main_open_recharge_panel",

  // 转盘相关
  // 转盘抽奖返回
  EVENT_MAIN_TURNTABLE_DRAW           = "event_main_turntable_draw",
  // 转盘抽奖返回
  EVENT_MAIN_TURNTABLE_LEFT           = "event_main_turntable_left",
  // 转盘视频次数更新
  EVENT_MAIN_TURNTABLE_VIDEO_COUNT    = "event_main_turntable_video_count",



  // 互推 
  // 互推页关闭
  EVENT_MUTUAL_PANEL_CLOSE            = "event_mutual_panel_close",
  // 互推落地页 打开关闭通知
  EVENT_LANDING_PANEL                 = "event_landing_panel",
  // 互推全屏面板打开或关闭
  EVENT_MUTUAL_FULL_PANEL             = "event_mutual_full_panel",

  /**
   * BattleScene
   */

  // 战斗引导完成
  EVENT_BATTLE_GUIDE_FINISH        = "event_battle_guide_finish",

  // 全部属性值
  EVENT_BATTLE_START               = "event_battle_start",

  // 长按屏幕动作结束
  LONG_TOUCH_END                   = "touch_screen_end",

  // 玩家控制移动
  USER_CONTROL_MOVE                = "user_control_move",

  // // 所有手动技能进入阻止释放的
  // SKILL_UPDATE_BLOCK_STATE         = "skill_update_block_state",
  
  // 血量变化
  ROLE_CHANGE_HP                    = "role_chang_hp",
  
  // 释放技能时显示black动画
  UI_PLAY_BLACK_ANIM                = "ui_play_black_anim",

  // 显示血量
  UI_SHOW_HERO_HP                   = "ui_show_hero_hp",
  UI_SHOW_ENEMY_HP                  = "ui_show_enemy_hp",

  // 显示伤害
  UI_SHOW_HERO_DAMAGE               = "ui_show_hero_damage",
  UI_SHOW_ENEMY_DAMAGE              = "ui_show_enemy_damage",

  // 连击结束
  UI_SHOW_ENEMY_DAMAGE_OVER         = "ui_show_enemy_damage_over",

  // 显示怒气
  UI_SHOW_ANGER                     = "ui_show_anger",
  
  // 更换英雄头像
  UI_ChANGE_HERO_INFO               = "ui_update_lhead",

  // 更换敌人头像
  UI_CHANGE_ENEMY_INFO              = "ui_update_rhead",

  // 挑战中更新得分
  UI_CHALLENGE_UPDATE_SCORE         = "ui_challenge_update_score",

  // 挑战中吃到食物
  UI_CHALLENGE_GAIN_FOOD            = "ui_challenge_gain_food",
  
  // 战斗结束
  BATTLE_OVER                        = "battle_over",

  // 挑战结束
  CHALLENGE_OVER                     = "challenge_over",
  
  // 更新技能cd
  SKILL_UPDATE_CD_FRAME                 = "skill_update_cd_frame",

  // 受到push
  ROLE_DAMAGE_PUSH                      = "role_damage_push",

  // 收到rise
  ROLE_DAMAGE_RISE                      = "role_damage_rise",

  // 浮空动作分解
  ROLE_FALL_BEGIN                       = "role_fall_begin",       // 下落
  ROLE_FALL_REBOUND                     = "role_fall_rebound",     // 反弹
  ROLE_FALL_ON_GROUND                   = "role_fall_on_ground",   // 着地

  // role打死别人
  ROLE_KILL_LISTENER                    = "role_kill_listener",

  // role被打死
  ROLE_DEAD_LSITENER                    = "role_dead_listener",

  // 攻击别人
  ROLE_HIT_LISTENER                     = "role_hit_listener",

  // 被别人攻击
  ROLE_BEHIT_LISTENER                   = "role_behit_listener",

  // 改变疼痛状态时
  ROLE_HURT_STATUS_LISTENER             = "role_hurt_status_listener",
  
  // 技能完成
  ROLE_SKILL_COMP                       = "role_skill_comp", 

  // 释放技能
  ROLE_SKILL_LAUNCH                     = "role_skill_launch",
  
  // 主角技能完成
  LEADER_MANUAL_SKILL_COMP              = "leader_manual_skill_comp",

  // 主角释放主动技能
  LEADER_MANUAL_SKILL_LAUNCH            = "leader_manual_skill_launch",

  // 复活返回
  RECOVER_LIFE_RETURN                   = "recover_life_return",

  // 英雄出生
  HERO_BORN_LISTENER                    = "hero_born_listener",

  // 英雄初始化完成
  HERO_INIT_COMP                        = "hero_init_comp",

  // 敌人出生
  ENEMY_BOEN_LISTENER                   = "enemy_born_listener",

  // 敌人初始化
  ENEMY_INIT_COMP                       = "enemy_init_comp",
  
  // "战斗引导"控制技能icon是否可点击
  BATTLE_GUIDE_SKILL_ICON_BLOCK         = "battle_guide_skill_icon_block",

  // "战斗引导"结束
  BATTLE_GUIDE_OVER                     = "battle_guide_over",
  
  // 成功释放技能
  LAUNCH_MANUAL_SKILL                   = "launch_manual_skill",
  
  // 战斗请求奖励返回
  BATTLE_GET_REWARD_RETURN              = "battle_get_reward_return",
  // 
  /**
   * transitionScene
   */
}
