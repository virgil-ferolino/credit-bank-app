import ParallaxScrollView from "@/components/ParralaxView"
import { promos } from "@/data/home";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styled from "styled-components/native";

const StyledCard = styled(View)({
    width: 350,
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 10,
    marginBottom: 10,
})

const StyledImage = styled(Image)({
    width: "100%",
    height: "70%"
})

const StyledContent = styled(View)({
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
})

const StyledText = styled(Text)({
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    fontSize: 15
})

const StyledButton = styled(Button)({
    marginTop:10,
    backgroundColor: "#0265A1",
})

const ButtonText = styled(Text)({
    color: "white",
    fontSize: 14,
    fontWeight: "thin"
})

const HeaderView = styled(View)({
    display: "flex",
    flexDirection: "col",
    flexGrow: 1,
    alignItems: "center",
})

const Promos = () => {
    return (
        <ParallaxScrollView>
            <HeaderView>
                {promos.map((promo, index) => (
                    <StyledCard key={index}>
                        <StyledImage source={promo.promoImage} />
                        <StyledContent>
                            <StyledText>{promo.promoHeader}</StyledText>
                            <StyledButton>
                                <ButtonText>Read more</ButtonText>
                            </StyledButton>
                        </StyledContent>
                    </StyledCard>
                ))}
            </HeaderView>
        </ParallaxScrollView>
    );
}
 
export default Promos;