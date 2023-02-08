/**
 * 复制内容到剪贴板
 */
import Taro from "@tarojs/taro";

export const copy = (data: string, msg: string = "") => {
  Taro.setClipboardData({
    data: data,
    success: function () {
      Taro.showToast({
        title: msg || "复制成功",
        icon: "success",
        duration: 1200,
      });
    },
    fail: function () {
      Taro.showToast({
        title: "复制失败",
        icon: "none",
        duration: 1200,
      });
    },
  });
};
