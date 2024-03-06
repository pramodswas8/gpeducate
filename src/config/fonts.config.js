import localFont from "next/font/local";

export const robotoFonts = localFont({
  src: [
    {
      path: "./../../public/fonts/bold-700/Poppins-Bold.ttf",
      weight: "700",
      variable: "--poppins-family-bold",
      style: "normal",
    },
    {
      path: "./../../public/fonts/light-300/Poppins-Light.ttf",
      weight: "300",
      variable: "--poppins-family-light",
      style: "normal",
    },
    {
      path: "./../../public/fonts/medium-500/Poppins-Medium.ttf",
      weight: "500",
      variable: "--poppins-family-medium",
      style: "normal",
    },
    {
      path: "./../../public/fonts/regular-400/Poppins-Regular.ttf",
      weight: "400",
      variable: "--poppins-family-regular",
      style: "normal",
    },
  ],
});
