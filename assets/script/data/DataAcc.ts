
// 玩家账号相关数据的保存

export default class DataAcc {
  // 获取单例
  public static get INSTANCE(): DataAcc {
    if (!DataAcc.singleInstace) {
      DataAcc.singleInstace = new DataAcc();
    }
    return DataAcc.singleInstace;
  }
  private static singleInstace: DataAcc;

  public accOpenId: string = "";        // 登陆账号的惟一的Id 一般是第三方提供的
  public accOpenKey: string = "";
  public accPlatform: string = "";
  public accPlatformParam: string = ""; // 平台的参数
  public serverId: number = null;       // 当前登陆的服务器Id
  
  public gameAccountId   = "";          // 游戏的账号Id
  public gameAccountSign = "";          // 游戏的账号签名
  
  // 设置登陆数据
  public set LoginData(loginData: Partner.LoginData) {
    if (loginData) {
      this.accOpenId         = loginData.openid;
      this.accOpenKey        = loginData.openkey;
      this.accPlatform       = loginData.platform;
      this.accPlatformParam  = loginData.params; 
    } else {
      this.accOpenId         = "";
      this.accOpenKey        = "";
      this.accPlatform       = "";
      this.accPlatformParam  = "";
    }
  }
}
