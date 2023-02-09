import React, { useCallback, useRef } from "react";
import { View } from "@tarojs/components";
import { headerBtnsType } from "@pages/wiki/type";
import Taro from "@tarojs/taro";

import { scrollTop } from "@pages/utils";
import "./index.less";
import { useRandomCharacters } from "../../hooks/useRandomCharacters";
import { useStatusBarHeight } from "../../hooks/useStatusBarHeight";
import { StatusBar } from "@components";

// 顶部的按钮
const headerBtns: headerBtnsType[] = [
  {
    value: "角色",
    onClick: () =>
      Taro.navigateTo({
        url: "/pages/wiki/pages/all-character/index",
      }),
  },
  {
    value: "剧集",
    onClick: () =>
      Taro.navigateTo({
        url: "/pages/wiki/pages/all-episode/index",
      }),
  },
];

const Wiki: React.FC<any> = () => {
  const [characters, refreshCharacters] = useRandomCharacters(6);
  const ScrollViewRef = useRef() as React.MutableRefObject<any>;
  const statusBarHeight = useStatusBarHeight();

  // 刷新6个角色
  const onRefresh = useCallback(() => {
    Taro.showLoading({
      title: "加载中",
      mask: true,
    });
    // 滚到顶部
    scrollTop(ScrollViewRef);
    refreshCharacters();
  }, [ScrollViewRef, refreshCharacters()]);
  return (
    <View className="wiki">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
    </View>
  );
};
export default Wiki;
