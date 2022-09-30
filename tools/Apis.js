import axios from "axios";
// export const BaseURL = `http://167.71.61.3`;
// export const BaseURL = `https://kalrok.herokuapp.com`;
export const BaseURL = "https://kalandrok.live";

export default axios.create({
  baseURL: BaseURL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const AuthUrl = "/api/v1/auth/login";
export const AGBUrl = "/api/v1/agb";
export const ImpUrl = "/api/v1/impressum";
export const GroupsUrl = "/api/v1/trips";
export const RolesUrl = "/api/v1/roles";
export const FaqsUrl = "/api/v1/faq";
export const ToursUrl = "/api/v1/tours";
export const PricesUrl = "/api/v1/prices";
export const WeightPricesUrl = "/api/v1/weigthprice";
export const UsersUrl = "/api/v1/auth/users";
export const VerifyUrl = "/api/v1/auth/resetpassword";
export const SendUrl = "/api/v1/auth/forgetpassword";
export const RegisterUrl = "/api/v1/auth/register";
export const MEurl = "/api/v1/auth/me";
export const GetFileUrl = "/api/v1/auth/getfile";
export const ApUrl = "/api/v1/appointment";
export const UpdateUserValues = "/api/v1/auth/updatedetails";
export const UpdateUserPhotoUrl = "/api/v1/auth/uploadphoto";
export const AdsUrl = "/api/v1/adds";
export const GalleryUrl = "/api/v1/gallery";
export const InfosUrl = "/api/v1/info";
export const ReviewsUrl = "/api/v1/reviews/public";
export const RatingUrl = "/api/v1/reviews/rating";
export const MyCommandUrl = "/api/v1/auth/commands";
export const CheckNumUrl = "/api/v1/check";
export const MessagesUrl = "/api/v1/message";
export const ConvertationUrl = "/api/v1/conversation";
