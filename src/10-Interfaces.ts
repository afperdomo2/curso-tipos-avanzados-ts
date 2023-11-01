/**
 * Las interfaces no pueden crear tipos de una sola línea,
 * como en type de Sizes
 */
type Sizes = 'S' | 'M' | 'L';

// type Product = {
//   id: string | number;
//   title: string;
//   createdAt: Date;
//   stock: number;
//   size?: Sizes;
// };

/**
 * - Las interfaces se pueden extender, diferente a los Types
 * - Se enfocan más en conjuntos de datos, como en el caso de Product
 * - Las interfaces también se pueden usar como un Type normal
 */
interface Product {
  id: string | number;
  title: string;
  createdAt: Date;
  stock: number;
  size?: Sizes;
}

const products: Product[] = [];

products.push({
  id: 1,
  title: 'Camisa',
  createdAt: new Date(),
  stock: 90,
});
