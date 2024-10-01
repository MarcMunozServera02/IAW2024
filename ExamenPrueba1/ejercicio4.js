let array = [5, 64, 9, 2, 83, -1, 4]

function CalcularRaiz(numeros) {
    let resultados = []
    numeros.forEach(n => {
        try {
            if (n < 0) throw "Error: Numero Negativo";
            resultados.push(Math.sqrt(n).toFixed(2));
        } catch (err) {
            resultados.push(err);
        }

    })
    return resultados
}

console.log(CalcularRaiz(array))