import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  View,
  ViewToken,
} from "react-native";
import { FlatList as WebFlatList } from "react-native-web";
import CreditCard from "./CreditCard";
import styled from "styled-components/native";

export default function CreditCardList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [webActiveIndex, setWebActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / 438);
    setWebActiveIndex(newIndex);
  };

  const CarouselPagination = styled(View)({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  });

  const { width } = Dimensions.get("window");
  const CARD_WIDTH = width - 30;
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
      setActiveIndex(parseInt(viewableItems[0].index?.toString() || "0"));
    }
  };

  const PaginationDot = ({ active }: { active: boolean }) => (
    <View
      style={[styles.dot, active ? styles.activeDot : styles.inactiveDot]}
    />
  );

  return Platform.OS === "web" ? (
    <View style={{ flex: 1, padding: 15 }}>
      <WebFlatList
        data={creditCardArray}
        renderItem={({ item }) => (
          <View
            style={{
              width: 438,
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
        onScroll={handleScroll} // Track scroll for web
        scrollEventThrottle={16} // Update scroll events more frequently
      />
      <CarouselPagination>
        {creditCardArray.map((_, index) => (
          <PaginationDot key={index} active={index === webActiveIndex} />
        ))}
      </CarouselPagination>
    </View>
  ) : (
    <View style={{ flex: 1, padding: 15 }}>
      <FlatList
        data={creditCardArray}
        renderItem={({ item }) => (
          <View
            style={{
              width: CARD_WIDTH,
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
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
      />
      <CarouselPagination>
        {creditCardArray.map((_, index) => (
          <PaginationDot key={index} active={index === activeIndex} />
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
