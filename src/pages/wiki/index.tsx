import React, { useCallback, useRef } from "react";
import { Button, Image, Text, View } from "@tarojs/components";
import { headerBtnsType } from "@pages/wiki/type";
import Taro from "@tarojs/taro";

import { scrollTop } from "@pages/utils";
import "./index.less";
import { useRandomCharacters } from "../../hooks/useRandomCharacters";
import { useStatusBarHeight } from "../../hooks/useStatusBarHeight";
import { StatusBar } from "@components";
import CustomScrollView from "@components/CustomScrollView";
import { wikiBackground } from "@assets/image";
import Iconfont from "@components/Iconfont/index";
import CharacterCard from "@components/CharacterCard";

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
  }, [ScrollViewRef, refreshCharacters]);
  return (
    <View className="wiki">
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0)"
        translucent
      />
      <CustomScrollView autoHideTab onRefresh={onRefresh} ref={ScrollViewRef}>
        <View className={"wiki-header"} style={{ marginTop: statusBarHeight }}>
          <Image
            src={wikiBackground}
            className={"wiki-header-background"}
            mode={"widthFix"}
          />
        </View>

        <View className={"wiki-content"}>
          <View className={"wiki-content-top"}>
            {headerBtns.map((btn, index) => (
              <Button
                key={btn.value}
                className={`wiki-content-btn ${
                  index === headerBtns.length - 1 && "wiki-content-btn_last"
                }`}
                hoverClass={"btn-active"}
                hoverStyle={{ opacity: 0.6 }}
                onClick={btn.onClick}
              >
                <Text className={"viki-content-btn-value"}>{btn.value}</Text>
              </Button>
            ))}
          </View>
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </View>

        <View className={"wiki-footer"}>
          <Button
            className={"wiki-footer-btn"}
            style={{ bottom: 0 }}
            onClick={onRefresh}
            hoverClass={"btn-active"}
            hoverStyle={{ opacity: 0.6 }}
          >
            <Iconfont name={"swap"} size={56}style={{lineHeight:80}} />
          </Button>
        </View>
      </CustomScrollView>
    </View>
  );
};
export default Wiki;
