let button_send = document.getElementById('button_send');

function buscarUsuarioAutenticar(email, password) {
  let data = {
      email: email,
      password,
   };
   console.log(data);
   // let url = 'https://tccsolutionsapi.webtech-entrega-test.com.br/admin/login';
   let url = API_URL + '/admin/login';
   let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };
   fetch(url, options)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         if (result.access_token) {
            localStorage.setItem('token', result.access_token);

            fetch(API_URL + '/admin/verify-token', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify({
                  token: result.access_token,
               }),
            })
               .then((response) => {
                  return response.json();
               })
               .then((result) => {
                  localStorage.setItem('name', result.name);
                  localStorage.setItem('email', result.email);
                  localStorage.setItem('id', result._id);
                  window.location.href = 'index.html';
               })
         } else {
            alert('Usuário ou senha incorretos');
         }
      })
      .catch((error) => {
         console.log(error);
      });
};

button_send.addEventListener('click', function () {
   let email = document.getElementById('email').value;
   let password = document.getElementById('senha').value;
   if(ENV != 'REPLIT'){
      buscarUsuarioAutenticar(email, password);
   } else {
      localStorage.setItem('name', 'Anakin Skywalker');
      localStorage.setItem('email', 'padmeMyLove@darkside.com.br');
      localStorage.setItem('id', '66');
      window.location.href = 'index.html';
   }
});

