import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../colors";

function HomeIcon(props) {
  return (
    <Svg
      width={303}
      height={301}
      viewBox="0 0 303 301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M185.418 294.065a4 4 0 01-4 4h-60.967a4 4 0 01-4-4v-53.943c0-6.4 4.24-35.048 34.484-35.048 29.395 0 34.483 25.822 34.483 32.222v56.769z"
        stroke={props.color}
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M263.952 135.541H38.238a4 4 0 00-4 4v154.524a4 4 0 004 4h225.714a4 4 0 004-4V139.541a4 4 0 00-4-4zM88.116 54.292a4 4 0 01-1.341 2.988L52.659 87.635C50.079 89.93 46 88.1 46 84.647V27a4 4 0 014-4h34.116a4 4 0 014 4v27.292z"
        stroke={props.color}
        strokeWidth={4}
        strokeMiterlimit={10}
      />
      <Path
        d="M153.865 3.356a4 4 0 00-5.312.005L7.854 128.552c-2.747 2.445-1.018 6.989 2.659 6.989h281.944c3.68 0 5.407-4.552 2.653-6.994L153.865 3.357z"
        stroke={props.color}
        strokeWidth={4}
        strokeMiterlimit={10}
      />
    </Svg>
  );
}

export default HomeIcon;
