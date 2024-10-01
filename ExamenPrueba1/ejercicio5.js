array = [{
        "nom": "Joan",
        "llinatges": "Ques Ferrer",
        "sexe": "H",
        "categoria": "Platinum",
        "hotel": "Gran Hotel Emili Darder",
        "entrada": "07/02/2024",
        "sortida": "09/03/2024",
        "encarregat": "Marina Darder"
    },
    {
        "nom": "Marina",
        "llinatges": "Gabriel Ques",
        "sexe": "D",
        "categoria": "Silver",
        "hotel": "Hotel Palma",
        "entrada": "07/03/2024",
        "sortida": "09/03/2024",
        "encarregat": "Pere Darder"
    },
    {
        "nom": "Josep",
        "llinatges": "Castellofells Miranda",
        "sexe": "H",
        "categoria": "",
        "hotel": "Hotel Wonder",
        "entrada": "17/02/2024",
        "sortida": "19/02/2024",
        "encarregat": "Marina Darder"
    }
]

function frase(array) {
    let fraseCompleta = "";
    for (const arr of array) {

        if (arr.sexe == "H") {
            fraseCompleta += `Bienvenido ${arr.nom}
            Como usuario `
        } else {
            fraseCompleta += `Bienvenida ${arr.nom} 
            Como usuaria `

        }
        fraseCompleta += `${arr.categoria} es un placer darte la bienvenida al ${arr.hotel} del ${arr.entrada} hasta ${arr.sortida}

Yo y el resto del equipo estamos a tu disposicion ${arr.encarregat}
---
`
    }
    return fraseCompleta
}

console.log(frase(array))