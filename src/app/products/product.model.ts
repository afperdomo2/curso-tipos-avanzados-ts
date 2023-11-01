import { BaseModel } from '../base.model';
import { Category } from '../categories/category.model';

export type Sizes = 'S' | 'M' | 'L';

export interface Product extends BaseModel {
  title: string;
  description: string;
  image: string;
  color: string;
  stock: number;
  price: number;
  size?: Sizes;
  isNew: boolean;
  category: Category;
  tags: (number | string)[];
}
