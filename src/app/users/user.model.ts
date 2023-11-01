import { BaseModel } from '../base.model';

export enum ROLES {
  ADMIN = 'Administrador',
  SELLER = 'Vendedor',
  CUSTOMER = 'Cliente',
}

export interface User extends BaseModel {
  username: string;
  role: ROLES;
}
