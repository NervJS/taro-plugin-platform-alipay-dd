import { processApis } from '@tarojs/shared'
import {
  needPromiseApis,
  handleSyncApis,
  transformMeta,
  modifyApis,
  modifyAsyncResult,
  request
} from '@tarojs/plugin-platform-alipay/dist/runtime-utils'
import { asyncApis } from './apis-list'

declare const dd: any

export function initNativeApi (taro) {
  processApis(taro, dd, {
    needPromiseApis: new Set([...needPromiseApis, ...asyncApis]),
    handleSyncApis,
    transformMeta,
    modifyApis,
    modifyAsyncResult,
    request
  })
  taro.SDKVersion = dd.SDKVersion
}
