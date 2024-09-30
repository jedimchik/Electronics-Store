function counter(shoppingCart) {
  let itemsTotal = 0;
  let priceTotal = 0;
  shoppingCart.forEach((item) => {
    itemsTotal += item.quantity;
    priceTotal += item.quantity * item.price;
    priceTotal = Math.round(priceTotal * 100) / 100;
  });

  return { itemsTotal, priceTotal };
}

export { counter };
