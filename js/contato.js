// contatos.js
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado automaticamente

    // Obtenha os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Aqui você pode adicionar a lógica para enviar os dados para o Formspree
    var formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('mensagem', mensagem);

    fetch('https://formspree.io/f/mnqedgyz', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('formContato').reset(); // Limpa o formulário após o envio
        } else {
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
        }
    })
    .catch(function(error) {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
    });
});
