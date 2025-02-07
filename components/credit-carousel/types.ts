import { SharedValue } from "react-native-reanimated";

export interface CreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  key?: number;
}

export interface CreditCarousel {
  cards?: CreditCardProps;
  index?: number;
  scrollX?: SharedValue<number>;
}

export interface PaginationProps {
  cards: CreditCardProps[];
  paginationIndex: number;
  scrollX: SharedValue<number>;
}
