import Container from "@/components/Container";
import { promos } from "@/data/home";
import { PromoType, usePromoStore } from "@/store/home/usePromo";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, FlatList } from "react-native";
import { Button, Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const StyledCard = styled(Card)({
    width: 350,
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
})

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
})

const StyledButton = styled(Button)({
    marginTop:10,
    backgroundColor: "#0265A1",
    width: 100,
})

const ButtonText = styled(Text)({
    color: "white",
    fontSize: 14,
})

const PromoCard = ({ promo, onOpen }: { promo:PromoType, onOpen:() => void }) => {
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
                    <ButtonText>
                        Read more
                    </ButtonText>
                </StyledButton>
            </Card.Content>
        </StyledCard>
    )
}

const Promos = () => {
    const router = useRouter();

    const [promo, setPromo] = useState<PromoType[]>(promos)

    const markAsRead = (index: number) => {
        setPromo((prevPromo) => prevPromo.map((item, i) => i === index ? { ...item }: item))
    }

    const setSelectedPromo = usePromoStore(
        (state) => state.setSelectedPromo
    );

    const handlePromoNav = (index: number, data: PromoType) => {
        setSelectedPromo(data);

        router.push({
            pathname: "/[promoId]",
            params: { promoId: index },
        });

        markAsRead(index);
    }

    return (
        <Container>
            <Animated.View>
                <FlatList
                    data={promo}
                    nestedScrollEnabled={true}
                    renderItem={({ item, index }) => (
                        <PromoCard
                            key={index}
                            promo={item}
                            onOpen={() => handlePromoNav(index, item)} />  
                    )} />
            </Animated.View>
        </Container>
    );
}
 
export default Promos;