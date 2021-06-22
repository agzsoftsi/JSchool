/* Case0001
    A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

    Determinar cual de los elementos de texto es mayor
*/

var valores = [true, 5, false, "holas", "adios", 2];

function textMayor(valores) {
    var arr = [];
    for (var i = 0; i < valores.length; i++) {
        if(typeof(valores[i]) === 'string') {
            arr.push(valores[i])
        }
    }

    if (arr[0].length > arr[1].length) {
        return(arr[0]);
    }
    else  if (arr[0].length < arr[1].length) {
        return(arr[1]);
    }
    else {
        return('Textos iguales');
    }
    
}

console.log(textMayor(valores));