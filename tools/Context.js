import React, { createContext } from "react";
export const UserContext = createContext();
export const RegisterContext = createContext();
export const ToursContext = createContext();
export const TrackingContext = createContext();
export const PricesContext = createContext();
export const ToMaContext = createContext();
export const ToDuContext = createContext();
export const GalleryContext = createContext();
export const InfosContext = createContext();
export const AppointmentsContext = createContext();
export const UserTourContext = createContext();
export const ReviewsContext = createContext();
export const ChatContext = createContext();
export const SettingsContext = createContext();
export const HomeTourContext = createContext();

export const UserProvider = (props) => {
  return (
    <UserContext.Provider {...props}>{props.children}</UserContext.Provider>
  );
};
export const HomeTourProvider = (props) => {
  return (
    <HomeTourContext.Provider {...props}>
      {props.children}
    </HomeTourContext.Provider>
  );
};
export const SettingsProvider = (props) => {
  return (
    <SettingsContext.Provider {...props}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export const ChatProvider = (props) => {
  return (
    <ChatContext.Provider {...props}>{props.children}</ChatContext.Provider>
  );
};

export const RegisterProvider = (props) => {
  return (
    <RegisterContext.Provider {...props}>
      {props.children}
    </RegisterContext.Provider>
  );
};

export const ToursProvider = (props) => {
  return (
    <ToursContext.Provider {...props}>{props.children}</ToursContext.Provider>
  );
};
export const TrackingProvider = (props) => {
  return (
    <TrackingContext.Provider {...props}>
      {props.children}
    </TrackingContext.Provider>
  );
};

export const PricesProvider = (props) => {
  return (
    <PricesContext.Provider {...props}>{props.children}</PricesContext.Provider>
  );
};

export const ToMaProvider = (props) => {
  return (
    <ToMaContext.Provider {...props}>{props.children}</ToMaContext.Provider>
  );
};

export const ToDuProvider = (props) => {
  return (
    <ToDuContext.Provider {...props}>{props.children}</ToDuContext.Provider>
  );
};

export const GalleryProvider = (props) => {
  return (
    <GalleryContext.Provider {...props}>
      {props.children}
    </GalleryContext.Provider>
  );
};

export const InfosProvider = (props) => {
  return (
    <InfosContext.Provider {...props}>{props.children}</InfosContext.Provider>
  );
};

export const AppointmentsProvider = (props) => {
  return (
    <AppointmentsContext.Provider {...props}>
      {props.children}
    </AppointmentsContext.Provider>
  );
};

export const UserTourProvider = (props) => {
  return (
    <UserTourContext.Provider {...props}>
      {props.children}
    </UserTourContext.Provider>
  );
};

export const ReviewsProvider = (props) => {
  return (
    <ReviewsContext.Provider {...props}>
      {props.children}
    </ReviewsContext.Provider>
  );
};
