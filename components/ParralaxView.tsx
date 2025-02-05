import type { PropsWithChildren } from "react";
import { Platform, ScrollView, View } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
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
const AnimatedView = styled(Animated.ScrollView)({
});

export default function ParallaxScrollView({ children }: PropsWithChildren) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const isWeb = Platform.OS === "web";
  return (
    <GestureHandlerRootView>
      {isWeb ? (
        <WebView>
          <StyledScrollView>{children}</StyledScrollView>
        </WebView>
      ) : (
        <AnimatedView>
          <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
          >
            <SafeAreaView>{children}</SafeAreaView>
          </Animated.ScrollView>
        </AnimatedView>
      )}
    </GestureHandlerRootView>
  );
}
