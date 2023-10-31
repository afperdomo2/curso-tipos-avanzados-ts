/**
 * Las enumeraciones permiten a un desarrollador definir un
 * conjunto de constantes con nombre. El uso de enumeraciones
 * puede facilitar la documentación de la intención o crear
 * un conjunto de casos distintos. TypeScript proporciona
 * enumeraciones tanto numéricas como basadas en cadenas.
 */
export enum ROLES {
  ADMIN = 'Administrador',
  SELLER = 'Vendedor',
  CUSTOMER = 'Cliente',
}

export type User = {
  username: string;
  role: ROLES;
};

const felipeUser: User = {
  username: 'felipe',
  role: ROLES.ADMIN,
};

console.info(felipeUser);
