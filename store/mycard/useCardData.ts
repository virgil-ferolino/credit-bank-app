import { transaction } from "@/data/home";
import { transaction2, transaction3 } from "@/data/mycard";
import { create } from "zustand";

export interface LabelValue {
  label: string;
  value: string | number;
  iconName?: string;
}
export interface TransactionProsps {
  title: string;
  category: string;
  price: string;
}

export interface CardDataProps {
  pointBalance: number;
  account: LabelValue[];
  transaction: TransactionProsps[];
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

const cardDataArray: CardDataProps[] = [
  {
    pointBalance: 10000,
    account: accountDetailsArray,
    transaction: transaction,
  },
  {
    pointBalance: 17000,
    account: accountDetailsArray,
    transaction: transaction2,
  },
  {
    pointBalance: 20000,
    account: accountDetailsArray,
    transaction: transaction3,
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
