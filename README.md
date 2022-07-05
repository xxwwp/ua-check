# UA Check

ua-check 库用来识别当前浏览器所处的环境。它仅返回一个函数，内置了一些检查的结果。

ua-check 不能在服务器端使用。

## 使用

```js
import { uaCheck } from "ua-check";

const ua = uaCheck();

if (ua.isTablet) {
  console.log("平板设备");
}

if (ua.isAndroid) {
  console.log("安卓设备");
}

if (ua.isFireFox) {
  console.log("火狐浏览器");
}

if (ua.isWeChatBrowser) {
  console.log("微信内置浏览器");
}
```

如果你使用的是 CDN，那么请选择库中的 lib/index.umd.js 文件，ua-check 使用 UACheck 挂载在全局上，内置一个 uaCheck 函数，使用如：

```js
const os = window.UACheck.uaCheck();
```

## Api

ua-check 默认仅导出一个函数，直接执行该函数，将返回一个对象，对象含有以下属性：

- isTablet

  类型：boolean

  释义：是否是平板设备

- isIPhone

  类型：boolean

  释义：是否是苹果手机

- isPhone

  类型：boolean

  释义：是否是手机设备，即是否处于移动端

- isPc

  类型：boolean

  释义：是否是 PC 设备，即是否处于 PC 端

- isAndroid

  类型：boolean

  释义：是否是安卓设备、包含安卓手机、平板

- isIOS

  类型：boolean

  释义：是否是苹果系统，包含苹果电脑、平板、和手机

- isChrome

  类型：boolean

  释义：是否是谷歌浏览器

- isFireFox

  类型：boolean

  释义：是否是火狐浏览器

- isIE

  类型：boolean

  释义：是否是 IE 浏览器

- isWindowsPhone

  类型：boolean

  释义：是否是 Windowns Phone 系统

- isWeChatBrowser

  类型：boolean

  释义：是否是微信内置浏览器

- isHuawei

  类型：boolean

  释义：是否是华为手机

- isOppo

  类型：boolean

  释义：是否是 OPPO 手机

- isVivo

  类型：boolean

  释义：是否是 Vivo 手机

- isXiaomi

  类型：boolean

  释义：是否是小米手机，红米手机这个值也会是 true

- isPixel

  类型：boolean

  释义：是否是 Pixel 手机

- isSamsung

  类型：boolean

  释义：是否是三星手机
