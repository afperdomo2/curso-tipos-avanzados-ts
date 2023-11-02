import { faker } from '@faker-js/faker';
import { CreateProductDto } from './product.dto';
import { Product } from './product.model';

type uuid = number | string;

export const products: Product[] = [];

export const addProduct = (data: CreateProductDto): Product => {
  const newProduct: Product = {
    ...data,
    id: faker.string.uuid(),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
    },
  };
  products.push(newProduct);
  return newProduct;
};

export const updateProduct = (id: uuid, chages: Product) => {
  // Code
};

export const removeProduct = (id: uuid) => {
  // Code
};

export const getProducts = (): Product[] => {
  return products;
};

export const getProduct = (id: uuid) => {
  // Code
};
