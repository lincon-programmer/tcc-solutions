let quant_usuarios = document.getElementById('quant_usuarios');
let placeholder_quantidade_usuario = document.getElementById('placeholder_quantidade_usuario');
setTimeout(function () {
    quant_usuarios.innerHTML = ENV != 'REPLIT'? quantidade_administradores + quantidade_freelancers + quantidade_clientes : 20;
    placeholder_quantidade_usuario.classList.remove('placeholder');
}, 3000);