import { ROLES, User } from './01-enum';

const currentUser: User = {
  username: 'Felipe',
  role: ROLES.CUSTOMER,
};

export const checkAdminRole = () => {
  return currentUser.role === 'Administrador';
};

const rta = checkAdminRole();
console.info('checkAdminRole:', rta);

/**
 * Valida si los roles que se pasan como argumentos, coinciden
 * con el rol del usuario customer
 * @param roles Array rest de los roles
 * @returns {boolean}
 */
export const checkRoles = (...roles: string[]): boolean => {
  return roles.includes(currentUser.role);
};

const rta2 = checkRoles(ROLES.ADMIN, ROLES.CUSTOMER);
console.info('checkRoles:', rta2);
