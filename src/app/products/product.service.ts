import { Product } from './product.model';

type uuid = number | string;

export const products: Product[] = [];

export const addProduct = (data: Product) => {
  products.push(data);
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
