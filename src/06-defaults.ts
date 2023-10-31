export const createProduct = (
  id: string | number,
  isNew: boolean = true,
  stock: number = 0
) => {
  return {
    id,
    stock,
    isNew,
  };
};

const product1 = createProduct(300, true, 10);
console.info('product1:', product1);

const product2 = createProduct(450);
console.info('product2:', product2);

const product3 = createProduct(450, false, 0);
console.info('product3:', product3);
