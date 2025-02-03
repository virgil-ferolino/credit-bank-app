import ParallaxScrollView from "@/components/ParralaxView";
import { useAppTheme } from "@/hooks/useTheme";

import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ImageBackground, View } from "react-native";

import { Avatar, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

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

const CardLogo = styled(View)({
  flexDirection: "row",
  alignItems: "center",
});

const WhiteText = styled(Text)({
  color: "#FFFFFF",
});

export default function HomeScreen() {
  const {
    colors: { primary, secondary },
  } = useAppTheme();

  return (
    <LinearGradient colors={[primary, secondary]} style={{ flex: 1 }}>
      <ParallaxScrollView>
        <View style={{ padding: 15, rowGap: 15 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Avatar.Image
                size={40}
                source={{
                  uri: "https://images7.alphacoders.com/489/thumb-1920-489447.jpg",
                }}
              />
              <View>
                <Text variant="labelSmall" style={{ color: "#FFFFFF" }}>
                  Welcum back,
                </Text>
                <Text variant="labelLarge" style={{ color: "#FFFFFF" }}>
                  Charles James
                </Text>
              </View>
            </View>

            <MaterialIcons name="notifications" size={40} color="#FFFFFF" />
          </View>

          <Card style={{ boxShadow: "none" }}>
            <ImageBackground
              source={require("@/assets/images/card-design.png")}
              imageStyle={{ borderRadius: 10 }}
            >
              <Card.Content style={{ paddingVertical: 15, rowGap: 15 }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    variant="labelLarge"
                    style={{ color: "#FFFFFF", fontWeight: 700 }}
                  >
                    ADRBank
                  </Text>
                  <WhiteText variant="labelLarge">Credit Card</WhiteText>
                  <WhiteCircle />
                </View>

                <Text
                  variant="headlineSmall"
                  style={{ color: "#FFFFFF", fontWeight: 700 }}
                >
                  **** **** **** 1234
                </Text>

                <View>
                  <WhiteText variant="labelLarge">Card Holder Name</WhiteText>
                  <WhiteText variant="labelLarge">James Charles</WhiteText>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <WhiteText variant="labelLarge">Expired Date</WhiteText>
                    <WhiteText variant="labelLarge">**/**</WhiteText>
                  </View>
                  <View>
                    <WhiteText variant="labelLarge">CVV</WhiteText>
                    <WhiteText variant="labelLarge">***</WhiteText>
                  </View>

                  <CardLogo>
                    <RedCircle />
                    <OrangeCircle />
                  </CardLogo>
                </View>
              </Card.Content>
            </ImageBackground>
          </Card>

          <Card>
            <Card.Content>
              <Image source={require("@/assets/images/deposit-check.png")} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image source={require("@/assets/images/card-check.png")} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image source={require("@/assets/images/branch.png")} />
            </Card.Content>
          </Card>
        </View>
      </ParallaxScrollView>
    </LinearGradient>
  );
}
