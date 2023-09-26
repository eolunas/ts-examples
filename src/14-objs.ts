(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  };
  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

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
})();
