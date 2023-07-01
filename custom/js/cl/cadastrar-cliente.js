function cadastrarCliente() {
    var nome = document.getElementById("campoNome").value;
    var email = document.getElementById("campoEmail").value;
    var telefone = document.getElementById("campoTelefone").value;
    var senha = document.getElementById("campoSenha").value;
    var repetirSenha = document.getElementById("campoRepetirSenha").value;
  
    if (nome == "" || email == "" || telefone == "" || senha == "" || repetirSenha == "") {
      alert("Preencha todos os campos!");
    } else {
      if (senha != repetirSenha) {
        alert("As senhas não coincidem!");
      } else {
        var dados = {
          "name": nome,
          "email": email,
          "phone": telefone,
          "password": senha
        };
  
        var cabecalho = {
          method: 'POST',
          body: JSON.stringify(dados),
          headers: {
            'Content-Type': 'application/json'
          }
        };
  
        fetch(API_URL + '/clientes', cabecalho)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            console.log(result);
            alert("Cliente cadastrado com sucesso!");
            window.location.reload();
          })
          .catch((error) => {
  
            console.error('Error:', error);
          });
      }
    }
  }