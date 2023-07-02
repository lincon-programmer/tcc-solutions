let button_send = document.getElementById('button_send');
let email = document.getElementById('email');
let password = document.getElementById('senha');

/**  
<div class="mb-3">
  <label class="form-label">Validation States (lite)</label>
  <input type="text" class="form-control is-valid is-valid-lite mb-2" placeholder="Valid State..">
  <input type="text" class="form-control is-invalid is-invalid-lite" placeholder="Invalid State..">
</div>
*/

button_send.addEventListener('click', function() {
  password = password.value;
  email = email.value;

  if(
    email != undefined &&
    password != undefined &&
    email != "" &&
    password != ""
    ) {
      alert("tudo ok")
    } else {
    }

  console.log({
    email,
    password
  });
})