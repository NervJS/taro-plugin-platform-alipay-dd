import { noPromiseApis, otherApis } from './apis-list'

declare const my: any

function processApis (taro) {
  const apis = [...noPromiseApis, ...otherApis]

  apis.forEach(key => {
    if (!(key in my)) {
      taro[key] = () => {
        console.warn(`钉钉小程序暂不支持 ${key}`)
      }
      return
    }

    if (otherApis.has(key)) {
      taro[key] = (options, ...args) => {
        options = options || {}
        const obj = Object.assign({}, options)
        if (typeof options === 'string') {
          if (args.length) {
            return my[key](options, ...args)
          }
          return my[key](options)
        }

        const p: any = new Promise((resolve, reject) => {
          ['fail', 'success', 'complete'].forEach((k) => {
            obj[k] = (res) => {
              options[k] && options[k](res)
              if (k === 'success') {
                resolve(res)
              } else if (k === 'fail') {
                reject(res)
              }
            }
          })
          if (args.length) {
            my[key](obj, ...args)
          } else {
            my[key](obj)
          }
        })
        return p
      }
    } else {
      taro[key] = (...args) => my[key].apply(my, args)
    }
  })
}


export function initIotApi (taro) {
  processApis(taro)
  taro.SDKVersion = my.SDKVersion
  taro.env = my.env
}
