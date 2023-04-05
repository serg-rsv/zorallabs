const createOrderedSales = (sales) => {
  const orderedSales = sales
    .map(({ amount, quantity }) => {
      return {
        amount,
        quantity,
        Total: amount * quantity,
      };
    })
    .sort((a, b) => b.Total - a.Total);

  return orderedSales;
};
