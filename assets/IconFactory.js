import * as React from "react";
import Svg, {
  Defs,
  G,
  Image,
  Path,
  Pattern,
  Text,
  TSpan,
  Use
} from "react-native-svg";
import { colors } from "./colors";

//videos
export const VideoLogin = require("./videos/logvid.mp4");
// export const Videoloading = require("./imgs/videoloading.jpg");

//modals
export const helloPng = require("./imgs/modals/hello.png");
export const clapPng = require("./imgs/modals/clap.png");
export const mandPng = require("./imgs/modals/man.png");
export const rulesPng = require("./imgs/modals/rules.png");
export const contactUs = require("./imgs/modals/contact-us.png");
export const dronePng = require("./imgs/modals/drone.png");
export const uploadPng = require("./imgs/modals/upload.png");
export const BoxMa = require("./imgs/modals/BoxMa.png");
export const BoxDu = require("./imgs/modals/BoxDu.png");
export const location = require("./imgs/modals/location.png");
export const support = require("./imgs/modals/support.png");
export const CalcPng = require("./imgs/modals/calculator.png");
export const DonePng = require("./imgs/modals/Done.png");

//gifs
export const tourGif = require("./imgs/gifs/testgif.gif");
export const gifchat = require("./imgs/gifs/gifchat.gif");
export const gifchat2 = require("./imgs/gifs/gifchat2.gif");
export const gifchat3 = require("./imgs/gifs/gifchat3.gif");
export const gifchat4 = require("./imgs/gifs/gifchat4.gif");
export const gifchat5 = require("./imgs/gifs/gifchat5.gif");
export const gifchat6 = require("./imgs/gifs/gifchat6.gif");
export const gifchat7 = require("./imgs/gifs/gifchat7.gif");
export const gifchat8 = require("./imgs/gifs/gifchat8.gif");

//Buttons
export const ToDuButton = require("./imgs/Buttons/ToDuButton.png");
export const ToMaButton = require("./imgs/Buttons/ToMaButton.png");
export const TrackingButton = require("./imgs/Buttons/TrackingButton.png");
export const AppointmentsButton = require("./imgs/Buttons/AppointmentsButton.png");
export const ReviewButton = require("./imgs/Buttons/ReviewButton.png");
export const GalleryButton = require("./imgs/Buttons/GalleryButton.png");
export const PreiseButton = require("./imgs/Buttons/PreiseButton.png");
export const ToursButton = require("./imgs/Buttons/ToursButton.png");
export const ProfileButton = require("./imgs/Buttons/ProfileButton.png");
export const RecommandButton = require("./imgs/Buttons/RecommandButton.png");
export const imprButton = require("./imgs/Buttons/imprButton.png");
export const AgbButton = require("./imgs/Buttons/AgbButton.png");
export const FaqsButton = require("./imgs/Buttons/FaqsButton.png");
export const PrivacyButton = require("./imgs/Buttons/PrivacyButton.png");
export const ChatButton = require("./imgs/Buttons/ChatButton.png");
export const InfosButton = require("./imgs/Buttons/InfosButton.png");
export const ToMaCercle = require("./imgs/Buttons/ToMaCercle.png");
export const ToDuCercle = require("./imgs/Buttons/ToDuCercle.png");
export const EmptyButtonBg = require("./imgs/Buttons/EmptyButtonBg.png");
export const FlatButtnBg = require("./imgs/Buttons/FlatButtnBg.png");
export const contact = require("./imgs/Buttons/contact.png");
export const Calculate = require("./imgs/Buttons/Calculate.png");

//icons
export const ContactUsButton = require("./imgs/icons/ContactUsButton.png");
export const calculateButton = require("./imgs/icons/calculateButton.png");
export const calculatorColored = require("./imgs/icons/calculateButton1.png");
export const WtspIcon = require("./imgs/icons/WtspIcon.png");
export const EmailIcon = require("./imgs/icons/EmailIcon.png");
export const fixPhone = require("./imgs/icons/fixPhone.png");
export const fixPhoneVec = require("./imgs/icons/fixPhoneVec.png");
export const PhoneIcon = require("./imgs/icons/PhoneIcon.png");
export const PhoneIconVec = require("./imgs/icons/PhoneIconVec.png");
export const LocationIcon = require("./imgs/icons/LocationIcon.png");
export const ChatNow = require("./imgs/icons/ChatNow.png");
export const ruler = require("./imgs/icons/ruler.png");
export const WorldIcon = require("./imgs/icons/WorldIcon.png");
export const editTour = require("./imgs/icons/editTour.png");

//Other
export const pattern = require("./imgs/pattern.gif");
export const noPhoto = require("./imgs/no-photo.png");
export const logoWhite = require("./imgs/logowhite.png");
export const logoBlack = require("./imgs/logo.png");
export const map = require("./imgs/map.png");
export const m2 = require("./imgs/apMa.png");
export const m22 = require("./imgs/apMa.png");
export const du = require("./imgs/apDu.png");
export const flagdu = require("./imgs/flagdu.png");
export const flagma = require("./imgs/flagma.jpg");
export const tomaMap = require("./imgs/tomaMap.png");
export const toduMap = require("./imgs/toduMap.png");
export const allemagne = require("./imgs/allemagne.png");
export const france = require("./imgs/la-france.png");
export const maroc = require("./imgs/maroc.png");
export const pdf = require("./imgs/pdf.png");
export const nurem = require("./imgs/nurem.jpg");
export const adminPdp = require("./imgs/adminPdp.jpeg");


//animations
export const Verified = require("./animations/Verified.json");
export const gallery = require("./animations/gallery.json");
export const submitted = require("./animations/submitted.json");
export const uploadId = require("./animations/uploadid.json");
export const locationLoading = require("./animations/marker3.json");
export const noTour = require("./animations/noTour.json");
export const emptyBox = require("./animations/emptyBox.json");
export const tap = require("./animations/tap.json");
export const reviews = require("./animations/reviews.json");
export const kalrokLoading = require("./animations/kalrokLoading.json");
export const rulesanimation = require("./animations/rulesanimation.json");
export const doneanimation = require("./animations/doneanimation.json");
export const boredhand = require("./animations/boredhand.json");
export const welcom = require("./animations/welcom.json");
export const notFound = require("./animations/notFound.json");
export const bell = require("./animations/bell.json");
export const checklist = require("./animations/checklist.json");
export const CombLock = require("./animations/CombLock.json");
export const ToDuMap = require("./animations/ToDuMap.json");
export const ToMaMap = require("./animations/ToMaMap.json");
export const contactusAnim = require("./animations/contactusAnim.json");
export const chatAnim = require("./animations/chatAnim.json");
// export const AppointmentAnimMa = require("./animations/AppointmentAnimMa.json");
export const AppointmentAnimMaEnd = require("./animations/AppointmentAnimMaEnd.json");
export const AppointmentAnimDu = require("./animations/AppointmentAnimDu.json");
export const carAnim = require("./animations/carAnim.json");
export const phoneAnim = require("./animations/Phone.json");
export const star = require("./animations/star.json");
export const fromMaAnim = require("./animations/FromMa.json");
export const TourInfoAnim = require("./animations/TourInfoAnim.json");
export const micAnim = require("./animations/micAnim.json");
export const rightArrow = require("./animations/rightArrow.json");
export const recordingJson = require("./animations/recording.json");
export const tomaAp = require("./animations/tomaAp.json");
export const toduAp = require("./animations/toduAp.json");

//steps
export const step1Png = require("./imgs/steps/step1.png");
export const step2Png = require("./imgs/steps/step2.png");
export const step3Png = require("./imgs/steps/step3.png");
export const step4Png = require("./imgs/steps/step4.png");
export const step5Png = require("./imgs/steps/step5.png");
export const step6Png = require("./imgs/steps/step6.png");
export const step7Png = require("./imgs/steps/step7.png");

export const ToMa = (props) => (
  <Svg
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    viewBox="0 0 46 54"
    height={props.size}
    {...props}
  >
    <G id="Layer">
      <G id="Layer_1">
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m44.58 4.3l-5.14 2.88l-5.15-2.88l5.15-2.87l5.14 2.87v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m34.29 4.3l5.14 2.88v5.93l-5.14-2.88v-5.93v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m44.58 4.3v5.93l-5.15 2.88v-5.93l5.15-2.88v0z"
        />

        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m20 26.53c0.05-0.15 0.19-0.3 0.62-0.52c0.86-0.43 2.11-0.64 2.25-1.12c0.14-0.48 1.1-1.43 1.27-2.17c0.17-0.74 0.47-2 0.47-2c0.59 0.11 1.19-0.48 1.54-0.2c0.35 0.28-0.07 0.7 0.53 1.15c0.6 0.45 1.21 0.54 1.56 0.24c0.35-0.3 1 0 1.3 0.17c0.3 0.17 0.39-0.82 0.71-0.65c0.32 0.17 0.11 0.54 0.48 0.68c0.37 0.14 0.44-0.4 0.74 0c0.3 0.4 1.27 0.89 1.41 1.67c0.14 0.78 0 2.9 0.48 3.28c0.48 0.38 0.91 0.54 0.88 1c-0.03 0.46-0.15 0.34-0.1 0.7c0.05 0.36 0.37 0.52-0.19 0.59c-0.56 0.07-1.43-0.46-1.65-0.12c-0.22 0.34-0.77 0.05-1 0.12c-0.23 0.07-0.57 0-0.5 0.4c0.07 0.4-1.93 1.1-1.65 1.35c0.28 0.25 0.32 0.26 0.34 0.48c-0.03 0.11-0.07 0.21-0.12 0.31c-0.05 0.1-0.1 0.2-0.15 0.29c-0.06 0.09-0.12 0.19-0.19 0.27c-0.07 0.09-0.14 0.17-0.22 0.25c-0.2 0.17-0.44-0.11-0.75 0.17c-0.31 0.28-2.45 1.51-2.61 2.47c-0.07-0.03-0.14-0.06-0.21-0.08c-0.07-0.02-0.15-0.04-0.22-0.05c-0.08-0.01-0.15-0.02-0.23-0.01c-0.08 0-0.15 0.01-0.23 0.02c-0.38 0.1-0.66-0.41-1-0.2c-0.34 0.21-1 0-1.24 0.14c-0.24 0.14-2.73 1.72-2.73 1.72l-0.25 6h-6.43v5.12c0 0-2.52 0.45-2.73 1.5c-0.03 0.27-0.05 0.54-0.07 0.8c-0.01 0.27-0.02 0.54-0.02 0.81c0 0.27 0.01 0.54 0.02 0.81c0.01 0.27 0.04 0.54 0.07 0.8l-8.1-0.56v1c0 0-0.75 0.65-1 0c-0.25-0.65 0.53-3.24 1.55-3.48c1.02-0.24 1-2.63 1.47-3.13c0.47-0.5 2.36-1.48 2.36-2c0-0.52-0.13-1.1 0.14-1.34c0.11-0.12 0.21-0.25 0.31-0.39c0.1-0.13 0.19-0.27 0.27-0.41c0.08-0.14 0.16-0.29 0.23-0.44c0.07-0.15 0.13-0.3 0.19-0.45c0-0.38 0.24-0.27 0.91-0.62c0.21-0.19 0.42-0.4 0.61-0.61c0.19-0.21 0.38-0.43 0.55-0.66c0.17-0.23 0.34-0.47 0.49-0.71c0.15-0.24 0.29-0.49 0.42-0.75c0.32-0.59 0.07-0.59 0.83-0.54c0.29-0.02 0.57-0.06 0.85-0.11c0.28-0.05 0.56-0.12 0.83-0.21c0.27-0.08 0.54-0.18 0.81-0.3c0.26-0.11 0.52-0.24 0.77-0.38"
        />
        <Path
          id="Layer"
          style={{
            fill: colors.secondary,
            stroke: "white",
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 1,
          }}
          d="m20.65 31.23h1.7l-5.82 8l-5.82-8h1.9c-0.53-21.39 19.09-20.52 19.09-20.52c-15.76 9.11-11.05 20.52-11.05 20.52z"
        />
      </G>
    </G>
  </Svg>
);

export const ToDu = (props) => (
  <Svg
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    viewBox="0 0 53 52"
    height={props.size}
    {...props}
  >
    <G id="Layer">
      <G id="Background">
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m15.98 38.05l-7.25 4.05l-7.26-4.05l7.26-4.05l7.25 4.05v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m1.47 38.05l7.26 4.05v8.36l-7.26-4.05v-8.36v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m15.98 38.05v8.36l-7.25 4.05v-8.36l7.25-4.05v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: props.color,
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 0,
          }}
          d="m31.1 33.28c-0.08-0.06-0.15-0.14-0.21-0.22c-0.06-0.08-0.11-0.17-0.15-0.26c-0.04-0.09-0.06-0.19-0.07-0.29c-0.01-0.1-0.01-0.2 0.01-0.3c0.18-0.66 0.09-1.07 0.29-1.3c0.1-0.17 0.18-0.34 0.26-0.52c0.08-0.18 0.15-0.36 0.22-0.54c0.06-0.18 0.12-0.37 0.17-0.56c0.05-0.19 0.09-0.38 0.12-0.57c-0.08-0.31 0.95-0.68 1-1c0.05-0.32-0.67-0.63-1.45-0.63l-0.41-0.6l-0.37 0.3l-0.89-0.05c0 0-0.02-0.56-0.3-0.36c-0.28 0.2-0.35 0.57-0.53 0.11c-0.18-0.46-0.46-1.22-0.83-1.3c-0.37-0.08-0.04-0.78 0.22-1.34c0 0-1.89-1.61-0.38-2.68c0 0 0.3-0.46 0-0.59c-0.3-0.13-0.61-0.42-0.53-0.65c0.08-0.23-0.41-0.93-0.26-1.23c0.15-0.3-0.39-0.69 0-1c0.1-0.09 0.19-0.19 0.28-0.3c0.08-0.11 0.16-0.22 0.22-0.35c0.06-0.12 0.11-0.25 0.15-0.38c0.04-0.13 0.07-0.26 0.08-0.4c-0.07-0.32-1.09-1.72-0.18-1.9c0.91-0.18 1.51 0.07 1.62-0.13c0.11-0.2 0.03-0.72 0.31-0.91c0.28-0.19 0.83-0.81 0.48-1c-0.35-0.19-0.93-0.13-0.89-0.45c0.04-0.32 0.02-0.94 0.51-0.91c0.49 0.03 0.78-0.11 0.76-0.82c-0.02-0.71 0.4-1.18 0.29-1.66c-0.11-0.48-0.07-1.11-0.35-1.11c-0.28 0-0.6 0.15-0.71-0.19c-0.11-0.34-0.41-0.59 0.3-0.63c0.71-0.04 0.92-0.56 1.83-0.43c0.91 0.13 1.36-0.49 1.56 0.22c0.2 0.71 0.74 0.65 0.74 0.65c0 0 0.11-1.15 0.61-1.18c0.5-0.03 0.7-0.26 0.5-0.64c-0.2-0.38-0.32-0.52-0.29-0.67c0.03-0.15-0.66-0.19-0.62-0.45c0.04-0.26 0.58-0.56 0.17-0.82c-0.41-0.26-0.77-0.67-0.69-0.78c0.08-0.11-0.1-1.16 0.08-1.25c0.18-0.09 0.08-0.96 0.54-0.59c0.46 0.37 0.26 0.59 0.52 0.7c0.15 0.03 0.31 0.05 0.46 0.09c0.15 0.03 0.3 0.06 0.46 0.1c0.15 0.03 0.3 0.07 0.45 0.11c0.15 0.04 0.3 0.08 0.45 0.12c0.02 0.1 0.53-0.69 0.74-0.37c0.21 0.32 0.68-0.05 0.91 0.69c0.23 0.74-0.25 0.75 0.23 1.1c0.48 0.35 1.51 0.99 1.62 0.79c0.11-0.2 0.35-1 0.7-1c0.35 0 1.02 0.2 1 0.63c-0.02 0.43-0.6 0.33-0.65 0.43c-0.05 0.1-0.09 0.19-0.14 0.29c-0.05 0.09-0.1 0.19-0.15 0.28c-0.05 0.09-0.1 0.19-0.16 0.28c-0.05 0.09-0.11 0.18-0.17 0.27c-0.08 0.08 1.09 0.23 1.24 0.31c0.15 0.08 0.04-0.74 0.54-0.85c0.5-0.11 0.99 0.16 1.25-0.32c0.26-0.48 0.77-1.21 1-1.21c0.23 0 1.06 0.26 1.23 0c0.17-0.26 0.27-1.2 0.82-1c0.55 0.2 0.19-0.19 0.55 0.2c0.36 0.39 0.67 0.21 0.56 0.75c-0.11 0.54-0.63 0.68-0.59 1c0.04 0.32 0 0.34 0.52 0.32c0.52-0.02 1.34 0.32 1.34 0.6c0.01 0.07 0.01 0.14 0.02 0.21c0.01 0.07 0.02 0.14 0.03 0.2c0.01 0.07 0.03 0.13 0.04 0.2c0.02 0.07 0.03 0.13 0.05 0.2c-0.45 0.12-1.01 0.27-0.45 0.27c0.56 0 0.74-0.39 0.89 0.76c0.15 1.15 0.58 2.19 0.15 2.64c-0.43 0.45-0.5 0.8-0.11 0.95c0.39 0.15 1.17 1.31 0.93 1.76c-0.24 0.45 0.46 0.51 0.46 0.9c0 0.39-0.2 1.13 0 1.54c0.03 0.06 0.06 0.13 0.08 0.2c0.02 0.07 0.05 0.13 0.07 0.2c0.02 0.07 0.04 0.14 0.05 0.21c0.01 0.07 0.02 0.14 0.03 0.21c0.09 0.34 0.66 0.62 0.69 0.93c0.03 0.31 0.25 0.15 0.18 0.8c-0.07 0.65-0.51 2.08-0.72 2.08c-0.21 0-0.75-0.95-0.95-0.91c-0.2 0.04-0.04 0.27 0 0.37c0.04 0.1-0.26-0.14-0.58 0.24c-0.32 0.38-0.85 0.51-1 0.75c-0.15 0.24-0.66 0.1-0.84 0.45c-0.18 0.35-0.8-0.13-0.93 0.35c-0.13 0.48-0.88 0.69-1.23 0.67c-0.35-0.02-1.22 0.08-1.11 0.58c0.11 0.5 0.89 1.26 0.79 1.5c-0.03 0.12-0.04 0.24-0.05 0.37c-0.01 0.12 0 0.25 0.02 0.37c0.02 0.12 0.04 0.24 0.08 0.36c0.04 0.12 0.08 0.23 0.14 0.34c0.06 0.1 0.13 0.19 0.21 0.27c0.08 0.08 0.16 0.16 0.26 0.23c0.09 0.07 0.19 0.13 0.3 0.17c0.1 0.05 0.21 0.09 0.32 0.11c0.73 0.17 1.07 1.33 1.29 1.44c0.22 0.11 0.48-0.21 0.74 0.29c0.26 0.5 0.74 0.51 0.62 1.25c-0.01 0.11-0.05 0.22-0.11 0.32c-0.06 0.1-0.14 0.18-0.24 0.24c-0.1 0.06-0.21 0.09-0.32 0.1c-0.11 0.01-0.23-0.01-0.33-0.05c0 0-0.53 1.15-0.97 1.32c-0.44 0.17-1 0.39-1 0.63c0.05 0.11 0.1 0.22 0.15 0.34c0.05 0.11 0.09 0.23 0.13 0.35c0.04 0.12 0.07 0.24 0.11 0.35c0.03 0.12 0.06 0.24 0.08 0.36c0 0 0.58 0.47 0.4 1c-0.18 0.53-0.57 0.8-1.31-0.3c-0.03 0.02-0.07 0.05-0.11 0.07c-0.04 0.02-0.08 0.04-0.12 0.05c-0.04 0.02-0.08 0.03-0.12 0.04c-0.04 0.01-0.08 0.02-0.13 0.02c-0.33 0.04-0.55-0.57-0.9-0.15c-0.35 0.42-0.94 0.23-1.26 0.42c-0.1 0.08-0.2 0.15-0.3 0.22c-0.1 0.07-0.21 0.14-0.32 0.2c-0.11 0.06-0.22 0.12-0.34 0.17c-0.12 0.05-0.23 0.1-0.35 0.14c-0.11 0.02-0.22 0.03-0.33 0.05c-0.11 0.01-0.22 0.03-0.33 0.04c-0.11 0.01-0.22 0.02-0.34 0.03c-0.11 0.01-0.22 0.01-0.34 0.02c0 0-0.56-0.79-1-0.45c-0.44 0.34-0.61 1.1-0.93 1.1c-0.32 0-0.61-0.65-1-1"
        />
        <Path
          id="Layer"
          style={{
            fill: colors.secondary,
            stroke: "#FFFFFF",
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 1,
          }}
          d="m41.48 22.05c-1.09 23.09-22.89 18.09-22.89 18.09c17.13-3.05 16.7-18.64 16.7-18.64l-2.24-0.2l5.78-6.3l4.58 7.22l-1.93-0.17z"
        />
      </G>
    </G>
  </Svg>
);

export const ToMaOutlined = (props) => (
  <Svg
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    viewBox="0 0 46 54"
    height={props.size}
    {...props}
  >
    <G id="Layer">
      <G id="Layer_1">
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m44.58 4.3l-5.14 2.88l-5.15-2.88l5.15-2.87l5.14 2.87v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m34.29 4.3l5.14 2.88v5.93l-5.14-2.88v-5.93v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m44.58 4.3v5.93l-5.15 2.88v-5.93l5.15-2.88v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m20.65 31.23h1.7l-5.82 8l-5.82-8h1.9c-0.53-21.39 19.09-20.52 19.09-20.52c-15.76 9.11-11.05 20.52-11.05 20.52z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m20 26.53c0.05-0.15 0.19-0.3 0.62-0.52c0.86-0.43 2.11-0.64 2.25-1.12c0.14-0.48 1.1-1.43 1.27-2.17c0.17-0.74 0.47-2 0.47-2c0.59 0.11 1.19-0.48 1.54-0.2c0.35 0.28-0.07 0.7 0.53 1.15c0.6 0.45 1.21 0.54 1.56 0.24c0.35-0.3 1 0 1.3 0.17c0.3 0.17 0.39-0.82 0.71-0.65c0.32 0.17 0.11 0.54 0.48 0.68c0.37 0.14 0.44-0.4 0.74 0c0.3 0.4 1.27 0.89 1.41 1.67c0.14 0.78 0 2.9 0.48 3.28c0.48 0.38 0.91 0.54 0.88 1c-0.03 0.46-0.15 0.34-0.1 0.7c0.05 0.36 0.37 0.52-0.19 0.59c-0.56 0.07-1.43-0.46-1.65-0.12c-0.22 0.34-0.77 0.05-1 0.12c-0.23 0.07-0.57 0-0.5 0.4c0.07 0.4-1.93 1.1-1.65 1.35c0.28 0.25 0.32 0.26 0.34 0.48c-0.03 0.11-0.07 0.21-0.12 0.31c-0.05 0.1-0.1 0.2-0.15 0.29c-0.06 0.09-0.12 0.19-0.19 0.27c-0.07 0.09-0.14 0.17-0.22 0.25c-0.2 0.17-0.44-0.11-0.75 0.17c-0.31 0.28-2.45 1.51-2.61 2.47c-0.07-0.03-0.14-0.06-0.21-0.08c-0.07-0.02-0.15-0.04-0.22-0.05c-0.08-0.01-0.15-0.02-0.23-0.01c-0.08 0-0.15 0.01-0.23 0.02c-0.38 0.1-0.66-0.41-1-0.2c-0.34 0.21-1 0-1.24 0.14c-0.24 0.14-2.73 1.72-2.73 1.72l-0.25 6h-6.43v5.12c0 0-2.52 0.45-2.73 1.5c-0.03 0.27-0.05 0.54-0.07 0.8c-0.01 0.27-0.02 0.54-0.02 0.81c0 0.27 0.01 0.54 0.02 0.81c0.01 0.27 0.04 0.54 0.07 0.8l-8.1-0.56v1c0 0-0.75 0.65-1 0c-0.25-0.65 0.53-3.24 1.55-3.48c1.02-0.24 1-2.63 1.47-3.13c0.47-0.5 2.36-1.48 2.36-2c0-0.52-0.13-1.1 0.14-1.34c0.11-0.12 0.21-0.25 0.31-0.39c0.1-0.13 0.19-0.27 0.27-0.41c0.08-0.14 0.16-0.29 0.23-0.44c0.07-0.15 0.13-0.3 0.19-0.45c0-0.38 0.24-0.27 0.91-0.62c0.21-0.19 0.42-0.4 0.61-0.61c0.19-0.21 0.38-0.43 0.55-0.66c0.17-0.23 0.34-0.47 0.49-0.71c0.15-0.24 0.29-0.49 0.42-0.75c0.32-0.59 0.07-0.59 0.83-0.54c0.29-0.02 0.57-0.06 0.85-0.11c0.28-0.05 0.56-0.12 0.83-0.21c0.27-0.08 0.54-0.18 0.81-0.3c0.26-0.11 0.52-0.24 0.77-0.38"
        />
      </G>
    </G>
  </Svg>
);

export const ToDuOutlined = (props) => (
  <Svg
    baseProfile="tiny-ps"
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    viewBox="0 0 53 52"
    height={props.size}
    {...props}
  >
    <G id="Layer">
      <G id="Background">
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m15.98 38.05l-7.25 4.05l-7.26-4.05l7.26-4.05l7.25 4.05v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m1.47 38.05l7.26 4.05v8.36l-7.26-4.05v-8.36v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m15.98 38.05v8.36l-7.25 4.05v-8.36l7.25-4.05v0z"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m31.1 33.28c-0.08-0.06-0.15-0.14-0.21-0.22c-0.06-0.08-0.11-0.17-0.15-0.26c-0.04-0.09-0.06-0.19-0.07-0.29c-0.01-0.1-0.01-0.2 0.01-0.3c0.18-0.66 0.09-1.07 0.29-1.3c0.1-0.17 0.18-0.34 0.26-0.52c0.08-0.18 0.15-0.36 0.22-0.54c0.06-0.18 0.12-0.37 0.17-0.56c0.05-0.19 0.09-0.38 0.12-0.57c-0.08-0.31 0.95-0.68 1-1c0.05-0.32-0.67-0.63-1.45-0.63l-0.41-0.6l-0.37 0.3l-0.89-0.05c0 0-0.02-0.56-0.3-0.36c-0.28 0.2-0.35 0.57-0.53 0.11c-0.18-0.46-0.46-1.22-0.83-1.3c-0.37-0.08-0.04-0.78 0.22-1.34c0 0-1.89-1.61-0.38-2.68c0 0 0.3-0.46 0-0.59c-0.3-0.13-0.61-0.42-0.53-0.65c0.08-0.23-0.41-0.93-0.26-1.23c0.15-0.3-0.39-0.69 0-1c0.1-0.09 0.19-0.19 0.28-0.3c0.08-0.11 0.16-0.22 0.22-0.35c0.06-0.12 0.11-0.25 0.15-0.38c0.04-0.13 0.07-0.26 0.08-0.4c-0.07-0.32-1.09-1.72-0.18-1.9c0.91-0.18 1.51 0.07 1.62-0.13c0.11-0.2 0.03-0.72 0.31-0.91c0.28-0.19 0.83-0.81 0.48-1c-0.35-0.19-0.93-0.13-0.89-0.45c0.04-0.32 0.02-0.94 0.51-0.91c0.49 0.03 0.78-0.11 0.76-0.82c-0.02-0.71 0.4-1.18 0.29-1.66c-0.11-0.48-0.07-1.11-0.35-1.11c-0.28 0-0.6 0.15-0.71-0.19c-0.11-0.34-0.41-0.59 0.3-0.63c0.71-0.04 0.92-0.56 1.83-0.43c0.91 0.13 1.36-0.49 1.56 0.22c0.2 0.71 0.74 0.65 0.74 0.65c0 0 0.11-1.15 0.61-1.18c0.5-0.03 0.7-0.26 0.5-0.64c-0.2-0.38-0.32-0.52-0.29-0.67c0.03-0.15-0.66-0.19-0.62-0.45c0.04-0.26 0.58-0.56 0.17-0.82c-0.41-0.26-0.77-0.67-0.69-0.78c0.08-0.11-0.1-1.16 0.08-1.25c0.18-0.09 0.08-0.96 0.54-0.59c0.46 0.37 0.26 0.59 0.52 0.7c0.15 0.03 0.31 0.05 0.46 0.09c0.15 0.03 0.3 0.06 0.46 0.1c0.15 0.03 0.3 0.07 0.45 0.11c0.15 0.04 0.3 0.08 0.45 0.12c0.02 0.1 0.53-0.69 0.74-0.37c0.21 0.32 0.68-0.05 0.91 0.69c0.23 0.74-0.25 0.75 0.23 1.1c0.48 0.35 1.51 0.99 1.62 0.79c0.11-0.2 0.35-1 0.7-1c0.35 0 1.02 0.2 1 0.63c-0.02 0.43-0.6 0.33-0.65 0.43c-0.05 0.1-0.09 0.19-0.14 0.29c-0.05 0.09-0.1 0.19-0.15 0.28c-0.05 0.09-0.1 0.19-0.16 0.28c-0.05 0.09-0.11 0.18-0.17 0.27c-0.08 0.08 1.09 0.23 1.24 0.31c0.15 0.08 0.04-0.74 0.54-0.85c0.5-0.11 0.99 0.16 1.25-0.32c0.26-0.48 0.77-1.21 1-1.21c0.23 0 1.06 0.26 1.23 0c0.17-0.26 0.27-1.2 0.82-1c0.55 0.2 0.19-0.19 0.55 0.2c0.36 0.39 0.67 0.21 0.56 0.75c-0.11 0.54-0.63 0.68-0.59 1c0.04 0.32 0 0.34 0.52 0.32c0.52-0.02 1.34 0.32 1.34 0.6c0.01 0.07 0.01 0.14 0.02 0.21c0.01 0.07 0.02 0.14 0.03 0.2c0.01 0.07 0.03 0.13 0.04 0.2c0.02 0.07 0.03 0.13 0.05 0.2c-0.45 0.12-1.01 0.27-0.45 0.27c0.56 0 0.74-0.39 0.89 0.76c0.15 1.15 0.58 2.19 0.15 2.64c-0.43 0.45-0.5 0.8-0.11 0.95c0.39 0.15 1.17 1.31 0.93 1.76c-0.24 0.45 0.46 0.51 0.46 0.9c0 0.39-0.2 1.13 0 1.54c0.03 0.06 0.06 0.13 0.08 0.2c0.02 0.07 0.05 0.13 0.07 0.2c0.02 0.07 0.04 0.14 0.05 0.21c0.01 0.07 0.02 0.14 0.03 0.21c0.09 0.34 0.66 0.62 0.69 0.93c0.03 0.31 0.25 0.15 0.18 0.8c-0.07 0.65-0.51 2.08-0.72 2.08c-0.21 0-0.75-0.95-0.95-0.91c-0.2 0.04-0.04 0.27 0 0.37c0.04 0.1-0.26-0.14-0.58 0.24c-0.32 0.38-0.85 0.51-1 0.75c-0.15 0.24-0.66 0.1-0.84 0.45c-0.18 0.35-0.8-0.13-0.93 0.35c-0.13 0.48-0.88 0.69-1.23 0.67c-0.35-0.02-1.22 0.08-1.11 0.58c0.11 0.5 0.89 1.26 0.79 1.5c-0.03 0.12-0.04 0.24-0.05 0.37c-0.01 0.12 0 0.25 0.02 0.37c0.02 0.12 0.04 0.24 0.08 0.36c0.04 0.12 0.08 0.23 0.14 0.34c0.06 0.1 0.13 0.19 0.21 0.27c0.08 0.08 0.16 0.16 0.26 0.23c0.09 0.07 0.19 0.13 0.3 0.17c0.1 0.05 0.21 0.09 0.32 0.11c0.73 0.17 1.07 1.33 1.29 1.44c0.22 0.11 0.48-0.21 0.74 0.29c0.26 0.5 0.74 0.51 0.62 1.25c-0.01 0.11-0.05 0.22-0.11 0.32c-0.06 0.1-0.14 0.18-0.24 0.24c-0.1 0.06-0.21 0.09-0.32 0.1c-0.11 0.01-0.23-0.01-0.33-0.05c0 0-0.53 1.15-0.97 1.32c-0.44 0.17-1 0.39-1 0.63c0.05 0.11 0.1 0.22 0.15 0.34c0.05 0.11 0.09 0.23 0.13 0.35c0.04 0.12 0.07 0.24 0.11 0.35c0.03 0.12 0.06 0.24 0.08 0.36c0 0 0.58 0.47 0.4 1c-0.18 0.53-0.57 0.8-1.31-0.3c-0.03 0.02-0.07 0.05-0.11 0.07c-0.04 0.02-0.08 0.04-0.12 0.05c-0.04 0.02-0.08 0.03-0.12 0.04c-0.04 0.01-0.08 0.02-0.13 0.02c-0.33 0.04-0.55-0.57-0.9-0.15c-0.35 0.42-0.94 0.23-1.26 0.42c-0.1 0.08-0.2 0.15-0.3 0.22c-0.1 0.07-0.21 0.14-0.32 0.2c-0.11 0.06-0.22 0.12-0.34 0.17c-0.12 0.05-0.23 0.1-0.35 0.14c-0.11 0.02-0.22 0.03-0.33 0.05c-0.11 0.01-0.22 0.03-0.33 0.04c-0.11 0.01-0.22 0.02-0.34 0.03c-0.11 0.01-0.22 0.01-0.34 0.02c0 0-0.56-0.79-1-0.45c-0.44 0.34-0.61 1.1-0.93 1.1c-0.32 0-0.61-0.65-1-1"
        />
        <Path
          id="Layer"
          style={{
            fill: "none",
            stroke: props.color,
            strokelinecap: "round",
            strokelinejoin: "round",
            strokeWidth: 2,
          }}
          d="m41.48 22.05c-1.09 23.09-22.89 18.09-22.89 18.09c17.13-3.05 16.7-18.64 16.7-18.64l-2.24-0.2l5.78-6.3l4.58 7.22l-1.93-0.17z"
        />
      </G>
    </G>
  </Svg>
);

export const Logo = (props) => (
  <Svg
    viewBox="0 0 378 223"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h378v223H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00231 0 0 .00392 -.05 0)" />
      </Pattern>
      <Image
        id="b"
        width={488}
        height={331}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAegAAAFLCAYAAAAd2B9MAAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR4nOydCXgUVdaGT2UhkEA2lrAT9ihLgoqCoCSKgwMKAQQFRILIjAuMuKEzogTRccYN+BVlRCCguAMJIiqyJIiArAmLhD3sBAKkExKydv3PuX1vpbqqutPd6aUqua9Pm+6q6urukOSrc853zhVEUQQOh8PhcDj6IoD/e3DqEoIgxAFAOADE048dTW9y8gEgEwByACBVFMV8/kPC4XC8DY+gObUWQRCiqRDH0a+xLn7WpQCQLIpijmoPh8PheAgu0By3IghCvCwqDafiqCSdPsavme6MUKkoJwJAki1Bnjj8rxATVg+izKXQ9tplCC4ugVa/XYRzdzWHH1t2htmfp6qeQ3lOFMW5qq0cDofjAbhAc2oETRkn1TBCzaJiPdeVKFUQhHAqytO03gMK8q1h/nDzlQvQ+Rf16beNioWvrwqw8qcNqn0aLBVFMUm9mcPhcNwLF2iO01BBTKKC2M7N38EMmk5OV+1RQN/HNHoLk+99dsww6OdXCL22Hob650pUzwUqzP87fQM2/LZNta8a2vN0N4fD8TRcoDlOIQhCspYgyunQoT0MiI2B1g2DIMq/QtpztNQfCkrK4HReviOiiEKdpCWEtoT53rv6wvj2YdDvt/02RRm5GhsGc1t3hSWrflLtc5BZoigm858cDofjSbhAcxyCprJTbUXMLGLteiQHIrNMqv1KSlrVhyO3RcP2+k1h+e9ZcOLESdUxAGCi0bRU9xUEASP3ZPn7wBT2QwEF0DMtW3UCJfuGxcDU3edtvZ6jTBRFMYX/5HA4HE/CBZpTLTRqnqk8DiPl5+/uBoMy9mpGrPUf6gn+bVtXbSgtg8rcS2DOL4SKA7lgvlgs7aom3ZxG256wzj2AbURhHl9xSbOurAW+xujlGzX2OA1PcXM4HI/DBZpjF0EQMFKcoDzmv0nDYETGLk1hllNvYHsI7HkTBLRWB97mAhOUHzgAZVuOSWKNIvrKtpN2I1xMZf+9bQPo+12Wah9DaBQIfs2DofKoJZr/9OG77LmzncFQJjFBEKbJnPTpvK+bwzEOXKA5NtESZxTHt+oVkLYkZwjo1QSCEm7XFGqk/OB+KN28nwgqpr+X9e+tKagfJT1gM2Jn+HcOg+BxQ6BoQSoRfjdGzqdQ7IwgcLTdba6Wq13mmk91xIzH4XB8AxdojiZa4ox15inbq4+a7RE8qT8EduuheUTF2VNQ9MFa6fHrQ26XjFwj/novTC+7WO2FQWC/VtDggUFQcewIFC/aQmrOQ777XXWcC2AoHi+KYqaef2KogW6uVtbDBiYq1kyweeqew9EJXKA5KmhadI58+2vjE+Fv3/ymOtYVgobEQP17E6yeWXk5F4o++gHEwnLy+Mux/eHllDRyH9PpY7/cUu0rYc076M5+IJaWwvV5X8OZzqEw9mSx3XS5gxhFnJOoONt02DvAKSbW+JWnwzkc38FncXOsoG5tj4kzgiYxOXJxxvT2v+N6wpKUNGJC+/DWltCzGnHGenPw5Puk9Hnplq0ktf1Oty5w4oRDw0fsoXtxptPTUuQGOgZ+D9kFyqTHH4OwsEaQmrbW3kVLOxp9T6DnzpBF17q+QOFwahs8guZYIQhCuvwPPaaW/5udXaO0tpKQZwZCQMfOZKtcnHHU5jv1mpOJXs6mtIWgIPIYa9mY2pZH4DUgi/Zi61mcNR32994zAGa+NBr692wAfq0eJ9tQoD/94Cly/8TpfNiz/xT8sWt/dYItx6SIrnk6nMPxIFygORLUWLRJvm37vd2cNoTZAw1cDZ8aS45gYoqgOLN0NLZP/Stzn92LAnRoNxgbb2U6Q7G//vZKODooGu75YbfqOU6SRSNnXaZ46b9VilZf+sL5s+GR+1tDSH3L7/aoqatgxcof4KERifDN4pdV50L2ZefC7szjsG1HFixavEy13wanZGKtdvRxOJwawQWaIyEIAv6RHcYeo2N62JeafckuE/L8YCKqcnGWu6yrS6ejMNfr34nUmuXg+W58+wfcCPWHQUK9mtadddtKZc8ENmniWHjrhXuhWYRgtX32gv0wc7alalGZX/2/Z9GNcsj68wLs2nsEft+6G75f6bD2ZsgEm6fDOZwawgWaQ6B/+K+xx1i7/EUssxvFOgu2WoWMH1WtODcY1xvq3XobcXVXnj5LatZ+4Y3I0BOtNq3Srb9Dyff7yH2589tFdDslzJYJTJ7O1uK79Xnw8ITpZM/e7anQMyZK4yjboGBv2XESdu45BJu3bIcNGxzqzDIxsebpcA7HNbhAcwiCIOBqUKvYY3cbw5BGyWOh8sxpm+L897Xbrcxe1YECXvLD7+4aRoLp2kQ9Rn72TGDKdLYWWcfKoNeAJ8meb5YvgIeGaLVGO86lK8WweftRZ+vXvPeaw3ESLtAcgiAIGJk9yx5vfPBWh0doOgKmpgO6R0HZessfcy1xDpnyIPg3rT66qzh+FEq3ZkLF3jxpWw3FOYOKs67qzbJFQVQmMFvpbFswo9isma/AjOeG2TjKNZjhbN2Grc7Ur9Nk0TVPh3M4GnCB5hDk7m1Mb2ecLfDYN0Ypzk9m7IbgiffbFWcU5Yqcs1C++7TVDG80hH0e0Kwmae15oihOU231MbZMYNWls23hiFHMXTDD2c/rfnO0fn1KMSyF915z6jzABZrDEAQhk42FRBf1Gz/u8Mj3Ri7OOJnsxRVbSG06oGNL1bEVx8+DeL1cSmGDbBWsAyFNYN3xS2RxjeRXpkPLpk3hmzU/woZNDmdPTbSFSlfuYxo1p8jNeoxq09mB4SAGNrGcp+Q0gLlM2uWsUcxdyA1na37a4Gj9mqfDOXUe4ALNYQiCIP0geMK9DbSVqs+Gg+S+PRMaHlccXB9u1K8PJ0MiyLbdpkqrdaTvTYiHhx8YAiN794LgQMu8ndyiYkhZnw7J/3lHdU4FuuxvphPckpUmsGrT2f7BINZrCuAXXHWusgsA5VWBaE2NYu4C69d7D5x1xnDGR5Fy6ixcoDkETwu0vM/ZVSY9Nh7uiO0J/W/uCu3DQ63OcjLfBIOf+ge5P27kCPhqVaqt10qj4qybNCqd3jZXaQKrNp2tIcwS5VdBKMuVHrrbKOYuXBiYwkeRcuoMfNQnx+NgWvrVslA4ceJgtS81MnEYhIeGws2dO0Gj4GDo3LoFRIWGqgRZyUVTIeTknCJb33p/Drz9+gzYtW8/rEi1miaWJopiourJPsKeCcxuOtueMEvH1Ld6GNupnnQ/+0gOgA2BXvL1VvK1S6fW0Dm6CTRrYuc13ECHtuHkhhcM7858lAh2xtY/7Q1MUY4izZKJNU+Hc2oVXKA5jCwbSxPWmJdjYmDDT+qZ2Fg77tquLXRqEQUdIiOkVLWzbDt1Fnq2ag7R0e0kkf7nG2/CoZ9WE7FftOxzdsZ4jFb1kNq2ZQKzTmcrxNkRYWZoHIMR+YaNGbB/f7ZWiVviiSdfIHc3r/8G+g6cDvcm3A3dbu4MMV3aQqf2UdCxbbjqOe7CIth3wsRH7iRjSbfuPl3dwJRYepspCAJPh3NqFVygOQyPpAqx/Wmlov3p+SlPw6ujR7gsyEoa1q8Ho157Q7V97c498NFTk6BNyxasLo213XQUR1+JNO1pnqtUSLvpbL96FvNXgMYiVZWFIFReBxH3KUXZLwjAXCo9jO3RlQg0ETobTm6MnIFcKIyH60U3yP1FSz5XHYf727RpCTFdo6Frh+bQ86bmqmPcwZ23tiW3fzwxEIrmP08MZxs377VVvw6j31e8zaHRtW7HtXI41cEFmsPIYTXQ3Er3/FigY1vZm/z+7Fnw9EDVvI0a0SOqGXw3+3WYvjAFFtMIGmkUEkK+vjxsMPmqEOlob//htmUCs5nOFvxBrBdlLcxiJUDldRAqCwEqiy2P8VDwA7GeQqD9G1gJ9E1d2kj3sRVKyyjW77a2kJAwAPLzC6Dg+g0pI6FES7S/Xv4JjBoSp9ruLkIaBEqCDc8Nkwxn69N32KpfY2TNpq9xOIaDCzSHkcnqegfzCmv8TUFT2CvbrP9gfvr+uzD+zt6qY5GPf02HgqIiGNK3NxFcZwkJCID5Tz0BA/v2gbFPTSHPbt44QjqLDZH2SnRFTWApyhKCzXQ2CnNgJEBABLlvJcoVNv5tKq8DgLXgikIQyH3ft3VvKt0/cvyipkAjs159GhqF1INefYer9tnjemGxnb3up1njYBg0oAu5sfo1Gs6+W/GzPB0ezwWaY1T8+L8chyKlfHG5RzR2uQo+F5eNlEc0WG+2Jc7IC68nw6z/vgu3J46GXw8fU+13lOFx3eHPn9JIPXpo0hNW50KRxvdBifX0H240gdEJbXvl4ozp7M0/zYeFbw60bp0iEXNTEBt0JOJcdL0AhNKzIBQfAaH0vG1xRrDnWSy33qYwinVqHSTdJ0YxG2AUveybX7V36hhmNls8/3nSxkeJNtwH4XAoXKA5BKUDdu+dXV3+xqwccBsReQb2LE8d/BfVcXJGDBsqPUJhReOXq7QPD4O1n/wfOSeeC6NzBr4PdIpTJtAZ5G6HnjdTPj4VaDo7dWGSutYcGAlig/YAQiBkHTgGA4f/C9ZuPGBflJVUKiJYRU0aU+h4cYBYjGK2eerxB8lFjjPcfefNbv02Ft2oIDdnwVR4Qvxd7Fn66CfjcFyACzRHjtST9Lu5kUvfmH3DYuDlFKvWJpg2YXy1hrApY0ZbPZ694FPVMc6AIv3pi/8gIo3RORNpfB8fTP27PMJKoe1ObgFr23TZzlVyhzamsy8eWASTElupa81+9QDMJXDp7FF48Y2VcMtdSbApfTN8m+rcYiUkBa7EL8hqAxrFEBuOaAl0aq9bvcBhkUbTmLvd3c/961OY+PR7qu2O0P3mztJRtMTA4RgOLtAcOdJf7XlfpcHVWA3XsB0wtT1193mrAzB6Hti1o+0nUfq2aw0zX35JeowChZPBagLWpVGkE+LvJiK9P/cSOVuz4GBY9PZsduYwWh+uMYIgJNOoWQrRbaaz5ZjLYNqbG2DQuHkw5/+qLkxWrvoBcq9q9EHbQhlBAzWKyVAaxeyBgrtt/WIivvZAEX/zVfcunz1v4a/EiLZiVRq5r8Xvu06TmxYtWzSVb+Vpbo4h4QLNkWMVVn0f09Opb85HfW5TOWkH35OgOs4WryQOgS8/+YhEvTtSv4WoEHUvr7OgSP93msU09vLcj6Rn92nbWl6PHkb7kl0Cn0tnmc+UO7RtprNlpGaYoN9Dn8IfO7OgQYP6EBBgnWnI2HNF9RyboJlM5toGahSTozSKVQcOKvl0ztOwNi0Fnpv2tNXRKMzJr78M+7Z94daBJpfyimHZ8pXS4+dfel0lxHjMY09MJze8r6RLR6u2Lx5BcwwJF2iOBHU0L2WPsUXK0SgaU9sYdSvp0qa1aps90OS1/JXnXXJy2wLP9fhjj5KoXF7bxnq0LNXttGFMZgLbJK912k1nU/7MqYRhT34P/533FZjNZml7iOKiZN2mvarn2qWyyHqvi0YxJYMGdIX3kqsi6YILv8HxzK/htecTIaSB/fKFs6DY707/RHrWX/5yLxw5Zu1JmPFWCmkBw9tTz89RvULHdpHyh1ygOYaECzRHiVW6d3GnHqoDlGBq+4OLZtV2pHk1Izq9RZ9Yi34eO3dBekWsR8tS3bGCIDicp6UmsBy5CcyhdDbW5N/eBhOn/Q8uXcpT7StSpPXDQp3zAghmx41iOOzDVY7nqN+7p1i3bgOZLCZnwrgHpEd/7NytSoOjUYw7uTlGhws0xwrq5s5i2zAqxujYHr8M6CWtMqV3tmdlWb1DTHXjIhyU5OrePjWBpVMTmFPp7EVp56V0tp+f+lfv8uXLUFFh7Vq+49ZOquPsolWHtmEUw0lcuBykM4wcbntEqDfBVjBmYBt8/0B4dvJ9qlfnTm6O0VH/leBwFOleNH7ZSnXj9ikpa1TbGXuPe24cclGF8y04Wjw5QmrxamcvipaZwKRRaI6ks9Ho9egLP8JnS1dbpbPlXLt2DU6fPmO1DQVocL8mqmPtolGHtmcUO37qqr2zqQinGZELl0yqfe5Gbk7TarfCGeHIhk2bVfuAO7k5tQAu0BwVoiimyKNoNH7NatJec3jJ3Nb2+6V/+W2Lapu72Ho8B/6T+iNZarI6vvrhB3IES3XL6R7VVB5FqwRaywTmSDr7+g2ARalnoUWPSfDt9+r6PJCUdhFkZ2fDkSNHVdHzso+nQ0PbAbltFO1W9oxiuzOP2zyNPc5fcMK85gbspdRtjSPlTm6O0eECzbHFNPl2HDyCLm05RwdFw5JVP9l4ugVc7vFA7mXVdndwX9dOcOtNXck60M988hmZGqaMqvHxv774lhjEkP43d9F8ZVkUPYBFW9QElqI0gTmSzgZS7y6Hyc+8Tu6j+GIKm1FaWkYufA4cOAgmU4HV8x5PGgNHdyyE/rH2z28LwQmj2J+HT9g4i4VfMg6TJSjx675DF8mMbr3Q946qoPj4afXEVu7k5hgdPoubownWogVByJCnc7EeHTo+Ef72jWWAxlv59bSequI/KV/AFy8/p9ruDlCkcWrYjAWLyNQwoFPJwsNCId9UACvTVkuvgn3WOMBEC4yiccIYXT96Gq0zz5XXmW3OzrZBp1aBVjtQkK9csUSeaAZTRszYr/3ilOHw177a79Fh2CIaOMcbbBvFcGWrrH321+hekbpBc2EMXJLyiSctNWlMe6NpC+vC7gQFmL02ptTtrZhVVFSi2sad3ByjwwWaYw9M91o1NpPVqcYnQg9zAWxYvtHOU6tA0esR01VasMLdoOhia9bnd98F//7wIytRZqBoT31gkGq7nKTEoUygJ7CFQxB0A3/07rNwfx/nHOmYnsZoeHHKV9I2ZbQM7hRmOejm9pc5wG0sPcmMYuh61mJk4r1SpLrtj0y4cPESZB8+Arm5ueQiAweJABVTdwu0HK2UOlsaEzl84qJKwJmTm/bm8xQ3x3BwgebYBBe8FwRhFq29SiiXkHQEuooU6T121zrQSnAxjhG3LyK16d2HDsOZCxcgrFEoJPS+hUTa1XFnB/VYyznv/AueGNnZpgGsOvr2vgkW25hThiawV1+aBJMSnesVdwShshhEuUD7h9hcehKNYrZWtsL+Z4ay1YmhNSjEHTRsZH/4Ca64xbC1khY6ualAq80HHI7O4QLNsYsoisnU2axWLydBkW7ZtKndVa1qCk4OQzF2RJCV4IXD81Oehg8++pjswejr2XGdHEpn2+KBu1sRIZYbmZgwPzyotWsmMEdQ1KFFv/o2l55Eo5gtgXYEd04Rwzo3LnOJa1J3iG4LH7z7BtnetEk42SePkps3rcponD1/SXUuUDu545WLwnA4eoYLNMcRkqhRqkZUt+SkHki47Vb4gL4P5dhSV4iKFODXb2fA8tUH4fTZXBJRe1SYGRgtW9WhqzOKaUfH3iYkpD5pr0Izmlbtm8FasD5b8D5czS+AmC7tiFFMuWAHd3JzjIwgiq5HB5y6Ax1p+aytD4yLYtx1x+3w2x87YMMmdZCC4uypGrQ7uVRcDO3urXqfezMWQGwnx8xwekOs39qqDi0UHbJ6h/eNX0rq0PfeGw/rVryty8+A/c/YYlVYVEbGfRYUFsHBP48SAWf1byUo2iwdjwuC9OojrSg6CzNCqidwODqFCzTHYWgvsGYt79SGtWSVKKAidyLvKhw9axmr2atjNHFJG4UGfavWzcCWKhxCYkhwjel6ValroeSU1aSxF9/ZDh/Ms6yeVXBhs02jmJ7REvCYLm2l2jka4EJb3M0+QYYoii4visLheBue4uY4A6a60+WtR0CcvsMkcQa6nGOztsFkjKaewJ7olTv2kl5oW+1W7PNQNzccOoLTvQwq0JXXMcle9RjT3DKBdtQopmdwoQ5Wl9ZykXMnN8fI8EElHIcRRTFTa9JWeKj3F8TAVanwVt2a0ThlbFXmATKspMldA+HcpUt2xRkUnydr/2HVfsNgLgMQq2Zti4o6tDsmihkB2UzuGhsdORxvwiNojlOIopgqCMI8e/VoBgrjwm++hQfuuQeevs+9mcWerZrD0k1b4J5Hkokr+p6774I2LVpAq2bN4NCJk2AqLIDFy76QjsdjVqd85rS7G2u0RSVJLrdZ+ZyKQpLqJigEukXjqpS2noxi7oY7uTlGhQs0xxWSaSRNQtGcM2c0T7F+23Z4Lukxl1qeqgPbqVD0R965Fpb8ugmWfvOt5kxmFOYJD48mQ0rwOY6g/Dx7jxRXO9ZTr+DykyIwgbaeyY0T0Vj6t7qJYkaGO7k5RoULNMdpRFHMFwQBZ3UvAbKaUDqZt600gr04ZhQsXPMLdIpqWm1a2VWiQoLhlcQh5LY/9xJczC+Ai1euQcPgBtCpRTPoEdXM6TMzF/rd8feQr4dPXIX+PQ1ah8YIWq7L/sFWdeiEAX2JQFc3UczIKGZyc4HmGAZeg+a4BF3xKoM995V586G43Hq2NIryvx8d7TFxVoJijNE69loPj+vukjjLF/ZoF9OD3LbvOqQ6zlCYZXV6RZq7z203SfedXXrSKChmcnMXN8cwcIHm1ARsMCVrPWLU+bcPPlSJtD2cOdat+AngFxwCfuERqrP+uH2ndD+8Uy8Ia90FNmVsUx1nJISKquUnlUaxrh2qxKu2GsWYk5vCI2iOYeACzXEZTHXTiISINLYm9U6aDOsP2/9Dj8L8+dadMHrmm94T6cBA8GvYEAIaN4GA5i3Br0EDMBdYL1GI/dvLvv1Oeny2xS1Q2uJmkgK+dM3A8wLkYz8VAt2lTdXj6paeNDJyJzcuI1prPyinVsFr0Jwaga1X6IwFAEx5x6KYPZg0iUQsj40eBV3btYVOLSz9tVgf3p19mIggG6P5Vreb4a1xox17Cxj5hjQCKC8Dc3k5QGWl6hCCvz8IAQEg1AsCITCQfMXnEkpLofJKHoilpaqnzVu1RnpfT7zwGqwLDIfWVND2HC50ejUr3SAf+1lHjWJyJzddepI7uTm6hws0p8YoRHoY0DnWbAUre+DCFKENGzo2BtQsgrmokIh0QGg4QACdM41i6x9Q9VhJaSmYS0vAfOOGTVHHqF++SMaVW0aR+2f96xOz2OHjl4wr0KBYfrIOGsUUTm4u0BxDwFPcHLeA6W5RFLEmPcvZ86GQ/zdtrWPpbhTpwgKouHQRKnIvgvnqFTCXlYH5RjGYCwurblevQMXlS1Bx/hxUXMkD8/XrdsUZo37GkOfegd2BVVlQNIodOJSjep6RECrrtlGMO7k5RoQLNMet0MUIeuEQLmfOiyKNNWm5i7paKivBXFJCBFt1KykBKC+3ewa8IPh4fYaVOE95cz6kRd1hdRwaxRYt+VL1fEMhq0PXRaOYwskdpzqAw9EhXKA5bgdT3qIoxtFo2uTo+dEJ3jtxFEz5ZBFsP31Wtd+dYNSMFwQvvDZTOuvUD7+D1V0eVL0KGsWQrGNlqn2GgdWhQR1B1wWjmMLJzQWaYwi4QHM8Bo2mMZ241JnXWLTsc0h4+FF44F/JJMI9mV+gOsYV0KWdmnmAnBejZjaQ5KFxE2H80j9UkTMjr35jcu9Ijnveh88gi2fYniiG1GajmMzJHcad3BwjwE1iHI9CW7GS6HrSeBvg6OuhgOLtBWrcShz8V4hp3x46t24BDYOCVJPL5GD6+sTVa8Q5fuTMWdi6e4+0QhUDhblFn8E2hZmB9Wh8/exjFwAGNlHtNwqWsZ90aEwdNIpxJzfHaHCB5ngFuhJWvMzt7dTKQigezGVdE9CR3a3//XC98wDIaNDC4TP1+8tQ2HfwGM4rU+0zDEqjmOwxGsUWLbHcz/rzAtx5q3rpRqPDndwco8EFmuNVcCUhQRBQoGd6+nUx6r2lbzw0bX8TBES1h7ORXUk07IofG41iny+YB0XvjjDuyla4/CTWov2CiFFMkO1q1byRdP/w0bO1UqC5k5tjNLhAc7yGIAj4RzEVB5o4+poostj2VBkYDOWBwdL2+sV5IJoukftC/RAoiagKyEsCgkl0jE1bO1RndA1mFDt2thRiO9Uz7g8NurmxBq00irVtKN3ftiMLJj5S+5ae5E5ujtHgAs3xCoIgsJSiUytnYGr7w6mjiFAPfvxF2NPxPjI8BBp1BIhSHe4xDgZbVrPadeAyxHYy6MpW8uUnFUaxDi2r/KKb0n8DgKdUzzU6zMlNp8VxgeboHi7QHI9jS5yZSYulnuUMKjwO9a+dgvxje0lqGf+ofjTjGfIHdtjTMyGt7T1e/YdjE8UOHcG1oo0r0FZ1aIVRbNLEsaTfm8wev1IMzRoHq55udNDJTQUandzRoigaewINp1bD26w4HoW2s6TKxRlF9ukFP8KOYbOIg1opzsgvjToSEc645wUYvnwfGSDCop8PX0yC7l88CwNuXFA9z5PgRLHUH3419g8M9kKbLXPIRf8Qq13db6oqyx7LyVM9tTagcHLzOjRH1+g6go6MCMNfoCexrEg35dBb/tVrpkzVEzh6JFnu2EaR7Tfza1jjhIMaBXx3lweh9Vv3weDjv8Laxe/B2tWrAFavIsKtNVzEE6BRjK1shb3DhqWykNahrdPcXTtWrZ9dW41iCid3PHdyc/SMrgVaBPE9EGCkIKr/GEZGkIAMx0lmym9Xr5nyVQdzfAI1hT0rf+17X10MvzghznIwzXy2y4Nw6+y7oN9vi0jqG9Peg4euh8YjX3GqbcoVmFHsyJkSaBbRwLA/VEJlEYiBTeqkUYw7uTlGQt8pbgFGgkWo5dvkoBt4AgDMQW8LAFyLjAjLiYwIS42MCEuOjAhLpFE4xzdMk78qLuGIqeuaghE1pr5xNCdG5BhN/z7rEXjg6n6PfkhmFDt8wuALSrC6sxBoWYKSojaK1T4UTm7+t4Gja3Qr0BGRoVUuSwFAFCwijWLN7tugHV3yEPtsVwHAyciIsPzIiLD0yIiwuZERYUmREWHx2k/luJlE+enYEo7uAuvXsbPTYIgXyNwAACAASURBVPDQ4ST1/PGTQ2DIvq899m/IjGLbdx1S7TMcZirSijQ3GsWAuufRKFbbUMzkdniqHYfjC/QcQauubuXCbLlvV6jlhNFfRky34rykTZERYWJkRFhmZERYCo224yMjwtRuJY5LUOe2VHtGEdUyg9UUPOeBR+eR6Bz55M3p8Jc/FkLryhKP/MOhUczwK1tBVRRdF41ispncrAzD4egSPQt0tX2KWJoWHRdpLViKfKYiRZ4uS5HzfknXsPq+tezc3aMvtu6OyTD1vRRy/7P3Z0P4Vy97RKTRKIacOG9W7TMSAlt+shqjWG2EO7k5RsHQAk0QnI6mq6MdjbZZinwvjbZZinwaT5E7hNUfvvoRzV0/k4NgWxbWpRGsS3tCpCWj2Onrqn2GAiNobLmqxihWG9FwcnM4usRQKW57uCGarg6WIp+jSJGnylLk/Grcx2Bd2pMizYxiOzNPqfYZDqxD10GjGHdyc4yCngXa4XnNEu6PpqsjVmZI26QwpCVTQ1pdTZH7LDLxpEgzo5hlZStjI1TWTaMYd3JzjIIuBToiMrRGvzSiANU5vT1JmCxFvkSRIk9hKfK6ZkgruXZRtc2TeFKk0Si2YuUPqu2Gg9ah65pRjDu5OUZBrxG0W65qUaR1tDDggLrcs33+6AHVNk/jKZFmRrGsY2WqfYYCR36K5aoIui4YxbiTm2ME9CrQ7kuPCrRvWj2MTA/U5p5tq1GsZDSnDyAiTd3d7hJpySiWU6DaZzgwzV0HjWIKJzfv1ODoEr0KtNt/YUT6nwGoLT3bqpGrnp70ZQt0d7M+aRTpjhnzbRzpGMwo9seeWlCHrqNGMYWTmws0R5foVaA9Iz7eN5G5E0d6tvWUqlMJdNnR7aqDvAX2SePylgjO8MZhJq7CjGJZ+w/77PO4jYpCy5nqmFFM4eTmAs3RJXoV6ES6EIZH8LGJzJ0oe7ZP6qhnW7Xa2MZVX3hswpcjnH/gn0RYgQ4zGZb7h8vnQqPYho0ZUFRi4FWtoGr5ybpmFONObo4R0KVAX7takE/r0B4tgOnMROZOHOnZ9nSKXCXQGI3dmue7miZGvu0mvi09/nDqKBhUeFx1nCMwo9jeI7UgukQ3dx0ziimc3M63dHI4XkC3fdAykU5T7XQnFhMZ2lnRZpwBACZvf1YvoezZvubJnm1RFPO1LrCyVnyiOtab4JKUzDSGbHjrcbi1XJWNrxZmFDP8ylasDl0HjWIKJzdPc3N0h66Xm9xW2SB8W2WDuS0aNvhFtdO9BIkCdBctYh1/9ZoJ85Z4eZ0AAFi4nAUAS6mA16a/Vg71bKue5TiqKHpz+sYapZbdAZrGxj9pWaYao/rSb2Y6fVZmFKsVK1thHboOGsX4TG6O3hFEUV9J3uywqHZUFKdRASGsjA6Gd89cUR3vbgT8TxBnCSDMzbtishla0RRxHDW0satvJma1cfjBKSq40u3qNVOO6igZgiAk0tq4FVgHrvj7ApJy9hVYC7/46iAi0MhTM96BH3s+4tS7if44Cc6ePgnHfntNtc9oiA3agVB2uWqtaAAYNXWVNJDlwvEN0KxxsOE/p5zvf8yCh8c9ybbMEkUxWXUQh+ND9CjQHwHAM6odGLW0qA8zikvg4vUbqn3ugIoz/QqnBICkS3mmdFdPLYs+5UIeTq/W26meYDxMGqItRc2CIOBnvab1qaa8OR9Wd3lQtd2bYP154aQE6RWfXvAjrIns4fA7GLDxfeIIv3hgETSLMLZZTKxnaTsiIk2ZvWA/zJw9hzz4bcM3cOetbVXPMzL7snOhVx9pyfI0URQTa9UH5BgePQo0Npd2VO2gFDTyh5eC/WFfnntLxQpxJnNNyE0gNfCki5dtR9OuQtui5De5iBvZuJJFBTunqLhkYFlZWT/VEQAwfPk+j6wR7QxD9n1N1pBG0DTU/K1fHI7shx75AT6a8QysXTEX7u8TqtpvKPyDQQyMBKGkyhD23fo8eHiC5Xvz2YL3YeIjdxr7MyooulEOoS3uZhuzRFHkdWiOrtBVDTo7LCranjgjoYWV8L/cMni0TRPVPlexI87IsKAA/4uP9ejwc3ZYVDy9uUVVMEV89Zop/eo1U8rVa6bkq9dM065eM2ENPI7WwSNoHTyB1sFn0Tp4hupk+kLq2Q5r1FBTnBH/tXNU27xNVrdEqfUK090t17zt8DuQjGLHL6n2GQ5MbQv1rN51l+iqi47aaBTjTm6O3gnQ2ftz2JD0TE4R3NomEl7PK4DCsgrVfkepRpwxTQvlleagDblXBx1v1mjQk/X8oPfZEryYABop5tNoEb/msFuMKddufdYRrl4jUTtLsWum2qnzWlkP108a3U6G5vvlS2BqrwHEtOUrMFoe0v9+Yl5z9j0xo9iBQ/hP3Um133CIZRajGPZGo2J1qhJsi1HsKeN/RgXo5GY+BHRyi6KoMjZyOL5CVynu7LCoVNoK5DA1SXk7Is5V2wRpnPfgqAh44moJNCqsVJ1TgUkm3uwXnwhtjClXU3DdjR7S6JVmgIIC23Orxy/9g7Q/eZsBNy7AjXULiCjLcSbVjUYxFHfzucWqfYYjMNKyeAabLlYHjGL/99l6eO5FyeQ3URTFFNVBHI6P0E0ETdPGTokzsJR3YSXMj24CX5xxfOKRq+KM/HQpHzICA2BSdAg8mGN3UEWYzNHNPttM+nnZMcooXIrG3RSFs6heE5kbHWQZDLe60evVC1Rtk3NqyT+htRdd3ejgjj2YKtWelWBE1S9jPpy95wXVPiU4UQzSN5KVreQRpyGpLAIxIBQEqBLont06wYqVlvs4UaxZ49plFFPM5OatVhxdoacUd40clM6kvGsizgI96EZFBcy/VABrokJgcqAAt511eYQli2JVYkhF/BQVWKWIuyUK90Ya3WyugICAAKio0P53wQh0fIxjglhTcMGOn9+ZAltpWtMW6M6e3DsRfmlk1xIhTRTDla1iO7nPF+ETzKUgVFhnOmI6VWU2cKJYbXNyK2ZyG3XlOE4tpdYINNLnzA34vlF9mBVZD7Ze1J7w5A5xtjzP8vwz14vhdQHg7nah8IxjaW9naScTQasMgywKZ6YxT0XhVul5JdWl0UWzCA1DQiDfZLsMgYI4pXUXj7VeYdSMq1h9vGCeat+9CfEwbcJ4GNi1I0z5ZBEsWvY52X7489kAT9vPeDKjWPaxCwADDS7QQNeIlqE0itU2Jzefyc3RM7qpQWeHRbn1jSyNDoEFipS3u8WZHCFULTUdHBAAg8ODYWJOker9+JhTcgObXMRjTLkeN8VgGt0/sN79eZfzvpJvxyUgcdEKOVM//I6s4exOsN8ZR3qeUETNcmFmXCouhoTJz0jH4lhQe4YxFP6tY7rAyBEPwncfDlftrw34tXqcfAqszR/d82Wt+3ydbxkr/XuLomjw1U84tQldCHR2WJTmxKmaIh9s4mlxFmTHNakfBKOCA2HwKbv1ab3BonAWJUvReIwp1y094IIgpMtT+WQmdlAIWbSCgSLQb+bXbjON4VhR+fkZ78+eBUkD+kFwoDqJlJp5AMY8NYXcd8QwxoxihceXQEj92rf8Sm03iv3t+U9g0eJl7GGCKIqamSIOx9vopQ+6pultLADvVvYHd7tQAkvN/nBn80iviTP+/2ppGfzvWhG83DoY9ray/YddZwyQzeVmy1eSRTUwu5EdFpWTHRaVnh0WlZIdFpWcHRaVRHvCnRnuMFf+IP/YXhItY9TMwEjm91mPEId1TcE1n5XijFHzztTv4OmBAzTFGUmM6w6THhtP7uP7ueX4r6pj5BCjGJqozpaq9tUG0CjGqI1LT/KZ3By9oheBrmmEhip4KwY/MaZcgd0AoFdoYWXC++duJPRuFrnYG+Isv3+4oAjeuF4Cs9uGwIVI+05mA8DWnp4gW1wDBXwvFfB8KuDpVMCTlYNdRFFMpel2wu/rVpMUMYo0prsZKIrE2V2DtaNRnJXpcxTdb2fNgO5RTVXHK3lhTJWwr138nt33woxiuw5cVu2rDSiNYrUN7uTm6BW9CHSy/A93DZiDvdRMELC+ik5nvP18KGeSANBLAMjyhjjLz7HXVARTKsvhg+gQuB7iX6MPqGPCNKLwTYooPPN/4++XlI6sD31uK7m/7o7JViKNKePwr162K4y2wLS2UpyTX5kOHz01yWbUrKR9eCh8+v670vu8edfnqmMYzCh26MgZ1b7aQG2fKMad3By9oguBxhpnw9Him6odroFO50yM3JTPvpRnyhQE8gu41FvizF4DT7I1vxj+Xl+oWBIdYroeouuVPj1F7N1pe7om9OsjnT5rjVT7U4n02tWrnBZpNIQp09oozi8PG6w6tjrG39kbRiZajPMo+LbWjWYTxbL2H1btqw2oJ4rVLriTm6NXfKoSYlZUuJgVlSJmReW3miIsDJ9crjrGRTAduwnTrMqn46IXFy+bkgSA4QKAyVvizO6Xm80BP5luhE2qB6aHI/xmPRLhJ5+3LV9/Gm/zZLO3M+hkMsMztUVVFIuRMi46waipSJPWKBmY1nZFnBmvJD0q3W+85zvVfqDjQnGe94aNGXDpWu0ziSHoUgeaTbh0xVDmx2pRzOSuDavMcWoJPnVxm7MCfgax4SBBCJK2nXxegLJd7ntP9RMA2r4igNBAlBvIiDs5fWdU+PQ5BYkX80zkl9LT4qw61vLllCAIyXtPnrffcKuApvHlBi3WdwyKNarZvjDVSXzI2wm3wLK0n8kb0HJKK2vIg4cOh/wx/7XrpmarSzHQEIY1Z0fT2rb4eH0GvPDaTM33yWBLT27+aT7079lAtd/oaC09WfJrKhSvWC99MiEsGOrd3MHqk/q3bA4BLVpabQvofrvuvhvcyc3RIz4bVGLO9MNU8yAgYwXrSXLV5lURTk4WwZznnnbEkk0Ax/abodXb4oDgrlYJg2HxvXNhx5cAMz6Mhs/XWErgXhZn3I4XB0tu6dAyWQAhWQBI3XXinHYuVQZtfZL/EXHoD4qGsMtLAdGKFJ9qupm7eKQyD9ifQ63RmpZIGiSRxkiaxMF2RBrNXHL+8+wzNRZnBNux1ibEw4ZN6TD4+K9wVmOYSninXuTr4RNXoX/PVqr9Rkdrophfo1AoWZkD/rGNyPbKrBy4AX86/Un9ooKgXj/rtjr/Nk0goLVVbRgCu3YBv4YNpcdCSCPwb3+T6nyuoHByxzn6+8TheBKfRdDmTL+qnlghCASoMqIU7qmE89Pcb6aKfLYcmo7UdlPv2NcEps8tgVPn870pzvQrvSiw3Mc09rSdx8/pamg/XQpULt41FvZlD/aFt5enSY8nL9qkGq2p7GO2FUkrj8M+Z2ylchcHci9D78RRNqNorH0vnJQAkyaOhYVvDnTb6+oFnDXea8CT5N1Mevwx+PSDp0C8fA4udPs7hL37AIRMeFL1TitPHgKxqNBqW+nuPVaPK85ehErFQKGy3y+AOde1ljW8WAjs2NhqW2C3duAX2shqW9Ctt5CvTOS//zELHh4nfYZ5oihOU52cw/EyPhFoGj1vst7aCASh6o9e7uflkL9QW0xrAqa8W/0DIKCx+iTXTEHwxoJIWJ1+1lfiTI8RIKxhYMmI+8JOPTn+wkXZ0BBQrIyF5AixNR/n6Slon7Rm6r0oOrj3kNwbf8nNzSVhLtZxKzQWzVCKLx7XbuLbVsNM5ClxFNGdKQvdEj3LeXX5t/DBRx/D+Cefhfq9q1r32UXF6dGWOdW1YmUrDbQmil3sMZJEv5ELPlI/wY1UHNhhdTLz9etQfviI1bayP0+AaLKuj2OEb49690RBk68Xwb7sXOjVR/o3zRBFUWUy5XC8ja8EOl0dZWFaGf1SVZHz2XdFKPrBPaluOX5NRGg+wwyNbtGO0n/9PQpem18AefnXVSKrElwPiHPVcQBNwuvD2AcawpjhDg/ukNfalStZWQm9EOv5MZ/VIQiC1RS5p2a8Az/2fET1LBxcggNM2EhG5cQxNs0LwfYodGC7m+LyCuidNFk1MhToRQN7/b0ZC4y/spUG941fSoxwyNF9P0GHtuFw7eXpULr2ODTfvwKuPmmZvhbUt7v0ZIyssVYtr0P7tAZdXAAVJ7LJ3cLPv4cbS/6ElpfWQNGNcghtcTc7yiSKYrjquRyOl/G6QGtHzxQhAAQSZFkkSrwhQM6r4FbTmJxGYyqhRVIAGshU+zCafuatRrDr4CXyWFNwPSzO8uc0DguChDsawuMPX4GwsDLV+3UDpxRiLq/BKaP2TCHWPeM/6eezWgf86QU/wprIHqrjsM2p9JuZpB4NVKTvn/4ROZZFr8iVzevdHj0ztp8+CwkPP6raLgff14olL9c6kX7xne3wwbxPyf21aUth0IAuULR0AZheWgMtDv4Pcu/5hyo1jduL1/5AjmFgzTly4TNQr0/VjHOMkC/d8wa532zj62oRLy6AwkX/g4qzl6HBwDuh/n2J0nYUXP+oViA0da72X7zyC8h/8mvp9eQzuQEgQhRFt/2Mcziu4AuTmO3ajlgBooBRq6VehMLZ5lVwq2lMTuFX/lC8U4Q2s8wQ1Ma64ywirBS+fKcUvv+lFbz56WUoKbW0gKmE1gvijFw1lcLKdaXw0+YAGHx3Y5j4SB6EhbqtLQ0Uq2aBOsNhjZgVJX9c06g9iT6HOM1xOcjWGnXe3YHh0HrMf+GJzt1JOhv/mH785BCScpaPEfGUOCN92raGUxvWwqXCIth7PAcKi4th6+49sCK1qpaO7wvrtViPHvnA7XB/n1DVeYzITV3aSO/68NHTRKAttdw1UH78MAQN7kgiUjmlmTuJuUsOivjVyfMhamNXTVEtSlsLYQqBzh32d6jMstSz8TX8oj6HpqstoxNQ2OuPiCZpdtNbyVA0bxc0Wf281QWA3HHODGisDl125AgR6IT4u+QCzY1iHJ/j1T5oc6ZftHLJRBViCYjiDWkr1orbzhNJWtoTVB4DyBnnB5dXaIvdQ4MuwKZF/tC7W1OVaHpLnAXZraSkAlb9egUefjoQXn07Ck6fqXK1+pABstsE2SQx+UxvMhZUzIoSZbccMSsq3ZzZLPW378ZKoo5/JFuueVvz06Boo8Mbo2xMKwNdqlIORrmepFlwMBkXiml0NKJ98fJzJGr/IWURPD/laemVFy35EgaPnEZSwz9vL/Doe/IGt3WvGol54M+j5GtAhxjytXTnbqnFKuTZ20hUireguN4Q2LGr9DzchxE0inTBpws13zUKLEbGjLLtGyVxZuDz0YDGXNxoLEMCb7LMDVfWp4HWo/GG55dH9OWHjpGvGk5uDseneHtQiWpwiDbXQRSr0rgY3bZ627Op+KvzAkkPdsUV1S6ICC+Fz/+bB29OaQnB9S1pS1+IM8ieV1JaAVv35EPSC+Uw4+0o2PqHIdciZvO9B/TrvD720w8mSTu+X77EaoCJEkxro6Fsypvz5UMmCJP++RqpF3sTjNpx2cq3xo0mYv3VJx+RPmwE67ZMqL9bnwdFJe7PBnmDTq2r5hVIPcPBocQ5XX7wlBSRoisbI1K8YYSMNxRlJPRvk6HJVy+T+ze+3q9616xlq/jn1dI2udiiwEcuf4JEzAy8TwT78jmo18USrZduO2B13sBOXUEJRs5oEivfbxnRymdyc/SG1wTanOkXTqMrB8Er6ErpUOxhjnrLs390sdaN6fSrP5tV+5CR91+A9Z8B9O7WxKfiLLDn0uds25sPr39wHZ6a3hi+T7NKPRuKJ+75AR5/rGpNZRw6Ym9VK4ymV3d5EGJnp5H2KwZG4B+uXac63lugWOOKWGv+nUxWzsJRo0CF+uEJ0yH2vjdgUeo5w0wdwwsKbLPae8TaIX3itKVyUe+WNiQyZdG0lnOa9TljKpzVl1FUsRVLTvBQi8gXfvKj6hwoxGGvJpP6M6az2XmwjQpoOp1tYxE1g0XaeKGApjC8BY94FAJ7tIGyjblkn2ImN4+gOT7HmxG07dqzJiKI4tVTong5QojNFfAWMeWKQEdhegysdV/+tx/kvAj5YrGgyktGhJfD0v/kweypLaBJeAOfizN7jgAiHDt1Hf73pQkenhwKS79sDgUFxjMpzXvmECQMuFN67MiqVlibxt5olvJGkv/zjsdT3Y6AqXAcNYp1a3SXY7SPFxCTn3kNmnefRCZ0nTivfUHoC1CIt+y7QS4gJs9YT6L+Rh0nkpr63X99xuodHT1pMVCy1HZl7jkpAsaaLxq/WHsUc3ZjNIyRLkPZJ20uKCJRMqa0la1Vcne4nMAYS2q6PNuSdseomEXUcuSRNoOlxPG1FDO5uUBzfI43TWJJqi3Vg5fG6ej89oszk8v1GFMurkcMdLlDj1G6A8KP3C/i0JDhMabcVOXrjIgFOHAkrt3WTP/3z18uGulrca46M0B+YRl8tboMVv1SD3rdFA6jEkvh5hhjjPEOCboKn86IhvtOtYOcnFOkdemhVm/D2WGzVMfKwWh60PjXpFYnoKluT/RDuwLWrbFmPf7OJbD+8HGYu/RzMpkMx2fOnA1eNZShAO/efw4OHKqKdLFergWm6TED0LJpU+jcugXsOXKcjD0FLaPYscMkmr6R9SdcHfeZdLaoP96VjGJY+5XXf3FQiBxMjzdMGkHqxMwsJjSy+CzMBRYxlws3Ru0sfY1pdoRFxRit15OZ0DDSxuj+xm+bpFQ4+4rp7pDut0sXUGhYFAQhnDu5Ob7EK3+5zJl+iTUYQh+L6zzLJ1d5S6Spq3hVdlgUWnST6HhNidcXZuJfhIdio1vge5srWN6rT8W5ar8ApaWV8EdWIeAKgQ2CGubc2j348ISx1zNbtiy2FZIqJ4JpYdfd7Q46Nt0D898YDEMeswxTw3r0lJtuI+lse+DAEKxJs3nc+Id2+mdLyTKTegJr1QP/nUwi/C9+/AUWLfucCCTe7r1nADwyciA8cn9rCKnv3hQ4GtXen79K6mVGMUro35/cx0VFkDtie5KvvTpGQ4fICNXFTYcmkcAGslqMYgOltDJGsBhNK8d9onCjWUwJRrRaozrRfe0fu5CIdNhzBZKIMgHOG/NfqZ1LPsWMpNYXsKh4F4nW5U5uS6SdQVqrGJjqBplRjDu5OXrCW6FFomqLcwwwZ/ql+MWZpSjciyIN1Hmekx0WlaQVTWflXMBf4ri46BbJgiBMs1x9+1acBcVrlJRWRv++uzB6624YJAgNlgoipK7+M0f1WWoKrlDmQHpQPl1Mi/C/9lwb9+4bj0e/9PpicmGHojt50c2qUaBKUMQfGreLiDqC4oei44nBJTUFW7b6PDUJXhgzCr7N2ELS8iieeJuMy5m99hwMHdi1xv3UcmHGiBjd5j3btCBRvTPgBcWbC6oiYzSK4chPoGllFNDQKY+RaBpT3Q0ftVzL4ZASZhRDYcV9Slc2o/z4FdJb7d84GCqhkJjFgu8fSvYyAcZ6Nqtz4/SwECr2uA1r2nKjWIjM9aJlFMNoXG4U03Byc4Hm+AyPDyqh5rBrqh2usVQu0mAZJZnkJZFmaEbTjF7tW0YLAqQIIAzQizjLv5LtVU89JYCQKgCkpB48qdWf7HMEQUhh5kJbc7CVYM364quDrCZ+bfrmCyKIeuZScTH8knkQ/jP/Y6v3zqLqBwe0hGYRjjvA5cKM37tXnnkaRvbupYqK7YHvaeuRE/DZt9+TlLwSNlGM9R+3zPkSzkePJUex6JSBU8ewhxl7lAvmLidpaNavLB9UIgfFPOrXryDvkUnS8bhgBs70xlQ521/44btQODvD4vC+LxHON3uAXBDghDM5uB1o5I3Uv3sAXP/yG8t7v7RGOZN7qSiKrpTmOBy34A2TWE2jZzkTMJKWb8BI2tPGMQVSNK3ag42+J8/n7DlxPp6sNy2Q6Vx6FWc8up0A8CyAuHd4t/aZI7q1nzaiW3u9tZdgRiILqumPloMCjmNA5WA9+mS+yvOnK1id+uDyJSTKZWlnElFTU9moqauI8NpzgON+NHdhaxc+F8+zaeF8cm5HxBlb1LBOjrPH2907GMY8NYWI8/PP/o2MMcXInsGMYsxshUYxjEiBLpYhh5nJMPUcPuPv5P6117R7oRnMLBY8OoFsuZ6ykqTUMa2Nr0Mi8eICp4xiSPDgB8k5MMUuN4opnNy81YrjU7wh0O4eOq8Hkcba9JLssKh0usqTil0nzmH6OE4AYZ5OxZnuF9l9rJ/PEQQ4+VC39umjurdPGt29vb00tFegJp14OoqUpK6H7Pu62pfGGd1TP/xOeozi/tr/Fnm9P9pVsE6NtXN0f+PKXKzXe8XKH4jwMrFGtzW7zVt+zEqY8TnYj43ncSSdjSlsFOXGdw+EB5MmkYVBMHpfOH82XDywCN6b3oek262XnjxNvkpp5b27iUkLaO1ZDuuTxtQziiyKJQosprQZKKxsyEmj1ywpcjSLydPcGC0TUaavg6M+tYxiQNu65LCWLPl2uVFM4eT2uN+Cw7GHN1LcyXSilLvRSnezmlGYF//V0R49N8aUa3MIyx0dW9O0t+UXXofiLL0+Hic/D6b0BYtJL/WbAyc10/reQBAEq39bW/O6leCwE2YaQ0YmDoNPn5+qC2e3s6CAZuzdB8u+/U5zwQ456LyeeF+8Q8Isd5UDLSVMGJdos/6NbWGdej9B7rOlJ4Gmj7FFCiNSNGLhfexbliguIOlvlnpmy1Xi48aL/wGXh7wrjewk0OMRTJ3jLG5MY4NsoAkKPDOKsfQ1pqrZnG08H2vPQie5ubCAOMzxvYUMIyuMEyc4vg5eEDSa+pJyJnd7URTVjd0cjhfweATtF2fG39Clqh01RyuSzqTRljd7ilAwZmaHRWXSCwQVfxw/m7P92Fl8X8MFQaBpb0OIM97HlP4SAYRrY3q0Tx3bo8O0cT06aGYNPIkoipnyVj2c142LZ1QHmsaeeOE16Sicme3LISY1AWvo2FONKXCsqWNkjRccDBRWHDX650+ryXGOiDNGzBgtozhjtPzN0ncgZzSj9AAAIABJREFU69fX4bUne2iKM9KhZdWfDWmiGDOK7T9T5bqmxisJOnWMDShB4xgKJT4u/MLiV7QaMBIcCg0m3kzuolms0aS/V6XPswoloxkaxUCWvpYbxTDiZq1dmB5nkTbWnLHmjTc8NzO5AXVyy+Bpbo7P8MpqVtQolk5bptyNViQdTVuzPPF61YGDoZNtmciQfp3bJAsA0wQaDepYnKVXEQTFcwCy0FyG3+fP95/wWoRBXfJz8D5ODzvw6DzVMVrI14sGGmG+TCOo2gDW19uHO99D3aCvpQKF4py6MMnh1i4cYsJ6p1VGMWoOwwhZuRgGiicOJyFTx4JDyTG42pW58Dr40X5n1jYFtC5c8NEykprG6BajatOcDyzzumkk3eipIWQqmJZRTAm+N+V2vEgAKtq4//8+Ww/PvShd1M0SRdFmdozD8SReW27SwyJNnNVsmAlYRDqcirQv6kgm6vS22cZ0V+c2eBGRLAgWh7LBxFn5WqdAhFRBgNSUfSfUVl83I3d221o/WguXRNrfH/yCQwDKyzCKB7GiAqCyUnWYUZnyySLSijbnnX/Bs+M6OfwpsN793PR/k/ts6UmcHobpY83lIn2AchIZ0LWo2UUCOsHJP3HL5uQCAVPiOFRl1Z9l3MnN0QVeXQ/anOnnyRoxOn3j5SINFqFOcW4GuFvJoEJtM8K8u0ubOIEMOREGGFSc8bTyc+DFSTrWrfG2aN8Jm5kEV8EJT/KLPUfr0WBDpKcO/ovdmrRfo1DwC2kI4Cf7LlVUAlRWgBnFmt7EygoQy8sAzMaYsQ20/owp7rUr5jo1xQyd4mhGQ+a8Nxv+8cRAIny5d7xE0tLMsa0ExRD7ou3hytrONYW1eWH0faRNX+jVR2o+yRBF0d1GVw7HIbwq0OAdkcZI2qqn1we90kpmUSOZTbFK6NoWW7PmougYWJy1jsNUOBHsT90YXQuCEE3Xmg7D2isumIEzuR0BXeCfvDldOhLruLP/Psl+ithPAL/6wSDUr09u1VJeDmA2g7msDEA0g1hertvo+9H/zoH8gnynUtzY5oVOctAwinkDTG0Hdmxs95XYus/2kF8woECjUczviWkQ2uJu6VmiKAp2TsGpJdDSaDj1MukCrws0eF6kTTSSVop0PE15e9PhLecUrU2nqPbIuDemXZIApObVTi3GhhNnazOcACZBhHRBIIKd/nHWiRr9IgiCEE/XmYaHxk2EHdXM65YzLPcP+HHOdCs3NC5m4eggDyEoCITAQEsKPAC/BgAE+KuO04RF3xXlRLDN169rHeU1sH5981+Hkv5mNIc5il+rx6UjCy5shpAGgTafibVm7JG2R8WF81B5/qKdIwAqzl4k87rtgdPIbE0qqw7mIudO7toJLX3GycYas/us9JoRY8rVTcbEJwIN3hHpaX5xZisx9LF5jIFp72nVXaUNJEINcwUBwmqJOFu/ruW+ibZw4c9B+kdZzpvNBEGQ2vhwDnd187rl4FKWuFqWfIENjMYfGz0KRg/obz+itkdgIAh+9hsk9JYKZ6nukSMehJR3R9iNpDF6/iHjPBmeUh1k3re1K9qKtm1aQivrdZit6Nq5NTQMCVJtZ/SMcW15VXsXDFin/tvzn8gd6gmiKPKRnwaB/p2PVohwuIN+JC7QDA+LNDKLtnlZ4eO6NGMpFWqbae+/3NQuXCCTtATi+K5l4qz1/FMkuhYtEfYcBwVbEIR09ss3fukfZEiJo+BY0NiDqVYpbwbOrR58TwLc0qWj7seEugN7Io2inLH7Cnyb9hsZlmIUHhqRCGF2LrRw9najhup2tK+++wE2bJA0mTu5dQbNiAJtqw2XiXBNgy8u0HK8INJLaTStNI9hXXquD1PewIacVFefvv+maBx0Mpf2JKsEs5aIc9V7rHotZjjDW+Z7Wdo1bHk92pnWKzkYTd9Yt0BaZEMLHJmJC2/gsou4qpOzi00YAUx348Q1rEnj/G/k5w07DCXKHoA7ub2MQoDlXz3dlWOKMeX6fIIiw+cCDd4RaTSPJfrFma0iMjpYJMXHKW9wtD49+OboeNp73K4OiLP2OS0lAiLYGG3/J9PiEhcEAW23q8CFVLccHH7SeM93sHHVF9VO62LLNaJot2gcCc3DQ6F7lO10rZHAaDoldTUZ7MLhTm53opGCdmcEXGNiTLm6MQXqQqDBOyJtoiJtFYVR08BcHaS8gQr1NHv908gDN0cnkYhapN+ruiPO6veEaXEUa4DMrwvMA0/knOoHLqS6tXjg6n4oO7rdIbGWw4S7TcsW0LJpU0m8mzUKMVzUjRF1Vs5pWL/tD9IvrYX8QoWRffIkmeVdS+ARtIPITFjyZWfZxU2cjzOWDsEF2gZUpD0d0dqqS+sh5c3IoBG1ZkoXGXpzdDhZ6UnAiWRCWB0VZ6ubGBQI/ztxBa5cueLUlDFHwBR4+OVDcOPCcTh/9ACsXb3K5XNhbTu6TRsIC20EMe0ti2Bg2rxhUBCEBAW5bk7zAgdyL5MXuZhfQC46OkRGaLrecVGS3kmTnbqw0RlZ9G9RKndwW5BFvlriG23pPDE+XKDt4OGJY4wMGk0r69LR9JdSL6vYVCvUw7q1p0YyUSbUdU+c2XGXWrWGT3/6jdyf+l4KpLW9R/U9cxeDCo9DYHkx+OXlQMm1i5B/8SwUF+bXSLzlsOUmb+7cCRoFB3s0Esd1ny8VFrktRY+R9wPPPGs0ga6zoiyr+WqJsCEiX3fBBboavCTSmilvsPywemoFLldZSoXa5h+N4ZJQwzTSmmVDGKEWizO7vz4oArbu3ENSr83f+oWsD+0L0CHerfgcLJxkWcsY+4xxqcaC66WwfZdlreRNGdtcFjEWiaOAu8NpjqL62Y8/w4N33enyuTByXrFzL/zthZdU+3RKGv1bUytFWUN4oTZGve6EC7SD0NWqPF0btpXy1ouBTE61Qj2ye/twQQSsUWNrlvTLV1fEGQ8qbtoY3tuwmzzClazW3TFZ9X3yJt2/eJZE1bhS1KiBTTRfuahEgGNnS8n9XQcsaeRDR86AqeC6wyKOFyRr5s+TUuQolrlFxVYpc4yU9525QNab1gJFeuo7H8DJU6dIP/itMV3tmt/wNU5cvQbHLuTCzoN/GqXunEbnIaTS9cYNhazOC7J6L3DhdQ9coJ3AnOmHdeFnPfwyGXREqNLljT/4yV54fWdBoU6xl/pGRndvnwSWVbPIRUZdEGe2bVt4C1i3eRu5P3z5PofHgHoCNv/b2UldSnAd5vN5pXD4xFUSgWsJN0bV386aIdWFcTnJV0ePsKoT47be3W6GxLjuqtcAWRT8n/kfq85vYHQvyrJoVy7A8shXL6W3Wg0XaCcxZ/p5Y5a2iYq0ykFNf3FSdHhVWm2NGnm4e/t4AYQkQRAn1AVxxk9Y1DQS3tVJFD3s9Eb48MUkmDRxLCx8c6Bqv6ts2XcDZr37LWzYmGF1BvkqXR+vz4Bzubnw1rjR0n5WH0bn9ZMjhtqNjreeOAWpG9NtOrh1jk9FWWaqAoXQyqPeOlXfNQJcoF3AnOnnrVnaqqUroSqanqaz2jQjg0bUdvuox/boEC0A4MUOjhFtV1vFWaCP1zVoDFv+sIi0L6NoNJOxOrT53GLVfmdAUd609RgsXZ7qVHSLhrPEe+Lhzg7tSDTNpoYBXSxk0F39JSc5A53aF65cNVrLlMdE2Y7gyiNeXfTyclyHC7SLeKkNC2g/cpINA5kea9MMhwaeION7dEikQj2sNooz3vJatYJ5P/1O9jmzbrS7weEnq8ZZeoQvHlgEzSIc//3H2vRvmSZYv/lPSP3h19qUcnYXJpkgq7JftqC/x+yKTS6wIKvlAo9w6x5coGsAdXineqkeg420ycpoGqqc3tN0+svr0AhRZELPDtFgMZUlKU1lRhZnvJmD6sHrO4+Q/WigqviPdSrYm5we3Za82uaf5kP/ng3svrJclD+Y96lqPwdMXTp3Wp/Yu1vmxDXbttBvh1JklY+5cYrjEFyg3YCXHN5QTTStt75pJQV0/KVd5zdjYs8O8TSqThTohYdKIA0izuzYnc3aQur6zeTx0wt+hDWRrpu0asLtaTPJnO+F82fDpMRWqjNxUbZPdHQ7GNMvDnqXXoGb1h2xeyyHUxP0JNDqEUAGwS/OnGTO9Ev3gnkMr7o3mTP9VNE0Fb347LCoRCrUeoumQ+lFzITssKg0GlGrLjQYS/aRxSjSJ/XsgNFHIhXqYUYVZ7y1r2eWXkM8exDARwLNwNYpAItAc1G2j0qUf9hm93gOxx2g36i6zKO3MGwEzfDCDG85p+jKWKpal45bspTgIrjvUVNZtT+Ef+vZIZwYyzAFLkKskcQZz1cRGgyv//4n2f7QuImwY9gs1Wf0BkOP/AAfzXiGpNqnPjkGzpzL46KsQUK/PtAnOopHyhxfkmAvkPEmhhdo8N7kMTmaTm+oMp/MNUjP4lcA8E6MKTdTtUeDp2KJCzyR1qxjVSKrM3FmFxDvXyiCy5ctwz/afnta/cE8DM7xDtq3hvRCc9SgKA/sGAV3njsOzXdeUu3ncLwMF2hP4MW6NFAjFqa856r2VC2+kWwQY0oONcQ5FFUjU2I7YP2dOcFj9SrO+H42NW4JP6dvJcdgT/SVW0a5veWKjfWsX5wHoukSmM4egRuFBXbXl67LcFHm6Bgu0J6CDjXx5qpUWTSaVkWhst5pvbq9tcCV+T9w5gf0H7EdwgUBEgWR1qx1JM54f1PjVvDTpt+t3jOmmm/pGw/hzVtD/YjmINQPgZII+9dSTHwRTyyOUdvhoswxCFygPQmtS6d6OXpVmcgY1O2drJM1px3FRI1vcx1xgDOej+sQDiKJrOOZG9yX4oz3f2zYDNK37lC9V47n4aLMMSBcoD0NrUujwAzz4suaqIlMc1AIHRmabMCZugdw/neMKfc91Z5qeCm2A3GD0+EP7bwtzsWNw2HmJuvkxtBhY6X7pSWF8MsvP9j/EBynSByUAL2jQrkoc4wKF2hvYc70w/TyHC+/bBYVas1/ZNqWNdeAgxMqAWAPTYF/rdpbDS/HdogTBIgHSyp8gKfFGdnbqgN8+dNG6Y2NeWw2rD9ju9oQFihCp7AK1XZbXC32h46NC+Fq7g6vCT1GpR/vP0Hu58c0gmvNIlTHnI1oAsWCuotyj0n92c7k5cOm37ertjsDivLgZkHQ4/BRCM8udMfH5HB8BRdob+LFOd5KltK0t2aKODssahqNqI04SrAMAPCv+qsxptwtqr3V8K9Y0r7F0uBV0TV5mnvEuTIoEN7PyZcc3P37D4DDgSPtv7EaMLCNCf7Ystjj4zjfemwYjEj1fE/wxd7N4EYD9VraRyKbS/eDxQouypzaBhdob+PlEaFypLGbNurTRjSSKbkBAL/QyPo31V4HeB2jayLUIoo2KUvURJxx37VWLeDfP1cJ2djxM+DXs808+o1oH2yGdiEH4btvF6r2uYuVD/XnPcIcjufgAu0rzJl+yT5akaq6+rQuBp1gynR+i07wRdov5HGPHt2gT2w0dAu4DoNWHlIdrwGGUotpy5bK2e4os2I7xAsWsU5kbVzghDjj4z2t2sOXP22SXvH2IXPhZLGfO79dNrmzeSlcObMGtmxx//zvvV3bQv0LJartHA7HLXCB9iU+cnkzbM72Bh87vn9JvB2mLVuj2s6IioqC++JvhdsaFDkq1tJKQzhIxtXxeW/Ftg+nrnByA9lEM1vijI+XlAfBgUOHyeZBgx6EPWX3qc7tSbCefXvzc/Dlsnfc9iqPDbsf/rlpj2o7h8NxG1ygfY2PXN5yMmh9WvMHwZtCjbXGeQFNIfWXTap9tkCxHnrfbTDy0lFot91h3U2jE99SnWndUvKf2PaW+rUI8Wg6E9gEOZk4m+sFwku7jkrPHPvYdPj1TGvVubxBt7BKCLqx0S0msk/H3w93pXGB5nA8CBdovUBd3r40alVnJPOoUB/6Sxd4ftcZyMk5pdrnKI8+PBgevXbMGaEG6nRnYl2jX4b3MMKuEmsSYRe2aArJ63ZKx1Tn3vYG97W+BNt/X14jE9mme7vz1iUOx7NwgdYTNOWd4sVZ3lqgUH/mF2fWdER7Qqh3D+kOj361UbXdVaaPGwpjdmW6Uh81MbGmqXDNixVnGDv43hlf/bRRGn59/6j3YXdeoNs+q6ugiax5wA5Ynfal02eQt1dxOBy3kkFHHuc4so6+t+ACTaEpbz2sRnUVRdgvzqxZDHaXULtbnBm4ROCbfTvCrT8eUO1zglNMrF2tXQuCYGUG1ItAM1xpyfrnuGHwGF9ykcNxFQwEMuktn/59yXFHQOApuEArMGf66WVtZ3Q3jfaLM+9T7amhUGNae8T3moG625jy8FCYlOlSNK1FhkysHUo96V2gwYVomrdXcTgOkUUj4UxZVJypl6jYGbhAa6ADA5kc/GEb5hdn1iwSU6HGOnqSIxcVJS3qw/BSoUY1Z0fB6VLPVlz2RM00TSbYmq1cRhBohqPRNG+v4nAksmRRcD4TYz1Hw67ABdoOOjCQMfAfaTNNfWsqq6MDT1Ym9oVXl6WptruDevXqQVlZmdWZMOW9pGMjTxqbWP3aSrCNJNDgQDTN26s4dZA6IcL24AJdDeZMv2haD/WlgYzBhPofdlLf4TSanqbV5/12wi2wLO1n1fNqSkhIMHTv3h3Onj0H586dszqbF0RaScanQ/rAnK9WS1PjvDFFzB3Yiqa9Nd6Tw/EiJlk92GfpaLqIUTS9QYwpN1l1kI/gAu0gPpxAZgu8uky01Z4Flh88JtTSxYWnBLpVq1bQunUrcr+oqAhOnjwJRUXF0n5vi/TJu9vC4DW7pMejRk+G9Ms9VMfpEVvRtJvr+hyON2Cj9NJlX/NtlaY8AQ1a4mQijPfZNmW2MSPGlBuvl58MLtBOoJN2rCpEMvfyd2xFrkaopWUuq5sW5irdu3eDkJAQq2fn5uaSiLqiwrKCkpZIY028JCzQ7YstKAUaaZrwf6rj9Az2TX/5+ZtW7xC/hx93bwrtN5821Gfh1EqUETAwIfZmH7FMgLW+Ovu3mgu0kdFNO5ZouYn0K3F9+8GL/rdot2cBNZTNujt289drfm2j2lkDsPbcq1ec5glKS8vg5MkTYDIVkMdKgWEXDHMfewAGpe5QPb8m3FRgHa0/NO5tyDgf4tbX8DS2ppDxlDfHC7Dol4kwS0H7KgJmX4GuLw8eWPyIC3RtgC5hmaJV5/U4cnE2W15MNEsRNZrIXg24w7xc+TYEQcAf7r3ufns49hOF1x7KaBoFBhf0T9hQ1S+Nru+ZOcfdlsL9Z99uVuNLhw4bC9sK+qiO0zu2Znp70CXPqd2YZBGvT8UXqjpRot0UAdcULtC1BZ9E0/bEmW2zCLUJBPhXwJ3mj6FKnNM1ai41Ji4uDoKC6lV7Gq3atBJ3io6WY13vbm574ApZ+//42MpA5qbBMJzagVx4meCCrP7rEwd0dliUUnSjZTf7V/bexxRjyg3Xy5vhAu0GvBZNOyrOIt1uoUwQ4JNGg4LuLSkp6a46Zw2JiIiALl06O3US7MHGiBrp338AtOkwEL5a9pq0H0VnVZBY40haa1oavt7hwJGqY42CLQNZ4qCEwzPOncgLOX2jwgdrnnM8h1x0820IsM+GcHg5/ewVYky5gg7eBoELtJvweDTtgjiz/Sk7x8HfX/lCdUp30KlTRwgNDYPAwACnznbkyFG4du0aDBvzLmy9GAS3NimHI7s/kqJDd6S7bRnijNJyZQ8tAxl19ieJokj+iFNzIMj+YLI/pL5IHXIsyBcIl4usXHy9nma2hexniP3sSG1IVJwzdRgF1wgu0LUYj0TTNRDnS8Vd4a6pNzwyOUxpDisvr3BIqDHVfeDAQVVNGA1Rp/f9n5VIv73toOr5jvJ0jw6w6fftmkcbOdXN0Ep504hrmiiKKaonaCBLP8ojIKknlIu5CjY8gyEXVtB4rNvBGrJ/e60asK1/83kxptxpTR7vOS1v8b652WFROBp5leooA6MngXYu7OFUC67vTNux3BNN10Cc8bYw4xbIydGeTlVTWN8zA8XZbLa8CT8/P5tnP3PmDPl6seJ2q+0HTf7Qrec/AMAi0mjwusnFBSIwet6kET0zMFpvf9OzcLLY9vvUO5h5wM/QufMGucsbPQZLBEGIFkWx2oELikgtVXWAAtkfdYZc2OXIRd4eWr2ojmJSiKE9lMIpx9Y+w06tsmO8ghqmntn3CUU6J8+Um5odFpWmk7HItQ4eQXuQGkfTNRRnjJ7bDM1WndYd2GutAjvRNKa1Mb099rHp8OuZ1qr9oBFJfzHmHqdMUPkxjWDMpQqrrMGgQQ+qWpVw23FxIJjKdXPB7BLo8r6tyQn4+st5yqcvFUUxyRifguMoGuILijKGJ0cT9+o/MgovWq7RC6ToLStyWarb1yOR3YKeImjjhg8GAKNp+guj+stZLTUUZxI9b77FY9+k6tqqmDijUMtB0ezQoT3suNhK9RwGRtJtSSRtYca243Cxt+M14+Xtu1mJ85jHZsOesvvgkbHWCQ0U7I7CeiJwRgYvMDZc6Eg+p4IJfW7rtUUQBN24Ujn2wZovvSVlh0UlZ4dFYRo5nd5EvOEcHgDYRFPLM+ltAL15VCRpxoVdFOBrJdMsg27GY9YmeATtJWg0PddObacKN4jz9fKmcOvTDTxSe3bWuc3S3ufPXyBzuh0dGDKgZRF8v/yf5H5Cvz7wQd75ak1jygliyjr3vS2OqyLN2hJJI0qzHVgb7k5ptN5YOYPr0kIE3kJWFmgIAMMBoCN96W60zBgEAA0M8FGyYky5cU0e76kce5yQt3gfXkBk1ga/AjeJ1WEcmultrpk443PXnRgFQ5/8VnXqmhIQECCltu3VmVUfyWyG/fsPwF8GjXBqWMh9bc5KAzpwFvUzP2mbvhjz/9oHPvpmtfT49iFzVXVmLZHGqB6jdozejY7W9DEXXPHK+q58dKPcfQx6ch17GpmrmXE/jSjrAwBO6Iuk2+vTW21iaYwpN6nJ4z1TFOvQZ+Ut3hdHL0T22unHZkNR2Fr29tNwPoILdB2Hmsjm2jRroEBXWu66Is543FNfDIUlX7h/WUmMnDGCBpq+9vf3c0ioWVtVfOIcp0Wwb+h2qe/X3khQrD333XFcemyvncqWSN/S92+GGweqBabtMX1fQ5GuCacUIs5QirsWjhzjKEpTmxa2jvF0PddIkO6AGFNuSpPHe7JIealMqGflLd7ncJqbXuhsUu3QAVygOQR7602LFVSkXRDn62VNoclQ949/tDXS05YhjFFYWAh//nnIrjHMHig25mNzpbTtyof6w03rjqieIZ8chmLr12ma3bS1lkgjWKveldfB7nONgJZ5zMsizTEOp6ihFWSRruaiF00e78lEYzi9iJlJBTxJFiEzB7/84mcAPS5uywoyqOikHr87XKA5EnS96blWbQpUcM3or6p0Tpxx+7qch2DY09+59ZvsSN0Z09ha0fTevZmkJas6wbQH1lZ//u4FcgReJHzVLEC1Apa879le9CwH11+WTzFj4MSxhi2GGr5XGjQuRLhIcxSQ3mblxiaP99TqjY+T/a3KcrLmjOIcn7d4X2Z2WFSqXluzuEBzVJgz/RKJUIvQzkpwmUg7KM54/18/jIK5C9xXfw4JCYauXWPsRskMZTSNC2SgMQwdxuvPqBIFTiGvRz827H7456Y90tPR5c0W3nAkepaDZrQ92z5VDvwgYNSPjnOjR9Py7x1wkeZYk0Bbp+bSaFe79OYY8tKG/Dxkyh0VZ2UNW1fwNiuOCr84cyqIEAcizJMEV6T/QoLj4oz3U3/+Q3V+V3FGnEHRXoVLTeLMbXRJ11ScERRKjGyRZWk/k2EkjK2tOkr3+/Qb55SgYs0ZDWLs3HJQ1JoXryRTu4wMlhbQPc/AITCzojuS9bg5dR4Uzhyaotaq/ZvoiNIMeh+oECfIbmyEaTg9j5wsWeSsa3HWG1ygdYRfL3O+3y3maWCGXqIIWZIQ+1lujojzicI+bm2tQpHFCBi/OgMKNT4Pl5cUQt2zehuKLqadGXM37yfGMGRnboG0/djVJqrnVgca1y4GjyBtWUq2bMmAtK9eImY1TLUbFbwQ4SLN0WACCicOHMlbvA/Ftb1iZji7uk6WO7KxtYrdZKIcRmvY7GqXiXM+F2fn4QKtQ/x7mzMDbjdjNP0ciGBC4RUEAMHPvjjj9mNXnTdh2QMFFqPgzMxMkgJ2VKjRGHb58mViuHJnHRfPhWlnoENPPmlhqYuzdZ9HjZ6saqtyFLwAwBYwrF9rgU5yrINjTRdXlTIiXKQ5NkDhxAg3ecuK3Py8xfviaXTMrvYHUNc1qzmzBVlwmAqLwJnRgQk6F+cawgVaxwT0Mc8FM0SDCEuBWgUEf9vijPcvmqpfl9lVUHBRqLGurJwQpgSjZ6wFoxva3ShT3ejeZpT5d6nxq6G5DFfZwvevBRqudvw4zbBCzUWaY4Mw6sjOpKKL0TEawybKUtsMHFgSjitb0darcNm4UQYT50wuzq7BBVrnBPQz5wf0NyeJZsvVLIowE2mlOOP97NPOpaJdAcV337590prOSlDITaYCp2vBjoLnbNzmAeloeWsVLiDhDvA8WJfG+rkt5EJttNQ3irQ8U8BEmsOhA0SWoLBiv3Le4n0p1MEtH6yADuwcnCrW5PGe8TT1rXR0M2e4qlWL4xhcoA1C4ABzeuAAM0bTszDt7cc8W4qRoKbr7hPo4Q/eB6/942HVdqCpb0wxYwsVprMZGFljhI0RrifXXEYBVdaLb+8zVHVcTcC6NI4AVc7wVoJCjalvrFEbyUyG/z7yz4YivezBvqrjOHUWFNxNmJ7GSFjDQMYi7k2KtDarX+OKV2xqmDIC5zgAF2iDUe8eczK6vUUR0vz8LdG0fCTopt/dM3ERe41fH1gA0zp+D4fn3gSvTdUW6rKyMjKEBCeFMdc2bpObuTyruVR8AAAgAElEQVSFcrnKG6J76+9gfyEKFVijRjNZ1/IVpL/aCItw4GfDuj3j7eVpXKQ5/9/eucBXVVz7fw1GQB4mWGJQQIKgxkox+H6WUF+UVon24autQf339l/bGuy1xdZatGrt42q8Pqu2BKvWtrYGtRatreEWr6IUDmo1atDgk0CUREFeSeZ+1smaMJk9e5+999n7nH0O6/v57E9y9nP2zOz5zaxZM2OihFmNiV5F/dOrHGf2DdVSLWcU7caqrvZOi2c34wMeB13AbFk8qEb2QiP0woTe7X3jpUd8Kfv0xJYzivM+sBygV4CUIt1S74DJcG/bVPjJTb93XAM0T3f6+jPmQPP6TzmOx8FJ49bBfb+9On3nySffGOt4ZWwdv7DsVut4aRtocsdW/dqPKxM9x7dtWtDLQq7DzRQlp1d1tTeNPn9qJ4nuIhLiJtssiNSCLtNM3qd3/OZ5XDe6Ocsx1rliYlIWjWGBLgI2P9w3ZWjvdigd8YXs0hNbzg/OHeMQ577/gYR6Etz31lT4yc1OoUZRGn3gxaE9qYOipgGd8qmjAy3CERZzrWq/YF/2yNHHQGr9sEROeoLObh0v3zjgvVikGWLicV+oAG1qTnMGsYXk1W2dtrgA142eYZviNB+wibsI2O3U3gbZC5ViUPpDyYrvffUYT3FGc/rontXwnb0ehJeuPRAuv+jLAx6HjmG5EmcgEzQucDFi9+i9xW2Ya1X7BVunuHQmVibQqQyFPklgmpnvxeZuBj8xak1Wa5ExQJxx7HTHb55vIEcy5+T2A9eNbnAcZVzhFnSRIYQInaDYel56yVbYrafDVZx3zAku+idO+aecCV+8ss/BM24zsxvYAsxVxQDFtblprmM/xt8Pjj8Qxm3ogC1Dh8JzQz6RFjk30JFu/L4nwur3R+a0UuOFvga34o6vzoTjF63wuIopYpZUdbXXWNaABiXOLaUVZdR6bkARJsewBstc24WybnRiWtAs0EVGNgL98++dAxfs9YdA4oz75716Miy4v6//UvW7vt41MTGiEyVuJm6c2/ri7vUw5rmBq4jhTGfLqg5Mz3rmNcMbOmrJXfdNhAncJtL3nP0ZOPQvLzrOZYqe9EIao8+favYfK3GupmFUymx9JQl1Jw2/mq/PKkbrRud7qck12pKmbbQCVyqJ65qzQBcZQojQjhgrbzgSxssVgcRZyl646f1auPfRZx0ChEN4ikmobcIFARae+NfnpsAzvSPg5t8/5Dimg/GGHulRjekOg20BEa+1uJmiZQ5NRNKpibCbOCu6yKSdNmePPn9qHQn1BLVudEtpBR7zHr8YnlUkum3mlhTnL7+wQBcZYQV6xqePhj/WLg8szvrxFYNPgKfWjYRrbhu41CWOVxbDpuVVcLLFTZzP/vzJK6/4nxQuTj0FDQjoEuA4yQBb1S8csB/87vXO/uUxbShrRL7EGrsNxpQ8mx4+pvjWmafBBakUr4K18zCNVrraQG+cSZx1sMZeh+ZimmmsnoZb1eB0oto9g6LGWaf01i/+pSFdRQMLdJEhhLD1FWXk55eeA+eP+WNoccbjatKUzYNGwz/FUbDwqffgyX/u8AJWfa7Prd29oJZvdBNnNP9JKQeso9tSWoEDxo/FVesAYG+0ijuu0sBlMnElridWtydWrHFM97Klv+lvTc849ii4YuhGhzmfKT5w6UUyVT8ZUJx1UFDr0Xys1pimvmib+HSpeb61GcjSf5PSL5xLWKCLDCEEriv9YNC3arn+wLR3drbi3LeffvcApEZMhz+2DobGPzzS/6xC6qf2EOc5UspGx14LLaUVKOI4q8poL9F++eT9045lv3sq5egu0NHF+t/vD85JZQdb0xOG/xv++Ic7+/exybvo0R3EcAGNhhDirLOwqqu9f8ISXGgjyf2/SYAFusgQQpQFNR3NOftU+MUhj0Uuzvi/pH2vjTwUFr5R5hBqHJb1bHt5IlvUUYizG9TSPgnndwGAwwBgDAB8Qp3uV6yBHMxwkZBctKzNyVrcnOOYomEUjoGmRS/8iPNOY37OBSzQRYgQIpADxsM/O+2xowctPlH2wi5xiPOOfm0BraXT4KpnegaYvpVQxzl3d1BsQ6nKy8u3X/bZI3/72aZnb4qjtt9SWoFONKcDAE7DhpExHlvcL5+8f/k/dtkjo3MZLsP5t7ein+7UBCeHOWz06+k5yBXcmi5aFlLfMYpzo+H1DIVufqZKRyW9X/r/qq72aseJeYIFukgRQvhdfzXdj/rBjSVlvdt2+QN0w0lxiXP6PPr/76NOgCv/vHJA6xD7qHGVqnw7k9mGUuEY5wWTRpotxSVUQDXHXUChmXzdoeXrnxg7+at/+lfLsS+9/MoIx0loR/9cQ866DXAFr43vPQRLl/Y1mgq9Na2c99aLIfBK145FT8aOGAITB22FT73yGpS1fOS4rohYZbR6lRd0Qbd+W0orKjURVstiVpJXuQPsd3fszBMs0EUMOYzVu5ik0Bmj3jTVvv/LIZVyO9wju8WxaZGNQZz77ilg6+BSWCiOgGvu/NOAgKHXNy6EkY/+aTV1qA9xtrGKBDtFoh3bkA4hRA2l7YDJIHCIFi6AkSswvo6oWN8/HzpQa3r6sucLwtMb18D+9yGT4YEPZHo1r0x8bfZMOKunAyb+z5sZzkwca8wxv6oVXAzOV9QS1tekrjHmA/cNCzSTM6hPupZqjIqUlLLJKwwd1w6Z2tst7pY9vQdDT/TinD6np++81vJPwtUreuHJpTu8mNHsfeRx58MTb9nqFvFgWzQigDjbUB6pzUq4o26J2CwluWxFK9DqsLt8rn9IFnp6XzqqO9FChuPSL396dcY+fhvXfG02zH5sGeyyuddyNOeY4guaB3RR9P3S5CagtYL1v5EWEizQTMGw7qqhU2V3793QAwfLnujFWbXStwwZCbfAoXDTPQPrDdiafmnzkTlxIjtk8N+iFGc31lAhmopKtIUQ2JK+Qf1Gp7FcrSZmYg7JQiGbtWxlolrTaMq+ba/94O5Fix3HgvCV006Bec8+D7t8HNu86phXOnD5ddQoiwgXq/gqk3SoFnC2sEAzBce6Hw2d2tsr75LdcDj0RCvOO6YWBVg27kiY9/DLjr7pktG1sS7ZiAtY6E5PyJMnTMlVf6op2oFnPBJCtOl9ajO/9F/wr45dHeflAnNIFramv71XCRz4+Kt5CY8OesdfsvytUK1mG9OPOQJufuvt7SVd3ZkiG3P7h9rv9/Czov9XA8AL9P/yqq72pY6rCwyt3xc04QXNBO3aB5xvWKCZgqX9h4MrZTfcI7cPOjZqcVZ/N+y+J/zk/XHw4F//3h9NaPLe/9BvxSI6NnFOwNzTr+A8JiTabUrA3VpM5vh3tDzkYvlNL3BI1vtvPdLvRFZauvujfzpq4m1jn35vo3ZZmbFSko5esGci4+x5aNL+yu/+4difLccfdfgH/7Wl45cjX9+0WbtVU6FNK+kFLYihp1ON5f+8tHijhgWaKXjWfn9IZe92cQd0ixmyR5REJc59+/uuv2uvGrj2N38eEFVfPPensOTd4ZFFn22sc0IWhngHHYgde/tQY00HzLR04Ifr9IUJYPbZv8i7R3zaiWzMO3Df3T9Xu9LTP0opc+qYJITACTIWOA5ExyIpZW0u3yksmkkZLBUkvVJUFIIbFBZopmh477tDy2Q3XC23DzpP9gwaEZU4q/Oem3w4zPtrywCTZFTjfU8at26A9zEka9WmNUFNgNi3evSzq/t/Y9fAK7t+wXFePkAnsu6Opv7WNI73zuSoGBU5EGfFjLgrHpq3ssJmgTDPidyRqsiZmBTrBws0ExnvXDTs63L7oO/LHrEvCnK24gzkMf7u3uPh+vc/McDkjY5QKzunhHYeS6hZWyewQCOP1R4B9XfvmK3tnK9enogJYIyx5TgcrUZKaTXXR0nYqW9DsuTl3festQimotIYTaGwiSywsOYNXg+aKV7e/o8RU+X2QfNkjzgJugeNzkac0797BGwZMQx+NWoa3HTfov54C+M8hkIxZPM/BnhrQzLXOw4l0Diu95LRe/cvvIF994Mm1+d1KlVdnE+ZcdzGa9a/tWr4m5u76bCaDCNy3jpm77Izl635xoYNG3Jm53/6iEnFPpnJzkBiBLrEsYdhsmTcrzY+j403vMub54yqkb1QB71wXlhxxuNDuj6Gb294Co6+8CT4wROvpk3efebSJb7WnUaHpd3E245WMyRTnEODw5ku3a+7fzV8FMWzjno9p5OX6JizslXsPmLE9k0lx2qnhFq73A+3ylGwYUNu1194b5+9WKCZyOAWNJMT2r60RxnItFDXg4QJQcQ5fZ4m6p17joJbBk+GhQ/+dUDQsUW9xyfGwpAhw2HXIRWwfWs7bN26acB6xjo4zvnqoyclVZxDtaAVt3z2qAFzd9fU3hDrMDUbtlnZFJedOxtOe+3F2MTMNPXnCp6TvChgEzez89I2e49qFGopoRZ6RWkQcda356ZVw12tGwfMQOaXmCYhiZKsBBpN3advFf3OdbkedqXPyjZ27FgcYgWtrath27ZtA8771pmnwaxN70Y645jpLJdL8H0u+mvw/MgkisQItLtNkGFionLRB6nKhz+og15RKXthDvTCkqDijJOlHPZsCm7vaIV7zzsRak/5jK/A4oIOd3x1Jjw4RBb1Eolo6r7+sPH9v9GKgGb+XKCLc3l5OYwbNxZGjhwJU6ZMSYu1DrbyZz2yHH4645D0OOUoeGi/aO4Thg+3bIv+psxOC7egmUTw+gmjUaxroUdgy3pCJnGWA373ifuG8aXQOn4CdJTsBq2bB8GHW7elVyKqGNQD+3zcCRNfeLMgFnAgsmpBK3RTN3YBrB12RqwOY6Y4o5Oaydat2+Cdd96B9evXO46hZaP+05+CI1teDmX+zmfrGWgxjcueXOHYzxQUbOJmGDdajy2vTjuWpU3gO/qrvcRZdvcd6xf2bhL37sTMOZAXTFN3nMOu/IizjpdQA4ndycO2wUErWn1VrNYevifcWFLua1WquMC5x89oejo/D2eiggWaYfzw2mHl2F+NzmW10AMTWJyDg/NPn/HAjumd41jtKqg462zf3g3t7e1poTb7qBXYtzt5SC9sgl3612rOdrGLOGAnsaKABZphgvLqQbpYiwkszv7RTd1RO4xlI84mGzZsgPXrO9J/C5FHP39YIa4VzQyEBZphsuHVSXtWy26og54+MziLszemqTvKebrVMp2jRo2C/fffz3E8DGj+xhY1tqy7u7sjuWcueHn3/M/axmQNe3EzTDbsv3pd6oA16+oPeHsdOpdNg26YCxJWsTjbMb26cZUpbPlmC06ZiuI8fPgwmDgxfMvZZMiQwek9hSTOOLabYaKEBZopeKrWrktVdaxrqHp/Hc5djCoxB1cXAoAuTt0d4HrM2JeL4CxsuMpUNqj5zFGcDzigCnbdNZqJCbFPuqWlJe1AVkgc31VY4WWSD5u4maKGltarpTVrd7ql80xMU3fYGcbiEudNmzbBG2+8AZs2few4lmRmHHsU3PrC6wUVZsYVNnEzTC7AD62qq72+qqudW9dk6r51Snn/b1w4JChxinNLyysFJ87IBfsMc+xjmGxhgWZ2GnCN16qu9saqrvbaqq52XOJvGgBcmV5xYycCvYxxvC6C/ce4LrZf4hbnQupzVuDsdMWy2AqTLFigmZ2Wqq72VFVX+/yqrvaaqq529C6bsbMI9qxlK9PCgjzz1L0wcViv4xwTFmc7X9+VV69i4oEFmmEIMofvFIKNpu6Lu/tm8MLVpsaUeE+uocS5pKQE9ttvfxZnAp3ueNwzExfsJMYwPiGHs2pyOMOttNDj7p+zD4Gv/7ZvRi63aUCn770JHrj3srQ4V1UdAMOHD3ecEwb01n7llZaC7HMGmjccF10poPndGX/wRCUMU+i0lFZUklBXF7KXuD7LmOnVHZc4I6+++lrBzhiG3HP2Z7jvufhA51G0oKWS8GYs0AwTIdTKVqJdHcWKVHGjD73SV7yKU5xxhjA11KsQ4XWfCx7stuoEABTiNtyS0mrWYYFmmBhpKa0o01rYiRXtNz69T3pdZuSUU06FPSqOgN/d/aP+42jOraiocFwXBjRtP//88wXb74xjnq/veJdN28nHIcL4f1VXe2ehvAALNMPkGItoVybBPK73R9soLd0dJk2anLWDGDqluS0xmXSworJg0kgY85z/oWlMbKzSBLj/bxJbwmFhgWaYhEDm8Uqtpb0vAIzPZejuPvVo+Om9i/qFaNXYSqi/+5H+42juxtWqcGGMMOAiGKlUIrr3QsH9zjlFjZ5ImUJcSK3gbGCBZpgEo7W2qw3xjsWDHPujb6j6JMzZ+HZ/KxHXk75k+VsD+ozR3D127NjArelCdgzjtZ4jRbV+lelZCTAUUws4W1igGaYA0YS7UhNu3Dc9jrdZe/iecGNJOTQ99mT/vsGDB8PkyZNg5MiRjvNtFHLrGVeq+trDTzv2Mw7WkOAiSmj7RTgp3tGFAgs0wxQZmnjb/obu68bW9a+rq/uHZCn8tqYLte+ZPbbTQ4+UsLZpAqxMztzqjQkWaIbZCaH+btAEXLXEIVMr3OZMlqk1jZ7bK1ascOxPOjgd6o/bVhebx7beyu3UxHfA/9zazT8s0AzDWNFa4mAIeOWa48ZNuWHzsAMee3LpCP3a8vJyGD9+vKM1XYjjnhMuznqrFgxxBaOlyy3cAoUFmmGY0AghGgDgYv169PQeN27sgHHTK1emYNu2bQUT0RGLsymmOjbhHCCuxE7juczsgAWaYZisEEKgubzRnIAFzd4o1MOGDYMXX/x3wUTy+PHjVy/45B71Y59+b6PjoB02BzOxwALNMEwkCCHmA8CPCzw2cfhPjZSSW6tM3uHlJhmGiQQpJQr0tAJennMRizOTJLgFzTBM5Agh6nBujwJaknOhlLLOsZdh8gi3oBmGiRwpZSN5fd9YALF7JYszk0S4Bc0wTKwIIVCo0fx9XgJjeomUssaxl2ESALegGYaJFSllG7VQp5ETFsMwPmCBZhgmJ0gpU7TE5iKOcYbJDAs0wzA5Az2kpZS16JTFsc4w3rBAMwyTc8jknQSRbnTsYZiEwALNMExeIJG+Mo+xP4e8zRkmkbAXN8MwecVtqtCYYXFmEg+3oBmGyStSymZaNStXY6ZZnJmCgAWaYZi8Q85j9QAwMca+6S4WZ6aQYBM3wzCJQwiBa1GjYNdFZPruonm2edUppmBggWYYJtFEsEoWTo5SixOmOI4wTIJhEzfDMImGVsmaEzKMC6nlzOLMFBzcgmYYpiCgFbIW+AzrGjSRSymbHEcYpkDgFjTDMAUBOXdlWm96FTmCVbI4M4UOt6AZhik4hBDVNDSrksKOJuxmNmUzxQQLNMMwDMMkEDZxMwzDMEwCYYFmGIZhmATCAs0wDMMwCYQFmmEYhmESCAs0wzAMwyQQFmiGYRiGSSAs0AzDMAyTQFigGYZhGCaBsEAzDMMwTAJhgWYYhmGYBMICzTAMwzAJhAWaYRiGYRIICzTDMAzDJJASThSGYRgmXwgh6rRlQ3Hd7/mcGH3wcpNMZAghagAgJaXs5FjNP0KIMlozWcFpwyQOIQSu4T1BhUtKKTiV+iih2kudtq9RStnoODNChBC19Mwyy11jez4VWI3ac+ullCnHidE9r8EoIGN9Xq6h+KyntOz/wIQQXbh4PgA0SCmbExhuTJMGx4HoadO2ZillW8TvgfFfQ3mshnZPd5w48Br95xL6i2mUojCGFvBc53d6/1qj/NLJy/cmhKikFuFMABijbSMMq+VGAOgGgFb6v5PSAfNJZzGVFYUCNTL6yWX5peUbRbq8QHOC1Lb52KqOeqMHz6eHSpcNM2htHM+nMDQZz8XnVdvOjeh5zcbzamznFeJGBXGnSzrGnp+yTJcaSzhzsWGBW2cLU4CwV1KlKBVTeFN0/0rb8722XOV3ynuNGfJfW5zftiU8VwFACwBsBYCPLOEJum3Qyii87+1UGQmcLknfTE3Ic9mwOV9hoTyt55PG2AWaaremMJpbc7YFV4iX1z/kMts1ETyzKAWaREIvHJvUu2kVMf14rGkbIvz5Euj+D88WLq+N4tUtD8e1NQURhDjzO1m96nxUTJrirOQbYfomAHxAomwLSxwbCkhHriofOYrHJAn0hnyFxfJ9N8biJEZNdWX6LHWc0EcXBaghatOfJTz4nPMcB/pA02wzmja4f843erqukVLWqgspLeeTKfXHtLte1QYTShcV/FFSqZv9Dc4TQmB/sC8zO3VDLXAcGIh6hxRVjkAzmSqqte4d1T/tFc7ZuAkh5voNa9RQd0Q9tR7dypI1lL8a4y5LoC9M5wLALQAw3MPRdguZr0doYXRDxf9Gut9Ql/OAju2izJ9MceOWuUKh9Wd79YMtyUU/t4LCZIrzKgA4WPt9MIt0IPR+GjePy0ZNoA92HE0WKJY1cYSI+rTqLAJzgxCiOVM/oxBivhaPOl3UWmwO0L9t7U/T+rJrLeFUYcUWm1tfb6Rofcv1GfLOIipLmhxH4gvbvQDwZUvZuY1a0v9LZdzTYZzyKL+o9KiibQKJtxL79dmWU1TxMX2A2oJUcMz+2jD3CIpLuHWKzhEyKxM31cAbMvQHddI5Oe0/oYLRDEuKEth877R5zHafLJ5frCbu5kzvRK2zRJitLGEzTdzNtvMifqatz97zWyORsn1L82PsllGOf7bv2dN0nG1+D9C3PD8ffbEAcC+1ivXwbAeAxXGbnKmcraW+6Mts52jntmjhu067/irt2AYKu/4eaD7/kN7TEb+UPg3k1LbN7K817tHgN4/aTNz0LOxCeICet4Xub4Zb3zZrYWql93W8h9eWNBN3aIEm8TM/SHOLvW/ZbXMR5wH9zZYIkWH6B902S/wUi0DreabB5Rz93VO2c/IY/pwLtCXeMj7X4lAZq1Oj8exql+e7Frph8nuAvuXGXPUt2zbKM6Y4b05iX7CRbksBYJmHqLlt+G7fpPudqznAuZ1v2/D8c21h9AivJDH+2HK/MNtWCruvdCpogU5ya9kIp621Yi3cXBzYIhHpIhboauO9arVjNutEot47jwJttohdn+tSwXTk3xyns/SqcAfJ7wFay/VelYIcxkWLJXyJdNQyBK/HEm4lwLoY2TzPsULypocwf6Rdt93Solb7PbXAItBe20emiLq8jy0c37Q93whLogTa11Sf2I+L/WUA8AYAXGzpowLqDzpdSokfU30unDVsUB9FsxHGLiosbP19ddQnrYNOPPWOM5k0FI9ztdh4EOOLxsG2aX2mXZQnrH2fOyGVAV7Z7N9b6JJ/Y4Oet9C4f23Y52HfMpUleN+V5BtiK0vwmTOklFiwN+S7T5HKlInaLhSuOQUyTtks4zHefwAAn8V3wklBaGKQ42l/l3YuOqONB4DB2j40bT8JABcBwKlSypF0j10B4GgAeIziR1FCXQBBUfdoB4A/AcDPME/QM0epcGvbbnQct/tIaM1w3EIOfgWF2dppU44ntCWyP8i2ubScPWvyckerz2Zic20t+AxPMY+DdoszZa1oTELLx7blsQVt5gdXS43l3LyYdy2tftfuCkuYUwHLkkS0li3vdZkR1nds5yUovGaLdKvfPmH6rt+xpM+H1Cfs5x5YDm8yWq+u+dcS3nu9zg8QDzWW1n+n7VztmsQPs5rgMexCsYT6HnPmPZkJbZYws0Y+J1MLDmvoappK490X4HChXHmcFwLa7GH1lrgGska4esNTPFfuTHFKLbD5ltENXt+P6alqjc8cYFrCvLyqTfycu5AqKp7faJ45wHj805mCQ1YCL2/jbFkupfyiz3tUuH2PJlQWYuv491rL+V0AOCjAPVJCiKsB4FraVUKzqnnld/36SFq5mKeEEKcAwBNkDUCG40yWfrWL0jFX7GM+xybQfsACpxbnUE2CmYdEo9lSIMzxKwSUMWst5vEFNGZ1p592z6X7YCEVRLPpN6ZBA5q8zQ+a0gk/jFI1LWS+ukIMKmk4U+T3pVq8rcK7KEMhEcQcHidxVwzwm+uksqRQxva2OvY4SczQwqBdBJgvhRC6WXt7iG6Gp8nZS43pnuY4IweQSGNl4xx6GmreV/xWFvKdjjaBXmKMl6zWCl9FKfUfYV/tKmpN56VF5CHOVwYNE9X8aiwipMZI77QiTeK8Utu1hLoA2sA5mQbmjWrLuHK91R353NRZMMFlrHFcrPKYP1qRsrS484FZUfCacMNkodECr7G8Uyn5tVwshEicZc4Fr4lEihFbBdMTEkZdoCu8zo+ZOzWBRqYUShrZBLrZXO4rw8xgB1MrsyFXM4MZNFjEeWHYJcs0kdbFqJRFekCNc4k5sQdWhmj2sAaKLzX5Sx3FabXhPLYzOuF1Ufz4cXwyj9eCy0QjMVNt3D7It+0wXWeYGQzFe7oQIqczg4WgysclN0Zs4sbFNo7VJithgtGppUeQClaQCmm2fMKWvoHGQQcY/xy7U4ulUz3uLdC83ZZ4KkgnMYtTlet7WBz1Oul63RGk3nZtHt+n03BmCrp5Ocs10TcW6HuwDLPyHIMcUzyVWRx4XNMu4DArNf450xCbRq/75CgezLT40HZeDvKs7sDUZjtPWpyubOf4eJ6M4B45C6/XRnGnjwNvdTu/mCYqyeusP5aXydWWCjBDTrEIdL2fD83IG26iFelsbSHfJ3IvbiOOzI8ssLCSgOU17ly+MddvOWx+p/SwPcssS/Li5U1mfnPWrfts58acZ1mgw4XD9MJfbDvPEubCGAdtA82WNDcvZt45LqYA1bf3hhCiyWXu1sC4zK+dK5TpNk4PzaQRyKxP3QA1lvHlXT76XgsSWkximuU7OI/yi2kq9oRM4Dca5+DCFSnqcooNvD/Ne2B+YzfGYXJGMziVJaPQd8QSh0BlyQ1YgOLiN0HjM8vw4Tuv1nZh1+CXaBEeJrntPIsAABFfSURBVMFQOX2xEcKHCiXNbH3QgaCCJN1fpC0MYBNPtTLOGuqHawwzAYHLyj6rAnjlhcF0lDuY3qEoxcaEHD7U3gkBhimY6VtazPGm9bU3WvLLyqCrQuGEP/RNmQu7YIV3IbWoI8v3NIqh1uX7XYXhceyNECoP5tNqaLWUT0wHVTAdVCke4vY2PwsAntPKzLQ3sBBiAo0WiXOBiDKLL0DRQmV8VGn6mOGgto0mMikIIl3NihxCmmkWrjoySZkegKomfAMVMg5HEjfoozXFeY3XuNuosCxZeR6NkQ4iNnVRWREy0BaDV/0irbBsJJG2pht9YA2aE1CX9v95VODUFePKYfROtfQNzLesYFUT8N1rLIIPmkgBedSnyFSorB3WVX2Mwl4tN1lt8a7WWZLNDGJhoIpHE1kL6lzG3R9M5QEO62ui7rlYhJIqX9gS+29tTO0ulD6vCSFWUyNhsdt34Qd630qalWs6pc0edOmucbxbAsE0vUMIsZ6Gaz1C+dmXJY/y+Dk0DnuYdghnFrvN9l0kmaxWs/JhV691me9a31L0Ebr2L1mcj6Tb/Nox9hHY3iPIbFC52iKfGctl5rAU5R81cUmDxemnWXMIMq91Te+Y0zEnM4l59MW3Bc23HitMxbl1BikPLPk9Up+LJCzQQ7Np2eacVttmrb+6jbYXKR8sVtZG+j9FY6rbaMywzDCf9IA8ZAufLII+aJdNzfm9luJsqRaXKj5bKM/aFgbBfQ/Znu8R5sJ1Egvx8Ep6llchY50iMgniLN1FSroVCMUk0Nr7+3XOazPjhYRRT0fXjzbmdMzZVJ8Z4izo0q5qFjdbHoxyC+WQZcnvsThFUlmSyUG1M8iShyGev5jMpbZnx7Vtpvda7BW3BS7QnTQ9Z5Rxu91t1T1LWHZOgTYCkqkmXGOcbzs3LyvJuIm0y7m2cOdii3VuaW1VM3N+5eZMywJqyxjGUnj6DH8+1oOucxEU14LWa6M0qCerTpDVgGxbG92n3stL20eYcjpqwedSlbGFgZ5/FbXoZIaWddBNtRhbaU3kOr9pkyCB1uPDr0A3yB2W13u1ecGDxu3HXmtbu23mc9zOiyk/OQRa0AGGYQocclBTowu8fB1SVFno5Clso0PNM09xP4b+1yfFKDP8MlRfaLdmun2F+l1DT31KPiD9nv5hJm0yp76N4B6ufjFGeJtsedJH3GIXQQfFYXOQPmuPMId677DQO+rfbTMLNMMwDMMkkNDjoBmGYRiGiQ8WaIZhGIZJICzQDMMwDJNAWKAZhmEYJoGwQDMMwzBMAmGBZhiGYZgEwgLNMAzDMAmEBZphGIZhEohYMn7ifFqzmWEYhmGYZHAlt6AZhmEYJoGwQDMMwzBMAmGBZhiGYZgEUkIrfzAMwzAMkxx4NSuGYRiGSSJs4mYYhmGYBMICzTAMwzAJhAWaYRiGYRIICzTDMAzDJBAWaIZhGIZJICzQDMMwDJNAWKAZhmEYJoGwQDNFjRDiLCFEI6cyEyVCiM9jvhJCVHLEMnHBAs0UO98AgPM4lZmI+SLlKxZoJjZKhBD/CQCfz+IBZVLKauirVV4HAEc5znBnKABsAYDbpZT3u55lQQhxBQB8BgD+IaW8ynmGEy18a6WUZzlO8IBaYVVY4EspU/qZQoi5AHAKAFQAwCiaQrVbO0X97qT3xb94j/uklM9r9wkTf68DwA+klG2OozvuezwA1AHAQQAwRot3PXzrAaAdAP4spbzDcZMdcRCkQBpK7/q9LN/TpERKeZxjb0RoaX2VlPLRbO5KLawfAcCh+K245I0OAOgCgCYp5Q2Omzjviff5DgDMojg276v+b6PjywFgsZTyEeM++N3eDgAtUso6y3OmAsDFlG/wGSOMsIOWl9Sz8O8TUsq7IJq07i9fwCNttOc8IqX8peMuFqgMmUXhx3S62e+12ZDH8kLHFq9hvu1rpJT/1O7zMACMDFPG0vWLKa+tl1Kequ1fivlPD7PlWiznvktl3BiXb2IDAGylKa7vt5TlSy153C9t5neUbVrjwckZEmYCAGwGgHWOI32Uav9jZplOBf0Wx5kDKdOunS6EwISe5DjLAn1YPwCAIfhMIQT4FGkVPrzHCQDw7QAVA4yjIyncADsKsMcoMyAfAcAHAPC28f5D6ZzRVMiVUqLhPfVMHCT+xtD7Y5hOFULcIqWcp58ghMC0+zsA6PH6jsu9DwQAzPynCCEwLn9mEYtKCt8ax9VOVPiA7rlISllLv6s88txQyszvA8BGx9E+Shx7okWl9f4AEEqgSUSfoXupeGh3+fgrKU98WghxJQA0Sim/43LPZkqrwcY99ft2UxxNp9/4LhdRHvmWdl4ZHXPkByEEfhe1FPatVInA9FhrCXsJpWkF3Q/z9l103CutgcoXr7QuNX67pY36dlwrqrDjm0URnkbfI77bywBwrVvFNCpIQP6glRcYp5ss5UUZbaNpG0JximWHnn5BygsTW7yG/bb/JqU8mX7fhpV8PC6EGBekIi2EWILfAJWhlxqHx1FeceBRztm+CSXwmIe+L4R43dCdcRTnHY4HZaa/XIpMG3AubrcNAGoAQFLNwPU8tVHhIamAcRy3nI+Z8Ar6QHHHFbbzjGvOpBfEH8/SX/x9pu18l/Btpr+SaitTbee7XFuj7VtC+14CgONt19k2ivwLzeeGiD+8TxNds5VqxerYBC1esdZ4n9d7amnxkna/K1zCV2O7h8s976f4TrdSbOcZ19TTM5ptx4NuKsxBrtPes9523Od7r6V7YBo8nil/AMBcinuVt++ynNNKx9Da8Q8/eY6sY9dRZeF441iNLa4xn2jPmavnK6+N3hufd6HXeZme77W5pU2mb4fydqv27a+lbydjnrRt+Jwg3wJd80xM5UWofOpyryDf9q+1/Fpt5OWttP8+2/WW+y3VynJH3FDFy/EdG+XcWirnXNOUwn0WhX0laojlOb70zmuLShscJ7h8QLEItHadEpnFtuPaecdToYE/Hqd9j2uFiWdE6OGjTKQK0Q/J3OG4xnKtLtAttG+u7ZosPpKg8Zei6y7U9i3RMq2vAla79i51rUv4fBdKcmDBlLHgLhKBvlkT5wm2c9w2EhIspLYY9/w13bMzaHq6bW4CCQCX0/7VbtfG+XyvzS1tbN8OVTQe18qMLVRgft3rGT7DEUagVXlxru142LydD4HWrkvZwkD5WFWGPBteJKqqUWAtIzwE+pmw5Zxti1CgVVpnldfiNhX6pYrO63Q7n8xDj5IZoN+kgn+FEPgRnoTHhRCz9D4RN9B8K4RYQB/aTGyBCyGwwLhc9Z/5ABPhAAD4qRDiP7R+BDc6acOa/D1e/cYBUc/UzYTj6O+XpJSu8WpDSnmhEALjZCz2oWYTTjLLKhOnmxmz2DiM3udOKaUfk2E/2FWDnudoxsa/WhfMQfT3l3p6CiEupG/CD+9JKX/v47x7qN98XyHE25RfTb8FnS1UQOKWCupPEjEzhRDNlP/HUrjRBLyIRCSqby4MbVRe3CKEuFRVxDzu47e8+JYQotax1xv0d2jwPMMfI+msAd825eNhaEbG7ki3bkjqRz+bxPnaAGWvQpVzRwUt5zwoozwUlDotjVRa/7cQ4pKw2hCXQB/nY2iLsr2Po76DdAI5ztrRx9BEBVFK6+9IQyL9EvXNNQkhJvlJLDqnlvoL7gaAg7FQFUJcBgCn6w4ZNrBPlfrqqqgPYajRP+PF5UIIfJfQDjQkfrdTuLehBUI7vAu9Y8bKigvqg8MP3/yQ5wkhHE5FBkNJmMdR32S7Eb5iRvU7LQ35jh/S35nURQAe9/yF7heRAeyXyyjQWDgIIU7EwgUAyikdyyz9llaEEDehh3O2DnYhqaBNsZFa1fOiflBQpJQzqbyopvKi261f1QKWF2hpmOk8lC4/ffnvGNgEOsi3XUlxjQ6OD5gnYZwLIbBsnA0APxRCvKsLMPkSXUw/r7UJuA+wEtbuUXkJQ6nmvxGESuUDoaV1VtoQl0AHyTBYcK+mlqtDEEmE0AFgDxKhhUKIesdd+swkP6LzlgshDvNbo6LnVlPLBQuXfbFvgjwK67zuE8RTkTx6cTsDzVzoqCCE+LrFOQUTN1OG0z9sdEC41QhnCT3zrJAtGlXopxxH+pwY/IKisIxMPa7xWGRsoPQ5Hb2KQ7xaOf1t1fape84kc6TiUh8taHQEvcjFQc0KVeym2Y6Z0DdaTQXQPKowXhPWwS5LFqInLX5XAPD/qdKOzkAXUJ/jf9rKmVwRsLyopu/wDGplnkIWQjNe50bUGoaA33ZHpm+bGjFYqTwWu36EEK9g3iLLzw/J2fF3IcUZqHzJ2tJnsEZK6eXY6IsotCEugX6MHFPcuI686LDV/IDhWaoHuozMyKpGjImZcRgKVQ5atFaHL0jI7qeazyyq+bUIIX6WbYQAtUyohtUshDiC4uAYADAFeiN5+3mxVjOJXG75QFZT7RLNaU8HMbWSN2UF1Uxtpp65LsINJBZ3Utx/QAViPk2e+WAFCdZp2DUTxIohhGiiCuI26stWqHv+PyHEbSo9/ZgEqevmIseBiKC810zPaiEh3CufCUCV3js0r+1DqRvsWTLb32IZpZAotCFAWF58mlpis2Ku+GT6tm8FgPHUar7MT/5DT27NQxstnDfSKBwsz5+SUp7juMg/b1M5h3HyyaAXRyzsoXHThrgEeq1Lwa44ivoevknDP44j5wRTZP6XhAIL+p847uIOtqQrhBArpZS+WgE6WPMxzN7XA8DH5nnU4q6ncaaYqZeb4+pcrjlXc/e3mX2X2salBmS2Vrl5gQpObM3dbWZIqghhy+x8Y/jJ5S6PTGVI373ILwD9BhqpFR+0jywJTCZx80snpr+U8gIhxOco7v+CQzkonR3jLin+0fMZfRgOp2sw7huM7+G7JDBYOK4QQvwLAH6DTjK2AobCPY1MdZ8KGpdCCKwQvKnl7aWW71M/v5q8Y1Vh6whTPqDW8smww6T6NarAXy+E+C69X076pqlVf36I8uJ8zU/H1kURNJ8qUpY0zfRtP0KVyJnUIv6y2eVoQ0qJQ2lbKe6vpFP+5ufaDFxK4nwgVbxeou9isflu1ErFrpujqcKmhrCVm48IGZ+dKj0j0wab55jmiRb3MKvjqRBQ3qmztGPKO/sjr+FBto3u+5Hu7R0mfHTNWZoXqOnFfb+2X9/WKm9AquGp/7do52A/46+ziT8fYS+joWgfGuHbooWp03LMOjQgxFCMudoQiDf9eDQnzIs76PaMcZ/7tffXN7e4V/F0lku4yuhj32K5zpbH9DR90xzy4uVFDQDbXe5jy9drjfNW+0xr1+e7bW6ey0G+HfLu1r8Lleet8W7bQnpxN1ni1G95geXZdS7vHHarsdzL77d9oZZ/3/Q5VFUffviS7Ry3zc2LW+4o71stcdDpkj/VhuX6SuNebZbz/G5vG9++7bpA2pCpBd1Gw3VaHUfsNPUrvw+oL2IqmU32Jvu7Mt8Mpmf/KGifEd13FrW6B2uHAoUPBpq9f021vzbtGLa055EjVTX1IXh5uypPV3yvBZbaa+DweUH3R3OJqp2dRaZnM3xDtRlsrrOES/EM/fXV2iBPeZy04Ff0jNNdHFN0llP8POM4kjvCPnvAdaoPiuK+lvKHLe630LW3e7XkKF2qqSVwOvUXlhn3bDNm91pK3Ui2NG3ziOtyaiVVU+utzCNvD6W8g9tfApj0vZ7vhjp3uXHc97dD5ckRZDmap83GdaLmlBc51B9bTRUTv+VFemY2lzRsclwRDD2vBf227xJCPEDxNZRmdfQspzH85DTWSDMbBiHlFjbKb5Ppu/gGpacZry20by3lnUdcWrSuz/FBv05GpQ2C1J5hihIaLjFdSik4hZmooFEqOBf3jAwmYYYJDS+WwTAMwzAJJCkTlTBMXDwTYJwww/jlRRpiZOs6YJjsAYD/A57+GTSb+x6SAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export const Calculator = (props) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1690 1414"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Defs>
        <Image
          width={28}
          height={126}
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAB+CAMAAAAA74H3AAAAAXNSR0IB2cksfwAAAXRQTFRFAAAAAQEBAgICAwMDBAQEBQUFCAgICgoKDAwMDg4OEBAQEREREhISDw8PDQ0NCwsLCQkJBwcHExMTGBgYGhoaHR0dHh4eHx8fICAgGxsbFRUVFxcXHBwcJCQkJycnKioqKysrLCwsLS0tISEhGRkZIyMjKCgoMTExMzMzNTU1NjY2Li4uMDAwOTk5PDw8Pz8/QEBAPj4+Ozs7JSUlRERERkZGR0dHSEhIQ0NDLy8vOjo6QUFBSkpKTExMTk5OSUlJFhYWS0tLT09PU1NTVVVVVFRURUVFIiIiBgYGUFBQWFhYWlpaWVlZV1dXQkJCODg4MjIyXFxcXl5eW1tbJiYmNDQ0UVFRXV1dYGBgYmJiYWFhX19fVlZWY2NjZWVlZ2dnNzc3aWlpampqbGxsa2traGhobm5ub29vbW1tZGRkcHBwcXFxcnJydHR0c3NzdXV1dnZ2d3d3TU1NeHh4eXl5e3t7fHx8fX19fn5+f39/gICAgYGBxOxxlQAABMxJREFUeJzt1/lTaW8cwPFKKC1Esi/JdoQQQqEcskaokC27rMla95//PpzjUNSd6c795Tv3+fU1g2PmPJ/3Z2XlT87q6hpufX0dj571dRxubXUVNRyeQNzYJG1tj88WaWeXTNnD4xBdxRN3qLR9+gGDyWQyDugsGntrl4BHcI2ww+EyeXyB8FB0KBTweUd0MXV3b22COCKVK5GKZHJIoVBActmxgMegkQgIru/SjqRKSKU+0Wg0Wp0KUgolXCoRh+AO6/QY0mn0BuOZ0WDS6CAzn8FGEb91IJBbzg0XVpvNZrUbzi1y4dElEflYPJUpUpwYrhyw0+mCHRfXJwqR+5KA/FoPW2K2mC68Tp/fH7hxOezBkNnN3kP+BM8l71ZtsDkD4UgkEvXBVr1OKWF7ENzj3N1r7A++WDyReExGUw6jWsa7nCKNrwhandF4OpPNJCKBB/uJ/HSKBLH0SW+7iaSzuXwu8xh1XWnu7zjodxL2BSqDNxDP5AuFYikdS1mD0BwKLUY4msgVypVqMZP02UwKPm2KrEPdmSv2nC/X6pVq6THg0CukMxSp7c5ItlBrNOrlfCLqvX6aIfdYe3UTL5UbzWarVnwOPxhCUjFhDn2PuUqr3W7WC5kYbAgJMKSbT6yBRLHWfOm0G9VsDDbOkEI3a14D6UK93em+tMrZiAvg9DspdKXG5n8uNF66vU6zUhqjdPqclAPluS36XG11ev1uu1ZKugxP/Ev8DB3RTLnZ7fd77VoOoOJ0GzdF2bkjnK00e4NB76U+Rkiyu4Jh0Auw3RsM+y/1fNJ1Dbk35jFWqr30h8NBp5GPu67vj8iLOFpEhszkjQAcjEaDbqM4QSKGt6aHSK7eATjstr7Ct7dhr1V8dBqW4HAJEieYb3QBjnqtwiImJ/g+6jUXUA9P8P0bHAHsTxBawB7AN4CJJdjCMLUcfwGsLsEiim0EyRjKP6HxE8bH+OtPcPAVvv01fF+Grt9h/x/+w/8b/ux1+PZF+psv77cXxs/uoa/vvt/emth9uxS/vamxO345DpcPABP8zVyZDp03FKGFWTY3rmbP+WkKfoWjt/H8/IgHYPLGkMmLoFGxbKCDsQwwZXzifUiBGEgBZNoDPAvdzUVE0DHtBARV0g/5ER7nx6Qw8vGUXTWrmkm4ZMqtzqRNxmgRiD8mT7XR6fW643BxnlmEH2LJP46lbnfcQwBVwuWZNSkpleDrQJtrMAJXpL5IJUvVegtLuxmyRDoQhZlCpQ6iMJfwf4hC1qHlDA6n89VKrVLIxgM2/Vxr7gtBpfofs8VqtZB7jty8BqEZigWgb32RdCmfz2UTYefV+axvsTJ+zmYz6WQAtmvkpxjONXUiGQZNrb3FENS4TG14dY1rPIbWOI+DPgqe6j4OBe0O100g4EvBtrPzkFnCmW4A2wwhpNXbX70wDHtf7XotJHJzyOhiQeLylSGtyXhxZb2yG00nIZmAieGm2C28fdJpgia9KahRh+SiUzobRRyZTecJlXJFSGWxhBT3ysM75v4WBcE1AolGd98JRMdmpflYJORLGCz2JroGreHJJLaYy2C63RK3+4hB3+dsb1LQBWq8epHB5kWlssGhbpM2N4iE6eq1AnY23GRn83g86NaGLW0/PP8BI6Hu2JLWTmwAAAAASUVORK5CYII="
        />
      </Defs>
      <Path
        d="M11.7 901.8q24.9-34.1 81.5-35.5l628.9-405.9q120.3-97.7 225.6 0l681.5 350.8c27.3 28.7 31-4.6 41.2 12.5q54.1 89.8-41.2 130.3l-623.9 426q-135.3 67.7-270.6 0L68.1 1049.2q-76.6-38-56.4-147.4z"
        fill="#42deea"
      />
      <Path
        d="M93.2 808.7l628.9-405.9q120.3-97.8 225.6 0l681.5 350.8q92.8 97.7 0 142.8l-623.9 426q-135.3 67.6-270.6 0L68.1 991.6q-146.4-72.7 25.1-182.9z"
        fill="#edf3f6"
      />
      <Path d="M1112.5 679.8h-7.7v-517h7.7z" fill="#ccd1dc" />
      <Path d="M1127.4 679.8h-14.9v-517h14.9z" fill="#a6b9cc" />
      <Path d="M1138.6 679.8h-11.2v-517h11.2z" fill="#70838d" />
      <Path
        d="M1286.1 150.5c0 6.7-5.5 12.3-12.3 12.3h-270.4c-6.8 0-12.3-5.6-12.3-12.3V12.9c0-6.8 5.5-12.3 12.3-12.3h270.4c6.8 0 12.3 5.5 12.3 12.3z"
        fill="#495052"
      />
      <Path
        d="M1260 150.5c0 6.7-5.5 12.3-12.3 12.3H977.3c-6.8 0-12.3-5.6-12.3-12.3V12.9C965 6.1 970.5.6 977.3.6h270.4c6.8 0 12.3 5.5 12.3 12.3z"
        fill="#5e6b6c"
      />
      <Path
        d="M1003.4 148.9h-23.8v-22.3h23.8zM1040.3 148.9h-23.8v-22.3h23.8zM1077.1 148.9h-23.8v-22.3h23.8zM1114 148.9h-23.8v-22.3h23.8z"
        fill="#d0e1e5"
      />
      <Path d="M1150.9 148.9h-23.8v-22.3h23.8z" fill="#79b315" />
      <Path d="M1187.8 148.9H1164v-22.3h23.8z" fill="#ea7f25" />
      <Path d="M1245.4 148.9h-44.6v-22.3h44.6z" fill="#f45940" />
      <Path d="M1240 102.1H984.2v-83H1240z" fill="#1d2326" />
      <Path d="M1240 102.1H992V26h248z" fill="#333c3d" />
      <Path d="M1210.3 737.6H449.2v-22.4h761.1z" fill="#697e89" />
      <Path
        d="M501.4 861.1v-52.2h58.4l-24.6 52.2zM1134 861.1l-24.6-52.2h58.4v52.2z"
        fill="#2d3134"
      />
      <Path d="M1254.4 716.7H379.5v-36.9h874.9z" fill="#b6c9d7" />
      <Path d="M1254.4 824.3H379.5v-91.2h874.9z" fill="#a5b3be" />
      <Path
        d="M1314.8 824.3h-60.4v-91.2h60.4zM1314.8 716.7h-60.4v-36.9h60.4z"
        fill="#818c93"
      />
      <Path d="M610 1049.5H337.6v-272H610z" fill="#b88b4f" />
      <Path d="M496.8 1049.5H224.4v-272h272.4z" fill="#e1b785" />
      <Path d="M564.5 882.2h-23V777.5h23z" fill="#af7d42" />
      <Path d="M291.5 1032.6h-47.4V996h47.4z" fill="#fafdfa" />
      <Path d="M296.1 829.9h-57.3v-36h57.3z" fill="#fdf4e7" />
      <Path d="M291.5 822.1h-47.4v-20.7h47.4z" fill="#3a3735" />
      <Path
        className="s24"
        d="M923.7 677c0 4.1-3.4 7.5-7.6 7.5H591.4c-4.2 0-7.6-3.4-7.6-7.5 0-4.2 3.4-7.6 7.6-7.6h324.7c4.2 0 7.6 3.4 7.6 7.6z"
      />
      <Path
        className="s25"
        d="M808.8 47.6v10.6h-26.1c-11 0-19.7-7.7-33.1-7.7-13.5 0-21.8 7.7-33.1 7.7h-26.2V47.6z"
      />
      <Path
        fillRule="evenodd"
        d="M811.3 50.1v433.6c0 7.7-6.2 14-14 14h-94.4c-7.7 0-13.9-6.3-13.9-14V50.1c0-7.7 6.2-14 13.9-14h94.4c7.8 0 14 6.3 14 14zm-10.5 0c0-1.9-1.5-3.5-3.5-3.5h-94.4c-1.9 0-3.5 1.6-3.5 3.5v433.6c0 1.9 1.6 3.5 3.5 3.5h94.4c2 0 3.5-1.6 3.5-3.5z"
        fill="#bdaaa6"
      />
      <Path
        className="s24"
        d="M908.4 373.7h3.2c9 0 16.3 7.3 16.3 16.3v76.1c0 9-7.3 16.3-16.3 16.3h-3.2zM696.2 163.4v-3.3c0-9 7.3-16.3 16.3-16.3h76.1c9 0 16.3 7.3 16.3 16.3v3.3zM687.6 52v-4.4c0-11.9 8.5-21.6 18.9-21.6h88.1c10.4 0 18.9 9.7 18.9 21.6V52zM649.6 673.9c0 2.7-2.1 4.8-4.8 4.8h-19.6c-2.7 0-4.8-2.1-4.8-4.8v-56.4c0-2.7 2.1-4.9 4.8-4.9h19.6c2.7 0 4.8 2.2 4.8 4.9zM881.2 673.9c0 2.7-2.2 4.8-4.8 4.8h-19.6c-2.7 0-4.9-2.1-4.9-4.8v-56.4c0-2.7 2.2-4.9 4.9-4.9h19.6c2.6 0 4.8 2.2 4.8 4.9z"
      />
      <Path
        d="M901.4 659.7H600.2c-9 0-16.3-7.3-16.3-16.3V275.1c0-63 51.1-114.1 114.1-114.1h105.6c63 0 114.1 51.1 114.1 114.1v368.3c0 9-7.3 16.3-16.3 16.3z"
        fill="#5a9aa4"
      />
      <Path
        className="s28"
        d="M602.4 364.7v-81.8c0-50.8 41.6-92.1 92.8-92.1h111.2c51.1 0 92.7 41.3 92.7 92.1v81.8z"
      />
      <Path
        className="s29"
        d="M610 353.3v-78.2c0-48.5 39.5-88 88-88h105.6c48.5 0 88 39.5 88 88v78.2z"
      />
      <Path
        className="s25"
        d="M623.1 272.4c1.4-40.1 34.5-72.3 74.9-72.3h105.6c40.4 0 73.4 32.2 74.9 72.3h-3.3c-1.4-38.3-33-69-71.6-69H698c-38.6 0-70.2 30.7-71.6 69z"
      />
      <Path className="s28" d="M891.6 373.6l5.6 271.8H604.3l5.7-271.8z" />
      <Path className="s29" d="M891.6 373.6v260H610v-260z" />
      <Path
        d="M625.9 661.5h-27.8c-9.2 0-16.6-7.4-16.6-16.6v-27.8zM920 617.1v27.8c0 9.2-7.4 16.6-16.5 16.6h-27.9z"
        fill="#3a4151"
      />
      <Path className="s25" d="M878.2 425.1H625v-4.5h253.2z" />
      <Path
        className="s31"
        d="M623.1 438.1l1.6-11.9h-1.3v-7.1h6.5v7.1h-1.4l1.6 11.9z"
      />
      <Path className="s25" d="M623.8 425.6v-5.8h5.7z" />
      <Path
        className="s31"
        d="M621.5 286.8l1.6-11.8h-1.4v-7.1h6.5v7.1h-1.3l1.6 11.8z"
      />
      <Path className="s25" d="M622.1 274.3v-5.8h5.7z" />
      <Path
        fillRule="evenodd"
        className="s32"
        d="M669.3 314.8c-5.8.7-11.1-3.3-11.8-9.1l-6.3-49c-.7-5.7 3.3-11 9.1-11.7l49-6.3c5.7-.7 11 3.3 11.7 9.1l6.3 48.9c.7 5.8-3.3 11.1-9.1 11.8zm47.3-17l-6.2-48.3-48.3 6.2 6.2 48.3z"
      />
      <Path
        fillRule="evenodd"
        className="s33"
        d="M667.8 313.1c-5.8.7-11.1-3.4-11.8-9.1l-6.3-49c-.7-5.7 3.4-11 9.1-11.7l49-6.3c5.7-.8 11 3.3 11.7 9.1l6.3 48.9c.7 5.8-3.3 11-9.1 11.8zm47.3-17l-6.2-48.3-48.3 6.2 6.2 48.3z"
      />
      <Path
        d="M716 301.4l-48.9 6.3c-2.8.4-5.4-1.6-5.7-4.4l-6.3-49c-.4-2.7 1.6-5.3 4.4-5.6l49-6.3c2.7-.4 5.3 1.6 5.6 4.4l6.3 48.9c.4 2.8-1.6 5.3-4.4 5.7z"
        fill="#75afcc"
      />
      <Path
        fillRule="evenodd"
        className="s35"
        d="M716.2 302.4l-49 6.3c-3.3.4-6.4-1.9-6.8-5.3l-6.3-48.9c-.4-3.4 1.9-6.4 5.3-6.9l48.9-6.2c3.4-.5 6.4 1.9 6.9 5.2l6.2 49c.5 3.3-1.9 6.4-5.2 6.8zm-56.6-52.7c-2.2.2-3.8 2.3-3.5 4.5l6.3 49c.3 2.2 2.3 3.8 4.5 3.5l49-6.3c2.2-.3 3.8-2.3 3.5-4.6l-6.3-48.9c-.3-2.2-2.3-3.8-4.5-3.5z"
      />
      <Path
        fillRule="evenodd"
        className="s33"
        d="M672.8 298.4l-.4-1.4-1.3.2v1.4l-.8.1.1-8.8 1-.1 2.2 8.5zm-.6-2.1q-.2-1.1-.5-2.2l-.6-2.2v4.5z"
      />
      <Path className="s33" d="M675.4 298.1l-1.1-8.7.8-.1 1.1 8.7z" />
      <Path
        fillRule="evenodd"
        className="s33"
        d="M680.3 297.4q-.2-1-.5-1.9-.3-.9-.6-1.9h-.1-.1l-.4.1.5 3.9-.8.1-1.1-8.7 1.3-.1q.8-.1 1.2.2.4.3.5 1.1l.2 1.8q.2.9-.4 1.3l.6 2 .6 2zm-.9-7q-.1-.4-.2-.6-.2-.2-.6-.1h-.5l.4 3.2h.5q.4-.1.5-.3.1-.2.1-.5z"
      />
      <Path
        className="s33"
        d="M686.5 296.7l-1.1-7.9-.9.1-.1-.8 2.7-.3.1.8-1 .1 1 7.9z"
      />
      <Path
        fillRule="evenodd"
        className="s33"
        d="M692 295.9q-.2-1-.5-1.9-.3-.9-.6-1.9h-.1-.1l-.4.1.5 3.9-.8.1-1.1-8.7 1.3-.1q.8-.1 1.2.2.4.3.5 1.1l.2 1.8q.1.9-.5 1.3.4 1 .7 2l.6 2zm-.9-7q-.1-.4-.2-.6-.2-.2-.6-.1h-.5l.4 3.2h.5q.4-.1.5-.3.1-.2.1-.5zM696.9 295.3l-.3-1.4-1.3.2v1.4l-.8.1.1-8.8.9-.1 2.3 8.5zm-.6-2.1l-.6-2.2q-.3-1.1-.5-2.2v4.5z"
      />
      <Path
        className="s33"
        d="M700.1 294.9l-2.2-8.5.9-.1q.1.5.3 1.2.1.7.3 1.4l.4 1.4q.1.8.3 1.4.1.6.2 1.1.1.5.2.7v-.7-1.2q-.1-.6-.1-1.3v-1.5-1.5-1.3l.8-.1v8.9zM704.1 294.4l-1.1-8.7 2.3-.3.1.8-1.5.2.4 3.1 1.1-.2.1.8-1.1.2.4 3.2 1.6-.2.1.8zM708.4 293.9l-1.2-8.7.8-.1 1.1 7.9 1.5-.2.1.7zM713.7 297.9l-3.9.5v-.7l3.8-.5h.1l.2.7h-.2zm-5.5.7l-4 .5-.1-.7 4-.5zm-5.7.7l-4 .6-.1-.7 4-.5zm-5.6.7l-4 .5-.1-.7 4-.5zm-5.7.8l-4 .5-.1-.7 4-.5zm-5.7.7l-4 .5-.1-.6 4.1-.6zm-5.7.8l-4 .5-.1-.7 4-.5zm-5.7.7l-4 .5-.1-.6 4-.5zm-5.6.7h-.1c-1.5.2-3-.8-3.4-2.3l.7-.2c.3 1.2 1.4 2 2.7 1.8zm47-6.7l-.5-.5c.6-.5.8-1.3.7-2l-.1-1.5.6-.1.2 1.5c.1 1-.2 1.9-.9 2.6zm-50.1 2.6l-.7.1-.5-4 .7-.1zm50.6-8.3l-.7.1-.5-4 .7-.1zm-51.3 2.6l-.7.1-.5-4 .6-.1zm50.7-8.3l-.7.1-.5-4 .6-.1zm-51.3 2.7h-.7l-.5-4h.7zm50.6-8.4l-.7.1-.5-4 .7-.1zm-51.4 2.7l-.6.1-.5-4 .6-.1zm50.6-8.4l-.6.1-.5-4 .6-.1zm-51.3 2.7l-.7.1-.5-4 .7-.1zm50.6-8.4l-.7.1-.5-4 .7-.1zm-51.4 2.7l-.6.1-.6-4 .7-.1zm50.6-8.3l-.6.1-.6-4.1h.7zm-51.3 2.6l-.7.1-.5-4 .7-.1zm50.6-8.3l-.7.1-.5-4 .7-.1zm-51.4 2.7h-.7l-.5-4h.7zm50.6-8.4l-.7.1-.3-2.4q-.1-.8-.5-1.3l.5-.4c.4.4.6 1 .7 1.6zm-51 2.8l-.6-.2c.4-1.1 1.4-1.8 2.5-2l1-.1.1.6-1 .2c-.9.1-1.7.7-2 1.5zm48.3-7.3q-.5-.1-1.1 0l-2.8.3-.1-.6 2.8-.4q.7-.1 1.3.1zm-5.5.5l-4 .5-.1-.7 4-.5zm-5.6.8l-4 .5-.1-.7 4-.5zm-5.7.7l-4 .5-.1-.6 4-.6zm-5.7.8l-4 .5-.1-.7 4.1-.5zm-5.7.7l-4 .5-.1-.6 4-.5zm-5.7.7l-4 .5-.1-.7 4-.5zm-5.6.7l-4 .5-.1-.6 4-.5z"
      />
      <Path
        fillRule="evenodd"
        className="s33"
        d="M683.5 284c-1.5.2-3-.5-3.8-1.8l-1.3-2.1-2.3-.7c-1.2-.4-2.2-1.3-2.6-2.6-.4-1.2-.2-2.5.6-3.6.7-.8 1.6-1.3 2.6-1.4q.5-.1.9-.1l1.6.2 2.5-3.8-4.1-1.2c-1.2-.4-2.2-1.4-2.6-2.6-.4-1.2-.2-2.6.6-3.6l.7-.9c.7-.8 1.6-1.4 2.6-1.5h.9l7.9.7 2-3c.5-.8 1.3-1.4 2.1-1.6l3.2-1q.3 0 .6-.1c1.1-.1 2.3.2 3.1 1 .9.8 1.3 1.9 1.3 3l-.1 3.3c0 .9-.4 1.8-1 2.5l-2.4 2.7 2.6 7.4c.5 1.3.3 2.7-.5 3.8l-.8.9c-.6.8-1.5 1.3-2.5 1.5-1.6.2-3.1-.6-3.9-1.9l-2.2-3.6-3 3.4.5 1.5c.5 1.3.2 2.6-.6 3.7-.6.8-1.5 1.4-2.6 1.5zm-6.5-10.2c-.5 0-1 .3-1.3.7-.3.5-.5 1.1-.3 1.7.2.6.7 1.1 1.3 1.2l3 1 1.7 2.7c.4.6 1.1 1 1.9.9.5-.1.9-.3 1.2-.7.4-.5.5-1.2.3-1.8l-1-2.7 5.7-6.3 3.7 6c.3.6 1.1.9 1.8.9.5-.1.9-.4 1.2-.8l.8-.9c.3-.5.5-1.2.2-1.8l-3.1-8.6 3.3-3.6c.3-.3.5-.7.5-1.2l.1-3.3c0-.5-.2-1-.6-1.4-.5-.4-1.2-.6-1.8-.4l-3.2.9c-.4.1-.8.4-1 .8l-2.7 4.1-9.1-.9c-.6 0-1.3.2-1.6.7l-.8 1c-.3.5-.4 1.1-.3 1.7.2.6.7 1 1.3 1.2l6.7 2-4.7 7.1-2.8-.2h-.4z"
      />
      <Path
        className="s33"
        d="M697 257.2l-.1 3.3q-.1.3-.3.5l-3.6 4.1 3.3 9.2c.1.3 0 .6-.2.8l-.7.9c-.3.5-1.1.5-1.4-.1l-4.3-7.1-7 7.8 1.1 3.2c.1.3.1.6-.1.8-.4.5-1.1.5-1.4 0l-1.6-2.6q-.1-.2-.1-.4l-.4-.2q-.1 0-.3-.1l-2.9-.8c-.6-.2-.8-.9-.5-1.4.2-.2.5-.3.8-.3l3.4.3 5.8-8.7-8-2.5c-.6-.1-.8-.8-.5-1.3l.8-.9c.1-.3.4-.4.7-.4l9.7.9 3-4.6q.2-.2.5-.3l3.2-.9c.5-.2 1.1.2 1.1.8z"
      />
      <Path
        className="s32"
        d="M750.8 292.4c-7.5-1.2-12.7-8.3-11.6-15.8l7.1-46c1.2-7.5 8.3-12.7 15.8-11.6l74.9 11.6c7.6 1.2 12.8 8.3 11.6 15.8l-7.1 46c-1.1 7.5-8.2 12.7-15.8 11.5z"
      />
      <Path
        className="s33"
        d="M749.8 290.2c-7.5-1.2-12.7-8.3-11.6-15.8l7.1-46c1.2-7.5 8.3-12.7 15.8-11.5l74.9 11.5c7.6 1.2 12.8 8.3 11.6 15.8l-7.1 46c-1.2 7.5-8.3 12.7-15.8 11.5z"
      />
      <Path
        className="s33"
        d="M823.9 296.9L752 285.8c-5.8-.9-9.8-6.4-8.9-12.2l6.6-43c.9-5.8 6.4-9.8 12.2-8.9l71.9 11.1c5.8.9 9.8 6.4 8.9 12.2l-6.6 42.9c-.9 5.9-6.4 9.9-12.2 9z"
      />
      <Path
        fillRule="evenodd"
        className="s35"
        d="M842.9 243.5l-7 45.9c-.8 5-5.5 8.5-10.5 7.7l-74.9-11.6c-5-.7-8.4-5.4-7.6-10.4l7.1-46c.7-5 5.4-8.4 10.4-7.6l74.9 11.6c5 .7 8.4 5.4 7.6 10.4zm-1.3-.2c.6-4.2-2.3-8.2-6.5-8.8l-74.9-11.6c-4.2-.7-8.2 2.2-8.8 6.5l-7.1 45.9c-.7 4.2 2.2 8.2 6.4 8.8l74.9 11.6c4.2.6 8.2-2.3 8.9-6.5z"
      />
      <Path
        fillRule="evenodd"
        className="s35"
        d="M839.9 244.4l-6.7 43.3c-.6 4.1-4.5 6.9-8.6 6.3l-72.4-11.2c-4.1-.6-6.9-4.5-6.3-8.6l6.7-43.3c.7-4.1 4.5-6.9 8.6-6.3l72.4 11.2c4.1.6 6.9 4.5 6.3 8.6zm-.5-.1c.6-3.8-2-7.5-5.9-8.1l-72.3-11.1c-3.9-.6-7.5 2-8.1 5.9l-.1.6-6.6 42.7c-.6 3.8 2.1 7.5 5.9 8l72.4 11.2c3.8.6 7.4-2 8-5.9z"
      />
      <Path
        className="s35"
        d="M831.6 277.2l-49.6-7.6 3.6-23 49.6 7.7zM835.5 241.1l-.8-.1v-.3l.8.1zM826.4 239.7l-1.7-.3.1-.2 1.6.2zM823.1 239.2l-1.7-.3.1-.2 1.6.2zM796.6 235.1l-1.6-.3v-.2l1.6.2zM793.3 234.6l-1.7-.3.1-.2 1.6.2zM829.7 240.2l-1.7-.3.1-.2 1.6.3zM833 240.7l-1.6-.3v-.2l1.6.3zM799.9 235.6l-1.6-.3v-.2l1.7.3zM809.8 237.1l-1.6-.2v-.3l1.7.3zM819.8 238.7l-1.7-.3.1-.2 1.6.2zM816.5 238.1l-1.7-.2v-.2l1.7.2zM803.2 236.1l-1.6-.3v-.2l1.7.3zM806.5 236.6l-1.6-.2v-.3l1.7.3zM813.2 237.6l-1.7-.2v-.3l1.7.3zM790 234.1l-.8-.2v-.2l.8.1zM827.2 289.4l.8.1v.2l-.9-.1zM794.1 284.3l1.7.2-.1.3-1.6-.3zM790.8 283.8l1.6.2v.2l-1.6-.2zM797.4 284.8l1.7.2-.1.3-1.6-.3zM787.5 283.2l1.6.3v.2l-1.7-.2zM820.6 288.3l1.6.3v.2l-1.7-.2zM814 287.3l1.6.3v.2l-1.7-.2zM810.6 286.8l1.7.3v.2l-1.7-.3zM817.3 287.8l1.6.3v.2l-1.7-.2zM800.7 285.3l1.7.2-.1.3-1.6-.3zM825.5 289.3l-1.7-.2.1-.2 1.6.2zM784.2 282.7l1.6.3v.2l-1.7-.2zM807.3 286.3l1.7.3v.2l-1.7-.3zM804 285.8l1.7.2-.1.3-1.6-.3zM782.5 282.7l-.8-.1v-.3l.8.2zM768.3 252.2v.1q-.2.3-.4.5c-.1-.1-.1-.2-.1-.3 0-.1 0-.1-.1-.2q-.1-.1 0-.2t.1-.3.1-.3c0-.1.1-.1.2-.1q.1.1 0 .2v.3c-.1.2 0 .2.1.2q.2 0 .1.1zM762.9 262.6q-.1.1-.1.3 0 .2-.1.2c-.1 0-.3 0-.3-.2q-.1-.2.1-.3l.2-.4q.1-.1.2 0 .1 0 .1.1 0 .2-.1.3zM786.2 243.2h.1v.1q0-.1-.1-.1zM786.1 243.8c0-.2.1-.4.2-.5q.1.1.2.3.1.2.3.1c.3 0 .3 0 .4.3 0 0 .1.1 0 .1l-.1.1q-.4-.1-.9-.1s-.2-.2-.1-.3zM773 282.4v.1h-.1c-.3-.2-.6-.5-.8-.6l-.3-.3-.1-.1h.1q.1 0 .2.1l.6.3c.2.2.3.4.4.5zM773.4 270.2c0 .1-.1.2-.1.2l-.1.1c-.1 0-.1-.1-.1-.1 0-.3-.2-.7-.2-1v-.1h.1c.1 0 .1.1.2.1l.2.8zM772.5 230.5q0-.1-.1-.1l.1-.1q.3 0 .7.1s.1 0 .1.1c.1 0 .1.1 0 .2s-.7-.1-.8-.2zM771.5 229.3c0-.2.1-.4 0-.6-.1 0 0 0 0 0 .2.1.3.3.4.4v.4c-.1.1-.2.1-.3 0 0 0-.1-.1-.1-.2zM756.7 236.6c-.1-.1-.1-.3 0-.4 0-.1.1-.1.2-.1h.1c.2.1.1.5-.1.6-.1 0-.2 0-.2-.1zM775.3 273.8v.1q-.1 0-.1.1-.3 0-.4-.2-.1-.3-.2-.5 0-.1-.1-.1h.2q.1.2.3.4.1.1.3.2zM757.4 233.7q-.1-.1-.1-.3s.1 0 .2-.1h.2c.1 0 .1.1.2.2l-.1.1-.2.2c-.1 0-.2 0-.2-.1zM775.3 238c.3.2.4.4.3.7h-.1q-.2-.3-.3-.6 0-.1.1-.1zM755.9 237.8v.1h-.1q-.1 0-.2-.1c-.1-.1-.2-.2-.1-.4v-.1c.1 0 .2 0 .2.1l.2.4zM755.3 251v-.2q.1 0 .2.1t.2.3c.1 0 0 0 0 .1-.3 0-.4-.1-.4-.3z"
      />
      <Path
        className="s35"
        d="M798.9 256.1c-.2-.1-.3-.3-.3-.5 0 0 .1-.1.2-.1l.1.1v.5zM754.8 237.2q-.2-.3-.4-.5v-.1q.1-.1.2 0c.2.1.2.3.3.5q0 .1-.1.1zM769.4 231.5l.1-.1.2.1c0 .1.1.2.1.3 0 0-.1.1-.2.1-.1.1-.2 0-.2-.1q.1-.2 0-.3zM756.4 230q-.4-.2-.7-.5c.1 0 .3 0 .3.1q.2.3.5.2s0 .1.1.2h-.2zM755.7 229.6v-.1.1zM755.5 255.7h.1s.1 0 .2.1.2.3.3.5v.1q-.1 0-.2-.1c-.1-.1-.1-.4-.4-.5v-.1zM755.7 236.4c-.1 0-.3-.1-.3-.2s0-.2.1-.2.3.2.3.4h-.1zM771.6 231.6v-.2c.1-.1.3 0 .4.1l-.1.1c-.1.1-.3.1-.3 0zM749.1 261.2v.1l-.1.1c-.2-.1-.3-.3-.2-.4 0-.1.1-.1.1-.1q.1.2.2.3zM773.7 240.4s.1.1 0 .1c0 .1-.1.2-.1.1q-.2 0-.3-.1-.1 0-.1-.1h.5zM786 243c0-.1-.1-.2 0-.3q.2 0 .3.1.1.1.1.2-.1.1-.1.2-.2-.1-.3-.2zM780.7 266.9h-.1c-.1-.1-.2-.2-.1-.3h.3q-.1.2-.1.3zM759.3 254.8c0 .1-.1.3-.3.3v-.1q0-.1.1-.2l.2-.1v.1zM789.6 277.3l.1-.1q.2 0 .4.1l-.1.1s-.1.1-.2.1-.1-.1-.2-.2zM795.1 250.6h.2c.1.2 0 .4-.1.5h-.2q.1-.3.1-.5zM750 262.5v.1c-.2.1-.3-.1-.4-.1q-.1-.1-.1-.2h.2c.1 0 .3 0 .3.2zM768.1 253.3q.2.1 0 .3h-.1q0-.1-.1-.3h.2zM779.5 281.7v.1c0 .1-.1.1-.1 0h-.1q-.1-.1-.1-.2v-.1h.1l.2.2zM760 267.9q.1 0 .1.1l-.1-.1zM760 267.9q-.1.2-.3.3l-.1-.1c-.1-.1 0-.2 0-.2h.4zM751.1 261.1v.1q-.1.1-.1.2h-.1q-.1 0-.1-.1t.1-.2h.2zM777.5 269h.2v.1l-.1.1h-.2s0-.2.1-.2zM788.4 273.8l-.1.1h-.2c-.1-.1-.1-.2 0-.2 0-.1.2 0 .3.1zM772.3 240.4zM772.5 240.3q-.1 0-.2.1v-.2c0-.1.1-.2.1-.2s.1.1.2.1c0 0-.1.1-.1.2zM755.8 231.1q.1 0 .1.1l-.1.1-.2-.2v-.1h.1q.1 0 .1.1zM767.8 239.4c.1.1.2.2.1.4l-.1.1s0-.1-.1-.1q-.1-.2.1-.4zM767.8 239.4zM754.8 250.8q.1.1.1.2h-.2c-.1-.1-.1-.3 0-.3q.1 0 .1.1zM758.1 255.7c0 .1-.1 0-.2.1v-.3h.3c0 .1 0 .2-.1.2zM771.2 275.4h.2c0 .1 0 .2-.1.2 0 .1-.1 0-.2 0 0-.1 0-.2.1-.2zM766.9 271.4l-.2-.2v-.1q.1 0 .1.1.1.1.3.2 0 .1.1.2l-.1-.1q-.1-.1-.2-.1zM774.9 280.1v.1q-.1-.1-.3-.2v-.1h.1c.1 0 .2.2.2.2zM763.7 271.2q.1.2.2.3v.1h-.1q-.1-.2-.2-.3 0-.1.1-.1zM754.3 233.3q.1 0 .2.1l-.1.1s-.1 0-.1-.1v-.1zM757.6 229.1q-.1-.1-.1-.2h.1c.1 0 .1.1.1.2h-.1zM767.8 238.6v-.1c.1 0 .1 0 .2.1v.2l-.2-.2zM782.1 268.7v.3l-.2-.2v-.1h.2zM782.1 269z"
      />
      <Path
        className="s35"
        d="M780.2 267.1l.2.2c-.1 0-.2.1-.2 0q-.1 0-.1-.1l-2.3 14.7-.4-.1 7.5-48.6h.5l-5.3 34 .1-.1zM776.2 233.6h.1q.1.2.1.3h-.1c-.1-.1-.2-.2-.1-.3zM779.7 275.2v.2h-.1c-.1 0-.1-.1-.1-.2h.2zM784.4 271.8h-.1v-.2l.1.1v.1zM755.7 255s0-.1.1-.2c0 0 .1 0 .1-.1v.3h-.2zM754.9 255.8h.3v.2c0 .1-.1 0-.1 0l-.2-.2zM771.6 271.5v.1h-.1q-.1.1-.2 0 .1 0 .1-.1l.1-.1s.1 0 .1.1zM752.3 254v.1h-.2v-.2c.1 0 .2 0 .2.1zM780 280.6h-.1l-.1-.1-.1-.1v-.1h.1q.1.1.2.3zM786.6 242.6v.3q-.1-.2-.1-.3v-.1c.1 0 .1.1.1.1zM786.6 242.9h-.1.1zM774.2 278.1q-.1 0-.1-.1-.1 0-.1-.1v-.1h.1q0 .1.1.2v.1zM782 271.8c0 .1-.1.1-.2 0l-.1-.1c.1 0 .2-.1.2 0 .1 0 .1.1.1.1zM773.6 232.7q-.1-.1-.1-.2h.2v.1l-.1.1zM784.9 242.5v-.2l.1.1q.1.1.2.3-.1-.1-.3-.2zM785.2 242.7zM756.8 234.1v-.2h.1v.1l-.1.1zM766.5 240.9l-.1-.1h.2v.1h-.1zM757.2 230q-.1-.1-.1-.2.1 0 .1.1.1 0 .1.1h-.1zM767.6 239.2v-.1c.1 0 .1 0 .2.1v.2l-.2-.2zM781.4 248.6v.1s-.1 0-.1-.1q-.1-.1-.1-.2h.1q.1.1.1.2zM775.6 242.1h.2s0 .1-.1.1h-.1v-.1zM780.9 247q-.1-.1-.1-.2h.2v.1l-.1.1zM776.5 268.4v-.1h.2q0 .1-.1.1h-.1zM754.9 251.7h.2v.1h-.1l-.1-.1zM758.1 254.9l-.1-.1v-.2q.1.1.2.1c0 .1-.1.1-.1.2zM755.7 252.8s0-.1.1-.1q0 .1.1.2h-.1q-.1 0-.1-.1zM786.4 271.1v.1q-.1 0-.1-.1-.1 0-.1-.1.1 0 .2.1zM764.6 267.4l-.1-.1q-.1 0-.1-.1h.2v.2zM749.7 260.4v-.1l.1.1q.1.1.1.2l-.1-.1-.1-.1zM750.5 262.7q.1.2.1.3l-.1.1c0-.1-.1-.1-.1-.1q.1-.1.1-.3zM785.6 242.1v-.1s.1 0 .1.1v.1q-.1 0-.1-.1zM770.7 227.9v-.1h.1v.1h-.1zM769.2 228.1q-.1-.1-.1-.2.1 0 .1.1v.1zM756.5 236.9v.1l-.1.1h-.1l.2-.2zM762.1 230.9v-.1q.1 0 .1.1h-.1zM768.7 233.9h.2v.1q-.1 0-.2-.1zM785.7 269.8q.1 0 .2.1-.1 0-.2-.1zM781 268.9l-.1-.1q-.1 0-.2-.1.1 0 .2.1.1 0 .1.1zM780.7 268.6v0z"
      />
      <Path
        className="s35"
        d="M780.6 268.6l.1.1h-.1q-.1 0-.2-.1v-.1q.1.1.2.1zM784.7 273.8v.1l-.1-.1-.1-.1q.1.1.2.1zM774.7 231.3l-.1-.1.1-.1h.1q0 .1-.1.2zM775.6 267.2q0-.1-.1-.1h.1l.1.1h-.1zM754.4 248.5v.1h-.1v-.1h.1zM756 250.8q-.1-.1-.2-.1v-.1q.1 0 .1.1l.1.1zM780.3 274.5v-.1h.1v.1h-.1zM756 252.2l-.1-.1-.1-.1q.1 0 .2.1v.1zM753.3 252.8v.1h-.2l.1-.1h.1zM771.9 230.3v-.2h.1v.1l-.1.1zM758.2 258.8h.1v.1h-.1v-.1zM780.4 282.2q-.1-.1-.2-.1v-.1l.1.1.1.1zM770.9 273.8q-.1 0-.2-.1h.2v.1zM782.1 285.1l.1.1q-.1 0-.2-.1v-.1l.1.1zM775.3 233.5v-.1h.2v.1h-.2zM762.4 269.6q0 .1.1.1h-.2v-.1h.1zM762.8 271.1v.2q-.1-.1-.1-.2v-.1l.1.1zM773.9 281.9v.1h-.1c-.1 0 0-.1 0-.1h.1zM759.3 269.5q0 .1.1.2h-.1q0-.1-.1-.1l.1-.1zM772.3 283q0 .1.1.1v.1l-.2-.2h.1zM764 275.4h-.1l-.1-.1h.1q0 .1.1.1zM791.3 274.1h.1v.1l-.1-.1zM782.5 267.2v0zM796.3 252.1l.1.1q-.1 0-.1-.1zM783 269.7h-.1.1zM785.8 272.6q.1 0 .1.1h-.1v-.1zM779.2 266.6v-.1.1zM758 238.9l-.1-.1h.1v.1zM774.9 267.5h-.1q0-.1.1-.1v.1zM778.2 270.4v.1h-.1q.1 0 .1-.1zM771.2 269v.1h-.1q.1 0 .1-.1zM755.9 238.8l-.1-.1h.1v.1zM752.4 252.3q.1 0 .1.1-.1 0-.1-.1zM778 235.7q-.1 0-.1-.1.1 0 .1.1zM754.5 232.2h-.1.1v0zM780.7 280.5l.1.1h-.1v-.1zM755 233.2h.1v.1q-.1 0-.1-.1zM782.6 284h-.1v-.1l.1.1zM769.6 272.2h-.1.1zM770.3 237.1v-.1h.1v.1h-.1zM768.9 273v-.1.1h.1-.1zM757 231.8h.1l-.1.1v-.1zM770.3 277.1v-.1.1zM771.4 278.1h.1v.1h-.1v-.1zM759.5 267.3h-.1v-.1l.1.1zM760.2 268.1l-.1-.1h.2l-.1.1zM750.6 260.6l.1.1h-.1v-.1zM758.9 268.5h-.1l.1-.1v.1zM770.5 279.9v-.1.1zM770 280.8v.1l-.1-.1h.1zM749.3 262.4h.2q-.1 0-.1.1h-.1v-.1zM749.5 262.3v0zM768.8 234.5h.1l.1.1h-.1q0-.1-.1-.1zM774.9 231.8v-.1.1zM775.1 232.5h-.1v-.1zM763.3 221.8h-.1l.1-.1zM796.8 253.4l-.1.1v-.1zM769.9 235.2v-.1zM769.6 236.6h-.1zM755.6 229.5h.1-.1zM755.4 232.4l-.1-.1h.1zM756.4 233.3h-.1.1zM756.9 239.1v.1-.1zM792.5 273.6v-.1zM788.1 270.2l.1-.1-.1.1zM755.7 240.3h.1-.1zM787.1 270.3h-.1zM782.2 269.2l-.1-.1v-.1q0 .1.1.2zM777.5 267.7h.1-.1zM780.4 271.1v.1zM784.3 274.9v.1h-.1zM779.8 270.8v.1zM776.3 270.8h-.1.1zM754 250.5h.1v.1zM778.1 273.1h.1l-.1.1zM773.1 268.5l.1.1h-.1zM757.5 254.2v-.1zM784.4 280h.1-.1zM784 280.5h.1-.1zM782.2 280v.1zM779.2 277.7v.1zM774.1 274.2v-.1l.1.1zM772.7 275.4l-.1.1.1-.1zM771.5 274.5v-.1zM772 276.3v.1zM765.8 272.2v.1-.1zM776.6 282.7l.1.1zM766.2 273.1l-.1.1v-.1zM760.7 268.9h.1zM775.6 282.8h.1-.1zM757.7 266.6l-.1.1zM767.6 276.1l.1.1-.1-.1zM750.5 262.7zM750.5 262.6v.1q0-.1-.1-.1h.1zM757.6 269.5h-.1zM756.2 233.4l.1-.1q0 .1-.1.1zM772.6 229.9v-.1.1zM786.5 243v-.1.1zM786.4 243h0zM785 270.7v.1-.1zM785.9 274.3h.1-.1zM777.1 237.3v.1zM769.8 234.3zM762.8 271.3zM821.4 287.8l-.1-.1.1-.1h.5l.1.1c0 .1-.1.1-.1.1h-.5zM829.1 287.2v.2q0 .1-.1.1v-.1c0-.2-.1-.4 0-.6h.1s.1 0 .1.1q0 .1-.1.3zM823.5 279.6c.1-.2.2-.1.3-.1q.1.1.1.2-.2.1-.3.1c-.1 0-.1-.2-.1-.2zM826.7 277.6c0 .1-.1.1-.2.2q-.1-.2-.1-.3s.1-.1.2-.1.2.1.1.2zM834.9 269.2q-.1-.1-.1-.2c0-.1 0-.1.1-.1q0 .1.1.2l-.1.1zM825 279.6h.2c0 .1 0 .2-.1.2q-.1-.1-.2-.1c.1 0 .1-.1.1-.1zM827.8 284.5q0 .1.1.1-.1.1-.2.1l-.1-.1-.1-.1H827.8zM825.3 291.8q-.1.2-.3.4l-.1-.1c0-.2.3-.3.4-.3zM821.6 285.9q-.1 0-.2.1l-.1-.1q.1-.1.2-.1c.1 0 .1 0 .1.1zM832.6 273.7q.1.1.1.2c0 .1-.1.1-.1.1q-.1-.1-.2-.3h.2zM825 285.5q0 .1-.1.3 0-.2-.1-.3l.1-.1c.1 0 .1.1.1.1zM827.3 276.8l.1-.1q0 .1.1.2l-.1.1q-.1-.1-.1-.2zM827.7 280.7q.1.1.2.1c0 .1-.1.1-.1.1q-.1 0-.1-.1c-.1 0 0-.1 0-.1zM828.6 281v.2h-.1q-.1-.1-.1-.2h.2zM825.4 286.6q-.1.1-.2.1h-.2v-.1q.2 0 .3-.1.1 0 .1.1zM826.9 274.5h.1l.1.1q-.2.1-.2 0v-.1zM826.6 274.9q-.1 0-.2-.1h.1l.1.1zM827.3 283v.1h-.1v-.1h.1zM833.4 278.6q0 .1.1.1-.1 0-.1.1-.1-.1-.1-.2h.1zM827 278.1q.1-.1.2-.1v.1q-.1 0-.1.1l-.1-.1zM829.4 285.4h-.2-.1q.1-.1.2-.1l.1.1zM830 287l.1.1h-.1l-.1-.1h.1zM828.5 284.5h-.1v-.1q.1 0 .1.1zM823.1 283.7h-.1l-.1-.1h.2v.1zM826.4 273.7v.1-.1zM826.6 273.7h-.2H826.6zM831 286.2v-.1q.1 0 .1.1h-.1zM834 265.8v-.1l.1.1q-.1 0-.1.1v-.1zM827.8 275.5h.1-.1zM827.9 288.2q0-.1.1-.2v.2h-.1zM831.1 289l.1-.1v.1h-.1zM827.3 288.6h.1q0 .1.1.1h-.1l-.1-.1zM822.1 291h.1v.1h-.1v-.1zM827.5 272.9q.1 0 .1.1h-.1v-.1zM825 278.3v.1h-.1zM827.6 278.9v.1-.1zM830.4 279.8v.1zM827.6 279.6v.1zM831.2 281.8v-.1zM829.3 282.3v.1h-.1zM830.6 283.7h-.1.1zM830.7 283.8l-.1-.1.1.1zM832.4 284.1h-.1.1zM830 289.3h.1l-.1.1zM826.1 289.9h.1zM826.7 290.3h.1-.1zM824.5 284.8l.1-.1zM760 276.6z"
      />
      <Path
        className="s33"
        d="M798.1 270c0 .2-.2.3-.4.2q-.4-.2-.9-.5h-.1.1c.5-.1.7-.6 1.2-.6h.1l.1.1q-.1.4-.1.8zM788.3 244.4c0 .3-.5.7-.9.6-.1 0-.2 0-.3-.1 0-.1.1-.4.2-.4.3-.1.5-.3.7-.5h.2c.1.1.1.2.2.2 0 .1 0 .1-.1.2zM761 237.7c.4.1.6.1.8.1.4.1.4.1.4.4q0 .2-.1.4v.1s-.1 0-.1-.1c-.1-.3-.3-.4-.6-.4q-.2-.1-.4-.1c-.2-.1-.3-.2-.2-.3q.1-.1.2-.1c.1 0 .1 0 0 0zM816.5 239.4v.3c-.1.1-.2.1-.3.1-.4 0-.5-.2-.6-.5v-.1c.2 0 .3-.1.5-.1.4-.2.4-.2.4.3zM754.2 250c0 .1-.1.2-.2.2h-.2c0-.3-.2-.5-.4-.6-.1 0-.1-.2-.1-.2.1-.1.2-.2.3-.2.2 0 .6.5.6.8zM816.4 237.5q-.1.2-.1.4c-.1 0-.2.1-.2 0-.2-.2-.5-.4-.7-.6-.1-.1-.1-.2-.1-.2.1 0 .1-.1.2-.1q.4.2.8.3c.1.1.1.1.1.2zM813.9 237.7c.3-.1.5.1.6.3.1.1 0 .2-.1.2s-.3 0-.4.2c0 .1 0 .3-.1.2-.1 0-.1-.2-.1-.2.1-.3 0-.4-.2-.5 0-.1 0-.1-.1-.2h.4zM749.9 278.8c-.3 0-.4 0-.5-.1h-.2q.1-.1.2-.1h.2c.3-.1.5-.1.8-.1.2 0 .4.2.7.2v.1c-.1 0-.1.1-.1.1-.5-.1-.9-.1-1.1-.1zM790.1 280.5s-.2-.1-.5-.1v-.1l.1-.1c.4.1.9-.1 1.4.2q0 .1.1.2h-.2c-.3 0-.5-.1-.9-.1zM753.9 245.1c-.4.2-.8.1-1.1-.2-.1 0-.1-.1-.1-.2h.1c.3.2.6.1.8.1.2-.1.3.2.3.3zM783.9 268.4c0-.2 0-.4-.3-.6q-.2 0-.4-.1h-.1c0-.1.1-.1.1-.1.4 0 .7.1 1 .3.2.2.1.4-.1.5h-.3zM788.8 280.9v.1c-.2.2-.3.5-.7.5-.1 0-.2-.1-.3-.2 0-.1.1-.1.2-.2l.6-.2c0-.1.1 0 .2 0zM780.5 251.6c-.1 0-.2 0-.3-.1 0 0-.1-.1-.1-.2q.2-.3.5-.3c.1 0 .4.5.3.6h-.4zM782.6 260.2h-.2l-.1-.1c0-.1 0-.2.1-.3h.2c.1 0 .1.1.2.1.1.2.2.2.4.1.1 0 .1.1.2.1-.1.1-.1.2-.2.2-.2 0-.3 0-.6-.1zM788.2 245.9s.1 0 .2.1c.1 0 0 .1 0 .1-.2.1-.4.1-.6.3l-.2-.2-.1-.2c.1-.2.2-.2.4-.2 0 0 .1.1.3.1zM839.3 245.4q0-.2.1-.2t.2.1q.1.1.3.2c0 .1 0 .3-.1.3h-.6s-.1 0-.2-.1c.1 0 .2 0 .2-.1.1 0 .1-.1.2-.2h-.1zM752.4 246c-.1-.1-.4-.2-.6-.3-.4-.1-.3-.4-.1-.7h.1q.1 0 .1.1-.1.1-.1.2 0 .2.2.3.3.1.6.3.1 0 .2.1h-.2-.2zM785.6 245.7q-.1-.1-.1-.2c0-.1.1-.1.2 0s.3.1.3.4v.4c0 .1-.1.1-.1.1-.2-.2-.5-.4-.3-.7zM811 246.3c.1.1.2.2.2.3q0 .2-.1.4c0 .1 0 .1-.1.1h-.1l-.2-.4c0-.1-.2-.1 0-.2 0-.1.2-.1.3-.2zM782 261.2q-.4-.1-.6-.2l-.1-.1.1-.1q.3.1.5.1c.4.1.6.2.5.2-.1.1-.3.1-.4.1zM801.5 256.2c0 .1-.2.2-.2.1q-.2-.2-.4-.3c0-.1-.2-.2 0-.3h.3c.2.1.4.3.3.5zM813.1 248.9c0 .1.2.1.2.1.1.1.1.2.1.2-.1.1-.1.2-.2.2s-.3-.1-.4-.1c-.1 0-.2-.1-.2-.2.1-.1.2-.1.3-.2h.2zM768.1 240.3l-.2.2q-.6 0-1.1.1s-.1-.1-.1-.2l.1-.1h.1c.4.2.7 0 1-.1 0 0 .1.1.2.1zM747.3 269.3q.2 0 .4.1h.1q0 .1-.1.1-.2.3-.5.1-.2-.1-.4-.3-.1 0-.1-.1h.1q.3 0 .5.1zM826.6 253.4q-.3-.1-.5-.2c-.1 0-.1-.1-.1-.1l.1-.1q.4.1.7.2c.1 0 .2.2.2.3q-.1-.1-.3-.1h-.1zM784.9 244.7c0-.1-.1-.2 0-.3 0-.1 0-.2.1-.2.2-.1.4-.1.5.1v.2l-.6.2zM753.1 232.6s-.1 0-.1-.1c-.1 0-.1-.1-.1-.1 0-.1 0-.2.1-.2.1-.1.2-.1.3 0 .2 0 .2.1.4.2v.1q-.1 0-.1.1h-.5zM814.1 247.3v.5h-.3c-.1 0-.1 0-.1-.1.2-.2.1-.5.3-.7 0-.1.1-.1.1-.1.1 0 .1.1.1.1q0 .2-.1.3zM813.4 250.7c-.1.1-.1.2-.2.2q-.2.1-.4.1c-.1 0-.1-.1-.1-.1 0-.2.2-.5.4-.5l.3.3zM755.6 237.1l.3.3c.1 0 0 .2 0 .3 0 0-.1 0-.2-.1q-.2-.1-.4-.3c-.1 0-.1-.1-.1-.1l.1-.1h.3zM808.5 245.6l-.2-.1c-.1 0-.1-.1-.1-.1 0-.1 0-.2.1-.2.2-.1.4 0 .6.1v.2q-.3.1-.4.1zM823.2 245.3q.2 0 .4.1.1 0 .2.1c-.1 0-.2.1-.3.1q-.2 0-.5-.1c-.1 0-.2-.2-.3-.2h.5zM786.3 247.2s0 .1-.1.1h-.2c-.2-.1-.3-.3-.1-.4 0-.1.2-.2.2-.2.1.1.2.2.2.3.1 0 0 .1 0 .2zM785.1 282.8q.3.2.7.4v.1c-.3.2-.5.2-.6-.1 0-.1-.1-.2-.2-.2 0-.1.1-.1.1-.2zM797.4 267.9q.3.2.7.4v.1q-.5-.1-.9-.2s0-.1-.1-.2h.1c.1 0 .1 0 .2-.1zM769.4 233.5s.1 0 .1.1v.2l-.4.2s-.2 0-.2-.1c0-.3.2-.5.5-.4zM815.1 276.7c-.2-.1-.4-.1-.5-.2h-.1q0-.1.1-.1c.2.1.3 0 .5-.1 0-.1.3.1.3.2v.1c-.1 0-.3.1-.3.1zM771 270c-.1.2-.2.4-.5.4q-.2 0-.2-.1c-.1-.2 0-.3.1-.3h.6zM779.4 243.8c.1.1.1.1.1.2q-.2.1-.3.3h-.3q-.1-.2-.1-.3c0-.1.1-.2.2-.2h.4zM773.9 238.7q0 .4-.3.1-.1 0-.1-.1c-.1-.1-.1-.2 0-.3h.1c.3-.1.4 0 .3.3zM802.2 257.4c0 .1-.1.1-.1.1-.1.1-.2.1-.2 0q-.2-.3-.3-.6h.1q.3.2.5.4v.1zM809.7 273.5c-.1.1-.3.2-.4.2-.1 0-.2-.1-.3-.1-.1 0-.1-.1-.1-.1.2-.2.6-.2.7-.1q.1 0 .1.1zM807.7 254.5c0-.1-.2-.1-.3-.2 0 0 0-.1.1-.2s.5.1.5.3c0 0 0 .1-.1.1h-.2zM756.1 230c-.2.1-.3.2-.4.3-.1 0-.2-.2-.2-.4 0-.1.2-.2.3-.1.1 0 .2.1.3.2zM759.8 232.1q-.1-.1-.2-.3l.1-.1c.2-.1.5.1.6.3l-.1.1h-.4zM774.3 234.8q-.1 0-.1.1s-.2 0-.3-.1c-.1-.1-.1-.4 0-.4s.2 0 .3.1c0 0 .1.2.1.3zM803.5 255.1c-.1 0-.2-.1-.2-.1-.1-.1-.3-.1-.2-.3h.3q.1 0 .3.1s.1.2 0 .2c0 .1-.1.1-.2.1zM800.5 268.9h-.1q-.2-.2-.3-.4v-.1c.1 0 .1-.1.2-.1.2.1.3.4.2.6zM758.4 238.1c-.2 0-.4-.1-.5-.3-.1 0 0-.1 0-.2h.2q.2.2.3.5zM785.3 251.1h-.1c-.2-.1-.3-.3-.2-.5 0-.1 0-.1.1-.1.2 0 .3.3.2.6zM777.2 256.9c.1.1.2.1.2.1s.2.1.2.2-.2.2-.4.1c-.1 0-.2-.2-.2-.3.1 0 .2-.1.2-.1zM813.8 254.1c-.2 0-.4-.2-.3-.4l.1-.1q.1.1.3.1c.1.1.2.1.1.2 0 .1-.1.2-.2.2zM783 268.8l.2.2s0 .1-.1.2-.4-.1-.5-.3c0 0 .1 0 .1-.1h.3zM771.3 275.6c-.1 0-.1 0-.1-.1q-.1-.1 0-.2c0-.1.1-.1.2 0q.1 0 .2.1t.1.2s-.1.1-.2.1q-.1 0-.2-.1zM773 262c-.1 0-.2-.1-.4-.2v-.1h.1q.3.1.5.2c.1 0 .1.1.2.1q-.1.1-.2.1s-.1 0-.2-.1zM750.8 250.6q.1.2.3.4s0 .1-.1.1q0 .1-.1.1c-.3-.1-.4-.2-.3-.4.1-.1.1-.2.2-.2zM769.3 258.4q-.2 0-.3-.1h.1c.2 0 .4-.1.6-.3h.1c0 .2-.2.4-.3.4h-.2zM800.9 257.3q-.1 0-.2.1s-.2 0-.2-.1v-.5l.1-.1c.1.2 0 .5.3.6zM801.7 264.1q0-.1.1-.2h.1c0 .2-.1.4.1.5 0 .1.1.1 0 .2q-.1 0-.2-.1c-.2 0-.2-.2-.1-.4zM770.4 231.9l-.1.1-.6-.4c-.1 0-.1-.1 0-.1 0 0 0-.1.1-.1q.4.1.6.5zM821.6 244.6c0 .1 0 .1-.1.1q-.1.1-.3 0c-.1 0-.1-.1-.1-.2l.1-.1c.3 0 .4.1.4.2zM775.7 271.5v.1q-.2.2-.4.3c0 .1-.1 0-.1 0h-.1c.1-.3.3-.5.5-.5l.1.1zM763.7 234.6q-.1 0-.3-.1s-.1-.1-.1-.2c.1 0 .1-.1.2-.1h.2c.2 0 .2 0 .1.2q-.1.1-.1.3zM788.8 271.2q.1 0 .3.1 0 .1-.1.1h-.4c0-.1-.1-.1-.1-.2h.2q0-.1.1 0zM766.9 264.5s0 .1-.1.1-.3 0-.3-.2l.2-.2c.1 0 .2.1.2.3zM763.6 254.7q-.1.1-.2.3h-.1c-.1-.1-.1-.3 0-.4h.3v.1zM754.6 231.6c-.2-.1-.2-.2-.2-.4 0 0 0-.1.1-.2l.1.1.2.4s-.1 0-.2.1zM803 276.4q.1 0 .3.1c.2 0 .2.1.3.3-.1.1-.1.1-.2.1-.2-.1-.4-.3-.4-.5zM800.1 271.3l.2.2s.1.1 0 .1c0 .1-.1.1-.1.1q-.2 0-.3-.1v-.2q.1 0 .2-.1zM788.8 277.6v.2h-.2l-.1-.1q.1-.2.2-.5h.1v.4zM815.7 248.8c0-.2.2-.2.3-.2.1 0 .1.1.2.1 0 .1-.2.3-.3.2-.1 0-.2 0-.2-.1zM758.5 230.2h.1v.2H758c-.1-.1.2-.2.5-.2zM750.5 251.9c0 .1-.1.1-.2.1s-.2-.1-.1-.2l.1-.1c.1 0 .2 0 .2.2zM775.4 232.3c-.1 0-.1.1-.2.1 0 0-.1 0-.1-.1q-.1-.1 0-.2c0-.1 0-.1.1-.1h.1q.1.1.1.3zM756.4 244.4l-.1.1s-.4-.1-.4-.2v-.1c.2-.1.4 0 .5.2zM835.2 253.4h-.3q0-.1-.1-.1h.1q.4-.1.8-.1v.1h-.1c-.2.1-.3.1-.4.1zM763.7 236.7l-.1-.1c-.1-.2-.1-.4.2-.4h.1c.1 0 0 .1 0 .1q-.1.2-.2.5zM802.1 251.5c-.1.1-.2.1-.2.1l-.2-.2v-.2h.2c.1.1.1.2.2.3zM753.7 248.2l.1.1c.1 0 .3 0 .2.2 0 .1-.1.1-.1.1q-.2 0-.3-.1v-.2s.1 0 .1-.1zM754.6 254.8l.4.2h-.4q-.1 0-.2-.1-.1 0-.1-.1h.1q.1 0 .2.1v-.1zM755.9 234q-.1 0-.1.1l-.5-.5v-.1l.6.4v.1zM771.2 233.2c-.2-.1-.3-.2-.2-.4l.1-.1.2.4c.1 0 0 .1 0 .1h-.1zM816.2 278.1l.2.2v.2h-.2l-.2-.2.2-.2zM771 272.3q.1-.2.2-.3c.1-.2.1-.2.3 0v.2l-.1.1q-.2 0-.4-.1zM757.1 231c0 .1-.1.1-.1.1q-.2-.1-.3-.1v-.2c0-.1.1-.1.1-.1q.2.1.3.2v.1zM807.2 278.9c-.1.2-.2.2-.4.1v-.1l.2-.2c.1 0 .1 0 .2.1v.1zM763.6 263.4s-.1.1-.1.2c-.1 0-.2-.1-.3-.1 0 0-.1-.1 0-.1l.4-.2v.2zM789.2 279.5q-.2 0-.3.1c-.1 0-.2-.1-.2-.2 0 0 0-.1.1-.2h.2c0 .1.1.2.2.3zM810.7 268.6q.2.1.2.3s0 .1-.1.1-.2-.1-.2-.3v-.1h.1zM766.6 243.8c-.1.1-.2.1-.2.1-.1 0-.2-.1-.2-.2h.2c.1 0 .1.1.2.1zM836.5 248.4h-.1c0-.1 0-.1.1-.1h.3l.1.1h-.4zM783.9 263.1q.1 0 .1.1h-.7v-.1h.6zM815.9 252.2c-.1 0-.1.1-.1.2h-.2v-.1q.1-.2.1-.3c.1-.1.1-.1.2-.1V252.2zM777.8 246.3c.1-.1.2-.1.2-.2.1 0 .2.1.2.2s-.1.2-.2.2-.1-.1-.2-.2zM754.3 258.5l-.1-.1c0-.2.1-.3.3-.3 0 0 .1 0 .1.1s-.2.2-.3.3zM758.6 233.5q-.1 0-.2-.1v-.1c.1-.1.4 0 .4.1v.1h-.2zM757.6 245.8l-.1-.1v-.1c.1-.1.3 0 .4.1l-.1.1h-.2zM819.7 247.8q-.1-.1-.2-.1.1-.1.2-.1h.2q.1 0 .1.1l-.1.1h-.2zM819.2 275.9c-.1.1-.2.1-.2.1l-.2-.2c.1 0 .1-.1.2-.1l.2.2zM778.1 274q.1.1.2.1v.1s0 .1-.1.1q-.1-.1-.2-.1l-.1-.1q0-.1.1-.1h.1zM779.9 266.4h-.1q-.2.1-.3 0c-.1-.1 0-.2 0-.1h.3l.1.1zM797.4 278.1c0 .1-.1.1-.2.2h-.2c.1-.2.1-.3.3-.3l.1.1zM826.7 250.9h-.3q-.1-.1-.1-.2c-.1-.1.2-.2.2-.1.1 0 .1.1.2.3zM754.6 233.2v.1c-.1.1-.3 0-.4-.1v-.1c.1-.1.4 0 .4.1zM759 240.3h.1v.2q-.2-.1-.4-.1v-.1s0-.1.1-.1l.2.1zM773.4 275.7s-.1.1-.1 0q-.2 0-.3-.1c0-.1 0-.1.1-.2.2 0 .3.2.3.3zM756.4 274.2l-.1-.1c-.1 0-.1-.1-.1-.1l.1-.1q.1 0 .3.1l.1.1-.1.1h-.2zM785.6 278.8h-.2c-.1-.1-.1-.2-.2-.2l.1-.1s.3.1.4.1q0 .1-.1.2zM761 234.5h-.1q0-.1-.1-.1l.1-.1q.2 0 .3.1l.1.1H761zM822.2 243.7q.1 0 .2.1h.1c-.1.2-.4.2-.5.1v-.1l.2-.1zM820.3 251c0 .1-.3.1-.4 0v-.1c.1-.1.4-.1.4 0v.1zM779.6 245.1c-.2-.1-.3-.1-.4-.1 0 0-.1-.2 0-.2 0 0 .1-.1.2 0 0 0 .1.1.2.3zM789.3 269.3h-.2q-.2 0-.1-.2l.1-.1q.1.1.2.3zM824.3 250.8h-.5s-.1 0-.1-.1c0 0 .1-.1.2-.1s.3 0 .4.2zM809.7 248c-.1-.1-.1-.2-.1-.2-.1-.1.1-.2.2-.2 0 .1.1.2.1.2 0 .1-.1.1-.2.2zM772.7 265.3q.2 0 .4.1l.1.1v.1c-.1 0-.2 0-.2-.1q-.2-.1-.3-.2zM770.6 236c-.1 0-.2.1-.3.1 0 0-.1-.1-.2-.1 0-.1 0-.1.1-.1h.4v.1zM790 245.1h-.1q-.1-.1-.1-.2c0-.1.1-.1.1-.1s.1 0 .1.1v.2zM823.2 268l.1.1c.1.1 0 .2-.1.2s-.2-.1-.2-.1c0-.1.1-.2.2-.2zM809.4 246.7q-.1-.1-.1-.2.1 0 .3-.1s0 .1.1.1q-.1.1-.3.2zM776.7 268.8h-.3c-.1 0-.2-.1-.2-.2h.3l.2.2zM798.8 270.2v-.3s.1 0 .1.1q0 .2-.1.4v.1l-.1-.1q0-.1.1-.2zM817.9 273.4h-.3l-.1-.1s0-.1.1-.1h.2c0 .1 0 .1.1.2zM813.3 245.9l-.2.2c-.1 0-.2-.1-.1-.2 0-.1.1-.1.1-.1.1 0 .1 0 .2.1zM784.1 260.1h-.2l-.1-.1q.2-.1.3-.1v.2zM772.4 251.2q-.1.2-.2.2c-.1.1-.1.1-.2 0v-.1l.2-.2s.1.1.2.1zM758.3 242.7q-.1.1-.3.1h-.1c0-.1 0-.2.1-.2h.3v.1zM812.6 254.2h-.2c-.1 0-.3-.1-.2-.2h.2c.1 0 .1.1.2.2zM772.6 271.2l-.4-.2v-.1c.1-.1.1-.1.2-.1q.2.2.2.4zM778.3 245.6q0-.1-.1-.2v-.1s.1-.1.1 0q.1 0 .2.1v.2h-.2zM802.8 257.5l.1-.1.1.1v.3s0 .1 0 0h-.2v-.3zM797.4 280.1c.1 0 .2.1.2.1l-.2.2c-.1 0-.2-.1-.2-.1l.2-.2zM751.5 275.5h-.5l-.1-.1q0-.1.1-.1c.1 0 .3 0 .4.1l.1.1zM773.2 279.2h-.4c0-.1.1-.2.1-.2h.2c.1 0 .1.1.1.2zM790.6 285c-.1.1-.2.2-.4.2 0-.1-.1-.1-.1-.1 0-.1.1-.1.1-.1h.5zM812.3 288.6h-.3v-.1h.6v.1h-.3zM832.1 276.4q.1 0 .2.1h.1l-.1.1-.4-.2h.2zM822.4 275.1h.1q0 .1.1.1-.1.1-.2.1 0-.1-.1-.1 0-.1-.1-.1h.2zM799.2 271.9l-.1.1q-.1 0-.2-.1l.1-.1q.1 0 .2.1zM771.8 240.6c0 .1.1.2.1.2 0 .1-.1.1-.2.1q0-.1-.1-.2.1-.1.2-.1zM815.9 245.6v-.3h.1c.1 0 .1.1.1.1l-.2.2zM758.9 235.7q.1 0 .2.1h.1-.1q-.2.1-.3.1c-.1 0-.1-.1-.1-.1v-.1h.2zM810.1 253.2q.1.1.1.2l-.1.1c-.1 0-.1-.1-.2-.1 0-.1.1-.1.2-.2zM812.9 268.8q-.2.1-.3.1c-.1 0-.1 0-.1-.1-.1 0 0 0 0 0q.1-.1.3 0h.1zM774 231.9c-.1-.1-.3-.2-.2-.4v-.1l.1.1q.1.2.1.4zM832 247.8l.2.1q-.1.1-.3.1l-.1-.1q.1 0 .2-.1zM754.9 237.7q.1.1.2.1-.1.1-.2.1l-.1-.1.1-.1zM806.8 264q0-.1.1-.2h.2v.1q-.1.1-.2.1h-.1zM822 268.6h-.2c-.1-.1-.1-.1-.1-.2h.2c.1 0 .1.1.1.2zM751.1 253.6h-.2q-.1 0 0-.1h.4v.1q-.2.1-.2 0zM781.9 253.3c-.1 0-.1.1-.2 0 0 0 0-.1-.1-.1h.3v.1zM814.7 245.5c-.1 0-.1 0-.1-.1l.1-.1q.1.1.3.1h-.1q-.1.1-.2.1zM835.5 254.7c.1.1.1.2.1.2s-.1 0-.2.1v-.2l.1-.1zM798.1 267.2l-.2.2h-.1q.1-.2.2-.2c0-.1.1 0 .1 0zM758.6 241.5q-.1.1-.2.1v-.1c0-.1 0-.1.1-.1l.1.1zM772.6 231.6h-.2q-.1 0-.1-.1h.1q.2 0 .3.1h.2H772.6zM751 260.6h-.3s-.1-.1-.1-.2c.1 0 .2-.1.2-.1q.1.2.2.3zM777.2 269.1h-.2c-.1 0-.1-.1-.1-.2h.2c.1 0 .1.1.1.2zM805.4 273.3q.1 0 .3.1c0 .1-.1.1-.1.1q-.1-.1-.3-.2h-.1.2zM781.5 270.2h-.1c-.1 0-.2 0-.3-.2l.1-.1q.3-.1.3.2v.1zM779.9 265.4q-.1-.1-.1-.2l.1-.1c.1 0 .1.1.1.1q0 .1-.1.2zM771.7 233.9q-.1 0-.1-.1.1-.1.2-.1c.1 0 .1 0 .2.1q-.2.1-.3.1zM782.5 244.6v.4q-.2-.1-.3-.2c-.1 0-.1 0-.1-.1h.4zM784.3 244.5q.1.1.2.1-.1.1-.3.1l-.1-.1q.1-.1.2-.1zM754.8 261.6l.1.1c0 .1-.1.1-.1.1q-.1-.1-.1-.2h.1zM797.2 276l-.1-.1q-.1 0-.1-.1h.1q.1 0 .3.1l.1.1H797.2zM810 270.5q-.2-.1-.5-.2c0-.1.1-.1.1-.1q.2.2.4.3zM760.6 240.7q-.2.2-.3 0h-.1q.2-.1.3-.1h.1v.1zM768.3 243.9v.1q-.2 0-.3-.1c.1 0 .1-.1.1-.1q.1 0 .2.1zM756.1 272.7l-.1-.1q-.1 0-.1-.1h.1q.1 0 .3.1l.1.1H756.1zM804.3 263.8l-.1.1h-.2c-.1 0-.1-.1-.1-.1.1-.1.3-.1.4 0zM804.1 280l.1.1-.1.1c-.1 0-.1-.1-.2-.1q.1 0 .2-.1zM809.3 239.7q-.1 0-.2.1-.1-.1-.1-.2l.1-.1.2.2zM789.8 278.8l-.2-.2c0-.1.1-.1.2-.2l.1.1q0 .1-.1.3zM796.6 279.9c.1.1.2.1.2.2-.1.1-.2.1-.3.1l-.1-.1.2-.2zM770.8 276.3h.1c.1 0 .1.1.1.1 0 .1-.1.1-.1.1q-.1-.1-.2-.1l-.1-.1h.2zM758.2 253.9c0 .1 0 .2-.1.1h-.2l.1-.1h.2zM749.1 273.8q.1 0 .2.1.1 0 .1.1h-.1q-.1 0-.2-.1c-.1 0-.1 0 0-.1zM776.3 266.4q0-.1-.1-.1.1-.1.2-.1l.1.1q-.1.1-.2.1zM752.5 263.4q-.1-.1-.2-.1c.1 0 .2-.1.2-.1.1 0 .2 0 .2.1s-.1.1-.2.1zM789.7 283v-.1q.2-.1.3-.1c0-.1.1 0 .1 0v.1q-.2.1-.4.1zM801.9 271.1h-.4l.1-.1h.3v.1zM803.4 286.9v.1h-.3v-.1c.1-.1.3-.1.3 0zM803.7 262l.2.2H803.6q.1-.1.1-.2zM824.9 264.7l-.1.1-.2-.2.1-.1.2.2zM756.9 254l-.1-.1.1-.1q.1.1.1.2h-.1zM752.3 252.9q0 .1-.1.2 0-.1-.1-.2l.1-.1.1.1zM761.5 252.3H761.8q0 .1.1.1h-.2q-.1 0-.2-.1zM752.4 249.6v.1q-.2 0-.3-.1s0-.1.1-.1q.1.1.2.1zM772.3 238.6l.2.2h-.2-.1q.1-.1.1-.2zM840 249h-.3q-.1 0-.1-.1h.3l.1.1zM770.4 235.2h-.2v-.1q.1 0 .2-.1v.2zM805 257q.1-.1.3-.2l.1.1s0 .1-.1.1h-.3zM835 261.2h-.2v-.1l.1-.1q.1.1.1.2zM766 250.5l-.1.1q-.1 0-.1-.1c-.1 0 0-.1 0-.1q.1 0 .2.1zM768.3 250.9l-.1-.1q.1-.1.2-.1s.1.1 0 .1q0 .1-.1.1zM752.8 248.5l-.1.1c-.1 0-.1-.1-.1-.1 0-.1 0-.2.1-.2q0 .1.1.2zM828.3 242.7c0 .1-.1.2-.2.2s-.1-.1-.1-.1v-.1h.3zM814.4 256c0 .1-.1.1-.1.1q-.1 0-.1-.1l.1-.1.1.1zM786.3 251q-.2.1-.3.1h-.1v-.1h.4zM756.9 235.2q-.1 0-.2-.1h.3q.1 0 .2.1h-.3zM756.5 245.5l-.1.1-.2-.2h.1q.1 0 .2.1zM804.4 251.8h-.3s0-.1.1-.2l.1.1.1.1zM754.5 243.8q-.1 0-.1-.1h.2q0 .1-.1.1zM812.4 243.3q0 .1-.1.1v-.2-.1h.1q.1 0 .1.1l-.1.1zM832.2 246.1q.1 0 .1-.1.1.1.1.2l-.1.1q0-.1-.1-.2zM759.1 234.8q-.1-.1-.2-.1t-.1-.1q.1 0 .3.1v.1zM758.4 229h-.1l-.1-.1q.1 0 .2-.1v.2zM815.6 243.1l.1.1c-.1 0-.1.1-.1.1q-.1-.1-.1-.2h.1zM833.7 245.6h-.2q0-.1-.1-.1h.2q.1 0 .2.1h-.1zM827.6 244.5c.1.2.3.4.3.2s-.2-.1-.3-.2zM774 231.9s.1 0 .1.1q.1 0 .1.1s-.1.1-.2.1q0-.1-.1-.2l.1-.1zM815.6 250l-.1-.1q.1-.1.2-.1v.1q0 .1-.1.1zM818.8 249.2q-.1.1-.3.1l-.1-.1h.4zM809.9 272q0-.1-.1-.1l.1-.1c0-.1.1 0 .1 0q0 .1-.1.2zM766 265.7l.2.2c-.1 0-.1.1-.1 0h-.2c0-.1.1-.1.1-.2zM785.9 269.6h-.2l-.1-.1q.1 0 .1-.1l.2.2zM787.3 271q-.1 0-.1-.1.1 0 .2-.1v.1l-.1.1zM803.5 269.9h-.1l.2-.2s0 .1.1.1q-.1.1-.2.1zM765.9 240.8q-.1.1-.2.1-.1-.1-.2-.1 0-.1.1-.1t.3.1zM812.9 270.3l.2.2h-.4l.2-.2zM823.1 240q0 .1.1.1c-.1.1-.2.1-.2.1q0-.1-.1-.2h.2zM781.3 271l.1.1-.1.1q-.1 0-.1-.1s0-.1.1-.1zM840.5 246.4h-.3v-.1l.1-.1.2.2zM827.1 244.3q-.1.1-.1.2-.1-.1-.1-.2s0-.1.1-.1q0 .1.1.1zM787.7 273.7h.2v.1h-.1l-.1-.1zM790.1 275.5q0 .1.1.2c-.1 0-.1.1-.1.1q-.1-.1-.1-.2s0-.1.1-.1zM756.2 259.8q.1.1.2.1h-.4v-.1h.2zM810.4 267.4h-.2s-.1-.1 0-.1h.1l.1.1zM778.4 276.4l-.1-.1q.1 0 .2-.1v.1l-.1.1zM797.6 279.3q.1 0 .2-.1l.1.1q-.1 0-.2.1s0-.1-.1-.1zM792 279.5q.1.1.2.1v.1h-.1q-.1 0-.2-.1v-.1h.1zM761.6 239q.1.2.2.3v.2c0-.1-.2-.1-.2-.1v-.4zM830.6 249.6h-.1q.1-.1.2-.1t.1.1h.2q-.1 0-.2.1-.1-.1-.2-.1zM799.3 281.8q-.1.1-.2.1t-.1-.1s0-.1.1-.1q.1 0 .2.1zM801.1 282.2l.1-.1q.1 0 .1.1v.1q-.1 0-.2-.1zM760.7 230.9h-.1q-.1 0-.1-.1h.2q.1.1.2.1h-.2zM784.1 260.8h-.2v-.2h.2v.2zM802.4 285.3h-.2c-.1-.1-.2-.1-.1-.2h.2q0 .1.1.2zM811.7 287.1l-.1.1q-.1 0-.2-.1s0-.1.1-.1q.1 0 .2.1zM769.4 232.7l-.2-.2q.1 0 .2-.1c.1 0 .1.1.1.1q0 .1-.1.2zM780.4 284.7l-.1.1h-.1q-.1 0-.1-.1h.3zM801.8 288.6l-.2-.1c-.1 0-.1-.1-.1-.1h.2s0 .1.1.2zM773.8 284.3q0-.1-.1-.1H774l.1.1H773.8zM788.6 286.5h-.1H788.8q.1 0 .1.1h-.1q-.1 0-.2-.1zM834.4 268.6q0 .1-.1.1v-.1h.1zM810.6 257.4q-.2.1-.3.2-.1 0-.1-.1.2-.1.4-.1zM768.6 239.5l-.1.1q0-.1-.1-.1 0-.1.1-.1l.1.1zM809.4 250.7q-.1-.1-.1-.2h.1v.2zM835.9 247.4q-.1 0-.2.1l-.1-.1q.1 0 .2-.1.1 0 .1.1zM834.1 266.6h.2q.1 0 .1.1h-.1l-.2-.1zM812 246.9q-.1 0-.1.1-.1 0-.1-.1.1 0 .2-.1v.1zM775 245.2v.1q0 .1-.1.1v-.1l.1-.1zM768.5 244.8h-.2q.1 0 .2-.1v.1zM771.5 257.8v.1h-.2v-.1h.2zM758.2 256v.1h-.1q0-.1.1-.1zM783.9 246.1l.1.1h-.2l.1-.1zM787.2 234.9h-.1l-.1-.1h.1l.1.1zM774.9 232.9h.2v.1h-.2v-.1zM801.4 251.9h.3q0 .1.1.1c-.1 0-.1.1-.1.1q-.2-.1-.3-.2zM772.3 247.2h-.3H772.3zM802.5 238.7h-.4v-.1h.1q.1 0 .3.1zM755.1 259v.1q-.2 0-.3-.1H755.1zM760.1 257.2q0-.1.1-.2h.1v.1q-.1 0-.2.1zM782.5 263.9h-.1v-.1h.1v.1zM761.5 229.5l-.1-.1h.2v.1h-.1zM821.5 243.4l-.1.1v-.1-.1l.1.1zM784 264.7l.1.1h-.2q0-.1.1-.1zM762.1 240l.1.1q-.1.1-.2.1 0-.1.1-.2zM810.9 269.7l.1.1h-.2l.1-.1zM783.7 245.1q.1 0 .1.1h-.1-.1l.1-.1zM786.4 245.1h-.2v-.1q.1-.1.1 0l.1.1zM811.6 247.8v.1h-.1q0-.1.1-.1zM811.3 248.6l.1.1q0 .1-.1.1l-.1-.1s.1 0 .1-.1zM808.2 269.8v.1q0 .1-.1.1v-.1l.1-.1zM817.7 249.6q-.1 0-.1.1-.1-.1-.1-.2h.1l.1.1zM749.5 261.2q.1-.1.2-.1t.2.1h-.4zM749.5 261.2c-.1 0-.1.1-.1.1h-.2l-.1-.1h.4zM824.9 240.2l-.1.1v-.1h.1zM796.1 268.7l-.1.1c-.1 0-.1-.1-.1-.1l.1-.1.1.1zM756.4 263.5q-.1 0-.2-.1h.2q.1 0 .1.1h-.1zM782 266.8q0-.1-.1-.1.1 0 .1-.1c.1 0 .1.1.1.1l-.1.1zM809.4 272.6v.1q-.1 0-.2-.1h.2zM774.5 267.7q.1 0 .2.1h-.1q-.1 0-.2-.1h.1zM815.6 274.5q-.1 0-.1-.1h.1c.1 0 .1 0 .1.1h-.1zM763.2 266.6v.1h-.1v-.1h.1zM786.5 270.3q0 .1-.1.1 0-.1-.1-.2.1 0 .2.1zM771.8 268.8h-.1q.1-.1.1-.2h.1q-.1.1-.1.2zM774.5 269.3l.1-.1v.2h-.1v-.1zM776.7 269.5q-.1.1-.2.1v-.1h.2zM771 270q.2-.1.3-.1l.1.1-.1.1q-.1-.1-.3-.1zM801.5 274.8q0 .1-.1.1v-.1h.1zM769 270q-.1 0-.2-.1.1 0 .2.1zM777.3 239q0-.1.1-.2s.1 0 .1.1q-.1.1-.3.1zM769.4 271.2q-.1-.1-.1-.3l.1-.1s.1.1 0 .1v.3zM794.1 275.2v-.1q.1-.2.1-.4l.1.1q0 .2-.2.4zM810.7 277.2q.1 0 .1.1h-.1s-.1 0 0 0v-.1zM798.3 276.1q.1 0 .1.1h-.1-.1l.1-.1zM772.8 273.2l.2-.2c0-.1.1 0 .1 0q-.2.1-.3.2zM752.4 247l.1.1-.1.1v-.1-.1zM786.4 275.7h-.1l.1-.1q.1.1.2.1h-.2zM791.2 276.7h-.1q.1-.1.1-.2h.1q-.1.1-.1.2zM823.5 257.7q.1 0 .1.1h-.1-.1l.1-.1zM759.5 253q-.1 0-.1.1 0-.1-.1-.2s.1-.1.2 0v.1zM787.7 277.2l.1.1-.1.1q0-.1-.1-.1l.1-.1zM789.7 277.9h-.2v-.1h.2v.1zM834 264.5h.1l-.1.1h-.1l.1-.1zM781.8 251.1h-.2.2zM783.3 277.2c.1 0 .1.1.1.1q0 .1-.1.1 0-.1-.1-.1l.1-.1zM757.7 273.9h-.2-.1q.1-.1.2-.1l.1.1zM775.2 276.6h-.2l-.1-.1h.2q.1 0 .1.1zM760.2 253.7h-.1v-.2q.1.1.1.2zM761.2 275.5h.1-.2-.1.2zM803.5 282.5v-.1q0-.1.1-.1s0 .1.1.1q-.1.1-.2.1zM777.9 278.7H777.6 777.9zM789.5 281.1h-.1l.1-.1h.1v.1h-.1zM778.1 279.8l-.1.1v-.1-.1l.1.1zM751.6 277.8h-.1c-.1 0-.1 0-.1-.1h.1c.1 0 .1.1.1.1zM755.9 235.4l-.1.1-.1-.1s0-.1.1-.1l.1.1zM771.3 281l-.1.1v-.1-.1l.1.1zM770.5 281.9h.1q0 .1.1.1c-.1 0-.1.1-.1 0q-.1 0-.1-.1zM799.6 286.4q-.1.1-.2.1 0-.1-.1-.1H799.6zM802.2 287h-.1v-.2h.1v.2zM750.9 279.8h-.2v-.1h.2v.1zM776.1 283.8l-.1.1q-.1 0-.1-.1h.2zM758.9 281.8q0-.1-.1-.1l.1-.1s.1 0 .1.1q-.1 0-.1.1zM803.4 250.2v.1l-.1-.1h.1zM823 248.7l.1.1h-.1v-.1zM776 237.3h-.1q0-.1.1-.1 0 .1.1.1h-.1zM766.8 252.6H766.5v-.1q.2 0 .3.1zM821 269.2v.1l-.1.1v-.1q.1 0 .1-.1zM829.4 253.3h-.1v-.1q.1 0 .1.1zM750.3 258.8l-.1-.1h.1v.1zM753.6 236q0 .1.1.1h-.1l-.1-.1h.1zM825.5 270.3l.1-.1q0 .1.1.1h-.2zM838.9 241.3h-.1.1zM812 268.6q-.1 0-.1-.1.1 0 .1.1zM822 247.5h-.1l.1-.1v.1zM813.6 250h-.1.1zM765.6 242.7h-.1v-.1q.1 0 .1.1zM821.6 270.8h-.1q-.1 0-.1-.1.1.1.2.1zM810 249.2v.1h-.1l.1-.1zM831.1 250.7v-.1q.1 0 .1.1h-.1zM833.7 272.8h-.2.2zM752.2 260.8v-.1.1zM807.1 259l-.1.1-.1-.1h.2zM828.9 245.1l.2-.2h.1v.1h-.3zM823.9 251.3l-.1.1v-.1h.1zM829.5 240.4h.1-.1zM756.8 261.6h-.1v-.1l.1.1zM822.7 247.6h-.1v-.1h.1v.1zM822.2 239.9h.1-.1zM818.9 238.9h-.1.1zM814.4 257.3q-.1 0-.1-.1h.1l.1.1h-.1zM768.4 253.2h-.1.1zM773.1 242.8l.1.1h-.2l.1-.1zM820.4 243.5v.1q0-.1-.1-.1l.1-.1v.1zM824.9 249.9q-.1 0-.1.1v-.1h.1zM766.2 235.1h-.1v-.1h.1v.1zM834.5 249.5v.1l-.1-.1h.1zM804.5 269.8v.1h-.1l.1-.1zM831.2 274.2l-.1-.1h.1l.1.1h-.1zM791.6 268.5q0 .1-.1.1v-.1h.1zM811 272.1h.1v.1h-.1v-.1zM832.3 275.3q0 .1.1.1h-.1-.1q.1 0 .1-.1zM766.9 265.5h-.1v-.1h.1v.1zM790.9 269.3q-.1 0-.1-.1h.1v.1zM814.7 272.9h-.1.1zM774.3 253v0zM831.1 266.7h-.1l.1-.1v.1zM812.6 273.1h-.1.2-.1zM769.7 247.5v0zM813.7 248.3v0zM827.4 273.8h-.1v-.1l.1.1zM811.5 273.4h-.1.1zM771.1 234.6v-.1q.1 0 .1.1h-.1zM796.3 269.1l.1.1h-.1v-.1zM778.6 268.7h.1l-.1.1v-.1zM826.3 245.4l-.2.2v-.1h.2zM814.1 274.3h-.2.2zM748.3 264.5v-.1h.1v.1h-.1zM824.1 255.5h-.2.2zM763.9 252.6l.1.1q-.1 0-.1-.1zM775.1 254.5h-.1.1zM821.3 266.1h-.1v-.1h.1v.1zM794.7 272.5h.1l-.1.1h-.1l.1-.1zM801.9 273.7v-.1h.1v.1h-.1zM780.2 270.7v-.1h.1v.1h-.1zM781.7 252l-.1-.1h.1v.1zM769.8 250v.1h-.1v-.1h.1zM754.3 247.7q-.1 0-.1-.1h.1v.1zM774.7 270.6h-.1q.1 0 .1-.1v.1zM783.8 272q.1-.1.2-.1h.1q-.1 0-.1.1h-.2zM824.2 248.5h-.1q.1-.1.2 0h-.1zM788.9 272.8l.1.1h-.1l-.1-.1h.1zM781 272.1h-.1.1zM767.8 270.4l-.1-.1h.1v.1zM783.7 273h.1-.1-.1.1zM829.8 255.9h-.1.1zM789.6 274.2v.1l-.1-.1h.1zM768.4 246.4h-.1q0 .1 0 0h-.1.2zM776.6 272.5v-.1q.1 0 .1.1h-.1zM758 257h-.1v-.1h.1v.1zM770.7 271.7q0 .1-.1.1v-.1h.1zM777.7 237.9h.1q-.1 0-.1.1v-.1zM792.9 275.1q-.1 0-.1.1l-.1-.1h.2zM821.1 254.4h-.1.2-.1zM806.9 277.6q-.1 0-.1-.1h.1l.1.1h-.1zM759.8 235.2h-.1.1zM793.9 275.8h-.1.1zM782.5 274.2h.1l.1.1h-.1l-.1-.1zM776.2 273.5q0 .1-.1.1 0-.1.1-.1zM753.5 256.3q0 .1-.1.1v-.1h.1zM811.2 279l.1.1h-.1q0-.1-.1-.1h.1zM802.1 277.9v-.1l.1.1h-.1zM803.5 278h-.1q.1-.1.1 0zM808 252.2v0zM816.3 280.3h0zM807.8 260.1v.1h-.1l.1-.1zM805 257q-.1.1-.1.2h-.1v-.1q.1 0 .2-.1zM761.1 231.7q.1.1.1.2h-.1v-.1-.1zM831.5 268.5v-.1h.1v.1h-.1zM804.9 279.4q-.1 0-.1-.1h.1v.1zM757.1 272.1v.1l-.1-.1h.1zM773.1 274.7v.1l-.1-.1.1-.1v.1zM806.3 256.4q0 .1.1.1h-.1l-.1-.1h.1zM752.5 246.8v-.1h.1v.1h-.1zM756.7 231.9h-.1v-.1h.1v.1zM779.3 276.3h-.1.1zM837.3 243.3q-.1 0-.1-.1h.1v.1zM776.2 255.9v-.1.1zM760.8 274.1v.1h-.1l.1-.1zM810.9 282v.1h-.1v-.1h.1zM804.6 281.4h-.1-.1.2zM796.5 250v-.1q.1 0 .1.1h-.1zM767.6 250.7q0-.1-.1-.1h.2q-.1 0-.1.1zM773.1 277.9h.2v.1h-.1l-.1-.1zM788 280.3h0zM803.2 283.1q.1 0 .1.1h-.1v-.1zM813.7 285q0 .1-.1.1 0-.1.1-.1zM755 246.7l.1-.1v.1h-.1zM746.8 275.7h.1l.1.1h-.1l-.1-.1zM780.8 261.6v.1h-.1v-.1h.1zM779.1 281.9h-.1v-.1q.1 0 .1.1zM817.7 287.9h-.1q.1 0 .1-.1v.1zM817 256.2v-.1q.1 0 .1.1h-.1zM818.5 288.2h-.1v-.1h.1v.1zM810.6 257.4v-.2c0-.1.1-.1.1-.1v.1q-.1.1-.1.2zM772.2 281.2l-.1.1v-.1h.1zM747.1 277.9v.1q0-.1-.1-.1l.1-.1v.1zM766.5 280.9v.1q-.1 0-.1-.1h.1zM795.5 285.2q-.2.1-.3.1v-.1h.3zM792.3 285.1h-.1v-.1l.1.1zM816.2 289h-.1v-.1.1h.1zM820.3 289.7q.1 0 0 .1v-.1zM831.8 258.1l.1.1h-.1v-.1zM747.3 279.1q0 .1-.1.1v-.1h.1zM802.6 287.8q-.1 0-.2.1v-.1h.2zM795.1 287.5h-.1-.1.2zM820.1 238.3v.1h-.1zM768.8 230.8l-.1-.1h.1zM759.1 229.8v-.1zM822 239.4v.1zM830.1 241.3h.1zM827.2 241h-.1zM759.6 230.8h-.1zM754.2 230.1v.1-.1zM835 242.6h.1zM763.8 231.9q.1.1.2.1-.1 0-.2-.1zM773.9 233.6v-.1zM822.9 241.6h-.1zM806.4 239.3h-.1zM825.3 242.6h-.1.1zM832.5 243.7l.1.1h-.1zM777.2 235.4h-.2.2zM755.3 232.1h-.1zM761.2 233h.1l-.1.1zM835.6 244.6v-.1l.1.1zM775.6 235.5v.1-.1zM827.6 244.5q-.1 0-.1-.1v-.1q0 .1.1.2zM806 241.2h.1-.1zM819.2 243.1h.1l-.1.1z"
      />
      <Path
        className="s33"
        d="M763.7 234.7h.2q-.1.1-.1 0l-.1-.1zM766.6 235.4v.1-.1zM829.9 245.3h-.1.1zM767.7 235.8h.1l-.1.1zM786.5 238.7v.1zM813.6 243v-.1h.1zM818.3 243.6h.1v.1zM775.6 237.6v.1-.1zM802.9 242.3h.1v.1zM824.2 245.7l.1.1h-.1zM828.7 246.4h.1-.1zM811.6 244.2h.1zM834.3 247.7h.1l-.1.1zM770.7 238.1v.1zM809.7 244.2v.1zM833.7 248h.1l-.1.1zM835.2 248.3v.1zM767.6 238.2v-.1.1zM763.3 237.5v.1zM824.8 247.2v-.1.1zM754.4 236.3v.1zM767.6 238.7h.1zM819.6 246.8l-.1.1v-.1zM754.7 237h.1-.1zM820.4 247v.1zM822.7 247.9v-.1zM833 249.6v-.1zM757.2 238.2v.1-.1zM795.1 244.5h-.1zM763.5 240.1v-.1-.1.2zM754.3 238.6h-.1zM763.5 240.1l.1.1v.1q0-.1-.1-.2zM785.8 243.6h-.1zM821 249.5l.1-.1v.1zM811.1 248h-.1.1zM824.3 250v.1-.1zM762.6 240.9v-.1zM782.5 244.7l.1-.1h.1-.2zM777.8 244.2v.1zM795.7 247h-.1zM838.7 253.8q.1 0 .1-.1 0 .1-.1.1zM782.5 245c.1.1.1.2.3 0h-.3zM838.4 253.8l-.1-.1.1.1zM810.5 249.5v.1l-.1-.1zM838.7 253.8h-.3q.1.2.3 0zM828.5 252.9l.1.1h-.1zM822.3 252.2h.1zM754.4 242.5h.1zM820.9 252.9h.1v.1zM802 250.4h.1zM757.3 243.7v.1zM816.3 252.9l-.1-.1h.1zM837 256.6v-.1zM803.3 252h.1zM819.7 255.1v-.1zM836.6 258.2q.1-.1.1-.2v.1l-.1.1zM823 256.1l.1.1h-.1zM756.4 246.4h-.1.1zM812.1 254.9v.1l-.1-.1zM754 246.2h-.1zM809 254.7v.1-.1zM801.5 253.6h-.1.1zM815 256.1v-.1.1zM800.8 255h-.1.1zM774.2 251.1v.1l-.1-.1zM815.5 258.2h-.1zM768.9 251.4l-.1.1h-.1q.1 0 .2-.1zM775.7 253.4v-.1.1zM773 253l.1.1q-.1 0-.1-.1zM822.7 260.8h-.1zM762.6 252.6h-.1.1zM751.3 252.2h.1-.1zM834.3 266.1h-.1zM753.2 254.7v.1-.1zM829.9 266.9h.1-.1zM760.1 257.2q-.1 0-.1.1 0-.1.1-.1zM803.3 264.2h.1v.1zM823.1 267.3h-.1zM757.3 257.9v-.1zM832.9 270.1h.1zM751.3 258.5h.1zM819.4 269h.1-.1zM751 260.6q.1.1.2.1h-.1q-.1 0-.1-.1zM805.8 270.2h-.1zM806.1 271h-.1zM751.5 262.8h.1-.1zM768.1 265.3v.1zM808.4 271.7l.1-.1-.1.1zM801 270.6h.1-.1zM805.5 271.4v-.1zM771.3 266.3v-.1zM814.6 273.3l-.1-.1h.1zM750.8 263.7v-.1zM759.1 264.8v.1l-.1-.1zM756.7 264.8v-.1h.1zM797.3 270.9h.1zM750 263.8v-.1zM802.6 272.3l.1.1v.1q0-.1-.1-.2zM800.2 272.2v-.1l.1.1zM796.2 271.7v.1h-.1zM792.5 271.2q-.1.1-.1.2-.1-.1 0-.1l.1-.1zM824.9 276.3h.1-.1zM817.8 275.7v-.1h.1zM794 272h-.1zM781.5 270.2q.1 0 .1.1l-.1-.1zM772.8 269.2l.1-.1v.1zM807.9 274.7h.1v.1zM820.8 276.9v.1zM776.2 270.6l.1-.1v.1zM798.4 274v.1zM806.9 275.5h.1zM749.9 266.9h.1zM822.8 278.4h.1-.1zM830.6 279.7v-.1zM798.3 275h-.1zM813.4 277.4h.1v.1zM772.6 271.2q0 .1.1.1v.1q-.1-.1-.1-.2zM829.6 280.3l-.1.1v-.1zM769.4 271.2l.1.1-.1-.1zM760 270h.1zM794.1 275.2h-.1.1zM778.1 272.9h.1v.1zM758 270.8l.1-.1v.1zM799.9 277.2h-.1zM784.3 275v.1zM791.9 276.2h-.1.1zM753.8 270.5h.1zM786.2 276.4h.1zM778.3 275.4h-.1zM782.1 276.1v-.1zM767.2 274.1h.1-.1zM793.1 278.6v.1l-.1-.1zM790.5 279.5h.2-.2zM779.4 278.1v-.1zM802.5 281.8v-.2q.1.1 0 .1l-.1.1zM754.5 274.3h.1zM757.1 275.4v-.1zM754.7 276.8l-.1-.1h.1zM764.5 278.4v-.1zM777.5 280.8v.1zM783 281.8h.1zM753.7 277.4h.1zM792.1 283.3l-.1.1v-.1zM812 286.7v.1-.1zM802.4 285.3q0 .1.1.1 0 .1-.1.1v-.2zM812.8 287.2h-.1zM761.8 279.8h-.1zM805.4 287h-.1zM748.3 278.3v.1l-.1-.1zM750.2 279.3h.1-.1zM803.7 287.5v.1l-.1-.1zM767 282.1h-.1zM802.6 287.8q.1 0 .2-.1v.1h-.2zM809.4 288.8v.1l-.1-.1zM771.5 283.1v.1zM819.5 290.8h-.1.1zM767.1 250.3h.1l-.1.1zM767.1 250.4v-.1zM835.7 262.6v-.1l.1.1zM835.8 262.6h-.1zM763.7 236.7l.1.1h-.1zM766.8 252.6v-.1.1zM750.8 250.6v-.1.1zM755.9 251.5h.1zM756 251.5v.1l-.1-.1zM828.3 242.7h.1-.1zM802.5 238.7q.1.1.1.2-.1-.1-.1-.2zM754.7 260.4v-.1.1zM754.7 260.4h.1-.1zM810 270.5v.1-.1zM772.7 265.3v-.1.1zM757.9 263.1l-.1.1.1-.1zM808.4 271.7l-.1.1.1-.1zM777.2 235.4v.1-.1zM783.9 268.4l-.1.1v-.1zM824.3 250.8h.1-.1zM828.9 245.1v-.1zM764.2 229.6h-.1.1zM767.6 243zM763.8 242.6v-.1.1zM767.6 243zM821.6 252l-.1-.1.1.1zM783.8 272h-.1.1zM764.2 229.6v-.1.1zM814.3 277.3h-.1.1zM814.3 277.3v.1-.1zM803 276.4l-.1-.1.1.1zM771 272.3v-.1zM772.6 273.3q.1-.1.2-.1-.1 0-.2.1zM826.3 245.4v.1zM790.5 279.5v-.1.1zM802.5 281.8h-.1zM836.6 258.2zM790.6 285l.1-.1v.1z"
      />
      <Text transform="matrix(.983,.181,-.181,.983,786.436,264.869)">
        <TSpan
          x={0}
          y={0}
          fontSize="22px"
          fill="#e20505"
          fontFamily="Deutschlander"
        >
          {"MOROCCO"}
        </TSpan>
      </Text>
      <Path
        fillRule="evenodd"
        className="s37"
        d="M767.9 242.8q.7 7.4.8 8.4 1 .2 8.2 1.8-6.8 3-7.7 3.4.1 1 .7 8.3-4.8-5.5-5.5-6.3-.9.4-7.7 3.3 3.7-6.3 4.3-7.2-.7-.8-5.6-6.3 7.2 1.6 8.2 1.8.5-.8 3-4.9zm-3.5 9.1q-2.5-.5-4.3-.9 1.2 1.3 2.9 3.3-1.3 2.2-2.2 3.8 1.7-.8 4-1.8 1.7 1.9 2.9 3.3-.2-1.8-.4-4.4 2.4-1 4-1.7-1.7-.4-4.2-1-.3-2.5-.4-4.3-1 1.5-2 3.2z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M768 242.5q.8 8.4.8 8.6.1 0 8.5 1.9-7.9 3.4-8 3.4 0 .2.8 8.7-5.6-6.4-5.7-6.6-.2.1-8 3.5 4.3-7.4 4.4-7.5-.1-.1-5.7-6.5 8.3 1.9 8.5 1.9 0-.1 4.2-7.2zm-4.3 7.7q-7.4-1.6-8-1.8.4.5 5.4 6.2-3.8 6.5-4.2 7 .6-.2 7.6-3.2 4.9 5.7 5.3 6.1 0-.6-.7-8.1 6.9-3 7.5-3.2-.6-.2-8-1.8-.7-7.6-.7-8.2l-4.2 7z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M766.8 247.9q.4 4.4.4 4.6.1 0 4.5 1-4.1 1.8-4.2 1.8 0 .2.4 4.7-3-3.4-3.1-3.5-.1 0-4.2 1.8 2.3-3.8 2.3-4-.1-.1-3-3.5 4.4 1 4.5 1.1.1-.1 2.2-3.7zm-2.3 4.2q-3.4-.8-4-.9.4.4 2.7 3.1-1.8 3.1-2.1 3.5.5-.2 3.8-1.6 2.4 2.7 2.7 3.1 0-.5-.3-4.1 3.3-1.4 3.8-1.6-.6-.2-4.1-1-.3-3.5-.3-4.1l-2.1 3.5z"
      />
      <Path
        className="s37"
        d="M763.1 254.3q-.4-.4-.9-1l-.3-.3.8-1.4q1 .2 1.8.4z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M764.6 251.9l-1.5 2.6-1.4-1.5.9-1.5 1.9.4zm-1.9-.2c-.1.1-.7 1.1-.7 1.2 0 .1.9 1 1 1.2.1-.2 1.1-1.9 1.2-2.1-.2 0-1.4-.3-1.5-.3z"
      />
      <Path className="s37" d="M767.1 252.6l-2.6-.6.3-.6q.2-.4.6-1l1.5.4z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M767 250.7l.2 2-2.9-.6 1-1.8 1.7.4zm-1.6-.2c-.2.3-.8 1.2-.9 1.4.3 0 2.2.5 2.4.5 0-.2-.1-1.4-.1-1.5-.2-.1-1.3-.3-1.4-.4z"
      />
      <Path className="s37" d="M765.4 250.4l-.9 1.6q-.8-.2-1.8-.4l.9-1.6z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M765.4 250.3l.1.1-1 1.7-2-.4 1.1-1.8zm-1.7-.1c-.1.1-.7 1.1-.8 1.3.2.1 1.4.3 1.5.4.1-.1.7-1.2.9-1.4-.3 0-1.5-.3-1.6-.3z"
      />
      <Path
        className="s37"
        d="M763.2 257.1l-1.1-1.2c.6-.9 1-1.6 1-1.6l1.8 2.1z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M763.1 254.1l1.9 2.3-1.8.8-1.2-1.3 1-1.6zm-.8 1.7c.1.1.9 1 1 1.1.1-.1 1.2-.6 1.4-.7-.2-.2-1.4-1.6-1.6-1.8-.1.2-.7 1.3-.8 1.4z"
      />
      <Path
        className="s37"
        d="M762.1 255.9l-1.1-1.4.9-1.5.3.3.9 1s-.4.7-1 1.6z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M761.9 252.8l1.3 1.5-1 1.7-1.4-1.5 1-1.6zm-.8 1.7c.1.1.9 1 1.1 1.2 0 0 .7-1.2.8-1.4l-1.1-1.1c-.1.2-.7 1.2-.8 1.3z"
      />
      <Path
        className="s37"
        d="M767.5 257.1l-1.5.6q-.6-.8-1.1-1.3l2.5-1.1c0 .1 0 .8.1 1.8z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M767.4 255.1l.2 2-1.6.7-1.3-1.5 2.6-1.1zm-2.4 1.2c.2.2 1 1.1 1 1.2.2 0 1.2-.5 1.4-.5 0-.2-.2-1.4-.2-1.6-.2.1-2 .8-2.2.9z"
      />
      <Path
        className="s37"
        d="M766 257.7l-1.6.7-1.2-1.3q.9-.4 1.7-.7.5.5 1.1 1.3z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M764.9 256.2l1.3 1.5-1.8.8-1.4-1.5 1.8-.7zm-1.5.8c.2.2 1 1.1 1 1.2.2 0 1.3-.5 1.5-.6-.2-.2-1-1.1-1-1.2-.2.1-1.3.5-1.5.6z"
      />
      <Path className="s37" d="M767.1 252.6q.8.2 1.8.4l.1 1.6q-.9.4-1.6.7z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M769 252.9l.1 1.7-.3.2c-1.4.6-1.4.6-1.5.6l-.3-2.4v-.5h.1l1.8.4zm-1.8-.2c.1.2.2 2.2.3 2.4.2-.1 1.3-.6 1.4-.6 0-.1-.1-1.3-.1-1.5-.1 0-1.3-.2-1.6-.3z"
      />
      <Path className="s37" d="M768.9 253q-1-.2-1.8-.4-.1-.8-.2-1.8l1.8.4z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M768.8 251.1l.2 2-2-.4-.2-2.1 1.9.5zm-1.7-.2c0 .2.1 1.4.1 1.6.2 0 1.3.3 1.6.3-.1-.2-.2-1.4-.2-1.5-.1-.1-1.3-.3-1.5-.4z"
      />
      <Path className="s37" d="M769.2 256.4l-1.7.7-.1-1.8q.7-.3 1.6-.7z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M769.1 254.4l.2 2-1.9.8-.2-1.9v-.1l1.8-.7zm-1.7.9c0 .1.2 1.3.2 1.6.2-.1 1.3-.6 1.4-.6 0-.2-.1-1.4-.1-1.6h-.2c-.8.4-1.1.5-1.3.6z"
      />
      <Path
        className="s37"
        d="M765.5 250l-1.5 2.5-1.3-.7 1.2-2zM766.6 250.8l2.6.6v1.5l-2.5-.5zM762.8 257.3l2.6-1.1 1 1.2-2.6 1.2zM768.9 254.1l.2 3-1.4.4-.3-2.7zM761.5 252.7l2 2.2-.9 1.3-2.2-2.5z"
      />
      <Path
        className="s39"
        d="M762.2 252.7l.8 1.4-1-1.2zM768.6 250.9v.1l-1.6-.3zM769.3 256.2l-.2-1.6.3-.1zM766 257.8l.2.2-1.6.5zM765.4 250.6l-.5 1.4-.3-.1z"
      />
      <G opacity={0.9}>
        <Path
          d="M857.6 466.6c-3.4 40.2-3.4 80.7 0 120.9h-22.9V466.6h22.9z"
          fill="#292627"
        />
        <Use href="#img1" transform="translate(832 464)" />
      </G>
      <Path
        d="M854.8 586.4v.2c-1.2.3-2.2 1.2-2.3 2.4h-.1c-.2-1.4-1.5-2.5-3-2.5s-2.7 1.1-2.9 2.5h-.1c-.2-1.4-1.5-2.5-3-2.5s-2.7 1.1-2.9 2.5h-.1c-.2-1.4-1.5-2.5-3-2.5s-2.7 1.1-2.9 2.5h-.1c-.2-1.4-1.5-2.5-3-2.5s-2.7 1.1-2.9 2.5h-.1c-.2-1.4-1.5-2.5-3-2.5s-2.7 1.1-2.9 2.5h-.1c-.2-1.4-1.5-2.5-2.9-2.5-1.5 0-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.8 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.7 1.1-3 2.5h-.1c-.2-1.4-1.4-2.5-2.9-2.5s-2.7 1.1-3 2.5c-.2-1.2-1.2-2.1-2.4-2.4v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.2 2.4-1.4 2.4-2.9 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-3 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-3 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-3 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-3 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-2.9 0-1.5-1-2.7-2.4-3v-.1c1.4-.3 2.4-1.5 2.4-2.9 0-1.5-1-2.7-2.4-3v-.1c1.4-.3 2.4-1.5 2.4-2.9 0-1.5-1-2.7-2.4-3v-.1c1.4-.3 2.4-1.5 2.4-2.9 0-1.5-1-2.7-2.4-3v-.1c1.4-.3 2.4-1.5 2.4-2.9 0-1.5-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.3 2.4-1.5 2.4-2.9s-1-2.6-2.4-2.9v-.2c1.4-.2 2.4-1.4 2.4-2.9 0-1.4-1-2.6-2.4-2.9v-.1c1.4-.3 2.4-1.5 2.4-3 0-1.4-1-2.6-2.4-2.9 1-.2 1.8-.9 2.1-1.8h.5c.5 1.1 1.6 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.5 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.4 1.1 1.5 1.9 2.8 1.9 1.2 0 2.3-.8 2.7-1.9h.5c.4 1.1 1.5 1.9 2.7 1.9 1.3 0 2.3-.8 2.8-1.9h.5c.4 1.1 1.5 1.9 2.7 1.9 1.3 0 2.3-.8 2.8-1.9h.5c.4 1.1 1.5 1.9 2.7 1.9 1.3 0 2.3-.8 2.8-1.9h.5c.4 1.1 1.5 1.9 2.7 1.9 1.3 0 2.3-.8 2.8-1.9h.5c.4 1.1 1.5 1.9 2.7 1.9 1.3 0 2.3-.8 2.8-1.9h.5c.3.9 1.1 1.6 2.1 1.8-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 3v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9v.2c-1.4.3-2.4 1.4-2.4 2.9 0 1.4 1 2.6 2.4 2.9v.1c-1.4.3-2.4 1.5-2.4 3 0 1.4 1 2.6 2.4 2.9v.1c-1.4.3-2.4 1.5-2.4 3 0 1.4 1 2.6 2.4 2.9v.1c-1.4.3-2.4 1.5-2.4 3 0 1.4 1 2.6 2.4 2.9v.1c-1.4.3-2.4 1.5-2.4 3 0 1.4 1 2.6 2.4 2.9v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 3v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 3v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 3v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 3v.1c-1.4.3-2.4 1.5-2.4 2.9 0 1.5 1 2.7 2.4 2.9v.2c-1.4.3-2.4 1.5-2.4 2.9s1 2.6 2.4 2.9z"
        fill="#fff"
      />
      <Path d="M848.8 583.4h-70.7V470.6h70.7z" fill="#3f92a1" />
      <Text transform="matrix(1,0,0,1,787.903,516.472)">
        <TSpan
          x={0}
          y={0}
          fontSize="42px"
          fill="#ffeec3"
          fontWeight={400}
          fontFamily='"BreeSerif-Regular","Bree Serif"'
        >
          {"I"}
        </TSpan>
      </Text>
      <Text transform="matrix(1,0,0,1,787.903,533.976)">
        <TSpan
          x={0}
          y={0}
          fontSize="10px"
          fill="#ffeec3"
          fontWeight={400}
          fontFamily='"BreeSerif-Regular","Bree Serif"'
        >
          {"MOROCCO"}
        </TSpan>
      </Text>
      <Path
        d="M822.8 516.5l-2.2-2.1c-8-7-13.3-11.7-13.3-17.4 0-4.7 3.7-8.3 8.5-8.3 2.7 0 5.3 1.2 7 3.1 1.7-1.9 4.3-3.1 6.9-3.1 4.8 0 8.5 3.6 8.5 8.3 0 5.7-5.2 10.4-13.3 17.4z"
        fill="#cc3a43"
      />
      <Path
        d="M840.2 572.8c0 1.2-1.1 2.2-2.5 2.2h-47.4c-1.4 0-2.5-1-2.5-2.2v-27.9c0-1.2 1.1-2.1 2.5-2.1h47.4c1.4 0 2.5.9 2.5 2.1z"
        fill="#da2128"
      />
      <Path
        fillRule="evenodd"
        className="s37"
        d="M814 547q3 8 3.4 9.1h10.8q-7.7 5-8.8 5.6.4 1.1 3.4 9.1l-8.8-5.6-8.8 5.6q3-8 3.4-9.1-1.1-.6-8.8-5.6h10.9q.4-1.1 2.3-6.2zm-1.8 11h-5.7q1.9 1.2 4.6 2.9-1 2.8-1.7 4.8 1.9-1.2 4.6-3 2.6 1.8 4.5 3-.7-2-1.7-4.8 2.7-1.7 4.6-2.9h-5.7q-1-2.8-1.7-4.7-.8 1.9-1.5 4z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M814 546.6q3.4 9.2 3.5 9.4h11.1q-8.8 5.7-9 5.8.1.1 3.5 9.3-8.9-5.6-9.1-5.7-.2.1-9 5.7 3.4-9.2 3.4-9.3-.1-.1-9-5.8h11.1q.1-.2 3.4-9zm-3.3 9.6h-10.5q.6.4 8.5 5.4-3 8.2-3.2 8.9.6-.5 8.5-5.5 7.9 5 8.5 5.5-.2-.7-3.3-8.9 7.9-5 8.6-5.4h-10.6q-3-8.2-3.2-8.8-.2.5-3.2 8.7z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M814 552.9q1.8 4.9 1.9 5h5.9q-4.6 3-4.8 3.1.1.2 1.8 5-4.6-3-4.8-3.1-.2.1-4.8 3.1 1.8-4.8 1.8-5-.1-.1-4.8-3.1h6q0-.1 1.7-4.6zm-1.7 5.2H807q.6.4 4.3 2.8-1.4 3.9-1.6 4.5.5-.4 4.3-2.8 3.7 2.4 4.3 2.8-.2-.6-1.7-4.5 3.8-2.4 4.4-2.8h-5.4q-1.4-3.8-1.6-4.4-.2.6-1.6 4.3z"
      />
      <Path className="s37" d="M811.2 561q-.6-.4-1.4-.9l-.5-.3.6-1.7h2.4z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M812.4 557.9l-1.2 3.3-2.1-1.4.7-1.9zm-2.4.3c0 .1-.5 1.4-.6 1.5.2.1 1.4.9 1.7 1.1.1-.3.9-2.4 1-2.6H810z"
      />
      <Path className="s37" d="M815.8 558.1h-3.5l.2-.7q.2-.5.5-1.3h2z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M815.1 556l.8 2.2h-3.8l.8-2.2zm-2.1.2c-.1.3-.5 1.5-.6 1.7h3.1c-.1-.2-.6-1.5-.6-1.7H813z"
      />
      <Path className="s37" d="M813 556.1l-.7 2h-2.4l.8-2z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M813.2 556l-.8 2.2h-2.7l.8-2.2zm-2.4.2c0 .2-.5 1.5-.6 1.7h2c.1-.1.6-1.4.7-1.7h-2.1z"
      />
      <Path className="s37" d="M812.1 564l-1.6-1.1q.4-1.1.7-1.9l2.8 1.8z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M811.1 560.8l3.1 2-2.1 1.3-1.8-1.1.7-2.1zm-.4 2.1c.1.1 1.3.9 1.5 1 .1-.1 1.4-.9 1.6-1-.2-.2-2.3-1.5-2.5-1.7-.1.3-.6 1.6-.6 1.7z"
      />
      <Path
        className="s37"
        d="M811.2 561q-.3.8-.7 1.9l-1.9-1.2.7-1.9q.2.1.5.3l1.4.9z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M809.2 559.6l2.1 1.3-.8 2.2-2.1-1.3.8-2.1zm-.5 2.1c.1.1 1.4.9 1.6 1.1 0 0 .6-1.6.7-1.7-.2-.1-1.5-1-1.7-1.1-.1.3-.6 1.6-.6 1.7z"
      />
      <Path
        className="s37"
        d="M817.6 562.9l-1.7 1.1q-1.1-.7-1.9-1.2l2.8-1.8c.1.1.4.9.8 1.9z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M816.9 560.8l.8 2.2-1.8 1.1-2.1-1.3 3-1.9zm-2.7 2c.2.1 1.5.9 1.6 1 .2-.1 1.4-.8 1.5-.9 0-.2-.5-1.5-.6-1.7-.3.1-2.3 1.4-2.5 1.6z"
      />
      <Path
        className="s37"
        d="M815.9 564l-1.9 1.2-1.9-1.2q1.1-.7 1.9-1.2.8.5 1.9 1.2z"
      />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M814 562.6l2.1 1.4-2.1 1.4-2.1-1.4 2-1.3zm-1.6 1.3c.2.2 1.5 1 1.6 1.1.2-.1 1.4-.9 1.7-1.1-.3-.1-1.5-.9-1.7-1-.1.1-1.4.9-1.6 1z"
      />
      <Path className="s37" d="M815.8 558.1h2.3l.6 1.7q-1 .7-1.9 1.2z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M818.2 557.9l.7 1.9-.4.3c-1.6 1-1.6 1-1.7 1h-.1l-.9-2.5-.2-.6.1-.1zm-2.2.3c0 .2.8 2.3.9 2.6.3-.2 1.6-1 1.7-1.1-.1-.1-.6-1.4-.6-1.5h-2z"
      />
      <Path className="s37" d="M818.1 558.1h-2.3q-.4-.9-.8-2h2.4z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M817.5 556l.8 2.2h-2.6l-.9-2.2zm-2.2.2c.1.3.6 1.6.6 1.7h2.1c-.1-.2-.6-1.5-.7-1.7h-2z"
      />
      <Path className="s37" d="M819.4 561.7l-1.8 1.2-.8-1.9q.9-.5 1.9-1.2z" />
      <Path
        fillRule="evenodd"
        className="s38"
        d="M818.8 559.6l.8 2.2-2.1 1.3-.8-2.1v-.1l1.9-1.2zm-2 1.4zm.2 0c.1.1.6 1.5.7 1.7.2-.1 1.5-.9 1.6-1 0-.2-.5-1.5-.6-1.7q-.1 0-.2.1c-.9.6-1.3.8-1.5.9z"
      />
      <Path
        className="s37"
        d="M813 555.6l-1.2 3.2-1.8-.5.9-2.5zM814.6 556.2h3.5l.4 1.7h-3.3zM811.8 564.4l2.9-1.9 1.6 1.1-3 1.9zM818.4 559.3l1.2 3.2-1.7.9-1.1-3zM808.8 559.6l3 2-.7 1.6-3.5-2.2z"
      />
      <Path
        className="s39"
        d="M809.6 559.4l1.5 1.4-1.7-1.1zM817.1 555.8l.1.2h-2.1zM819.5 561.5l-.6-1.7.3-.1zM815.9 564.1l.2.2-1.9.9zM813.1 556.2l-.3 1.7h-.4z"
      />
    </Svg>
  );
};
