import { Product } from './product.model';

/**
 * Crea una nueva interfaz pero omite las propiedades que no son
 * necesarias en el momento de la creación
 */
export interface CreateProductDto
  extends Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'category'> {
  categoryId: string;
}

/**
 * Pick es el contrario del Omit, crea un tipo o una interfaz únicamente
 * con las propiedades que se especifican en el Picl
 */
type example = Pick<Product, 'color' | 'description'>;
