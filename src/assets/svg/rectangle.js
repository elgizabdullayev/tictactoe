import React from 'react';
import Svg, { Rect } from "react-native-svg";

export const Rectangle = (props) => (
  <Svg
    width={90}
    height={90}
    fill="none"
    {...props}
  >
    <Rect
      x={2.784}
      y={3.486}
      width={83.513}
      height={83.513}
      rx={27.216}
      fill="none"
      stroke="#fff"
      strokeWidth={5.568}
    />
  </Svg>
)