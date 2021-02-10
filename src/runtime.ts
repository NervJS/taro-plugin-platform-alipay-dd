import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import {
  components as aliComponents,
  hostConfig
} from '@tarojs/plugin-platform-alipay/dist/runtime-utils'
import { initNativeApi } from './apis'
import { components } from './components'

hostConfig.initNativeApi = initNativeApi

mergeReconciler(hostConfig)
mergeInternalComponents(aliComponents)
mergeInternalComponents(components)

