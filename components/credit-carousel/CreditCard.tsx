import { Image, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { CreditCardProps } from "./types";
import { LinearGradient } from "expo-linear-gradient";
import { useAppTheme } from "@/hooks/useTheme";
import { useState } from "react";

type OffNumber = "cn" | "cvv" | "exp";

const ParentView = styled(Card)({
  boxShadow: "none",
  position: "relative",
  overflow: "hidden",
});
const ParentImage = styled(Image)({
  position: "absolute",
});
const StyledContent = styled(Card.Content)({
  padding: 20,
});

const HeaderView = styled(View)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 24,
  position: "relative",
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

const CardNumber = styled(Text)({
  color: "#fff",
  fontSize: 15,
  letterSpacing: 2,
});

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

const CardLogo = styled(View)({
  flexDirection: "row",
  alignItems: "center",
  marginHorizontal: -20,
});

const BankLogo = styled(Image)({
  width: 30,
  height: 30,
  borderRadius: 15,
  marginHorizontal: 5,
});

const ToggleHide = styled(TouchableOpacity)({
  width: 25,
  height: 25,
  borderRadius: 15,
  marginRight: 50,
  backgroundColor: "#ffffff",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
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

const CreditCard = ({
  cardNumber = "1234123412341234",
  cardHolder = "JAMES CHARLES",
  expiryDate = "12/12",
  cvv = "123",
}: CreditCardProps) => {
  const {
    colors: { gradientStart, gradientEnd },
  } = useAppTheme();
  const [toggleHidden, setToggleHidden] = useState(true);

  const renderNumbers = (a: string, card: OffNumber) => {
    const format = a.replace(/\s+/g, "");
    const digits = (x: number, y: number, z: string) => {
      if (toggleHidden) {
        return z.slice(x, y).replace(/\d/g, "*");
      } else return z.slice(x, y);
    };
    switch (card) {
      case "cn":
        return `${digits(0, 4, a)} ${digits(4, 8, a)} ${digits(
          8,
          12,
          a
        )} ${format.slice(12, 16)}`;
      case "cvv":
        return digits(0, 3, a);
      case "exp":
        const exp = a.replace(/[^0-9]/g, "");
        return `${digits(0, 2, exp)}/${digits(2, 4, exp)}`;
    }
  };
  return (
    <ParentView>
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
            <HeaderName>VAFBank</HeaderName>
            <HeaderType>Credit Card</HeaderType>
            <BankLogo source={require("@/assets/images/Bank-icon-large.png")} />
          </HeaderView>
          <HeaderView>
            <CardNumber>{renderNumbers(cardNumber, "cn")}</CardNumber>
            <ToggleHide
              hitSlop={20}
              onPress={() => setToggleHidden((prev) => !prev)}
            >
              <Ionicons
                name={toggleHidden ? "eye-off-outline" : "eye-outline"}
                size={20}
              />
            </ToggleHide>
          </HeaderView>

          <CardDetailsView>
            <CardDetailSection>
              <CardDetailsLabel>Card Holder Name</CardDetailsLabel>
              <CardDetailsValue>{cardHolder}</CardDetailsValue>
            </CardDetailSection>

            <CardDetailRow>
              <CardDetailSection>
                <CardDetailsLabel>Expired Date</CardDetailsLabel>
                <CardDetailsValue>
                  {renderNumbers(expiryDate, "exp")}
                </CardDetailsValue>
              </CardDetailSection>

              <CardDetailSection>
                <CardDetailsLabel>CVV</CardDetailsLabel>
                <CardDetailsValue>{renderNumbers(cvv, "cvv")}</CardDetailsValue>
              </CardDetailSection>

              <CardLogo>
                <RedCircle />
                <OrangeCircle />
              </CardLogo>
            </CardDetailRow>
          </CardDetailsView>
        </StyledContent>
      </LinearGradient>
    </ParentView>
  );
};

export default CreditCard;
