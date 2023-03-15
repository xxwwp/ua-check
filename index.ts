export function uaCheck() {
  const ua = navigator.userAgent,
    // 常规判断
    isWindowsPhone = /(Windows Phone)/.test(ua),
    isSymbian = /SymbianOS/.test(ua) || isWindowsPhone,
    isAndroid = /Android/.test(ua) || ua.indexOf("Linux") > -1 || ua.indexOf("Adr") > -1,
    isFireFox = /Firefox/.test(ua),
    isChrome = /Chrome|CriOS/.test(ua),
    isTablet = /iPad|PlayBook/.test(ua) || (isAndroid && !/Mobile/.test(ua)) || (isFireFox && /Tablet/.test(ua)),
    isIPhone = /iPhone/.test(ua) && !isTablet,
    isPc = !isIPhone && !isAndroid && !isSymbian && !isTablet,
    isPhone = !isPc && !isTablet,
    isIOS = !!ua.match(/macintosh|mac os x/i),
    isIE = !!(window as any).ActiveXObject || "ActiveXObject" in window ? true : false,
    // 判断品牌
    isWeChatBrowser = /MicroMessenger/i.test(ua), // 微信浏览器
    isHuawei = /huawei|honor/i.test(ua),
    isOppo = /oppo|pacm00/i.test(ua),
    isVivo = /vivo/i.test(ua),
    isXiaomi = /mi\s|mix\s|redmi/i.test(ua),
    isPixel = /Pixel/i.test(ua),
    isSamsung = /sm-/i.test(ua); // 三星

  const os = {
    isTablet,
    isIPhone,
    isPhone,
    isPc,
    isAndroid,
    isIOS,
    isChrome,
    isFireFox,
    isIE,

    isWindowsPhone,
    isWeChatBrowser,
    isHuawei,
    isOppo,
    isVivo,
    isXiaomi,
    isPixel,
    /** 是否是三星 */
    isSamsung,
  } as const;

  return os;
}
