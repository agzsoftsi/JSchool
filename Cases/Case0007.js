/*
Case0007 - arrays
recorrer un array, y crear nuevos arrays con los numeros, string y otros.
y ordenarlos de forma ascendente;
*/

let arr = [1, 20, 'hola', null, 5, undefined, 'carlos', 10, [1, 2, 3], {name:'carlos', lastName:'garcia'}];

function evaluarDatos(arr){
    let nums = [], text = [], others = [];

    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            nums.push(arr[i]);
        }
        else if(typeof(arr[i]) === 'string'){
            text.push(arr[i]);
        }
        else {
            others.push(arr[i]);
        }
    }
    return ('Numeros: '+nums.sort()+'\nCadenas: '+text.sort()+'\nOthers :'+others.sort());

    }
    
console.log(evaluarDatos(arr));