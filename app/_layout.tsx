import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { PaperProvider } from "react-native-paper";
import theme from "@/theme";
import styled from "styled-components/native";
import { View, ImageBackground } from "react-native";
import { Image } from "expo-image";

SplashScreen.preventAutoHideAsync();

const ContainedView = styled(View)({
  maxWidth: 480,
  width: "100%",
  height: "100%",
  alignSelf: "center",
});

export default function RootLayout() {
  const [isSplashVisible, setIsSplashVisible] = useState<boolean>(true);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PoppinsExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
    PoppinsExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PoppinsSemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setIsSplashVisible(false);
      }, 4000);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  if (isSplashVisible) {
    return (
      <ImageBackground
        source={require("@/assets/images/splash-background.png")}
        style={{
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          position: "absolute",
          left: "50%",
          transform: [{ translateX: -240 }],
          width: 480,
        }}
      >
        <Image
          source={require("@/assets/images/alphabank.gif")}
          style={{
            width: 400,
            height: "50%"
          }}
        />
      </ImageBackground>
    )
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
