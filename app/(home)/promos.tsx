import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, View, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import styled from "styled-components/native";

interface PromoType {
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

const PromoComponent = {
    StyledCard: styled(Card)({
        width: 350,
        height: 300,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
    }),
    StyledImage: styled(Image)({
        width: "100%",
        height: 180,
        borderBottomLeftRadius:0,
        borderBottomRightRadius: 0
    }),
    StyledText: styled(Text)({
        fontWeight: "bold",
        textAlign: "center",
        color: "#333",
        fontSize: 15,
        marginTop: 20,
        marginBottom: 10
    }),
    StyledButton: styled(Button)({
        marginTop:10,
        backgroundColor: "#0265A1",
        width: 100,
    }),
    ButtonText: styled(Text)({
        color: "white",
        fontSize: 14,
    }),
    HeaderView: styled(View)({
        flexGrow: 1,
        alignItems: "center",
    }),
    ImageHeader: styled(Image)({
        width: "100%",
        height: 200,
    }),
    ImageDetail: styled(Image)({
        flexGrow: 1,
        width: "100%",
        height: 600,
    })
}

const PromoCard = ({ promo, onOpen }: { promo:PromoType, onOpen:() => void }) => {
    return(
        <PromoComponent.StyledCard>
            <PromoComponent.StyledImage source={promo.promoImage} />
            <Card.Content
                style={{
                    alignItems: "center"
                }}>
                <PromoComponent.StyledText>
                    {promo.promoHeader}
                </PromoComponent.StyledText>
                <PromoComponent.StyledButton onPress={onOpen}>
                    <PromoComponent.ButtonText>
                        Read more
                    </PromoComponent.ButtonText>
                </PromoComponent.StyledButton>
            </Card.Content>
        </PromoComponent.StyledCard>
    )
}

const PromoPage = ({ onClose, promoContentSrc }: { onClose: () => void, promoContentSrc:PromoContentType }) => {
    return (
        <View style={{ flex:1 }}>
            <TouchableOpacity
                onPress={onClose}
                style={{
                    padding: 10,
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 10,
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    borderRadius: 100
            }}>
                <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <ScrollView scrollEventThrottle={16}>
                <PromoComponent.ImageHeader
                    source={promoContentSrc.promoImageFull} />
                <View style={{ padding: 20,}}>
                    <PromoComponent.StyledText>
                        {promoContentSrc.promoTitle}
                    </PromoComponent.StyledText>
                    <Text
                        style={{
                            marginTop: 15,
                            marginLeft: 10,
                            marginRight: 10,}}>
                        {promoContentSrc.promoDesc}
                    </Text>
                    <PromoComponent.StyledText>
                        {promoContentSrc.promoDetail}
                    </PromoComponent.StyledText>
                    {promoContentSrc?.promoDetailImage && (
                        <PromoComponent.ImageDetail
                        source={promoContentSrc.promoDetailImage}
                        resizeMode="contain" />
                    )}
                        </View>
                    </ScrollView>
                </View>
    )
}

const Promos = () => {
    const [selectedPromo, setSelectedPromo] = useState<PromoType | null>(null)

    return (
        <ParallaxScrollView>
            {selectedPromo
            ? <PromoPage onClose={() => setSelectedPromo(null)} promoContentSrc={selectedPromo.promoContent} />
            : (
                <PromoComponent.HeaderView>
                    {promos.map((promo, index) => (
                        <PromoCard
                            key={index}
                            promo={promo}
                            onOpen={() => setSelectedPromo(promo)} />
                    ))}
                </PromoComponent.HeaderView>
            )
            }
        </ParallaxScrollView>
    );
}
 
export default Promos;