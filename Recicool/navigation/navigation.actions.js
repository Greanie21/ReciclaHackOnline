import * as React from "react";

import { navigate } from "../navigation/core";
import { jumpTo } from "./core/index";

export const navigationRef = React.createRef();

export function jumpToPointScreen() {
  jumpTo("TabTwoScreen");
}
