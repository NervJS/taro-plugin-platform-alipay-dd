import { processApis } from '@tarojs/shared'
import {
  noPromiseApis,
  needPromiseApis,
  handleSyncApis,
  transformMeta,
  modifyAsyncResult,
  request
} from '@tarojs/plugin-platform-alipay/dist/runtime-utils'
import { syncApis, asyncApis } from './apis-list'

declare const dd: any

export function initNativeApi (taro) {
  processApis(taro, dd, {
    noPromiseApis: new Set([...noPromiseApis, ...syncApis]),
    needPromiseApis: new Set([...needPromiseApis, ...asyncApis]),
    handleSyncApis,
    transformMeta,
    modifyAsyncResult,
    request
  })
  taro.SDKVersion = dd.SDKVersion
}
