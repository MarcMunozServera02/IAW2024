let poker = ["Ah", "Ad", "Ac", "As", "2h", "2d", "2c", "2s", "3h", "3d", "3c", "3s", "4h", "4d", "4c", "4s", "5h", "5d", "5c", "5s", "6h", "6d", "6c", "6s", "7h", "7d", "7c", "7s", "8h", "8d", "8c", "8s", "9h", "9d", "9c", "9s", "10h", "10d", "10c", "10s", "Jh", "Jd", "Jc", "Js", "Qh", "Qd", "Qc", "Qs", "Kh", "Kd", "Kc", "Ks"]


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizer(poker){
    const cartasBarajadas = []
    while (poker.length>0){
        const aleatorio = getRandomInt(poker.length)
        cartasBarajadas.push(poker.splice(aleatorio,1)[0])
    }
    return cartasBarajadas
}

console.log(randomizer(poker))