let button_send = document.getElementById('button_send');
let email = document.getElementById('email');
let password = document.getElementById('senha');
let again = document.getElementById('again');

function loginCliente(email, password) {
}

email.addEventListener('keyup', async function() {
  let emailIsValid = await validateEmail(email.value);
  if(emailIsValid){
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-valid is-valid-lite";
  } else {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-invalid is-invalid-lite";
  }
});

email.addEventListener('focusout', async function() {
  let emailIsValid = await validateEmail(email.value);
  if(emailIsValid){
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-valid is-valid-lite";
  } else {
    let emailClass = document.getElementById('email').classList;
    emailClass.value = "form-control is-invalid is-invalid-lite";
  }
});

email.addEventListener('focusin', function() {
  let emailClass = document.getElementById('email').classList;
  emailClass.value = "form-control";
});

password.addEventListener('keyup', function() {
  let passwordClass = document.getElementById('senha').classList;
  passwordClass.value = "form-control is-valid is-valid-lite";
});

password.addEventListener('focusout', function() {
  
  let passwordClass = document.getElementById('senha').classList;
  passwordClass.value = "form-control";

  if(password.value.length == 0) {
    passwordClass.value = "form-control is-invalid is-invalid-lite";
  } else {
    passwordClass.value = "form-control is-valid is-valid-lite";
  }
});

password.addEventListener('focusin', function() {
  let passwordClass = document.getElementById('senha').classList;
  passwordClass.value = "form-control";
});

button_send.addEventListener('click', function(event) {
  password = password.value;
  email = email.value;

  if(
    email != undefined &&
    password != undefined &&
    email != "" &&
    password != ""
    ) {
      let login = ENV == 'REPLIT'?
      MockTcc.loginCliente({email, password}):
      loginCliente(email, password);

      if(ENV == 'REPLIT') {
        if(login) {
          localStorage.setItem('token', login.token);
          localStorage.setItem('id', login._id);
          window.location.href = 'index.html';
        } else {
          var myModal = new bootstrap.Modal(document.getElementById('modal-danger'), {});
          myModal.show();
          let emailClass = document.getElementById('email').classList;
          emailClass.value = "form-control is-invalid is-invalid-lite";

          let passwordClass = document.getElementById('senha').classList;
          passwordClass.value = "form-control is-invalid is-invalid-lite";
          event.preventDefault();
        }
      }
    } else {
      let emailClass = document.getElementById('email').classList;
      emailClass.value = "form-control is-invalid is-invalid-lite";

      let passwordClass = document.getElementById('senha').classList;
      passwordClass.value = "form-control is-invalid is-invalid-lite";
      event.preventDefault();
    }
})

again.addEventListener('click', function() {
  window.location.reload();
})
