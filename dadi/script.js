var PunteggioP1 = 0
var PunteggioP2 = 0
document.getElementById("play").addEventListener("click",
function () {
  for (var i = 1; i <= 7; i++) {
    numero1 = Math.floor(Math.random() * 6 + 1);
    numero2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById('risultatoNumero1').innerHTML = numero1;
    document.getElementById('risultatoNumero2').innerHTML = numero2;
    if (numero1 > numero2) {
      alert("numero 1 maggiore");
       PunteggioP1++
    }
    else if (numero1 < numero2) {
      alert("numero 1 minore");
      PunteggioP2++
    }
    else {
      alert("pareggio")
    }
  }
}
)
