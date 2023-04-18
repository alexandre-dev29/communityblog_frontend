import { Poppins } from "next/font/google";
import localFont from "next/font/local";

// const myAllFonts = localFont({
//   src: [
//     {
//       path: "../public/fonts/averta.otf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/eina-regular.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/eina-semibold.woff2",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   display: "optional",
//   variable: "--font-averta",
// });
const myAllFonts = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "700", "800", "900"],
});
export const jetbrainsMono = localFont({
  src: [
    {
      path: "../public/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Medium.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-jetbrains",
});

export default myAllFonts;
