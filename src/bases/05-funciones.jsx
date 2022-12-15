const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}
console.log(saludar('Goku'));

// funciones flechas 
/// variable = numeros de argumentos y => y parentesis si se devuelve un objeto implicito
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
console.log(saludar2('Vegeta'));

const saludar3 = (nombre) => `Hola, ${nombre}`;
console.log(saludar3('yasiel'));


const getUser = () => (
    {
        uid: '827164781236847',
        nombre: 'Yasiel',
    }
);

const user = getUser();
console.log(getUser());

/// Ejercicio

const getUsuarioActivo = (nombre) => ({
    uid: "ABC567",
    username: nombre
});

const activo = getUsuarioActivo("Yasiel Activo");
console.log(activo)
