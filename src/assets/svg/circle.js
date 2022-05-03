import React from 'react';
import Svg, { Circle } from "react-native-svg";
import { Colors } from '../colors';

export const CircleForm = ({stroke}) => (
  <Svg
    width={45}
    height={46}
    fill="none"
  >
    <Circle
      cx={22.459}
      cy={22.892}
      r={19.486}
      stroke={stroke ? stroke : Colors.WHITE }
      strokeWidth={5.568}
    />
  </Svg>
)