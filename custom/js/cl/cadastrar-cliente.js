let name_input = document.getElementById('name');
let email_input = document.getElementById('email');
let phone_input = document.getElementById('phone');
let password_input = document.getElementById('password');
let checkTermos = document.getElementById('checkTermos');
let btnCadastrar = document.getElementById('btn-cadastrar');

// validar nome
name_input.addEventListener('keyup', function() {
  let valid_name = name_input.value;
  if(isNaN(valid_name)){
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-valid is-valid-lite";
  }else {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-invalid is-invalid-lite";
  };
  
  if (valid_name.length == 0) {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control";
  }

  let remover_espaco = valid_name.replace(/\s/g, '');
  console.log(remover_espaco);

  let map_number = remover_espaco.split('').map(Number);
  let remove_NaN = map_number.filter(function (value) {
    return !Number.isNaN(value);
  });

  if (remove_NaN.length > 0) {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-invalid is-invalid-lite";
  } else {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-valid is-valid-lite";
  }
  
  if (valid_name.length == 0) {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control";
  }
});

name_input.addEventListener('focusout', function() {
  let valid_name = name_input.value;
  if(isNaN(valid_name)){
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-valid is-valid-lite";
  }else {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-invalid is-invalid-lite";
  };

  if (valid_name.length == 1) {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-invalid is-invalid-lite";
  } else if (valid_name.length > 0 && isNaN(valid_name)) {
    let nameClass = document.getElementById('name').classList;
    nameClass.value = "form-control is-valid is-valid-lite";
  }
});

name_input.addEventListener('focusin', function() {
  let nameClass = document.getElementById('name').classList;
  nameClass.value = "form-control";
});

// validar email
email_input.addEventListener('keyup', async function() {
  let valid_email = email_input.value;
  let emailIsValid = await validateEmail(valid_email);
  if (emailIsValid) {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-valid is-valid-lite";
  } else {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-invalid is-invalid-lite";
  }

  if (valid_email.length == 0) {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control";
  }
});

email_input.addEventListener('focusout', async function() {
  let valid_email = email_input.value;
  let emailIsValid = await validateEmail(valid_email);
  if (email_input.value.length == 0) {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-invalid is-invalid-lite";
  } else if (emailIsValid) {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-valid is-valid-lite";
  } else {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-invalid is-invalid-lite";
  }
});

email_input.addEventListener('focusin', function() {
  let emailClass = document.getElementById('email').classList;
  emailClass.value = "form-control";
});

// validar telefone
phone_input.addEventListener('keyup', function() {
  let valid_phone = phone_input.value;
  console.log(validaNumeroTelefone(valid_phone));
  if (validaNumeroTelefone(valid_phone)) {
    let phoneClass = document.getElementById('phone').classList;
    phoneClass.value = "form-control is-valid is-valid-lite";
  } else {
    let phoneClass = document.getElementById('phone').classList;
    phoneClass.value = "form-control is-invalid is-invalid-lite";
  }
});

phone_input.addEventListener('focusout', function() {
  let valid_phone = phone_input.value;
  if (valid_phone.length == 0) {
    let phoneClass = document.getElementById('phone').classList;
    phoneClass.value = "form-control";
  } else if (validaNumeroTelefone(valid_phone)) {
    let phoneClass = document.getElementById('phone').classList;
    phoneClass.value = "form-control is-valid is-valid-lite";
  } else {
    let phoneClass = document.getElementById('phone').classList;
    phoneClass.value = "form-control is-invalid is-invalid-lite";
  }
});

phone_input.addEventListener('focusin', function() {
  let phoneClass = document.getElementById('phone').classList;
  phoneClass.value = "form-control";
});

// validar senha
password_input.addEventListener('keyup', function() {
  let valid_password = password_input.value;
  if (valid_password.length >= 6) {
    let passwordClass = document.getElementById('password').classList;
    passwordClass.value = "form-control is-valid is-valid-lite";
  } else {
    let passwordClass = document.getElementById('password').classList;
    passwordClass.value = "form-control is-invalid is-invalid-lite";
  }
});

password_input.addEventListener('focusout', function() {
  let valid_password = password_input.value;
  if (valid_password.length == 0) {
    let passwordClass = document.getElementById('password').classList;
    passwordClass.value = "form-control is-invalid is-invalid-lite";
  } else if (valid_password.length >= 6) {
    let passwordClass = document.getElementById('password').classList;
    passwordClass.value = "form-control is-valid is-valid-lite";
  } else {
    let passwordClass = document.getElementById('password').classList;
    passwordClass.value = "form-control is-invalid is-invalid-lite";
  }
});

password_input.addEventListener('focusin', function() {
  let passwordClass = document.getElementById('password').classList;
  passwordClass.value = "form-control";
});

// cadastrar cliente

btnCadastrar.addEventListener('click', async function(event) {
  event.preventDefault();
  let name = name_input.value;
  let email = email_input.value;
  let phone = phone_input.value;
  let password = password_input.value;

  if (name.length == 0 || email.length == 0 || phone.length == 0 || password.length == 0) {
    alert("Preencha todos os campos!");

    let classListName = document.getElementById('name').classList;
    classListName.value = "form-control is-invalid is-invalid-lite";

    let classListEmail = document.getElementById('email').classList;
    classListEmail.value = "form-control is-invalid is-invalid-lite";

    let classListPhone = document.getElementById('phone').classList;
    classListPhone.value = "form-control is-invalid is-invalid-lite";

    let classListPassword = document.getElementById('password').classList;
    classListPassword.value = "form-control is-invalid is-invalid-lite";
  } else {
    if (checkTermos.checked == false) {
      alert("Aceite os termos de uso!");
    } else {
      if (password.length < 6) {
        alert("A senha deve conter no mínimo 6 caracteres!");
      } else {
        let cliente = {
          name: name,
          email: email,
          phone: phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', ''),
          password: password
        };

        if (ENV == 'REPLIT') {
          console.log("Cadastrando cliente via fake...");
          await MockTcc.cadastrarClientes(cliente);
          window.location.href = "login.html";
        } else {
          console.log("Cadastrando cliente via api...");
        }
      }
    }
  }
});
