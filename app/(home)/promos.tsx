import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { useState } from "react";
import { Dimensions, Image, Modal, ScrollView, TouchableOpacity, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen")

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
});

const ButtonText = styled(Text)({
    color: "white",
    fontSize: 14,
    fontWeight: "thin"
});

const HeaderView = styled(View)({
    display: "flex",
    flexDirection: "col",
    flexGrow: 1,
    alignItems: "center",
});

const Overlay = styled(TouchableOpacity)({
    flex:1,
    backgroundColor: "transparent",
    justifyContent: "flex-end"
});

const ModalContainer = styled(Animated.View)({
    height: height * 0.90,
    backgroundColor: '#fff',
    padding: 20,
    scrollbarWidth: "none", // For Firefox
    msOverflowStyle: "none", // For IE/Edge
    maxWidth: 480,
    width: "100%",
    alignSelf: "center",
    WebkitOverflowScrolling: "touch", // For iOS smooth scrolling
    overflowY: "auto",
});

const ModalContent = styled(ScrollView)({
    flex:1,
});

const PromoImageHeader = styled(Image)({
    width: "100%",
    height: 180
})

const PromoImageDetail = styled(Image)({
    width: "100%",
    height: 550
})

const PromoModal = ({ isVisible, onClose, promoContent }: { isVisible:boolean, onClose: () => void, promoContent:PromoContentType }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <Overlay
                onPress={onClose}
                activeOpacity={2}>
                <ModalContainer>
                    <ModalContent>
                        <PromoImageHeader source={promoContent.promoImageFull} />
                        <StyledText
                            style={{
                                marginTop:15
                            }}>
                            {promoContent.promoTitle}
                        </StyledText>
                        <Text
                            style={{
                                marginTop:15,
                                marginLeft:10,
                                marginRight:10
                            }}>
                            {promoContent.promoDesc}
                        </Text>
                        <StyledText
                            style={{
                                marginTop:15,
                                marginBottom:15
                            }}>
                            {promoContent.promoDetail}
                        </StyledText>
                        {promoContent?.promoDetailImage &&(
                            <PromoImageDetail source={promoContent.promoDetailImage} />
                        )}
                    </ModalContent>
                </ModalContainer>
            </Overlay>
        </Modal>
    )
}

const PromoCard = ({ promo, onOpen }: { promo:PromoType, onOpen:(promo:PromoType) => void }) => {
    return(
        <StyledCard>
            <StyledImage source={promo.promoImage} />
            <Card.Content>
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

const Promos = () => {
    const [selectedPromo, setSelectedPromo] = useState<PromoType | null>(null)

    return (
        <ParallaxScrollView>
            <HeaderView>
                {promos.map((promo) => (
                    <PromoCard
                        key={promo.promoId}
                        promo={promo}
                        onOpen={() => setSelectedPromo(promo)} />
                ))}
            </HeaderView>
            {selectedPromo && <PromoModal isVisible={!!selectedPromo} promoContent={selectedPromo.promoContent} onClose={() => setSelectedPromo(null)} />}
        </ParallaxScrollView>
    );
}
 
export default Promos;