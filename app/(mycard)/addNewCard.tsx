import ParallaxScrollView from "@/components/ParralaxView";
import { useState } from "react";
import { View } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

// Define styled components outside the component
const StyledView = styled(View)({
  paddingHorizontal: 16,
  paddingVertical: 8,
  gap: 15,
});

const StyledContainer = styled(Animated.View)({
  gap: 10,
});

const StyledCardInfoContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 15,
});

const StyledCardInfo = styled(Animated.View)({
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
  const inputRestrict = (a: string, b: boolean = true) => {
    let c = a.replace(/[^0-9]/g, "");
    if (b !== true) return c;
    return (c = `${c.slice(0, 2)}${c.slice(2, 4) === "" ? "" : "/"}${c.slice(
      2,
      4
    )}`);
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

  const cardDetailsArr = [
    {
      label: "Card Type",
      onChangeText: (e: string) => setFormValue({ ...formValue, cardType: e }),
      value: formValue.cardType,
      editable: false,
    },
    {
      label: "Card Holder Name",
      onChangeText: (e: string) =>
        setFormValue({ ...formValue, cardHolderName: e }),
      value: formValue.cardHolderName,
      placeHolder: "John Doe",
    },
    {
      label: "Card Number",
      onChangeText: (e: string) =>
        setFormValue({
          ...formValue,
          cardNumber: inputRestrict(e, false),
        }),
      value: formValue.cardNumber,
      placeHolder: "XXXX XXXX XXXX XXXX",
    },
  ];

  return (
    <ParallaxScrollView>
      <StyledView>
        {cardDetailsArr.map((data, index) => (
          <StyledContainer key={index}>
            <Text variant="bodyLarge">{data.label}</Text>
            <TextInput
              mode="outlined"
              value={data.value}
              outlineStyle={{ borderRadius: 10 }}
              activeOutlineColor="black"
              placeholder={data.placeHolder ?? ""}
              placeholderTextColor={data.placeHolder ? "#9A9A9A" : ""}
              editable={data.editable ?? true}
              onChangeText={data.onChangeText}
              keyboardType={
                data.label === "Card Number" ? "numeric" : undefined
              }
              maxLength={data.label === "Card Number" ? 16 : undefined}
              inputMode={data.label === "Card Number" ? "numeric" : undefined}
            />
          </StyledContainer>
        ))}
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
