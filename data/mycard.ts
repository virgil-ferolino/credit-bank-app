import { CardDataProps, LabelValue } from "@/store/mycard/useCardData";
import { transaction } from "./home";

export const transaction2 = [
  {
    title: "Honkai: Star Rail",
    category: "Entertainment",
    price: "4,502,210",
  },
  {
    title: "Netflix",
    category: "Entertainment",
    price: "$15.99",
  },
  {
    title: "Starbucks",
    category: "Food & Drinks",
    price: "$7.50",
  },
  {
    title: "Uber",
    category: "Transport",
    price: "$22.30",
  },
  {
    title: "Nike Store",
    category: "Shopping",
    price: "$85.00",
  },
  {
    title: "McDonald's",
    category: "Food & Drinks",
    price: "$11.75",
  },
  {
    title: "Shell Gas Station",
    category: "Transportation",
    price: "$50.00",
  },
  {
    title: "Apple Store",
    category: "Electronics",
    price: "$999.00",
  },
];

export const transaction3 = [
  {
    title: "Honkai: Star Rail",
    category: "Entertainment",
    price: "4,502,210",
  },
  {
    title: "Genshin Impact",
    category: "Entertainment",
    price: "3,413,321",
  },
  {
    title: "Dark Souls",
    category: "Entertainment",
    price: "3,413,321",
  },
  {
    title: "Dark Souls 2",
    category: "Entertainment",
    price: "3,413,321",
  },
  {
    title: "Dark Souls 3",
    category: "Entertainment",
    price: "3,413,321",
  },
  {
    title: "Dragon Nest",
    category: "Entertainment",
    price: "3,413,321",
  },
  {
    title: "Lazada",
    category: "Shopping",
    price: "15",
  },
  {
    title: "Shoppee",
    category: "Shopping",
    price: "100",
  },
];

export const creditCardArray = [
  {
    cardNumber: "3214431223141234",
    cardHolder: "YUI YUI",
    expiryDate: "12/23",
    cvv: "111",
    key: 1,
  },
  {
    cardNumber: "1234123512341234",
    cardHolder: "MEGUMIN",
    expiryDate: "11/23",
    cvv: "100",
    key: 2,
  },
  {
    cardNumber: "4444442233311234",
    cardHolder: "YUN YUN",
    expiryDate: "10/31",
    cvv: "*444",
    key: 3,
  },
];

export const accountDetailsArray: LabelValue[] = [
  {
    label: "Outstanding Balance",
    value: "PHP 80,450.00",
  },
  {
    label: "Available Credit",
    value: "PHP 60,530.00",
  },
];

export const cardDataArray: CardDataProps[] = [
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
