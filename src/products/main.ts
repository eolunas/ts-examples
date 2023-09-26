import { addProduct, calcStock, products } from './product.service';

addProduct({
  title: 'P1',
  createAt: new Date(),
  stock: 15,
});
addProduct({
  title: 'P2',
  createAt: new Date(),
  stock: 15,
  size: 'S',
});

console.log(products);
const totalStock = calcStock();
console.log(totalStock);
