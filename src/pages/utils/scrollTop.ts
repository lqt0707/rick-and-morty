import React from "react";

export const scrollTop = (ScrollViewRef:React.MutableRefObject<any>) => {
  if (IS_RN){
    // RN端：直接调用react-native ScrollView组件的api
    ScrollViewRef.current.scrollTop({y:0})
  }else if (IS_WEAPP){
    // 小程序端：操控TaroElement实现滚动到顶部。ref.current返回的就是一个TaroElement
    ScrollViewRef.current.setAttribute('scrollTop',0)
  }else if (IS_H5){
    // H5端
    ScrollViewRef.current.scrollTop=0
  }
}
