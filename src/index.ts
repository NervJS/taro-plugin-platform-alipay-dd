import DD from './program'
import type { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'dd',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new DD(ctx, config)
      program.start()
    }
  })
}
