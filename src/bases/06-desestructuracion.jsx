
const persona = {
    nombre: 'Yasiel',
    apellidos: 'Valdes',
    edad: 24,
    clave: 'IronMan'
};

// console.log(persona.nombre);

const { nombre, edad, apellidos } = persona;
console.log(edad);

const userContext = ({ nombre, edad, clave, }) =>{
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.32312,
            lng: -62.2515,
        }
    };
}

const { nombreClave, anios, latlng } = userContext(persona);
const { lat, lng } = latlng;
console.log(nombreClave, anios, lat);


