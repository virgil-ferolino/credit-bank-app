import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components/native";

const StyledContainer = styled(View)({
  scrollbarWidth: "none", // For Firefox
  msOverflowStyle: "none", // For IE/Edge
  maxWidth: 480,
  width: "100%",
  flex: 1,
  alignSelf: "center",
  WebkitOverflowScrolling: "touch", // For iOS smooth scrolling
  overflowY: "auto",
});

export default function Container({ children }: PropsWithChildren) {
  return (
    <StyledContainer>
      <SafeAreaProvider>
        <SafeAreaView>{children}</SafeAreaView>
      </SafeAreaProvider>
    </StyledContainer>
  );
}
