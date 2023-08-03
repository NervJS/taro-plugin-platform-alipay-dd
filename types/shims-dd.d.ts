import '@tarojs/taro'

declare module '@tarojs/taro' {
  namespace uploadFile {
    interface Option {
      /**
       * @supported dd
       */
      fileType: "image" | "video" | "audio"
    }
  }
  
}