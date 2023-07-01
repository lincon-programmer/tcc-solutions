window.addEventListener('load', async () => {
  if (ENV != 'REPLIT'){
    let token = localStorage.getItem('token');
    if (token) {
      let result = await verifyToken(token);
      if (!result) {
        window.location.href = 'login.html';
      } else {
        verifyUser(result.name);
      }
  
    } else {
      window.location.href = 'login.html';
    }
  } else {
    localStorage.setItem('name', 'Anakin Skywalker');
  }
});

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    let data = {
      token: token,
    };
    let url = 'https://tccsolutionsapi.webtech-entrega-test.com.br/admin/verify-token';
    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
    }
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function verifyUser(nome){
  let nome_local = localStorage.getItem('name');
  if (!nome_local) {
    localStorage.setItem('name', nome);
  }
}