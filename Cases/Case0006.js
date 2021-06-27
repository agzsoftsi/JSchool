/*
Case0006 - show the abilities of selected pokemon
usar el API https://pokeapi.co/
https://pokeapi.co/api/v2/pokemon/
*/

const fetch = require('../Cases/Case0003/node_modules/node-fetch');
const URL = 'https://pokeapi.co/api/v2/pokemon/';

console.log('Enter Pokemon ID: ');
process.stdin.on('data', (data) => {
    let idPokemon = data.toString().trim();
    console.log(parseInt(idPokemon))
    fetch(URL + parseInt(idPokemon))
        .then(response => response.json())
        .then(result => {
            result.abilities.map( elem => console.log('Ability: '+elem.ability.name))
        })
        .catch(() => console.log('Pokemon not found!!!'))
});