document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Lógica de autenticação aqui
    console.log(`Email: ${email}, Senha: ${password}`);

});


    document.getElementById("form").addEventListener("submit", function(event) {
        // Pega os valores dos campos de senha
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
    
        // Verifica se as senhas são iguais
        if (password !== confirmPassword) {
            // Evita o envio do formulário
            event.preventDefault();
            
            // Mostra uma mensagem de erro
            document.getElementById("message").textContent = "As senhas não são iguais!";
        } else {
            // Se as senhas forem iguais, o formulário é enviado
            document.getElementById("message").textContent = "";
        }
    });
