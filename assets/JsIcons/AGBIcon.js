import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../colors"

function AGBIcon(props) {
  return (
    <Svg
    width={234}
    height={306}
    viewBox="0 0 234 306"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M231.2 270.5c0 18.2-14.7 32.9-32.9 32.9H35.7c-18.2 0-32.9-14.7-32.9-32.9V35.4c0-18.2 14.8-32.9 32.9-32.9h162.6c18.2 0 32.9 14.7 32.9 32.9v235.1z"
      fill="#fff"
    />
    <Path
      d="M198.3 305.4H35.7C16.4 305.4.8 289.7.8 270.5V35.4C.8 16.1 16.5.5 35.7.5h162.6c19.3 0 34.9 15.7 34.9 34.9v235.1c0 19.2-15.6 34.9-34.9 34.9zM35.7 4.4C18.6 4.4 4.8 18.3 4.8 35.3v235.1c0 17.1 13.9 30.9 30.9 30.9h162.6c17.1 0 30.9-13.9 30.9-30.9v-235c0-17.1-13.9-30.9-30.9-30.9L35.7 4.4z"
      fill={props.color}
    />
    <Path
      d="M191.4 169.1H38.2c-1.1 0-2-.9-2-2s.9-2 2-2h153.2c1.1 0 2 .9 2 2s-.9 2-2 2zM191.4 217.1H38.2c-1.1 0-2-.9-2-2s.9-2 2-2h153.2c1.1 0 2 .9 2 2s-.9 2-2 2zM191.4 263.3H38.2c-1.1 0-2-.9-2-2s.9-2 2-2h153.2c1.1 0 2 .9 2 2s-.9 2-2 2zM191.4 122.9H38.2c-1.1 0-2-.9-2-2s.9-2 2-2h153.2c1.1 0 2 .9 2 2s-.9 2-2 2zM98.2 82.1h-4.9l-4.4-11.3h-17l-4 11.3H63l15.3-39.8h4.5l15.4 39.8zM87.5 66.8l-6.4-17.2c-.3-.9-.5-1.7-.6-2.6h-.1c-.1.9-.3 1.8-.6 2.6l-6.3 17.2h14zM130.9 79.4c-4 2.3-8.6 3.4-13.3 3.4-5.6 0-10.2-1.8-13.7-5.5s-5.2-8.5-5.2-14.5c0-6.1 1.9-11.2 5.8-15.1 3.9-4 9.2-6.1 14.7-5.9 3.7-.1 7.5.6 10.9 2.1v5c-3.4-2.1-7.4-3.2-11.4-3.1-4.2-.1-8.2 1.6-11.1 4.6-2.9 3.1-4.3 7.1-4.3 12.1 0 5.1 1.3 9.1 4 12 2.7 2.9 6.3 4.4 11 4.4 2.9.1 5.7-.6 8.2-1.9V65.6h-8.8v-4h13.2v17.8zM138.1 82.1V42.3h11.1c2.9-.1 5.7.7 8 2.5 2 1.6 3.1 4.1 3 6.6.1 4.3-2.7 8.2-6.8 9.5v.1c2.4.2 4.7 1.2 6.4 3 1.7 1.8 2.5 4.3 2.4 6.7.1 3.2-1.2 6.2-3.6 8.2-2.6 2.2-5.8 3.3-9.2 3.2h-11.3zm4.3-35.8v13.1h4.8c2.2.1 4.4-.5 6.2-1.9 1.5-1.3 2.3-3.3 2.2-5.3 0-3.9-2.6-5.9-7.7-5.9h-5.5zm0 17.2V78h6.4c2.3.1 4.6-.6 6.4-2 1.6-1.4 2.4-3.4 2.3-5.4 0-4.8-3.3-7.2-9.8-7.2l-5.3.1z"
      fill={props.color}
    />
  </Svg>
  )
}

export default AGBIcon
