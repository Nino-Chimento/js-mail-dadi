var emailInserita = prompt("inserisci la tua email");
var mailValida = false;
for (var i = 0; i < emailInserita.length; i++) {
  var controllo = emailInserita[i];

  if (controllo != "@") {
    mailValida = false;
  }
  else {
    mailValida = true;
  }
}
if (mailValida = true) {
  alert("hai inserito un email in formattazione non  valida")
}
var listaEmail = ["123.gmail.com","canechecorre@gmail.com","random@hotmail.it","saninoc84@gmail.com"]
for (var i = 0; i < listaEmail.length; i++) {
  listaEmail[i]
  if (emailInserita == listaEmail[i]) {
     emailVerificata = true;
  }
  else {
    emailVerificata = false
  }
}
if (emailVerificata == true) {
  alert("benvenuto visitatore");
}
else {
  alert("hai inserito un email non valida");
}
