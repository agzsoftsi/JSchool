// // Case0003 - Consulta aun API 
// // usar el API https://pokeapi.co/
// https://pokeapi.co/api/v2/
//  y mostrar en consola los el id, nombre, tipo, de un pokemon que se ingrese por consola por ID y se muestre:
const fetch = require('node-fetch');
const URL = 'https://pokeapi.co/api/v2/pokemon/';

console.log("Digite el ID del pokemon: ");
process.stdin.on('data',
    function(data) {
        let id = data.toString().trim();
        if(typeof(parseInt(id)) === 'number'){
            fetch(URL+id)
                .then(response => response.json())
                .then(data => {
                    console.log('ID: '+data.id+'\nName: '+data.name);

                })
                .catch(() => console.log("Pokemon no encontrado"));
        }
        else {
            console.log('El ID no es valido');
        }
    }
);


//showPokemon(1);