import ParallaxScrollView from "@/components/ParralaxView";

import { MaterialIcons } from "@expo/vector-icons";
import { ImageBackground, View } from "react-native";

import { Avatar, Card, Text } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ParallaxScrollView>
      <View style={{ padding: 15, rowGap: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
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

        <Card>
          <ImageBackground
            source={require("@/assets/images/card-design.png")}
            imageStyle={{ borderRadius: 10 }}
          >
            <Card.Content>
              <Text variant="titleLarge">Card Title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
          </ImageBackground>
        </Card>
      </View>
    </ParallaxScrollView>
  );
}
