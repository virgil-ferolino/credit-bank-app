import type { PropsWithChildren } from "react";
import { Platform, ScrollView, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const WebView = styled(View)({
  flex: 1,
  width: "100%",
});
const StyledScrollView = styled(ScrollView)({
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For IE/Edge
  maxWidth: 480,
  width: "100%",
  alignSelf: "center",
  WebkitOverflowScrolling: "touch", // For iOS smooth scrolling
  overflow: "hidden", // Hide the scrollbars
});

export default function ParallaxScrollView({ children }: PropsWithChildren) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const isWeb = Platform.OS === "web";
  return (
    <GestureHandlerRootView>
      {isWeb ? (
        <WebView>
          <StyledScrollView>
            <SafeAreaProvider>
              <SafeAreaView>{children}</SafeAreaView>
            </SafeAreaProvider>
          </StyledScrollView>
        </WebView>
      ) : (
        <Animated.View>
          <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
            <SafeAreaProvider>
              <SafeAreaView>{children}</SafeAreaView>
            </SafeAreaProvider>
          </Animated.ScrollView>
        </Animated.View>
      )}
    </GestureHandlerRootView>
  );
}
