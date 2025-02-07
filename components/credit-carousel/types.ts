export interface CreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  key?: number
}

export interface CreditCarousel {
  cards: CreditCardProps[]
}