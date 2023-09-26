(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return { title, createdAt, stock, size };
  }

  const product1 = createProductToJson('P1', new Date(), 20, 'S');
  console.log(product1);
  console.log(product1.stock);

  let createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return { title, createdAt, stock, size };
  };

  const product2 = createProductToJsonV2('P1', new Date(), 20);
  console.log(product2.size);
})();
