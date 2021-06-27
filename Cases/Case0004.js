// // Case0003 - Consulta aun API 
// // usar el API https://pokeapi.co/
// https://pokeapi.co/api/v2/
//  y mostrar en consola los el id, nombre, tipo, de un poquemon que se ingrese por consola:
const fetch = require('../Cases/Case0003/node_modules/node-fetch');
const URL = 'https://pokeapi.co/api/v2/pokemon/';

const pokeInfo = (id) => {
    fetch(URL+id)
        .then(response => response.json())
        .then(data => {
            console.log('ID: '+ data.id);
            console.log('Name: '+ data.name);
            let types = data.types.map(elem => elem.type.name);
            console.log('Types: ' + types);
        })
        .catch(err => console.log(err));
}

pokeInfo(20);