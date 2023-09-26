/**
 * TYPE - NEVER
 *
 * TypeScript introdujo el tipo Never, que indica los valores que
 * nunca ocurrirán.
 *
 * El tipo Never se utiliza cuando estás seguro de que algo nunca
 * sucederá. Por ejemplo, escribe una función que no volverá a su
 * punto final o siempre arroja una excepción.
 *
 * Never rara vez se usa, especialmente solo, su uso principal
 * es en genéricos avanzados.
 */

const withoutEnd = (): never => {
  while (true) {
    console.info('Nunca para de aprender');
  }
};

/**
 * En las funciones, el tipo never puede ser inferido de forma automática
 * cuando typescript sabe que la función nunca va a devolver un
 * valor, como en este caso.
 */
const fail = (message: string) => {
  throw new Error(message);
};

const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  }
  if (Array.isArray(input)) {
    return 'Es un array';
  }
  return fail('not match');
};

console.info(example('hola'));
console.info(example([1, 2, 3]));
console.info(example(999)); // Se detiene aquí
console.info(example('Hola después del fail'));
