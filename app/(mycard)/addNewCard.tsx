import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import styled from "styled-components/native";

// Define styled components outside the component
const StyledView = styled(View)({
  paddingTop: 15,
  gap: 15,
  paddingLeft: 15,
  paddingRight: 15,
});

const StyledContainer = styled(View)({
  gap: 10,
});

const StyledCardInfoContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  gap: 15,
  width: "100%",
  justifyContent: "space-evenly",
});

const StyledCardInfo = styled(View)({
  gap: 15,
  flexGrow: 1,
});

const StyledButton = styled(Button)({
  borderRadius: 10,
  marginTop: 30,
  padding: 5,
});

type CardInfoArrayProps = {
  title: string;
  placeHolder: string;
  onChangeText: (e: string) => void;
  value: string;
};

const AddNewCard = () => {
  const [formValue, setFormValue] = useState({
    cardType: "",
    cardHolderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

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
          value="Credit Card"
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
      >
        Add Card
      </StyledButton>
    </StyledView>
  );
};

export default AddNewCard;
