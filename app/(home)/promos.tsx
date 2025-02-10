import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions, Image, Modal, View, ScrollView, TouchableOpacity } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen")

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

const StyledCard = styled(Card)({
    width: 350,
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
});

const StyledImage = styled(Image)({
    width: "100%",
    height: 180,
    borderBottomLeftRadius:0,
    borderBottomRightRadius: 0
})

const StyledText = styled(Text)({
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10
});

const StyledButton = styled(Button)({
    marginTop:10,
    backgroundColor: "#0265A1",
    width: 100,
});

const ButtonText = styled(Text)({
    color: "white",
    fontSize: 14,
});

const HeaderView = styled(View)({
    flexGrow: 1,
    alignItems: "center",
});

const Overlay = styled(View)({
    flex:1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
})

const ModalContainer = styled(Animated.View)({
    height: height * 0.882,
    backgroundColor: "white",
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
})

const ModalContent = styled(View)({
    flex: 1,
    rowGap: 8,
})

const PromoImageHeader = styled(Image)({
    width: "100%",
    height: 150,
})

const PromoImageDetail = styled(Image)({
    width: "100%",
    height: 525
})

const PromoCard = ({ promo, onOpen }: { promo:PromoType, onOpen:(promo:PromoType) => void }) => {
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
                <StyledButton onPress={() => onOpen(promo)}>
                    <ButtonText>
                        Read more
                    </ButtonText>
                </StyledButton>
            </Card.Content>
        </StyledCard>
    )
}

const PromoModal = ({ isVisible, onClose, contentSrc }: { isVisible:boolean, onClose: () => void, contentSrc: PromoContentType }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <Overlay activeOpacity={1}>
                <ModalContainer>
                    <ModalContent>
                        <TouchableOpacity
                                    onPress={onClose} 
                                    hitSlop={20}
                                    style={{
                                        alignSelf: "flex-end",
                                        padding: 10,
                                        position: "absolute",
                                        top: 10,
                                        right: 10,
                                        zIndex: 10,
                                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                                        borderRadius: 100,
                                    }}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                        <ScrollView scrollEventThrottle={16}>
                            <PromoImageHeader source={contentSrc.promoImageFull} />
                            <View style={{ padding: 20,}}>
                                <StyledText>
                                    {contentSrc.promoTitle}
                                </StyledText>
                                <Text
                                    style={{
                                        marginTop: 15,
                                        marginLeft: 10,
                                        marginRight: 10,}}>
                                    {contentSrc.promoDesc}
                                </Text>
                                <StyledText>
                                    {contentSrc.promoDetail}
                                </StyledText>
                                {contentSrc?.promoDetailImage && (
                                    <PromoImageDetail source={contentSrc.promoDetailImage} />
                                )}
                            </View>
                        </ScrollView>
                    </ModalContent>
                </ModalContainer>
            </Overlay>
        </Modal>
    )
}

const Promos = () => {
    const [selectedPromo, setSelectedPromo] = useState<PromoType | null>(null)

    return (
        <ParallaxScrollView>
            <HeaderView>
                {promos.map((promo, index) => (
                    <PromoCard
                        key={index}
                        promo={promo}
                        onOpen={() => setSelectedPromo(promo)} />
                ))}
            </HeaderView>
            {selectedPromo
            && <PromoModal
                isVisible={!!selectedPromo}
                contentSrc={selectedPromo.promoContent}
                onClose={() => setSelectedPromo(null)} />}
        </ParallaxScrollView>
    );
}
 
export default Promos;