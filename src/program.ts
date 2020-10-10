import { Alipay } from '@tarojs/plugin-platform-alipay'
import { components } from './components'

const PACKAGE_NAME = '@tarojs/plugin-platform-alipay-dd'

export default class DD extends Alipay {
  platform = 'dd'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  reactComponents = `${PACKAGE_NAME}/dist/components-react`

  /**
   * 增加组件或修改组件属性
   */
  modifyComponents () {
    const { internalComponents } = this.template
    const { recursiveMerge } = this.ctx.helper

    // 先按支付宝标准对齐组件
    super.modifyComponents()

    // 再处理钉钉与支付宝的组件差异
    recursiveMerge(internalComponents, components)
  }
}
