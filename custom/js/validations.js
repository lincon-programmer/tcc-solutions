function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validaNumeroTelefone(telefone) {
  // O padrão de regex é: /^(\()?\d{2}(\))?[- ]?\d{1}?[- ]?\d{4}[- ]?\d{4}$/
  // Isso corresponde a: (DD) 9XXXX-XXXX
  var regex = /^(\()?\d{2}(\))?[- ]?\d{1}?[- ]?\d{4}[- ]?\d{4}$/;

  if (regex.test(telefone)) {
      console.log("Número de telefone válido!");
      return true;
  } else {
      console.log("Número de telefone inválido!");
      return false;
  }
}
