import { faker } from '@faker-js/faker';

import {
  addProduct,
  updateProduct,
  getProducts,
  products,
  findProducts,
} from './products/product.service';

for (let index = 0; index < 10; index++) {
  addProduct({
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.dataUri(),
    color: faker.color.human(),
    stock: faker.number.int({ min: 1, max: 100 }),
    price: faker.number.int({ min: 10_000, max: 1_000_000 }),
    isNew: faker.datatype.boolean(),
    size: faker.helpers.arrayElement(['S', 'M', 'L']),
    tags: faker.datatype.array({ min: 1, max: 5 }),
    categoryId: faker.string.uuid(),
  });
}

console.info('Products:', getProducts());

const product = products[0];
const updatedProduct = updateProduct(product.id, {
  title: 'Camisa manga larga',
  color: 'red',
  isNew: false,
});
console.info('updatedProduct:', updatedProduct);

const findedProducts = findProducts({ stock: 10, color: 'red' });
console.info('findedProducts:', findedProducts);
