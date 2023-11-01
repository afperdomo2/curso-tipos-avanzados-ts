import { addProduct } from './products/product.service';

addProduct({
  id: 1,
  title: 'Camisa',
  createdAt: new Date(),
  stock: 90,
  category: {
    id: 123,
    name: 'ropa',
  },
});
