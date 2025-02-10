import { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import CreditCard from "./CreditCard";
import styled from "styled-components/native";
import { useCardData } from "@/store/mycard/useCardData";

export default function CreditCardList() {
  const { activeIndex, setActiveIndex } = useCardData((state) => state);

  const windowDimensions = Dimensions.get("window");
  const screenDimensions = Dimensions.get("screen");

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const CARD_WIDTH =
    windowDimensions.width > 480 ? 480 : windowDimensions.width;
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / (CARD_WIDTH - 20));
    setActiveIndex({ ...activeIndex, web: newIndex });
  };

  const CarouselPagination = styled(View)({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  });

  const creditCardArray = [
    {
      cardNumber: "**** **** **** 1234",
      cardHolder: "JAMES CHARLES",
      expiryDate: "**/**",
      cvv: "***",
      key: 1,
    },
    {
      cardNumber: "**** **** **** 1234",
      cardHolder: "JAMES CHARLES",
      expiryDate: "**/**",
      cvv: "***",
      key: 2,
    },
    {
      cardNumber: "**** **** **** 1234",
      cardHolder: "JAMES CHARLES",
      expiryDate: "**/**",
      cvv: "***",
      key: 3,
    },
  ];

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (viewableItems[0]) {
      setActiveIndex({
        ...activeIndex,
        mobile: parseInt(viewableItems[0].index?.toString() || "0"),
      });
    }
  };

  const PaginationDot = ({ active }: { active: boolean }) => (
    <View
      style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]}
    />
  );

  return Platform.OS === "web" ? (
    <View style={{ flex: 1 }}>
      <FlatList
        data={creditCardArray}
        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
              padding: 15,
            }}
          >
            <CreditCard
              cardHolder={item.cardHolder}
              cardNumber={item.cardNumber}
              cvv={item.cvv}
              expiryDate={item.expiryDate}
            />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <CarouselPagination>
        {creditCardArray.map((_, index) => (
          <PaginationDot key={index} active={index === activeIndex.web} />
        ))}
      </CarouselPagination>
    </View>
  ) : (
    <View style={{ flex: 1 }}>
      <FlatList
        data={creditCardArray}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              width: dimensions.screen.width,
              paddingHorizontal: 15,
            }}
          >
            <CreditCard
              cardHolder={item.cardHolder}
              cardNumber={item.cardNumber}
              cvv={item.cvv}
              expiryDate={item.expiryDate}
            />
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <CarouselPagination>
        {creditCardArray.map((_, index) => (
          <PaginationDot
            key={index}
            active={index === activeIndex.mobile}
          />
        ))}
      </CarouselPagination>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#2196F3",
    width: 20,
  },
  inactiveDot: {
    backgroundColor: "#BDBDBD",
  },
});
