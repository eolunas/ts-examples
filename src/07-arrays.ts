(() => {
  let price = [1, 2, 3, 4, 5, 6, 7, 75, 4];
  // price.push("a");
  // price.push(true);
  // price.push([1,2]);
  price.push(5);
  price = [5, 3, 1, 2.2];

  let products = ['hola', true];
  products.push(false);

  let mixed: (string | number | boolean | object)[] = ['hola', true];

  mixed.push(12);
  mixed.push('as');
  mixed.push(true);
  mixed.push({});
  mixed.push([]);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 75, 4]; // [''] => Error
  numbers.map((item) => item * 2);
})();
