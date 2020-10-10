# `@tarojs/plugin-platform-alipay-dd`

Taro 插件。用于支持编译为钉钉小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-alipay-dd'
  ]
}
```

#### 2. 编译为钉钉小程序

```shell
taro build --type dd
taro build --type dd --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'dd') {
  // ...
}
```

##### API

钉钉小程序拓展了一些独有 API，可以通过 `Taro.xxx` 来调用，例：

```js
Taro.showCallMenu()
```

##### 组件

钉钉小程序拓展了一些独有组件，可像普通 Taro 内置组件一样使用，例：

```js
import { OpenAvatar } from '@tarojs/components'

function Index () {
  return (
    <>
      <OpenAvatar />
    </>
  )
}
```
