document.getElementById('btnSaibaMais').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    mensagem.textContent = "Você sabia? Mais de 40% da força de trabalho global está empregada no setor agrícola!";
    mensagem.style.display = 'block';
    this.style.display = 'none'; // Esconde o botão após o clique
});