/**
 * En este archivo se hace una introducción a 'overload'
 *
 * La sobrecarga de funciones solo sirve en las 'function' y en las
 * funciones de las clases. No en las funciones de tipo flecha
 * @param input
 */
export function parseStr(input: string | string[]): string | string[] {
  return Array.isArray(input) ? input.join('') : input.split('');
}

// Convierte el string en un array
const rtaArray = parseStr('Felipe');
/**
 * ⛔Para acceder a las funciones array, toca inferir el tipo
 *
 * Esto toca realizarlo, ya que la función de parseStr(), dice que
 * puede devovler 2 posibles tipos de datos, pero no sabe en qué
 * parte del código se devuelve cada uno, por eso para usar
 * rtaArray.reverse(), toca primero inferir el tipo
 */
if (Array.isArray(rtaArray)) {
  // Aquí ya son accesibles las funciones de tipo, antes no
  rtaArray.reverse();
}
console.info('rtaArray:', rtaArray);
console.info('type:', typeof rtaArray, '\n');

// Convierte el array en un string
const rtaString = parseStr(['F', 'E', 'L', 'I', 'P', 'E']);
// ⛔Para acceder a las funciones array, toca inferir el tipo
if (typeof rtaString) {
  // Aquí ya son accesibles las funciones de tipo, antes no
  rtaString.toString();
}
console.info('rtaString:', rtaString);
console.info('type:', typeof rtaString);
