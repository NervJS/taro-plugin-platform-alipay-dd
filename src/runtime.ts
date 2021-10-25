import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import {
  components as aliComponents,
  hostConfig
} from '@tarojs/plugin-platform-alipay/dist/runtime-utils'
import { initNativeApi } from './apis'
import { components } from './components'

// 支付宝真机只有 navigator.swuserAgent
const { userAgent } = navigator
Object.defineProperty(navigator, 'userAgent', {
  configurable: true,
  enumerable: true,
  get () {
    return userAgent || (navigator as any).swuserAgent || ''
  }
})

hostConfig.initNativeApi = initNativeApi

mergeReconciler(hostConfig)
mergeInternalComponents(aliComponents)
mergeInternalComponents(components)

