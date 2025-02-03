export interface CreditCardProps {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
}

export interface CreditCarousel {
  cards: CreditCardProps[]
}