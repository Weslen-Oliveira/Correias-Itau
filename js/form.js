let frm = document.getElementById('formulario');
let nome = document.getElementById('nome');
let email = document.getElementById('email');
let btn = document.getElementById('btn');

frm.addEventListener('submit', (e) => {
    if (nome.value === 'Weslen' && email.value === 'weslenoliveira710@gmail.com' || nome.value === 'Rosa' && email.value === 'rosa@gmail.com' || nome.value === 'Santos' &&  email.value === 'santos@gmail.com') { 
        alert('Login realizado com sucesso!');
        window.location.href = 'inicio.html';
    }else{
        alert('Nome ou email incorretos. Tente novamente.'); 
    }

e.preventDefault();
});   
