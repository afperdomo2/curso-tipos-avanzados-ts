// Array normal
const prices: (number | string)[] = [1, 2, 3, 4, '66'];

/**
 * Tupla:
 *
 * Una tupla es un array escrito con una longitud y tipos
 * predefinidos para cada índice
 */
const person: [string, number, boolean] = ['felipe', 15, true];
console.info('person:', person);

// Destructuración de la tupla
const [username, age] = person;
console.info('username:', username);
console.info('age:', age);
