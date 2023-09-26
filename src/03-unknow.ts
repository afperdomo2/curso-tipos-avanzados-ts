// Unknown

// Unknown es uno de esos tipos que una vez que lo usas, puedes encontrar
// bastantes usos para él. Actúa como un hermano para el tipo `any`.
// Donde `any` permite la ambigüedad, `unknown` requiere de detalles.

// Un buen ejemplo sería envolver un analizador JSON.
// Los datos JSON pueden venir en muchas formas diferentes
// y el creador de la función de análisis JSON no sabrá la
// forma de los datos - la persona que llama a esa función debería.

/**
 * En TypeScript, el tipo de dato unknown se utiliza para representar un tipo
 * de dato que es desconocido en tiempo de compilación. Es más restrictivo que
 * el tipo any, ya que unknown se usa cuando tienes poca o ninguna información
 * sobre el tipo de un valor, pero aún deseas mantener la seguridad de tipos.
 *
 * Se introdujo en TypeScript para abordar situaciones en las que se necesita
 * manejar tipos de datos dinámicos de manera más segura.
 *
 * El tipo unknown es útil en situaciones en las que no estás seguro del tipo
 * de dato que puedes recibir, pero aún quieres aplicar comprobaciones de tipo
 * antes de realizar operaciones potencialmente inseguras. Al usar unknown,
 * obligas al programador a realizar una comprobación explícita de tipo antes
 * de realizar operaciones en el valor. Esto ayuda a evitar errores en tiempo
 * de ejecución y mejora la seguridad del código.
 */

let unknownVar: unknown = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = [];

/**
 * Para usar las funciones prototype de la variable, primero se debe verificar
 * su tipo, como se ve en la siguiente línea. Primero se valida si es de tipo
 * string, para poder convertirlo a minúsculas.
 */
if (typeof unknownVar === 'string') {
  unknownVar.toLowerCase(); // Función solo disponible para strings
}

console.info('unknownVar:', unknownVar);
