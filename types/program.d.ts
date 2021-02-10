import { Alipay } from '@tarojs/plugin-platform-alipay';
export default class DD extends Alipay {
    platform: string;
    runtimePath: string;
    taroComponentsPath: string;
    /**
     * 1. setupTransaction - init
     * 2. setup
     * 3. setupTransaction - close
     * 4. buildTransaction - init
     * 5. build
     * 6. buildTransaction - close
     */
    constructor(ctx: any, config: any);
    /**
     * 增加组件或修改组件属性
     */
    modifyTemplate(): void;
}
