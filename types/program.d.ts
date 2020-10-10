import { Alipay } from '@tarojs/plugin-platform-alipay';
export default class DD extends Alipay {
    platform: string;
    runtimePath: string;
    reactComponents: string;
    /**
     * 增加组件或修改组件属性
     */
    modifyComponents(): void;
}
