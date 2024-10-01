
//ordenar array simple
function compare(a, b) {
    return a - b;
  }

//ordenar array especifico
function OrdenarPorEdat(x, y) {
    return ((x.edat == y.edat) ? 0 : ((x.edat > y.edat) ? 1 : -1));
}

//crear numero aleatorio
//se debera usar como getRandomInt(Numero maximo)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Mover de una array a otra de forma aleatoria dejandola vacia
function randomizer(poker){
    const cartasBarajadas = []
    while (poker.length>0){
        const aleatorio = getRandomInt(poker.length)
        cartasBarajadas.push(poker.splice(aleatorio,1)[0])
    }
    return cartasBarajadas
}

//Ejemplo try catch throw 

function CalcularRaiz(numeros){
    let resultados =[]
    numeros.forEach(n => {
        try{
            if(n<0) throw "Error: Numero Negativo";
            resultados.push(Math.sqrt(n).toFixed(2));
        }catch(err){
            resultados.push(err);
        }

    })
    return resultados
}