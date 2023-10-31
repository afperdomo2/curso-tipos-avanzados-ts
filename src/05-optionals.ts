export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number
) => {
  return {
    id,
    stock: stock ?? 1,
    isNew: isNew ?? true,
  };
};

const product1 = createProduct(300, true, 10);
console.info('product1:', product1);

const product2 = createProduct(450);
console.info('product2:', product2);

const product3 = createProduct(450, false, 0);
console.info('product3:', product3);
