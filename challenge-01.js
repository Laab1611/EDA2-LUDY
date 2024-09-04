// Función declarada
// Las funciones declaradas se elevan, permitiendo su uso antes de ser definidas en el código.

export function oldRegularFunction(a) {
    if (a % 2 === 0) {
        return "even";
    }
    return "odd";
}

// Expresión de función
//Las expresiones de función no se elevan, por lo que no pueden ser usadas antes de su definición.

export const newRegularFunction = function(a) {
    if (a % 2 === 0) {
        return "even";
    }
    return "odd";
}

// Función flecha
// Elevación: Las funciones flecha no se elevan.

export const ArrowFunction = (a) => {
    if (a % 2 === 0) {
        return "even";
    }
    return "odd";
};


/* 
Declaración de Función: Elevación, propio this, puede ser constructor.
Expresión de Función: No se eleva, propio this, puede ser constructor.
Arrow Function: No se eleva, hereda this, no puede ser constructor, no tiene arguments. */