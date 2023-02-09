import { isAndroid } from "@pages/utils";
import { View } from "@tarojs/components";
import React from "react";

let StatusBar: any;
if (IS_RN && isAndroid()) {
  StatusBar = require("react-native").StatusBar;
}
export default function TaroStatusBar(props: any) {
  return StatusBar ? (
    <StatusBar {...props} />
  ) : (
    <View style={{ display: "none" }} />
  );
}
