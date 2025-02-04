import { useState } from "react";
import { Platform, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styled from "styled-components/native";

// Define styled components outside the component
const isWeb = Platform.OS === "web";
const StyledView = styled(View)({
  paddingTop: 15,
  gap: 15,
  paddingLeft: 15,
  paddingRight: 15,
  width: isWeb ? "468px" : "100%",
  marginLeft: isWeb ? "auto" : 0,
  marginRight: isWeb ? "auto" : 0,
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For IE/Edge
  WebkitOverflowScrolling: "touch", // For iOS smooth scrolling
  overflow: "hidden", // Hide the scrollbars
});

const StyledContainer = styled(View)({
  gap: 10,
});

const StyledCardInfoContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 15,
});

const StyledCardInfo = styled(View)({
  flexGrow: 1,
  gap: 10,
  flexBasis: "calc(50% - 15px)",
});

const StyledButton = styled(Button)({
  borderRadius: 10,
  marginTop: 30,
  padding: 5,
  boxShadow: "none",
});

type CardInfoArrayProps = {
  title: string;
  placeHolder: string;
  onChangeText: (e: string) => void;
  value: string;
};

const initialValues = {
  cardType: "Credit Card",
  cardHolderName: "",
  cardNumber: "",
  expiry: "",
  cvv: "",
};
const AddNewCard = () => {
  const [formValue, setFormValue] = useState(initialValues);

  const cardInfoArray: CardInfoArrayProps[] = [
    {
      title: "Expiry",
      placeHolder: "MM/YY",
      onChangeText: (e) => setFormValue({ ...formValue, expiry: e }),
      value: formValue.expiry,
    },
    {
      title: "CVV",
      placeHolder: "XXX",
      onChangeText: (e) => setFormValue({ ...formValue, cvv: e }),
      value: formValue.cvv,
    },
  ];

  return (
    <StyledView>
      <StyledContainer>
        <Text variant="bodyLarge">Card Type</Text>
        <TextInput
          mode="outlined"
          value={formValue.cardType}
          outlineStyle={{ borderRadius: 10 }}
          activeOutlineColor="black"
          editable={false}
          onChangeText={(e) => setFormValue({ ...formValue, cardType: e })}
        />
      </StyledContainer>
      <StyledContainer>
        <Text variant="bodyLarge">Card Holder Name</Text>
        <TextInput
          mode="outlined"
          value={formValue.cardHolderName}
          outlineStyle={{ borderRadius: 10 }}
          placeholder="John Doe"
          placeholderTextColor="#9A9A9A"
          activeOutlineColor="black"
          onChangeText={(e) =>
            setFormValue({ ...formValue, cardHolderName: e })
          }
        />
      </StyledContainer>
      <StyledContainer>
        <Text variant="bodyLarge">Card Number</Text>
        <TextInput
          mode="outlined"
          value={formValue.cardNumber}
          outlineStyle={{ borderRadius: 10 }}
          placeholder="XXXX XXXX XXXX XXXX"
          placeholderTextColor="#9A9A9A"
          activeOutlineColor="black"
          onChangeText={(e) => setFormValue({ ...formValue, cardNumber: e })}
        />
      </StyledContainer>
      <StyledCardInfoContainer>
        {cardInfoArray.map(
          ({ title, placeHolder, onChangeText, value }, index) => (
            <StyledCardInfo key={index}>
              <Text variant="bodyLarge">{title}</Text>
              <TextInput
                mode="outlined"
                value={value}
                placeholder={placeHolder}
                outlineStyle={{ borderRadius: 10 }}
                placeholderTextColor="#9A9A9A"
                activeOutlineColor="black"
                onChangeText={onChangeText}
              />
            </StyledCardInfo>
          )
        )}
      </StyledCardInfoContainer>
      <StyledButton
        buttonColor="#0265A1"
        textColor="white"
        labelStyle={{ fontSize: 17 }}
        onPress={() => {
          console.log(formValue);
          setFormValue(initialValues);
        }}
      >
        Add Card
      </StyledButton>
    </StyledView>
  );
};

export default AddNewCard;
