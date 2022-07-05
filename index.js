"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uaCheck = void 0;
function uaCheck() {
    var ua = navigator.userAgent, 
    // 常规判断
    isWindowsPhone = /(Windows Phone)/.test(ua), isSymbian = /SymbianOS/.test(ua) || isWindowsPhone, isAndroid = /Android/.test(ua) || ua.indexOf("Linux") > -1 || ua.indexOf("Adr") > -1, isFireFox = /Firefox/.test(ua), isChrome = /Chrome|CriOS/.test(ua), isTablet = /iPad|PlayBook/.test(ua) || (isAndroid && !/Mobile/.test(ua)) || (isFireFox && /Tablet/.test(ua)), isIPhone = /iPhone/.test(ua) && !isTablet, isPc = !isIPhone && !isAndroid && !isSymbian && !isTablet, isPhone = !isPc && !isTablet, isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), isIE = !!window.ActiveXObject || "ActiveXObject" in window ? true : false, 
    // 判断品牌
    isWeChatBrowser = /MicroMessenger/i.test(ua), // 微信浏览器
    isHuawei = /huawei|honor/i.test(ua), isOppo = /oppo|pacm00/i.test(ua), isVivo = /vivo/i.test(ua), isXiaomi = /mi\s|mix\s|redmi/i.test(ua), isPixel = /Pixel/i.test(ua), isSamsung = /sm-/i.test(ua); // 三星
    var os = {
        isTablet: isTablet,
        isIPhone: isIPhone,
        isPhone: isPhone,
        isPc: isPc,
        isAndroid: isAndroid,
        isIOS: isIOS,
        isChrome: isChrome,
        isFireFox: isFireFox,
        isIE: isIE,
        isWindowsPhone: isWindowsPhone,
        isWeChatBrowser: isWeChatBrowser,
        isHuawei: isHuawei,
        isOppo: isOppo,
        isVivo: isVivo,
        isXiaomi: isXiaomi,
        isPixel: isPixel,
        /** 是否是三星 */
        isSamsung: isSamsung,
    };
    return os;
}
exports.uaCheck = uaCheck;
