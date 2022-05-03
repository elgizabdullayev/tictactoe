import React from 'react';
import Svg, { Path } from "react-native-svg";

export const Cross = (props) => (
  <Svg
    width={68}
    height={68}
    fill="none"
    {...props}
  >
    <Path
      d="M49.64 49.64 18.144 18.145M49.64 18.145 18.143 49.64"
      stroke="#fff"
      strokeWidth={5.568}
      strokeLinecap="round"
    />
  </Svg>
)