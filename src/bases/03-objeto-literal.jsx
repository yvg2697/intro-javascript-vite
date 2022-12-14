const persona = {
    nombre: 'Tony',
    apellidos: 'Stark',
    direccion: {
        ciudad: 'New York',
        zip: 4576456,
        lat: 13.3435,
    }
}

const persona2 = persona; // los dos objetos se cambian las propiedades pq se referencia a memoria
persona2.nombre = 'yasiel';

console.log(persona);

const persona3 = { ...persona };
persona3.apellidos = 'Valdes';
console.log(persona3)
