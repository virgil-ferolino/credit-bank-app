import type { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

import { useBottomTabOverflow } from "@/components/ui/TabBarBackground";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ParallaxScrollView({ children }: PropsWithChildren) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const bottom = useBottomTabOverflow();

  return (
    <GestureHandlerRootView>
      <Animated.View style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          scrollIndicatorInsets={{ bottom }}
          contentContainerStyle={{ paddingBottom: bottom }}
        >
          <SafeAreaView>{children}</SafeAreaView>
        </Animated.ScrollView>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
