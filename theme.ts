import { MD3LightTheme as DefaultTheme } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,

  colors: {
    ...DefaultTheme.colors,
    primary: "#0061A7",
    secondary: "#00718A",
    error: "#E33A24",
    default: "#000000",
  },
};

export default theme;
