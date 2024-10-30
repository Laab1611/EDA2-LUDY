// LENGTH - devuelve el número de elementos en un array
const animales = ['gato', 'perro', 'conejo'];
console.log('Longitud del array de animales:', animales.length); // Longitud del array de animales: 3

// AT - devuelve un elemento indexado de un array (soporta índices negativos)
const temperaturas = [15, 22, 30, 28, 16];
console.log('Elemento en el índice 2:', temperaturas.at(2));  // Elemento en el índice 2: 30
console.log('Último elemento (en -1):', temperaturas.at(-1)); // Último elemento (en -1): 16

// MÉTODOS DE MODIFICACIÓN DE ARRAYS
// PUSH & POP - agrega/elimina elementos al final de un array
const pila = [5, 10, 15];
console.log('Pila original:', pila); // Pila original: [5, 10, 15]
console.log('Valor de retorno de push:', pila.push(20)); // Valor de retorno de push: 4
console.log('Pila después de push:', pila); // Pila después de push: [5, 10, 15, 20]
const ultimo = pila.pop();
console.log('Valor removido:', ultimo); // Valor removido: 20
console.log('Pila después de pop:', pila); // Pila después de pop: [5, 10, 15]

// UNSHIFT & SHIFT - agrega/elimina elementos al inicio de un array
const cola = [5, 10, 15];
console.log('Cola original:', cola); // Cola original: [5, 10, 15]
console.log('Valor de retorno de unshift:', cola.unshift(2)); // Valor de retorno de unshift: 4
console.log('Cola después de unshift:', cola); // Cola después de unshift: [2, 5, 10, 15]
const primero = cola.shift();
console.log('Valor removido:', primero); // Valor removido: 2
console.log('Cola después de shift:', cola); // Cola después de shift: [5, 10, 15]

// SPLICE - añade/borra elementos desde cualquier posición
const colores = ['Rojo', 'Verde', 'Azul'];
console.log('Colores originales:', colores); // Colores originales: ['Rojo', 'Verde', 'Azul']
colores.splice(1, 0, 'Amarillo');
console.log('Colores después de insertar Amarillo:', colores); // Colores después de insertar Amarillo: ['Rojo', 'Amarillo', 'Verde', 'Azul']
colores.splice(2, 1);
console.log('Colores después de remover Verde:', colores); // Colores después de remover Verde: ['Rojo', 'Amarillo', 'Azul']

// CREACIÓN Y COMBINACIÓN DE ARRAYS
// CONCAT - combina dos o más arrays
const arr1 = [8, 9];
const arr2 = [10, 11];
console.log('Array 1:', arr1); // Array 1: [8, 9]
console.log('Array 2:', arr2); // Array 2: [10, 11]
const combinado = arr1.concat(arr2);
console.log('Arrays combinados:', combinado); // Arrays combinados: [8, 9, 10, 11]

// SLICE - devuelve una porción de un array
const frutasSlice = ['sandía', 'piña', 'manzana', 'uva'];
console.log('Frutas originales:', frutasSlice); // Frutas originales: ['sandía', 'piña', 'manzana', 'uva']
const tropicales = frutasSlice.slice(0, 2);
console.log('Frutas seleccionadas (0,2):', tropicales); // Frutas seleccionadas (0,2): ['sandía', 'piña']

// FLAT & FLATMAP - aplana arrays anidados
const anidado = [1, [2, 3], [4, [5, 6]]];
console.log('Array anidado:', anidado); // Array anidado: [1, [2, 3], [4, [5, 6]]]
console.log('Aplanado (profundidad=1):', anidado.flat()); // Aplanado (profundidad=1): [1, 2, 3, 4, [5, 6]]
console.log('Aplanado (profundidad=2):', anidado.flat(2)); // Aplanado (profundidad=2): [1, 2, 3, 4, 5, 6]

const numerosFlat = [1, 2, 3];
console.log('Números originales:', numerosFlat); // Números originales: [1, 2, 3]
const duplicado = numerosFlat.flatMap(x => [x, x * 2]);
console.log('FlatMap duplicado:', duplicado); // FlatMap duplicado: [1, 2, 2, 4, 3, 6]

// MÉTODOS DE TRANSFORMACIÓN DE ARRAYS
// MAP - crea un nuevo array transformando cada elemento
const numerosMap = [1, 2, 3];
console.log('Números originales:', numerosMap); // Números originales: [1, 2, 3]
const alCuadrado = numerosMap.map(x => x * x);
console.log('Números al cuadrado:', alCuadrado); // Números al cuadrado: [1, 4, 9]

// FILTER - crea un nuevo array con los elementos que cumplen una condición
const numerosFilter = [1, 2, 3, 4, 5];
console.log('Números originales:', numerosFilter); // Números originales: [1, 2, 3, 4, 5]
const impares = numerosFilter.filter(x => x % 2 !== 0);
console.log('Números impares:', impares); // Números impares: [1, 3, 5]

// REDUCE & REDUCERIGHT - reduce un array a un único valor
const numerosReduce = [1, 2, 3, 4];
console.log('Números para reducir:', numerosReduce); // Números para reducir: [1, 2, 3, 4]
const multiplicacion = numerosReduce.reduce((acc, curr) => acc * curr, 1);
console.log('Multiplicación (reduce):', multiplicacion); // Multiplicación (reduce): 24
const derecha = numerosReduce.reduceRight((acc, curr) => acc * curr, 1);
console.log('Multiplicación (reduceRight):', derecha); // Multiplicación (reduceRight): 24

// MÉTODOS DE BÚSQUEDA Y PRUEBA
// FIND & FINDINDEX - encuentra un elemento o su índice
const numerosFind = [2, 4, 6, 8];
console.log('Array para buscar:', numerosFind); // Array para buscar: [2, 4, 6, 8]
console.log('Primer elemento > 5:', numerosFind.find(x => x > 5)); // Primer elemento > 5: 6
console.log('Índice del primer elemento > 5:', numerosFind.findIndex(x => x > 5)); // Índice del primer elemento > 5: 2

// FINDLAST & FINDLASTINDEX - encuentra el último elemento que cumple la condición o su índice
const numerosFindLast = [3, 6, 9, 6, 3];
console.log('Array para buscar:', numerosFindLast); // Array para buscar: [3, 6, 9, 6, 3]
console.log('Último valor 6:', numerosFindLast.findLast(x => x === 6)); // Último valor 6: 6
console.log('Índice del último valor 6:', numerosFindLast.findLastIndex(x => x === 6)); // Índice del último valor 6: 3

// INCLUDES - verifica si el array contiene un valor
const nombres = ['Juan', 'María', 'Ana'];
console.log('Array de nombres:', nombres); // Array de nombres: ['Juan', 'María', 'Ana']
console.log('¿Incluye Ana?', nombres.includes('Ana')); // ¿Incluye Ana?: true
console.log('¿Incluye Pedro?', nombres.includes('Pedro')); // ¿Incluye Pedro?: false

// MÉTODOS DE ITERACIÓN Y CLAVES
// KEYS - obtiene un iterador de claves del array
const frutasKeys = ['manzana', 'pera'];
console.log('Array de frutas:', frutasKeys); // Array de frutas: ['manzana', 'pera']
console.log('Iteración de claves:'); // Iteración de claves:
for (const key of frutasKeys.keys()) {
    console.log('Clave:', key); // Clave: 0, Clave: 1
}
