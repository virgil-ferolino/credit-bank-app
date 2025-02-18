import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import theme from "@/theme";
import styled from "styled-components/native";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const ContainedView = styled(View)({
  maxWidth: 480,
  width: "100%",
  height: "100%",
  alignSelf: "center",
});

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    // Poppins: require("../assets/fonts/Pacifico-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <ContainedView>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="(mycard)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(settings)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" backgroundColor={"#004068"} />
      </ContainedView>
    </PaperProvider>
  );
}
