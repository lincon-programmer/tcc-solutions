var quantidade_administradores = 0;
var quantidade_freelancers = 0;
var quantidade_clientes = 0;

var administradores;
var freelancers;
var clientes;

function buscarUsuarios(){
  if(ENV != 'REPLIT') {
    fetch(API_URL + '/admin')
    .then(response => response.json())
    .then(data => {
        quantidade_administradores = data.length;
        administradores = data;
    })

    fetch(API_URL + '/freelancers')
    .then(response => response.json())
    .then(data => {
        quantidade_freelancers = data.length;
        freelancers = data;
    })

    fetch(API_URL + '/clientes')
    .then(response => response.json())
    .then(data => {
        quantidade_clientes = data.length;
        clientes = data;
    }) 
  }
}

buscarUsuarios();