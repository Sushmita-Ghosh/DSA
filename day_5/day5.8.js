function computeCartValue(products) {
  return products.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  );
}

var productList = [
  {
    id: 1,
    price: 200.3,
    quantity: 2,
  },
  {
    id: 2,
    price: 400.4,
    quantity: 4,
  },
  {
    id: 1,
    price: 500.5,
    quantity: 1,
  },
];

console.log(computeCartValue(productList));

function roundOffproductPrice(products) {
  //   for (ele of products) {
  //     ele.price = Math.round(ele.price);
  //   }

  //   console.log(products); // but operation inplace hai so ni hoga

  var x = products.map((product) => {
    return {
      ...product,
      price: Math.round(product.price),
    };
  });

  console.log(x);
}

console.log(roundOffproductPrice(productList));
