document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Previne o envio do formulário até a validação ser concluída
    event.preventDefault();

    // Seleciona os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;


    if (!nome || !email || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (senha.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

 
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    alert('Cadastro realizado com sucesso!');
});