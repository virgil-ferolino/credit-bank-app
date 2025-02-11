import { usePromoStore } from "@/store/home/usePromo";
import { Stack } from "expo-router";
import { Fragment } from "react";

import Animated from "react-native-reanimated";

import { Text } from "react-native-paper";

import { Image, ScrollView, View } from "react-native";

import styled from "styled-components/native";

const StyledText = styled(Text)({
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10
})

const ImageHeader = styled(Image)({
    width: "100%",
    height: 200,
})

const ImageDetail = styled(Image)({
    flexGrow: 1,
    width: "100%",
    height: 600,
})

export default function GetPromo() {
    const selectedPromo = usePromoStore(
        (state) => state.selectedPromo
    );

    return (
        <Fragment>
            <Stack.Screen
                options={{
                    title: selectedPromo?.promoHeader || "Promo",
                    headerBackVisible: false,
                }} />
            <Animated.View style={{ paddingVertical: 16, paddingHorizontal: 16}}>
                {selectedPromo
                ? (
                    <ScrollView scrollEventThrottle={16}>
                        <ImageHeader source={selectedPromo.promoContent.promoImageFull} />
                        <View style={{ padding: 20, }}>
                            <StyledText>
                                {selectedPromo.promoContent.promoTitle}
                            </StyledText>
                            <Text
                                style={{
                                    marginTop: 15,
                                    marginLeft: 10,
                                    marginRight: 10,
                                }}>
                                {selectedPromo.promoContent.promoDesc}
                            </Text>
                            <StyledText>
                                {selectedPromo.promoContent.promoDetail}
                            </StyledText>
                            {selectedPromo.promoContent.promoDetailImage && (
                                <ImageDetail
                                    source={selectedPromo.promoContent.promoDetailImage}
                                    resizeMode="contain" />
                            )}
                        </View>
                    </ScrollView>
                )
                : (
                    <Text variant="bodyMedium">No promos here.</Text>
                )}
            </Animated.View>
        </Fragment>
    )
}