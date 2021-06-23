/* Case0002
    A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

    Determinar cual de los elementos de texto es mayor
    Usar arrow function way
*/

let valores = [true, 5, false, "hola", "adios", 2];

let TextMayor = (valor) => {
    let i = 0;
    let arr = [];
    while(i < valor.length){
        if(typeof(valor[i]) === 'string') {
            arr.push(valor[i]);
        }
        i++;
    }

    if(arr[0].length > arr[1].length){
        return arr[0];
    }
    else if(arr[0].length < arr[1].length){
        return arr[1];
    }
    else {
        return "Ambos textos son iguales";
    }
}

console.log(TextMayor(valores));