import { faker } from '@faker-js/faker';

import { addProduct, getProducts } from './products/product.service';

for (let index = 0; index < 10; index++) {
  addProduct({
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: faker.image.dataUri(),
    color: faker.color.human(),
    stock: faker.number.int({ min: 1, max: 100 }),
    price: faker.number.int({ min: 10_000, max: 1_000_000 }),
    isNew: faker.datatype.boolean(),
    size: faker.helpers.arrayElement(['S', 'M', 'L']),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
    },
    tags: faker.datatype.array({ min: 1, max: 5 }),
  });
}

console.info('Products:', getProducts());
