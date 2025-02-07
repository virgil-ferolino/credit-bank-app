import { View, StyleSheet, Dimensions } from "react-native";
import { PaginationProps } from "./types";
import styled from "styled-components/native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const DotContainer = styled(View)({
  flexDirection: "row",
  justifyContent: "center",
});

const PaginationDot = ({ cards, scrollX }: PaginationProps) => {
  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width > 480 ? 480 : width;

  const hexToRgba = (hex: string) => {
    let r: number = 0,
      g: number = 0,
      b: number = 0,
      a: number = 1;
    if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    } else if (hex.length === 9) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
      a = parseInt(hex[7] + hex[8], 16) / 255;
    }
    return { r, g, b, a };
  };

  const startColor = "#BDBDBD"; // inactive color
  const endColor = "#2196F3"; // active color

  const startColorRgba = hexToRgba(startColor);
  const endColorRgba = hexToRgba(endColor);
  return (
    <DotContainer>
      {cards.map((_, index) => {
        const pgAnimationStyle = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            [
              ((index as number) - 1) * CARD_WIDTH,
              (index as number) * CARD_WIDTH,
              ((index as number) + 1) * CARD_WIDTH,
            ],
            [8, 20, 8],
            Extrapolation.CLAMP
          );

          const r = interpolate(
            scrollX.value,
            [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              (index + 1) * CARD_WIDTH,
            ],
            [startColorRgba.r, endColorRgba.r, startColorRgba.r],
            Extrapolation.CLAMP
          );

          const g = interpolate(
            scrollX.value,
            [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              (index + 1) * CARD_WIDTH,
            ],
            [startColorRgba.g, endColorRgba.g, startColorRgba.g],
            Extrapolation.CLAMP
          );

          const b = interpolate(
            scrollX.value,
            [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              (index + 1) * CARD_WIDTH,
            ],
            [startColorRgba.b, endColorRgba.b, startColorRgba.b],
            Extrapolation.CLAMP
          );

          const a = interpolate(
            scrollX.value,
            [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              (index + 1) * CARD_WIDTH,
            ],
            [startColorRgba.a, endColorRgba.a, startColorRgba.a],
            Extrapolation.CLAMP
          );

          const dotColor = `rgba(${r}, ${g}, ${b}, ${a})`;

          return {
            width: dotWidth,
            backgroundColor: dotColor,
          };
        });
        return (
          <Animated.View key={index} style={[styles.dot, pgAnimationStyle]} />
        );
      })}
    </DotContainer>
  );
};
export default PaginationDot;

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#2196F3",
  },
  inactiveDot: {
    backgroundColor: "#BDBDBD",
  },
});
