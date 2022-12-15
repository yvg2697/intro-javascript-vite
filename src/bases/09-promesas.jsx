import { getHeroeById } from "./bases/08-imp exp";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log(heroe);
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        const heroe = getHeroeById(id);
        heroe !== undefined? resolve(heroe) : reject('No se encuentra')
        setTimeout(() => {
        const heroe = getHeroeById(id);
        resolve(heroe);
      }, 2000);
    });
};

// getHeroeByIdAsync(12).
//     then(heroe => console.log('Hola', heroe)).
//     catch(error => console.log('Error ', error));


getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);