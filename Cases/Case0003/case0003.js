// // Case0003 - Consulta aun API 
// // usar el API https://pokeapi.co/
// https://pokeapi.co/api/v2/
//  y mostrar en consola los nombres de los pokemones hasta el 151
const fetch = require('node-fetch');
const urlAPI = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

function MostrarPokemones(){
    fetch(urlAPI)
        .then(response => response.json())
        .then(data => {
            let Nombre = data.results.map(elem => elem.name)
            console.log(Nombre)
        })
        .catch(err => console.error(err));
}

MostrarPokemones();