function compare(a, b) {
  return a - b;
}

function calcularNota(problemes, bonus, penalitzador) {
  problemes2 = problemes.sort(compare)
  problemes2.splice(0, 1);
  problemes2.splice(1, 1);
  var nuber = 0;
  for (const num of problemes2) {
    var nuber2 = num / 8
    //console.log(nuber)

    nuber = nuber2 + nuber;


  }
  nuber + bonus;
  nuber - penalitzador;
  return nuber;
};
let prom = [10, 10, 10, 10, 10, 10, 10, 0, 0, 0];
let bon = 0.25;
let penr = 1;

console.log(calcularNota(prom, bon, penr));