import Container from "@/components/Container";
import { promos } from "@/data/home";
import { Fragment, useCallback, useRef, useState } from "react";
import { Dimensions, FlatList, Image, ScrollView, TouchableOpacity, View } from "react-native";
import { Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import BottomSheet, { BottomSheetMethods } from "@devvie/bottom-sheet"

interface PromoCardType {
    promo: PromoType;
    onOpen: () => void;
}

interface PromoType {
    promoId: number,
    promoImage: string,
    promoHeader: string,
    promoContent: PromoContentType
}

interface PromoContentType {
    promoImageFull: string,
    promoTitle: string,
    promoDesc: string,
    promoDetail: string,
    promoDetailImage: string,
}

const { width, height } = Dimensions.get("window")

const StyledCard = styled(Card)({
    width: 350,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
})

const StyledImage = styled(Image)({
    width: "100%",
    height: 200,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 0
})

const StyledButton = styled(TouchableOpacity)({
    marginTop:10,
    backgroundColor: "#0265A1",
    width: 100,
    height: 30,
    borderRadius: 8,
    justifyContent: "center", 
})
const StyledText = styled(Text)({
    fontFamily: "PoppinsSemiBold",
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
    height: Math.min(700, (1000 /667) * (width * 0.90)),
})

const PromoCard = ({ 
    promo, 
    onOpen, 
}: PromoCardType) => {
    return(
        <StyledCard>
            <StyledImage source={promo.promoImage} />
            <Card.Content
                style={{
                    alignItems: "center"
                }}>
                <StyledText>
                    {promo.promoHeader}
                </StyledText>
                <StyledButton onPress={onOpen}>
                    <Text style={{ 
                        color: "white", 
                        fontSize: 12,
                        textAlign: "center",
                        fontWeight: "light",
                    }}>
                        Read more
                    </Text>
                </StyledButton>
            </Card.Content>
        </StyledCard>
    )
}

const Promos = () => {
    const [selectedPromo, 
        setSelectedPromo] = useState<PromoType | null>(null);

    const sheetRef = useRef<BottomSheetMethods>(null);

    const handleSnapPress = useCallback((promo:PromoType) => {
        setSelectedPromo(promo)
        sheetRef.current?.open();
    }, []);

    const renderPromoBottomSheet = () => {
        return (
            <BottomSheet
                ref={sheetRef}
                animationType={"slide"}
                height={height * 0.85}
                maxHeight={"100%"}
                style={{
                    width: "100%",
                    alignSelf: "center",
                    maxWidth: 480,
                    backgroundColor: "white",
                    overflowY: "scroll",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
                >
                <ScrollView
                    scrollEventThrottle={16}
                    contentContainerStyle={{
                        alignContent: "center",
                        paddingBottom: 30,
                        flexGrow: 1,
                    }}
                    showsVerticalScrollIndicator={false}>
                    {selectedPromo && (
                        <View style={{ alignItems: "center",}}>
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
                                        textAlign: "left",
                                    }}>
                                    {selectedPromo.promoContent.promoDesc}
                                </Text>
                                <StyledText>
                                    {selectedPromo.promoContent.promoDetail}
                                </StyledText>
                                {selectedPromo.promoContent.promoDetailImage &&
                                    <ImageDetail 
                                        source={selectedPromo.promoContent.promoDetailImage} 
                                        resizeMode="contain" />
                                }
                            </View>
                        </View>
                    )}
                </ScrollView>
            </BottomSheet>
        )
    }

    return (
        <Fragment>
            <Container>
                <Animated.View style={{ alignItems:"center" }}>
                    <FlatList
                        data={promos}
                        showsVerticalScrollIndicator={false}
                        renderItem={({item}) => (
                            <PromoCard
                                key={item.promoId}
                                promo={item}
                                onOpen={() => handleSnapPress(item)} />  
                            )}
                    />
                </Animated.View>
            </Container>
            {renderPromoBottomSheet()}
        </Fragment>
    );
}

export default Promos;