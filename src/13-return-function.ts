(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => (total += item));
    return total.toString();
  };

  const printTotal = (prices: number[]) => {
    console.log(calcTotal(prices));
  };

  // Objects implementation with TS
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'eolunas@gmail.com',
    password: '112233',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
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
