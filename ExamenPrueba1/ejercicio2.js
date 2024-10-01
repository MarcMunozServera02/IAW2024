let trabajadores = [{
        "nom": "Joan",
        "llinatges": "Ques Ferrer",
        "edat": 45,
        "sou": 15000
    },
    {
        "nom": "Pere",
        "llinatges": "Gomila Alarde",
        "edat": 30,
        "sou": 10000
    },
    {
        "nom": "Marta",
        "llinatges": "Salas García",
        "edat": 55,
        "sou": 40000
    }
]

console.log(trabajadores);

function compare(a, b) {
    return a - b;
}

function OrdenarPorEdat(x, y) {
    return ((x.edat == y.edat) ? 0 : ((x.edat > y.edat) ? 1 : -1));
}


function media(trabajadores2) {

    for (const trabajador of trabajadores2) {
        if (trabajador.edat >= 40 && trabajador.sou >= 15000) {
            trabajador.sou = trabajador.sou + 2000
        };
    };
    trabajadores2 = trabajadores2.sort(OrdenarPorEdat);
    return trabajadores2
};

console.log(media(trabajadores));