import { Dimensions, Image, View } from "react-native";
import { Card, Text } from "react-native-paper";
import styled from "styled-components/native";
import { CreditCarousel } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "@/hooks/useTheme";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
// Standard credit card ratio

const ParentImage = styled(Image)({
  position: "absolute",
});
const StyledContent = styled(Card.Content)({
  padding: 20,
});

// Card Header
const HeaderView = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
});
const HeaderName = styled(Text)({
  color: "#fff",
  fontSize: 12,
  fontWeight: "600",
});
const HeaderType = styled(Text)({
  color: "#fff",
  fontSize: 11,
});
// Card Number
const CardNumber = styled(Text)({
  color: "#fff",
  fontSize: 17,
  letterSpacing: 2,
  marginBottom: 24,
});
// Card Details
const CardDetailsView = styled(View)({
  marginRight: 24,
});
const CardDetailsLabel = styled(Text)({
  color: "#ffffff",
  fontSize: 10,
  marginBottom: 4,
});
const CardDetailsValue = styled(Text)({
  color: "#fff",
  fontSize: 12,
  fontWeight: "500",
});
const CardDetailSection = styled(View)({
  marginRight: 12,
});
const CardDetailRow = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 16,
});
// Circles
const CardLogo = styled(View)({
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: -20,
});
const WhiteCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: 5,
  backgroundColor: "#ffffff",
});
const RedCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: -8,
  backgroundColor: "#EB001B",
});
const OrangeCircle = styled(View)({
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#F79E1B",
});

const AnimatedCard = ({ cards, index, scrollX }: CreditCarousel) => {
  const {
    colors: { gradientStart, gradientEnd },
  } = useAppTheme();
  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width > 480 ? 480 : width;
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX?.value as number,
            [
              ((index as number) - 1) * CARD_WIDTH,
              (index as number) * CARD_WIDTH,
              ((index as number) + 1) * CARD_WIDTH,
            ],
            [-CARD_WIDTH * 0.1, 0, CARD_WIDTH * 0.1],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX?.value as number,
            [
              ((index as number) - 1) * CARD_WIDTH,
              (index as number) * CARD_WIDTH,
              ((index as number) + 1) * CARD_WIDTH,
            ],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[rnAnimatedStyle, { width: CARD_WIDTH, padding: 15 }]}
    >
      <LinearGradient
        colors={[gradientStart, gradientEnd]}
        style={{ borderRadius: 10 }}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <ParentImage
          source={require("@/assets/images/cardBackground.png")}
          resizeMode="cover"
        />
        <StyledContent>
          <HeaderView>
            <HeaderName>ADRBank</HeaderName>
            <HeaderType>Credit Card</HeaderType>
            <WhiteCircle />
          </HeaderView>

          <CardNumber>{cards?.cardNumber}</CardNumber>

          <CardDetailsView>
            <CardDetailSection>
              <CardDetailsLabel>Card Holder Name</CardDetailsLabel>
              <CardDetailsValue>{cards?.cardHolder}</CardDetailsValue>
            </CardDetailSection>

            <CardDetailRow>
              <CardDetailSection>
                <CardDetailsLabel>Expired Date</CardDetailsLabel>
                <CardDetailsValue>{cards?.expiryDate}</CardDetailsValue>
              </CardDetailSection>

              <CardDetailSection>
                <CardDetailsLabel>CVV</CardDetailsLabel>
                <CardDetailsValue>{cards?.cvv}</CardDetailsValue>
              </CardDetailSection>

              <CardLogo>
                <RedCircle />
                <OrangeCircle />
              </CardLogo>
            </CardDetailRow>
          </CardDetailsView>
        </StyledContent>
      </LinearGradient>
    </Animated.View>
  );
};

export default AnimatedCard;
