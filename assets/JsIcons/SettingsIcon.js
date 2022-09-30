import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../colors"

function SettingsIcon(props) {
  return (
    <Svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M52.998 27.855c-.056 1.217-.034 2.182-.047 3.147-.01.717-.447 1.157-1.175 1.158-1.718.003-3.436-.001-5.153-.003-.084 0-.168.007-.251 0-.16-.014-.232.059-.264.213a17.61 17.61 0 01-2.304 5.818c-.232.376-.249.322.07.645l3.361 3.411.116.12c.455.483.454 1.115-.015 1.591-.482.49-.972.971-1.46 1.454-.943.934-1.89 1.864-2.831 2.8-.301.299-.65.418-1.067.325a1.114 1.114 0 01-.566-.336c-.648-.677-1.299-1.352-1.948-2.028-.475-.495-.947-.994-1.424-1.488-.199-.206-.204-.204-.44-.05-1.15.745-2.36 1.371-3.657 1.818-.545.188-1.098.347-1.66.476-.343.079-.342.08-.345.417-.01 1.475-.022 2.95-.03 4.425-.003.315-.062.609-.278.853-.236.267-.528.382-.888.379-1.495-.014-2.99-.014-4.485-.02l-1.31-.008c-.76-.006-1.2-.44-1.197-1.191.005-1.401.017-2.802.025-4.203v-.195c-.001-.35-.001-.35-.355-.432-2.228-.515-4.313-1.37-6.229-2.625-.03-.02-.064-.038-.093-.061-.125-.102-.23-.08-.342.03-.277.274-.56.543-.84.813-.868.838-1.736 1.677-2.605 2.514-.529.508-1.16.513-1.677-.002a1096.799 1096.799 0 01-4.25-4.256c-.481-.483-.484-1.127-.003-1.613.744-.752 1.501-1.49 2.253-2.236.409-.405.817-.81 1.224-1.217.209-.21.21-.216.059-.474a17.87 17.87 0 01-1.292-2.648 15.705 15.705 0 01-.772-2.67l-.043-.22c-.059-.28-.062-.284-.342-.286-.502-.003-1.003-.002-1.505-.004l-2.73-.015c-.14 0-.279-.003-.415-.037a1.051 1.051 0 01-.817-1.032c-.004-1.252.004-2.505.01-3.758.002-.677.004-1.354.011-2.031.008-.713.383-1.093 1.105-1.108 1.411-.03 2.822-.052 4.233-.078.13-.002.26-.005.39-.01.26-.013.267-.017.33-.28a16.613 16.613 0 012.29-5.285l.09-.14c.053-.08.054-.156-.014-.228-.044-.047-.086-.097-.131-.143l-3.576-3.67c-.097-.1-.195-.199-.287-.302-.417-.467-.413-1.108.022-1.559.4-.414.814-.814 1.22-1.22 1.02-1.017 2.038-2.032 3.054-3.05.218-.218.462-.373.775-.395.332-.024.62.077.862.312.726.705 1.453 1.408 2.18 2.112.653.632 1.305 1.266 1.96 1.897.19.185.196.188.426.051a18.776 18.776 0 013.232-1.544c.796-.287 1.61-.511 2.438-.685.063-.014.127-.026.19-.042.21-.055.214-.057.22-.285.004-.223.006-.445.007-.668.013-1.558.035-3.117.031-4.675-.001-.51.34-1.03.97-1.094.092-.01.185-.018.278-.018 1.932-.006 3.863-.009 5.794-.016.209 0 .41.024.592.126.355.2.543.514.545.912.005.964-.012 1.93-.02 2.894-.006.89-.014 1.781-.017 2.672 0 .205.012.215.271.272.79.174 1.565.4 2.313.71.808.335 1.577.746 2.317 1.212.047.03.093.061.141.09.212.126.23.126.407-.047.392-.382.78-.768 1.172-1.152.966-.95 1.933-1.9 2.901-2.847.484-.474 1.301-.47 1.778.01a2835.3 2835.3 0 014.089 4.14c.51.517.515 1.13.001 1.648-.823.83-1.654 1.653-2.482 2.479-.5.498-1 .997-1.496 1.497-.252.255-.281.215-.063.549.908 1.391 1.626 2.873 2.099 4.469.102.346.189.698.28 1.048.078.305.075.306.387.307 1.505.003 3.009.004 4.513.01.362 0 .724.014 1.085.024.626.017 1.069.454 1.073 1.079.006 1.002.001 2.004.001 2.753z"
        fill={colors.primary}
        stroke={colors.primary}
        strokeWidth={5}
        strokeMiterlimit={5}
        strokeLinecap="round"
      />
      <Path
        d="M17.262 28.553c-.047-5.677 4.572-10.268 10.209-10.302 5.89-.037 10.278 4.742 10.24 10.197-.04 5.575-4.57 10.138-10.123 10.2-5.756.064-10.317-4.613-10.326-10.095z"
        fill={colors.bg}
      />
    </Svg>
  )
}

export default SettingsIcon