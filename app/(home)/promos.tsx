import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { useState } from "react";
import { Dimensions, Image, Modal, TouchableOpacity, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const { height } = Dimensions.get("screen")

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
    height: height * 0.93,
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

const ModalContent = styled(View)({
    flex:1,
});

const PromoImageHeader = styled(Image)({
    width: "100%",
    height: "20%"
})

const PromoImageDetail = styled(Image)({
    width: "100%",
    height: "70%"
})

const Promos = () => {
    const [visible, setVisible] = useState(false)

    return (
        <ParallaxScrollView>
            <HeaderView>
                {promos.map((promo) => (
                    <View key={promo.promoId}>
                        <StyledCard>
                            <StyledImage source={promo.promoImage} />
                            <Card.Content>
                                <StyledText>
                                    {promo.promoHeader}
                                </StyledText>
                                <StyledButton onPress={() => setVisible(true)}>
                                    <ButtonText>Read more</ButtonText>
                                </StyledButton>
                            </Card.Content>
                        </StyledCard>
                        <Modal
                            animationType="slide"
                            transparent={true} 
                            visible={visible}>
                            <Overlay
                                activeOpacity={2}
                                onPress={() => setVisible(false)}>
                                <ModalContainer>
                                    <ModalContent>
                                        <PromoImageHeader source={promo.promoContent?.promoImageFull} />
                                        <StyledText
                                            style={{
                                                marginTop: 15,
                                        }}>
                                            {promo.promoContent?.promoTitle}
                                        </StyledText>
                                        <Text
                                            style={{
                                                marginTop: 15,
                                                marginLeft: 10,
                                                marginRight: 10
                                        }}>
                                            {promo.promoContent?.promoDesc}
                                        </Text>
                                        <StyledText
                                            style={{
                                                marginTop: 15,
                                                marginBottom: 15
                                        }}>
                                            {promo.promoContent?.promoDetail}
                                        </StyledText>
                                        <PromoImageDetail source={promo.promoContent?.promoDetailImage} />
                                    </ModalContent>
                                </ModalContainer>
                            </Overlay>
                        </Modal>
                    </View>
                ))}
            </HeaderView>
        </ParallaxScrollView>
    );
}
 
export default Promos;