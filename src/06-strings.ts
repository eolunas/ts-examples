(() => {
  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log('productTitle', productTitle);

  const productDescription = "New amazing edu's product";
  console.log('productDescription', productDescription);

  let productPrice = 5;

  const sumary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  `;
})();
