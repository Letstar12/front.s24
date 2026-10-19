
const botao = document.getElementById('botaoInterativo');
const mensagem = document.getElementById('mensagem');

botao.addEventListener('click', function () {
    botao.classList.toggle('ativo');

    if (botao.classList.contains('ativo')) {
        botao.textContent = 'Desativar interação';
        mensagem.textContent = 'Interação ativada com sucesso!';
    } else {
        botao.textContent = 'Clique para interagir';
        mensagem.textContent = 'O melhor da fotografia está nos detalhes.';
    }
});
