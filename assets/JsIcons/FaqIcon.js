import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../colors"

function FaqIcon(props) {
  return (
    <Svg
    width={304}
    height={222}
    viewBox="0 0 304 222"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M86.709 166.493c0 12.1 11 22 24.5 22h126l32.6 31.5.1-31.5h7.5c13.5 0 24.5-9.8 24.5-22v-111c0-12.1-11-22-24.5-22h-166.2c-13.5 0-24.5 9.8-24.5 22v111z"
      fill="#fff"
    />
    <Path
      d="M269.909 221.894c-.5 0-1-.2-1.4-.6l-32-30.9h-125.3c-14.6 0-26.5-10.7-26.5-24v-111c0-13.2 11.9-24 26.5-24h166.2c14.6 0 26.5 10.8 26.5 24v111c0 13.2-11.9 24-26.5 24h-5.5l-.1 29.5c0 .8-.5 1.5-1.2 1.8-.2.2-.5.2-.7.2zm-158.7-186.3c-12.4 0-22.5 9-22.5 20v111c0 11 10.1 20 22.5 20h126c.5 0 1 .2 1.4.6l29.3 28.2.1-26.8c0-1.1.9-2 2-2h7.5c12.4 0 22.5-9 22.5-20v-111c0-11-10.1-20-22.5-20h-166.3z"
      fill={props.color}
    />
    <Path
      d="M259.109 135.394c0 14.5-11.7 26.2-26.2 26.2h-137.4l-61.1 44.3 10.9-44.4h-16.4c-14.5 0-26.2-11.7-26.2-26.1v-106.9c0-14.5 11.7-26.2 26.2-26.2h204c14.5 0 26.2 11.7 26.2 26.2v106.9z"
      fill="#fff"
    />
    <Path
      d="M34.41 207.894c-.4 0-.8-.1-1.1-.3-.7-.5-1-1.3-.8-2.1l10.3-41.9h-13.8c-15.6 0-28.2-12.6-28.2-28.2v-106.9c0-15.6 12.6-28.2 28.2-28.2h203.999c15.6 0 28.2 12.6 28.2 28.2v106.9c0 15.6-12.6 28.2-28.2 28.2h-136.9l-60.6 44c-.3.2-.7.4-1.1.3zm-5.5-203.6c-13.4 0-24.2 10.8-24.2 24.2v106.9c0 13.3 10.8 24.2 24.2 24.2h16.4c1.1 0 2 .9 2 2 0 .2 0 .3-.1.5l-9.6 39 56.7-41.1c.3-.2.8-.4 1.2-.4h137.499c13.3 0 24.2-10.8 24.2-24.2v-106.9c0-13.3-10.8-24.2-24.2-24.2h-204.1z"
      fill={props.color}
    />
    <Path
      d="M58.209 56.594v21.7h19.7v3.5h-19.7v24.9h-3.8v-53.6h25.1v3.5h-21.3zM119.809 106.594l-6.1-16.6h-23.1l-6.1 16.6h-4.2l20.2-53.5h3.7l20 53.5h-4.4zm-17.5-48.7h-.2c-.3 1.3-.7 2.6-1.2 3.9l-9 24.7h20.5l-9-24.6-1.1-4zM155.209 107.594c-4.6.1-9.1-1.1-13-3.4-3.8-2.3-6.8-5.6-8.7-9.6-2.1-4.4-3.2-9.3-3.1-14.1-.1-5.2 1-10.3 3.2-14.9 2-4.1 5.1-7.6 9.1-9.9 4.1-2.3 8.8-3.5 13.6-3.4 4.5-.1 8.8 1.1 12.7 3.4 3.7 2.3 6.7 5.6 8.6 9.5 2.1 4.4 3.1 9.2 3 14 0 7.7-1.8 14-5.4 19-3.5 4.9-8.8 8.2-14.7 9.1l11.9 12.6h-5.3l-10.8-12.2h-.6l-.5-.1zm.4-51.9c-8-.2-15.3 4.4-18.6 11.7-1.8 4-2.7 8.3-2.7 12.6-.1 4.4.8 8.7 2.5 12.6 1.5 3.5 4.1 6.4 7.3 8.4 3.3 2 7.1 3 11 3 6.7 0 11.9-2.2 15.7-6.5 3.8-4.3 5.7-10.3 5.7-17.9 0-7.4-1.9-13.2-5.6-17.5-3.8-4.3-8.9-6.4-15.3-6.4zM188.609 100.694c1.4 1.2 3 2 4.7 2.6 1.6.6 3.2.9 4.9 1 5.9 0 8.9-2.4 8.9-7.2 0-1.6-.6-3.1-1.8-4.2-2-1.6-4.2-2.9-6.6-3.9-2.9-1.1-5.5-2.7-7.6-4.8-1.6-1.7-2.4-4-2.3-6.3-.1-2.9 1.3-5.7 3.6-7.5 2.5-2 5.7-3 8.9-2.9 2.9-.1 5.8.6 8.4 2v4c-2.6-1.8-5.7-2.7-8.9-2.8-2.2-.1-4.3.6-6 1.9-1.5 1.2-2.4 3.1-2.4 5.1-.1 1.2.2 2.3.7 3.4.6 1 1.4 1.8 2.4 2.4 1.5 1 3.2 1.8 4.8 2.5 2.2.9 4.4 2.1 6.4 3.4 1.3.8 2.4 2 3.1 3.3.7 1.4 1 2.8.9 4.3.1 3-1.2 5.8-3.5 7.6-2.4 1.9-5.5 2.9-9.4 2.9-3.3.1-6.5-.8-9.3-2.6l.1-4.2z"
      fill={props.color}
    />
  </Svg>
  )
}

export default FaqIcon