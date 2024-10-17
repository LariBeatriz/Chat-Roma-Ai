document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticação aqui
    console.log(`Email: ${email}, Senha: ${password}`);
});
