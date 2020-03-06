import * as ConfigVO from "./vo/ConfigVO";
import { RESOURCE_CONFIG_PATH_ROOT, RESOURCE_FONT_PATH_ROOT, GameBIType } from "../scene/base/BaseDefine";
import Misc from "../commonUnit/Misc";
import { ByteArray } from "../commonUnit/NetByteArray";

const ClazzMap = {
};

// 记载json文件
function loadJson(name: string): Promise<any> {
  // v2.0.5
  return new Promise<any>((resolve, reject) => {
    cc.loader.loadRes("config/" + name, function(err, resource) {
      if (err) {
        cc.warn(`load config:${name} err:${err}`);
        resolve(null);
        return;
      }
      resolve(resource.json);
    });
  });
}

// 加载字体文件
function loadFont(name: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    cc.loader.loadRes(RESOURCE_FONT_PATH_ROOT + name, cc.TTFFont, function(err, resource) {
      if (err) {
        cc.warn(`load font:${name} err:${err}`);
        resolve(null);
        return;
      }
      resolve(resource);
    });
  });
}

function loadZip(name: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    cc.loader.loadRes(RESOURCE_CONFIG_PATH_ROOT + name, function(err, resource) {
      if (err) {
        cc.warn(`load zip:${name} err:${err}`);
        resolve(null);
        return;
      }
      resolve(resource);
    });
  });
}

function onConfigLoaded(configName: string, data: any) {
  if (configName === "SysLanguageCN" || configName === "SysLanguageEN") {
    setI18NSysLanguage(configName, data);
    return;
  }

  const name = configName.replace(/^(?:Sys|Client)?(.*)$/, "$1");
  if (ConfigVO[name]) {
    const vo = ConfigVO[name];
    if (vo.isInited) {
      return;
    }
  }

  ConfigVO[name].setClass(ClazzMap[name]);
  ConfigVO[name].initData(data);
}


function onZipLoaded(fakeZipAsset: any) {
  const files = fakeZipAsset.zip;
  console.log("=================fakeZip", fakeZipAsset);

  for (const fileName of Object.keys(files)) {
    Misc.myLog("zip file:" + fileName);
    const data = files[fileName] as Uint8Array;
    const bytes: ByteArray = new ByteArray(data);
    const fileContent = bytes.readUTFBytes(bytes.bytesAvailable);
    const confName = fileName.split(".")[0];
    onConfigLoaded(confName, JSON.parse(fileContent));
  }
}

export async function loadAllConfig() {
  const serverListName: string = "ServerList";
  const serverList = await loadJson(serverListName);
  if (!serverList) {
    return false;
  }
  onConfigLoaded(serverListName, serverList);
  
  // // 加载字体文件
  // const fontNormal = await loadFont("normal");
  // changeFont(fontNormal);
  // GamePersist.INSTANCE.fontNormal = fontNormal;
  
  // 加载zip包
  Misc.myLog("加载other.zip");
  const zipFile = await loadZip("other");
  Misc.myLog("zipFile data", zipFile);
  if (!zipFile) {
    return false;
  }

  onZipLoaded(zipFile);
  
  return true;
}

function setI18NSysLanguage(configName: string, data: any) { 
  Misc.myLog("多语言", configName, i18n.locale);
  if (configName === "SysLanguageCN" && i18n.locale === "cn") {
    i18n.sysData = data;
  } else if (configName === "SysLanguageEN" && i18n.locale === "en") {
    i18n.sysData = data;
  } 
}
