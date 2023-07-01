fetch(API_URL + '/freelancers', {
  method: 'GET',
})
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    // Obtenha a referência para o elemento do corpo da tabela
    let tbody = document.querySelector('.table-vcenter tbody');

    // Para cada item na apiData, crie uma nova linha na tabela
    result.forEach(item => {
      let row = document.createElement('tr');

      let nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      row.appendChild(nameCell);

      let emailCell = document.createElement('td');
      emailCell.textContent = item.email;
      row.appendChild(emailCell);

      let phoneCell = document.createElement('td');
      phoneCell.textContent = item.phone;
      row.appendChild(phoneCell);

      let actionsCell = document.createElement('td');
      let actionsDiv = document.createElement('div');
      actionsDiv.classList.add('btn-list', 'flex-nowrap');

      // passar o administrador selecionado para a modal de detalhes
      let editLink = document.createElement('a');
      editLink.classList.add('btn');
      editLink.setAttribute('data-bs-toggle', 'modal');
      editLink.setAttribute('data-bs-target', '#modal-detalhe');
      editLink.setAttribute('onclick', 'visualizarAdministrador(' + JSON.stringify(item) + ')');
      editLink.textContent = 'Detalhes';

      let dropdownDiv = document.createElement('div');
      dropdownDiv.classList.add('dropdown');

      let dropdownButton = document.createElement('button');
      dropdownButton.classList.add('btn', 'dropdown-toggle', 'align-text-top');
      dropdownButton.setAttribute('data-bs-toggle', 'dropdown');
      dropdownButton.textContent = 'Ações';

      let dropdownMenu = document.createElement('div');
      dropdownMenu.classList.add('dropdown-menu', 'dropdown-menu-end');

      // passar o administrador selecionado para a modal de edição
      let dropdownItem1 = document.createElement('a');
      dropdownItem1.classList.add('dropdown-item');
      dropdownItem1.setAttribute('data-bs-toggle', 'modal');
      dropdownItem1.setAttribute('data-bs-target', '#modal-editar');
      dropdownItem1.setAttribute('onclick', 'editarAdministrador(' + JSON.stringify(item) + ')');
      dropdownItem1.textContent = 'Editar';

      // passar o administrador selecionado para a modal de exclusão
      let dropdownItem2 = document.createElement('a');
      dropdownItem2.classList.add('dropdown-item');
      dropdownItem2.setAttribute('data-bs-toggle', 'modal');
      dropdownItem2.setAttribute('data-bs-target', '#modal-excluir');
      dropdownItem2.setAttribute('onclick', 'excluirAdministrador(' + JSON.stringify(item) + ')');
      dropdownItem2.textContent = 'Excluir';

      dropdownMenu.appendChild(dropdownItem1);
      dropdownMenu.appendChild(dropdownItem2);

      dropdownDiv.appendChild(dropdownButton);
      dropdownDiv.appendChild(dropdownMenu);

      actionsDiv.appendChild(editLink);
      actionsDiv.appendChild(dropdownDiv);

      actionsCell.appendChild(actionsDiv);

      row.appendChild(actionsCell);

      tbody.appendChild(row);
    });

    // Atualiza o total de registros
    document.getElementById('total').textContent = result.length;
    document.getElementById('total_users').textContent = result.length;

    let paginas = document.getElementById('paginas');
    let totalPaginas = Math.ceil(result.length / 10);
    for (let i = 1; i <= totalPaginas; i++) {
      let li = document.createElement('li');
      li.classList.add('page-item');
      let a = document.createElement('a');
      a.classList.add('page-link');
      a.textContent = i;
      li.appendChild(a);
      paginas.appendChild(li);
    }



  })
  .catch((error) => {
    console.log(error);
  });

function visualizarAdministrador(usuario) {
  document.getElementById('nomeUsuarioSelecionado').textContent = usuario.name;
  document.getElementById('emailUsuarioSelecionado').textContent = usuario.email;
  document.getElementById('telefoneUsuarioSelecionado').textContent = usuario.phone;
};

function editarAdministrador(usuario) {
  document.getElementById('campoNomeEditar').value = usuario.name;
  document.getElementById('campoEmailEditar').value = usuario.email;
  document.getElementById('campoTelefoneEditar').value = usuario.phone;
};

function excluirAdministrador(usuario) {
  document.getElementById('excluirNomeUsuario').textContent = usuario.name;
  document.getElementById('excluirEmailUsuario').textContent = usuario.email;
  document.getElementById('excluirTelefoneUsuario').textContent = usuario.phone;
  localStorage.setItem('idUsuarioExcluir', usuario._id);
}

function confirmarExclusao(){
  let id = localStorage.getItem('idUsuarioExcluir');
  fetch('https://tccsolutionsapi.webtech-entrega-test.com.br/admin/' + id, {
    method: 'DELETE',
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      alert("Administrador excluído com sucesso!");
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}