import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../colors"

function PrivacyIcon(props) {
  return (
    <Svg
    width={265}
    height={304}
    viewBox="0 0 265 304"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M230 269.2c0 18.1-14.7 32.8-32.7 32.8H35.4c-18.1 0-32.8-14.7-32.8-32.8v-234c0-18.1 14.7-32.8 32.8-32.8h161.9c18.1 0 32.8 14.7 32.8 32.8v234h-.1z"
      fill="#fff"
    />
    <Path
      d="M197.2 304H35.4C16.2 304 .6 288.4.6 269.2v-234C.6 16 16.2.4 35.4.4h161.9C216.5.4 232 16 232.1 35.2v234c-.1 19.2-15.7 34.8-34.9 34.8zM35.4 4.4c-17 0-30.8 13.8-30.8 30.8v234c0 17 13.8 30.8 30.8 30.8h161.9c17 0 30.8-13.8 30.8-30.8v-234c0-17-13.8-30.8-30.8-30.8H35.4z"
      fill={props.color}
    />
    <Path
      d="M116.6 87.3c-12.7 0-23-10.3-23-22.9 0-12.6 10.3-23 22.9-23 12.6 0 23 10.3 23 22.9 0 12.7-10.2 23-22.9 23zm0-41.9c-10.5 0-19 8.5-19 18.9 0 10.5 8.5 19 18.9 19 10.4 0 19-8.5 19-18.9.1-10.5-8.4-19-18.9-19z"
      fill={props.color}
    />
    <Path
      d="M152.1 122.8c-1.1 0-2-.9-2-2-.5-18.5-15.8-33.1-34.3-32.7-17.9.4-32.2 14.8-32.7 32.7 0 1.1-.9 2-2 2s-2-.9-2-2c-.5-20.7 15.9-37.9 36.6-38.4 20.7-.5 37.9 15.9 38.4 36.6v1.7c0 1.2-.8 2.1-2 2.1z"
      fill={props.color}
    />
    <Path
      d="M262.8 245c0 4.6-4.3 8.3-9.7 8.3h-47.8c-5.4 0-9.7-3-9.7-8.3v-33.6c0-5 4.3-9.1 9.7-9.1h47.8c5.4 0 9.7 3.8 9.7 9.1V245z"
      fill="#fff"
    />
    <Path
      d="M253.1 255.3h-47.8c-6.9 0-11.7-4.2-11.7-10.3v-33.6c0-6.1 5.2-11.1 11.7-11.1h47.8c6.7 0 11.7 4.8 11.7 11.1V245c0 5.6-5.3 10.3-11.7 10.3zm-47.8-51c-4.1-.1-7.5 3-7.7 7.1V245c0 4.7 4.1 6.3 7.7 6.3h47.8c4.2 0 7.7-2.8 7.7-6.3v-33.6c0-4-3.3-7.1-7.7-7.1h-47.8zM190.4 168.3H37.9c-1.1 0-2-.9-2-2s.9-2 2-2h152.5c1.1 0 2 .9 2 2s-.9 2-2 2zM179 216.1H37.9c-1.1 0-2-.9-2-2s.9-2 2-2H179c1.1 0 2 .9 2 2s-.9 2-2 2zM184.9 262.1h-147c-1.1 0-2-.9-2-2s.9-2 2-2h147c1.1 0 2 .9 2 2s-.9 2-2 2z"
      fill={props.color}
    />
    <Path
      d="M205.9 197.5v-14.6c0-9.1 8.9-23 23.3-23s22.6 13.2 22.6 22.8v19.6h-46.5l.6-4.8z"
      fill="#fff"
    />
    <Path
      d="M251.9 204.3h-46.6c-.6 0-1.1-.2-1.5-.7-.4-.4-.6-1-.5-1.6l.6-4.7v-14.5c0-10.2 9.9-25 25.3-25 15.9 0 24.6 14.6 24.6 24.8v19.6c.1 1.2-.8 2.1-1.9 2.1zm-44.3-4h42.3v-17.6c0-8.5-7.4-20.8-20.6-20.8-13 0-21.3 12.4-21.3 21V197.7l-.4 2.6z"
      fill={props.color}
    />
    <Path d="M229.2 229.4a4 4 0 100-8 4 4 0 000 8z" fill="#fff" />
    <Path
      d="M229.2 231.4c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill={props.color}
    />
    <Path
      d="M229.2 238.1c-1.1 0-2-.9-2-2v-6.7c0-1.1.9-2 2-2s2 .9 2 2v6.7c0 1.1-.9 2-2 2z"
      fill={props.color}
    />
  </Svg>
  )
}

export default PrivacyIcon
