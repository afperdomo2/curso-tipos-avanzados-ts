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

/**
 * El Partial realiza la herencia, pero todas las propiedades se vuelven
 * opcionales.
 */
export interface UpdateProductDto extends Partial<CreateProductDto> {}

/**
 * Required es el contrario de Partial. Hace la herencia pero deja todas
 * las propiedades como obligatorias
 */
type example2 = Required<Product>;

/**
 * Convierte las propiedades del DTO en solo lectura (readonly)
 */
export interface FindProductDto extends Readonly<Partial<Product>> {}
