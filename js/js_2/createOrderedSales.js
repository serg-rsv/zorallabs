/**
 *
 * @param {[{amount,quantity}]} sales
 * @param {string} order 'asc' or 'desc'
 * @returns
 */
const createOrderedSales = (sales, order) => {
  const orderedSales = sales.map((item) => {
    return {
      ...item,
      Total: item.amount * item.quantity,
    };
  });

  switch (order) {
    case 'asc':
      orderedSales.sort((a, b) => a.Total - b.Total);
      break;
    case 'desc':
      orderedSales.sort((a, b) => b.Total - a.Total);
      break;

    default:
      console.log('The argument input is incorrect');
      return;
      break;
  }

  return orderedSales;
};

const sales = [
  { amount: 100, quantity: 5, price: 1000 },
  { amount: 300, quantity: 3, brand: 'IBM' },
];

console.log(createOrderedSales(sales, 'asc'));
