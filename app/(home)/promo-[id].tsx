import { usePromoStore } from "@/store/home/usePromo";
import { Stack } from "expo-router";
import { Fragment } from "react";

import Animated from "react-native-reanimated";

import { Text } from "react-native-paper";

import { Dimensions, Image, View } from "react-native";

import styled from "styled-components/native";

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
    width: width,
    height: (406/1000) * width, //formula: (image height / image width) * screen width
})

const ImageDetail = styled(Image)({
    width: width,
    height: (1000/667) * width, //formula: (image height / image width) * screen width
})

export default function GetPromo() {
    const selectedPromo = usePromoStore(
        (state) => state.selectedPromo
    );

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    title: selectedPromo?.promoHeader ? "" : "Promo",
                    headerBackVisible: true,
                }} />
            <Animated.ScrollView scrollEventThrottle={16}>
                {selectedPromo
                ? (
                    <View>
                        <ImageHeader source={selectedPromo.promoContent.promoImageFull} />
                        <View>
                            <StyledText>
                                {selectedPromo.promoContent.promoTitle}
                            </StyledText>
                            <Text
                                style={{
                                    marginTop: 15,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    paddingHorizontal: 15,
                                }}>
                                {selectedPromo.promoContent.promoDesc}
                            </Text>
                            <StyledText>
                                {selectedPromo.promoContent.promoDetail}
                            </StyledText>
                            {selectedPromo.promoContent.promoDetailImage && (
                                <ImageDetail source={selectedPromo.promoContent.promoDetailImage} resizeMode="contain" />
                            )}
                        </View>
                    </View>
                )
                : (
                    <Text variant="bodyMedium">No promos here.</Text>
                )}
            </Animated.ScrollView>
        </Fragment>
    )
}