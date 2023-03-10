import path from 'path'
const config = {
  projectName: 'rick-and-morty',
  date: '2023-2-9',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  defineConstants: {
    IS_H5: process.env.TARO_ENV === "h5",
    IS_RN: process.env.TARO_ENV === "rn",
    IS_WEAPP: process.env.TARO_ENV === "weapp"
  },
  alias: {
    // 配置taro项目的绝对路径
    "@actions": path.resolve(__dirname, "..", "src/actions"),
    "@assets": path.resolve(__dirname, "..", "src/assets"),
    "@components": path.resolve(__dirname, "..", "src/components"),
    "@constants": path.resolve(__dirname, "..", "src/constants"),
    "@pages": path.resolve(__dirname, "..", "src/pages"),
    "@reducers": path.resolve(__dirname, "..", "src/reducers"),
    "@style": path.resolve(__dirname, "..", "src/style"),
    "@utils": path.resolve(__dirname, "..", "src/utils"),
    "@service": path.resolve(__dirname, "..", "src/service"),
    "@hooks": path.resolve(__dirname, "..", "src/hooks"),
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  h5: {
    publicPath: "/",
    staticDirectory: "static",
    esnextModules: ['taro-ui'],
    postcss: {
      pxtransform: {
        enable: true,
      },
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: "module", // 转换模式，取值为 global/module
          generateScopedName: "[name]__[local]___[hash:base64:5]"
        }
      }
    }
  },
  rn: {
    output: {
      ios: 'taro-native-shell/ios/main.jsbundle',
      iosAssetsDest: 'taro-native-shell/ios',
      android: 'taro-native-shell/android/app/src/main/assets/index.android.bundle',
      androidAssetsDest: 'taro-native-shell/android/app/src/main/res'
    },
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
