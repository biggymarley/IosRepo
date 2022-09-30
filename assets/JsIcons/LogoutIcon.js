import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../colors"

function LogoutIcon(props) {
  return (
    <Svg
      width={257}
      height={267}
      viewBox="0 0 257 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M161.132 170.904v82.098H13V13h148.132v84.749M92.764 133.639h139.585M190.331 173.367l46.292-39.728-46.292-41.004"
        stroke={colors.primary}
        strokeWidth={26}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default LogoutIcon
