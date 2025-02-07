import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { useEffect, useState } from "react";
import { Animated, Dimensions, Image, Modal, PanResponder, TouchableOpacity, View } from "react-native";
import { Button, Card, Text } from "react-native-paper";
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
});

const ButtonText = styled(Text)({
    color: "white",
    fontSize: 14,
});

const HeaderView = styled(View)({
    flexGrow: 1,
    alignItems: "center",
});

const Overlay = styled(TouchableOpacity)({
    flex:1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end"
});

const ModalContainer = styled(Animated.View)({
    height: height * 0.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    flex: 1,
});

const PromoImageHeader = styled(Image)({
    width: "100%",
    height: 250,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 15,
})

const PromoImageDetail = styled(Image)({
    width: "100%",
    height: 550
})

const PromoModal = ({ isVisible, onClose, promoContent }: { isVisible:boolean, onClose: () => void, promoContent:PromoContentType }) => {
    const translateY = new Animated.Value(height);
    const scrollY = new Animated.Value(0);

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_evt, gestureState) => {
            if (gestureState.dy > 100) {
                onClose();
            }
            else {
                Animated.spring(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                }).start();
            }
        },
    });

    useEffect(() => {
        if (isVisible) {
            Animated.spring(translateY, {
                toValue:0,
                useNativeDriver:false,
            }).start();
        }
    }, [isVisible]);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}>
            <Overlay
                onPress={onClose}
                activeOpacity={1}>
                <ModalContainer
                    style={{
                        transform: [{translateY}]
                    }}
                    {...panResponder.panHandlers}>
                    <Animated.ScrollView
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: false }
                        )}
                        contentContainerStyle={{ 
                            paddingTop: 20,
                            paddingBottom: 20,
                         }}>
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
                    </Animated.ScrollView>
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
                {promos.map((promo, index) => (
                    <PromoCard
                        key={index}
                        promo={promo}
                        onOpen={() => setSelectedPromo(promo)} />
                ))}
            </HeaderView>
            {selectedPromo && <PromoModal isVisible={!!selectedPromo} promoContent={selectedPromo.promoContent} onClose={() => setSelectedPromo(null)} />}
        </ParallaxScrollView>
    );
}
 
export default Promos;