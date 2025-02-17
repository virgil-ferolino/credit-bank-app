import {
  configureFonts,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";
import { MD3Type } from "react-native-paper/lib/typescript/types";

const displayFont: Record<string, Partial<MD3Type>> = {
  displaySmall: {
    fontFamily: "Poppins",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 44,
  },
  displayMedium: {
    fontFamily: "Poppins",
    fontSize: 45,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 52,
  },
  displayLarge: {
    fontFamily: "Poppins",
    fontSize: 57,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 64,
  },
};
const headerFont: Record<string, Partial<MD3Type>> = {
  headlineSmall: {
    fontFamily: "Poppins",
    fontSize: 24,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 32,
  },
  headlineMedium: {
    fontFamily: "Poppins",
    fontSize: 28,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 36,
  },
  headlineLarge: {
    fontFamily: "Poppins",
    fontSize: 32,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 40,
  },
};
const titleFont: Record<string, Partial<MD3Type>> = {
  titleSmall: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    // lineHeight: 20,
  },
  titleMedium: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "500",
    letterSpacing: 0.15,
    // lineHeight: 24,
  },
  titleLarge: {
    fontFamily: "Poppins",
    fontSize: 22,
    fontWeight: "400",
    letterSpacing: 0,
    // lineHeight: 28,
  },
};
const labelFont: Record<string, Partial<MD3Type>> = {
  labelSmall: {
    fontFamily: "Poppins",
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0.5,
    // lineHeight: 16,
  },
  labelMedium: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "500",
    letterSpacing: 0.5,
    // lineHeight: 16,
  },
  labelLarge: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0.1,
    // lineHeight: 20,
  },
};
const bodyFont: Record<string, Partial<MD3Type>> = {
  bodySmall: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
    letterSpacing: 0.4,
    // lineHeight: 16,
  },
  bodyMedium: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    letterSpacing: 0.25,
    // lineHeight: 20,
  },
  bodyLarge: {
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: "400",
    letterSpacing: 0.15,
    // lineHeight: 24,
  },
  default: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeight: "400",
  },
};

const fontConfig = {
  ...titleFont,
  ...headerFont,
  ...displayFont,
  ...labelFont,
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
