import { Poppins } from "next/font/google";

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

export default myAllFonts;
