import ParallaxScrollView from "@/components/ParralaxView";
import { useState } from "react";
import { Platform, View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import styled from "styled-components/native";

// Define styled components outside the component
const StyledView = styled(View)({
  paddingLeft: 15,
  paddingRight: 15,
  marginTop: Platform.OS === "web" ? 15 : -30,
  gap: 15,
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
  maxLength?: number;
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
  const inputRestrict = (e: string, dateFormat: boolean = true) => {
    let formatText = e.replace(/[^0-9]/g, "");
    if (dateFormat != true) return formatText.slice(0, 16);
    return (formatText = `${formatText.slice(0, 2)}/${formatText.slice(2, 4)}`);
  };

  const cardInfoArray: CardInfoArrayProps[] = [
    {
      title: "Expiry",
      placeHolder: "MM/YY",
      onChangeText: (e) =>
        setFormValue({ ...formValue, expiry: inputRestrict(e) }),
      value: formValue.expiry,
    },
    {
      title: "CVV",
      placeHolder: "XXX",
      onChangeText: (e) =>
        setFormValue({ ...formValue, cvv: inputRestrict(e, false) }),
      value: formValue.cvv,
      maxLength: 3,
    },
  ];

  return (
    <ParallaxScrollView>
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
            onChangeText={(e) =>
              setFormValue({
                ...formValue,
                cardNumber: inputRestrict(e, false),
              })
            }
            keyboardType="numeric"
            maxLength={16}
            inputMode="numeric"
          />
        </StyledContainer>
        <StyledCardInfoContainer>
          {cardInfoArray.map(
            ({ title, placeHolder, onChangeText, value, maxLength }, index) => (
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
                  maxLength={maxLength}
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
    </ParallaxScrollView>
  );
};

export default AddNewCard;
