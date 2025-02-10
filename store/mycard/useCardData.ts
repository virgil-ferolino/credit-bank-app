import { create } from "zustand";

export interface LabelValue {
  label: string;
  value: string | number;
  iconName?: string;
}

export interface CardDataProps {
  pointBalance: number;
  account: LabelValue[];
  transaction: LabelValue[];
}

const accountDetailsArray: LabelValue[] = [
  {
    label: "Outstanding Balance",
    value: "PHP 80,450.00",
  },
  {
    label: "Available Credit",
    value: "PHP 60,530.00",
  },
];
export const transactionsArray: LabelValue[] = [
  {
    label: "YOUTUBE",
    value: "-$5.00",
    iconName: "YT",
  },
  {
    label: "SPOTIFY",
    value: "-$12.00",
    iconName: "ST",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
  {
    label: "MOBILE LEGENDS",
    value: "$12.00",
    iconName: "ML",
  },
];

const cardDataArray: CardDataProps[] = [
  {
    pointBalance: 10000,
    account: accountDetailsArray,
    transaction: transactionsArray,
  },
  {
    pointBalance: 17000,
    account: accountDetailsArray,
    transaction: transactionsArray,
  },
  {
    pointBalance: 20000,
    account: accountDetailsArray,
    transaction: transactionsArray,
  },
];

export interface ActiveIndexType {
  web: number;
  mobile: number;
}

interface CardDataStore {
  activeIndex: ActiveIndexType;
  cardData: CardDataProps[];
  setActiveIndex: (activeIndex: ActiveIndexType) => void;
  setCardData: (cardData: CardDataProps[]) => void;
}

export const useCardData = create<CardDataStore>((set) => ({
  activeIndex: { web: 0, mobile: 0 },
  cardData: cardDataArray,
  setActiveIndex: (index) => set({ activeIndex: index }),
  setCardData: (data) => set({ cardData: data }),
}));
