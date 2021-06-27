// import * as Theme from "./constants/Theme";
export type DeviceTheme = "silver" | "black" | "u2";

export const getTheme = (deviceTheme: DeviceTheme) => {
  if (deviceTheme === "silver") {
    return "Silver";
  } else if (deviceTheme === "black") {
    return "Black";
  } else {
    return "U2";
  }
};
