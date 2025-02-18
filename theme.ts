import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { MD3Type } from "react-native-paper/lib/typescript/types";

const defaultFont = configureFonts();

// const displayFont: Record<string, Partial<MD3Type>> = {
//   displaySmall: {
//     ...defaultFont.displaySmall,
//     fontFamily: "Poppins",
//   },
//   displayMedium: {
//     ...defaultFont.displayMedium,
//     fontFamily: "Poppins",
//   },
//   displayLarge: {
//     ...defaultFont.displayMedium,
//     fontFamily: "Poppins",
//   },
// };
// const headerFont: Record<string, Partial<MD3Type>> = {
//   headlineSmall: {
//     ...defaultFont.headlineSmall,
//     fontFamily: "Poppins",
//   },
//   headlineMedium: {
//     ...defaultFont.headlineMedium,
//     fontFamily: "Poppins",
//   },
//   headlineLarge: {
//     ...defaultFont.headlineLarge,
//     fontFamily: "Poppins",
//   },
// };
// const titleFont: Record<string, Partial<MD3Type>> = {
//   titleSmall: {
//     ...defaultFont.titleSmall,
//     fontFamily: "Poppins",
//   },
//   titleMedium: {
//     ...defaultFont.titleMedium,
//     fontFamily: "Poppins",
//   },
//   titleLarge: {
//     ...defaultFont.titleLarge,
//     fontFamily: "Poppins",
//   },
// };
// const labelFont: Record<string, Partial<MD3Type>> = {
//   labelSmall: {
//     ...defaultFont.labelSmall,
//     fontFamily: "Poppins",
//   },
//   labelMedium: {
//     ...defaultFont.labelMedium,
//     fontFamily: "Poppins",
//   },
//   labelLarge: {
//     ...defaultFont.labelLarge,
//     fontFamily: "Poppins",
//   },
// };
const bodyFont: Record<string, Partial<MD3Type>> = {
  // bodySmall: {
  //   ...defaultFont.bodySmall,
  //   fontFamily: "Poppins",
  // },
  // bodyMedium: {
  //   ...defaultFont.bodyMedium,
  //   fontFamily: "Poppins",
  // },
  // bodyLarge: {
  //   ...defaultFont.bodyLarge,
  //   fontFamily: "Poppins",
  // },
  default: {
    ...defaultFont.default,
    fontFamily: "Poppins",
  },
};

const fontConfig = {
  // ...titleFont,
  // ...headerFont,
  // ...displayFont,
  // ...labelFont,
  ...bodyFont,
} as const;
const theme = {
  fonts: configureFonts({
    config: fontConfig,
    isV3: true,
  }),

  colors: {
    ...DefaultTheme.colors,
    primary: "#0061A7",
    secondary: "#00718A",
    error: "#E33A24",
    default: "#000000",
    gradientStart: "#3B5EB9",
    gradientEnd: "#48A47C",
  },
};

export default theme;
