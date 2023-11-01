export enum ROLES {
  ADMIN = 'Administrador',
  SELLER = 'Vendedor',
  CUSTOMER = 'Cliente',
}

export interface User {
  id: string | number;
  username: string;
  role: ROLES;
}
