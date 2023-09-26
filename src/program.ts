import { Alipay } from '@tarojs/plugin-platform-alipay'
import { components } from './components'

const PACKAGE_NAME = '@tarojs/plugin-platform-alipay-dd'

export default class DD extends Alipay {
  platform = 'dd'
  globalObject = 'dd'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  taroComponentsPath = `${PACKAGE_NAME}/dist/components-react`

  /**
   * 1. setupTransaction - init
   * 2. setup
   * 3. setupTransaction - close
   * 4. buildTransaction - init
   * 5. build
   * 6. buildTransaction - close
   */
  constructor (ctx, config) {
    super(ctx, config)

    this.setupTransaction.addWrapper({
      close: this.modifyTemplate
    })
  }

  /**
   * 增加组件或修改组件属性
   */
  modifyTemplate () {
    // 处理钉钉与支付宝的组件差异
    this.template.mergeComponents(this.ctx, components)
  }
}
