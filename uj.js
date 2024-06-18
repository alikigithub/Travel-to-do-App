console.log("hello world");
console.log("hello world");
const pricesItems = [
  {
    item: "apple",
    price: 50,
  },
  {
    item: "banaana",
    price: 10,
  },
];

const total = pricesItems.reduce((acc, item) => acc + item.price, 0);
console.log(total);
