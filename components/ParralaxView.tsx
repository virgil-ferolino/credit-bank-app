import type { PropsWithChildren } from "react";
import { Platform, ScrollView } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const StyledScrollView = styled(ScrollView)({
  flex: 1,
});
const AnimatedView = styled(Animated.ScrollView)({
  flex: 1,
});

export default function ParallaxScrollView({ children }: PropsWithChildren) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const bottom = useBottomTabOverflow();
  const isWeb = Platform.OS === "web";
  return (
    <GestureHandlerRootView>
      {isWeb ? (
        <StyledScrollView>{children}</StyledScrollView>
      ) : (
        <AnimatedView>
          <Animated.ScrollView
            ref={scrollRef}
            scrollEventThrottle={16}
            scrollIndicatorInsets={{ bottom }}
            contentContainerStyle={{ paddingBottom: bottom }}
          >
            <SafeAreaView>{children}</SafeAreaView>
          </Animated.ScrollView>
        </AnimatedView>
      )}
    </GestureHandlerRootView>
  );
}
