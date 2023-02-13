import { FunctionComponent } from "react";
import { ScrollViewProps } from "@tarojs/components";

export interface CustomScrollViewProps {
  className?: string;
  style?: object;
  onRefresh?: Function;
  autoHideTab?: boolean;
}

export type CustomScrollViewType = FunctionComponent<
  ScrollViewProps & CustomScrollViewProps
>;
