import AGBIcon from "../assets/JsIcons/AGBIcon";
import AppointmentsIcon from "../assets/JsIcons/AppointmentsIcon";
import ChatIcon from "../assets/JsIcons/ChatIcon";
import ContactIcon from "../assets/JsIcons/ContactIcon";
import FaqIcon from "../assets/JsIcons/FaqIcon";
import GalleryIcon from "../assets/JsIcons/GalleryIcon";
import HomeIcon from "../assets/JsIcons/HomeIcon";
import ImprIcon from "../assets/JsIcons/ImprIcon";
import InfosIcon from "../assets/JsIcons/InfosIcons";
import Location from "../assets/JsIcons/Location";
import PriceIcon from "../assets/JsIcons/PriceIcon";
import PrivacyIcon from "../assets/JsIcons/PrivacyIcon";
import RatingIcon from "../assets/JsIcons/RatingIcon";
import ToDuIcon from "../assets/JsIcons/ToDuIcon";
import ToMaIcon from "../assets/JsIcons/ToMaIcon";
import ToursIcon from "../assets/JsIcons/ToursIcon";
import AGB from "./AGB/AGB";
import AppointmentsStack from "./Appointments/ApStack";
import ChatStack from "./Chat/ChatStack";
import Contact from "./contact/Contact";
import Faq from "./Faq/Faq";
import GalleryStack from "./Gallery/GalleryStack";
import Home from "./Home/Home";
import Impressum from "./Impressum/Impressum";
import InfosStack from "./Infos/InfosStack";
import Login from "./login/Login";
import PricesStack from "./Prices/PricesStack";
import Privacy from "./Privacy/Privacy";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import ReviewsStack from "./Reviews/ReviewsStack";
import Settings from "./Settings/Settings";
import ToDuScreen from "./ToDu/ToDu";
import ToMaScreen from "./ToMa/ToMa";
import TourStack from "./Tours/TourStack";
import TrackingStack from "./Tracking/TrackingStack";
const width = 45;
const height = 45;

export const Screens = [
  {
    component: Home,
    name: "Home",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <HomeIcon width={width - 10} height={height} color={color} />
      ),
    },
  },
  {
    component: Settings,
    name: "Settings",
    options: {
      headerShown: false,
      drawerItemStyle: {
        display: "none",
      },
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    },
  },
  {
    component: Profile,
    name: "Profile",
    options: {
      headerShown: false,
      drawerItemStyle: {
        display: "none",
      },
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    },
  },
  {
    component: TrackingStack,
    name: "Sendungsverfolgung",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        // <Ionicons name="location" size={20} color={color} color={color} />
        <Location width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: AppointmentsStack,
    name: "Fahrten & Termine",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        // <MaterialCommunityIcons name="bus-clock" size={20} color={color} color={color} />
        <AppointmentsIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: ToMaScreen,
    name: "Versand nach MA",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ToMaIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: ToDuScreen,
    name: "Versand nach DE",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ToDuIcon width={width} height={height} color={color} />
      ),
    },
  },

  {
    component: TourStack,
    name: "KAL&ROK on Tour",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ToursIcon width={width + 10} height={height + 10} color={color} />
      ),
    },
  },
  {
    component: ChatStack,
    name: "Chat",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ChatIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: Contact,
    name: "Kontakt",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ContactIcon width={width - 10} height={height - 10} color={color} />
      ),
    },
  },
  {
    component: PricesStack,
    name: "Preise",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <PriceIcon width={width - 5} height={height} color={color} />
      ),
    },
  },
  {
    component: GalleryStack,
    name: "Bibliothek",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <GalleryIcon width={width - 10} height={height} color={color} />
      ),
    },
  },
  {
    component: InfosStack,
    name: "Infos",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <InfosIcon width={width - 10} height={height} color={color} />
      ),
    },
  },
  {
    component: ReviewsStack,
    name: "Bewertungen",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        // <Ionicons name="star" size={20} color={color} color={color} />
        <RatingIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: AGB,
    name: "AGB",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <AGBIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: Faq,
    name: "FAQ",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <FaqIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: Privacy,
    name: "Datenschutz­",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <PrivacyIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: Impressum,
    name: "Impressum",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ImprIcon width={width} height={height} color={color} />
      ),
    },
  },
];

export const NotLoggedScreens = [
  {
    component: Login,
    name: "Login",
    options: {
      headerShown: false,
      drawerItemStyle: {
        display: "none",
      },
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    },
  },
  {
    component: Register,
    name: "Register",
    options: {
      headerShown: false,
      drawerItemStyle: {
        display: "none",
      },
      drawerLabel: () => null,
      title: null,
      drawerIcon: () => null,
    },
  },

  {
    component: Home,
    name: "Home",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <HomeIcon width={width - 5} height={height} color={color} />
      ),
    },
  },

  {
    component: PricesStack,
    name: "Preise",
    options: {
      headerShown: false,
      screen: "PreiseCheck",
      drawerIcon: ({ color }) => (
        <PriceIcon width={width - 5} height={height} color={color} />
      ),
    },
  },
  {
    component: GalleryStack,
    name: "Bibliothek",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <GalleryIcon width={width - 10} height={height} color={color} />
      ),
    },
  },
  {
    component: Contact,
    name: "Kontakt",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ContactIcon width={width - 10} height={height} color={color} />
      ),
    },
  },
  {
    component: AGB,
    name: "AGB",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <AGBIcon width={width - 5} height={height} color={color} />
      ),
    },
  },
  {
    component: Faq,
    name: "FAQ",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <FaqIcon width={width - 5} height={height} color={color} />
      ),
    },
  },
  {
    component: Privacy,
    name: "Datenschutz­",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <PrivacyIcon width={width} height={height} color={color} />
      ),
    },
  },
  {
    component: Impressum,
    name: "Impressum",
    options: {
      headerShown: false,
      drawerIcon: ({ color }) => (
        <ImprIcon width={width} height={height} color={color} />
      ),
    },
  },
];
