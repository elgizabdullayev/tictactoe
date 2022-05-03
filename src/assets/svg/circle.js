import React from 'react';
import Svg, { Circle } from "react-native-svg";

export const CircleForm = (props) => (
  <Svg
    width={45}
    height={46}
    fill="none"
    {...props}
  >
    <Circle
      cx={22.459}
      cy={22.892}
      r={19.486}
      stroke="#fff"
      strokeWidth={5.568}
    />
  </Svg>
)