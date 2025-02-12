import { usePromoStore } from "@/store/home/usePromo";
import { Stack } from "expo-router";

import Animated from "react-native-reanimated";

import { Text } from "react-native-paper";

import { Dimensions, Image, Platform, View } from "react-native";

import styled from "styled-components/native";
import Container from "@/components/Container";

const { width } = Dimensions.get("window")

const StyledText = styled(Text)({
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10
})

const ImageHeader = styled(Image)({
    width: Math.min(500, width),
    height: Math.min(203, (203/500) * width),
})

const ImageDetail = styled(Image)({
    width: Math.min(500, width),
    height: Math.min(650, (1000 /667) * (width * 0.935)),
})

export default function GetPromo() {
    const selectedPromo = usePromoStore(
        (state) => state.selectedPromo
    );

    return (
        <Container>
            <Stack.Screen
                name="promos/[id]"
                options={{
                    headerTitle:"",
                    headerShown: true,
                    headerBackVisible: Platform.OS === 'android'
                }} />
            <Animated.ScrollView
                scrollEventThrottle={16}
                contentContainerStyle={{ 
                    backgroundColor: "white",
                    alignContent: "center",
                }}
                >
                {selectedPromo
                ? (
                    <View style={{ alignItems: "center", }}>
                        <ImageHeader source={selectedPromo.promoContent.promoImageFull} />
                        <View style={{ alignItems: "center", paddingBottom: 15, }}>
                            <StyledText>
                                {selectedPromo.promoContent.promoTitle}
                            </StyledText>
                            <Text
                                style={{
                                marginTop: 15,
                                marginLeft: 10,
                                marginRight: 10,
                                paddingHorizontal: 15,
                                textAlign: "left"
                            }}>
                                {selectedPromo.promoContent.promoDesc}
                            </Text>
                            <StyledText>
                                {selectedPromo.promoContent.promoDetail}
                            </StyledText>
                            {selectedPromo.promoContent.promoDetailImage && 
                                <ImageDetail source={selectedPromo.promoContent.promoDetailImage} resizeMode="contain" />
                            }
                        </View>
                    </View>
                )
                : (
                    <Text variant="bodyMedium">No promos here.</Text>
                )}
            </Animated.ScrollView>
        </Container>
    )
}