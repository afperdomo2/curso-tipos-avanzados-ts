/**
 * La sobrecarga de funciones (overload) en TypeScript es una
 * característica que te permite definir múltiplas firmas de una
 * función con diferentes parámetros y tipos de retorno. Esto es
 * útil cuando una función puede aceptar diferentes combinaciones
 * de argumentos y debe comportarse de manera específica en función
 * de los argumentos proporcionados. Las sobrecargas de funciones
 * te permiten proporcionar una descripción más precisa de cómo se
 * debe usar una función y cómo se comportará en diferentes
 * situaciones.
 */

// Realiza la sobrecarga para definir el tipo de salida, por el tipo
// de entrada
function parseStr2(input: string): string[];
function parseStr2(input: string[]): string;
function parseStr2(input: number): boolean;

/**
 * Se puede usar unknown, en vez de: string | string[] | number,
 * también applica para el tipo de salida
 */
function parseStr2(
  input: string | string[] | number
): string[] | string | boolean {
  // Esta validación se hace para verificar el tipo de salida
  if (Array.isArray(input)) {
    return input.join('');
  } else if (typeof input === 'string') {
    return input.split('');
  } else if (typeof input === 'number') {
    return true;
  }
  return 'Ninguno';
}

// Convierte el string en un array
const rtaArray = parseStr2('Felipe');
// ⭐Ya no toca inferir el tipo
rtaArray.reverse();
console.info('rtaArray:', rtaArray);
console.info('type:', typeof rtaArray, '\n');

// Convierte el array en un string
const rtaString = parseStr2(['F', 'E', 'L', 'I', 'P', 'E']);
// ⭐Ya no toca inferir el tipo
rtaString.toString();
console.info('rtaString:', rtaString);
console.info('type:', typeof rtaString);

console.info(parseStr2(1));
