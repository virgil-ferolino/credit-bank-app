import { useState } from "react";
import { ViewToken } from "react-native";

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import PaginationDot from "./PaginationDot";
import AnimatedCard from "./AnimatedCard";

export default function CreditCardList() {
  const [paginationIndex, setPaginationIndex] = useState(0);

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

  const scrollX = useSharedValue(0);
  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  return (
    <Animated.View style={{ flex: 1 }}>
      <Animated.FlatList
        data={creditCardArray}
        renderItem={({ item, index }) => (
          <AnimatedCard cards={item} index={index} scrollX={scrollX} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScrollHandler}

      />
      <PaginationDot
        cards={creditCardArray}
        paginationIndex={paginationIndex}
        scrollX={scrollX}
      />
    </Animated.View>
  );
}
