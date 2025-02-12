import { promos } from "@/data/home";
import { PromoType, usePromoStore } from "@/store/home/usePromo";
import { useRouter } from "expo-router";
import { Image, TouchableOpacity } from "react-native";
import { Card, Text } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface PromoCardType {
    promo: PromoType;
    onOpen: () => void;
    imageHeight?: number;
}

const StyledCard = styled(Card)({
    width: 350,
    height: undefined,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
})

const StyledImage = styled(Image)({
    width: "100%",
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

const PromoCard = ({ promo, onOpen, imageHeight }: PromoCardType) => {
    return(
        <StyledCard>
            <StyledImage
                source={promo.promoImage}
                style={{
                    height: imageHeight
                }}/>
            <Card.Content
                style={{
                    alignItems: "center"
                }}>
                <Text style={{ 
                    fontWeight: "bold", 
                    textAlign: "center", 
                    color: "#333", 
                    fontSize: 15, 
                    marginTop: 20, 
                }}>
                    {promo.promoHeader}
                </Text>
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
    const router = useRouter();

    const setSelectedPromo = usePromoStore(
        (state) => state.setSelectedPromo
    );

    const handlePromoNav = (index: number, data: PromoType) => {
        setSelectedPromo(data);

        router.push({
            pathname: "/promo-[id]",
            params: { promoId: index },
        });
    }

    return (
        <Animated.ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center",
        }}>
            {promos.map((promoItem, index) => (
                <PromoCard
                    key={index}
                    promo={promoItem} 
                    onOpen={() => handlePromoNav(index, promoItem)}
                    imageHeight={180} />
            ))}
        </Animated.ScrollView>
    );
}
 
export default Promos;
