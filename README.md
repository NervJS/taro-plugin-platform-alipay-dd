# `@tarojs/plugin-platform-alipay-dd`

Taro 插件。用于支持编译为钉钉小程序。

## 版本要求

### Taro 3.3.8+

请使用本插件的 `~0.1.0` 版本

### Taro 3.1 & 3.2

请使用本插件的 `~0.0.5` 版本

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

## License

MIT License

Copyright (c) O2Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
