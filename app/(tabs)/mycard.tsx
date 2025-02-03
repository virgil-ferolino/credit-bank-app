import { View, Text } from "react-native";
import React from "react";

import styled from "styled-components/native";

const StyledText = styled(Text)({
  fontSize: 50,
});

const mycard = () => {
  return (
    <View>
      <StyledText>mycard</StyledText>
    </View>
  );
};

export default mycard;
