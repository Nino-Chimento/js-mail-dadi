var punteggioP1 = 0
var punteggioP2 = 0
document.getElementById("play").addEventListener("click",
function () {
  for (var i = 1; i <= 7; i++) {
    numero1 = Math.floor(Math.random() * 6 + 1);
    numero2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById('risultatoNumero1').innerHTML += numero1;
    document.getElementById('risultatoNumero2').innerHTML += numero2;
    if (numero1 > numero2) {
      alert("Vince la mano il play1");
       punteggioP1++
    }
    else if (numero1 < numero2) {
      alert("Vince la mano il play2");
      punteggioP2++

    }
    else {
      alert("pareggio")
    }
    document.getElementById('scoreFinale1').innerHTML = punteggioP1;
    document.getElementById('scoreFinale2').innerHTML = punteggioP2;
  }
}
)
document.getElementById('azzera').addEventListener("click",
  function () {
    document.getElementById('risultatoNumero1').innerHTML = "";
    document.getElementById('risultatoNumero2').innerHTML = "";
    document.getElementById('scoreFinale1').innerHTML = "";
    document.getElementById('scoreFinale2').innerHTML = "";
  }
)
// for(eccetera) {
//   numero1 = Math.floor(Math.random() * 6 + 1);
//   numero2 = Math.floor(Math.random() * 6 + 1);
//   updateScore(numero1, numero2);
// }
// function updateScore(numero1, numero2) {
// }
// function updateScore(numero1, numero2) {
//   setTimeout(function () {
//   document.getElementById('risultatoNumero1').innerHTML += numero1;
//   document.getElementById('risultatoNumero2').innerHTML += numero2;
//  }, 1000);
// }
