document.addEventListener('DOMContentLoaded', () => {
    // 1. Animação de entrada para os elementos
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transition = `all 0.5s ease ${index * 0.2}s`;
        setTimeout(() => {
            card.style.opacity = '1';
        }, 100);
    });

    // 2. Lógica do botão interativo
    const btn = document.getElementById('btnSaibaMais');
    const info = document.getElementById('infoExtra');

    btn.addEventListener('click', () => {
        info.classList.toggle('hidden');
        
        // Altera o texto dinamicamente
        if (!info.classList.contains('hidden')) {
            btn.textContent = "Ocultar detalhes";
            info.scrollIntoView({ behavior: 'smooth' }); // Scroll automático
        } else {
            btn.textContent = "Descobrir a importância tecnológica";
        }
    });

    // 3. Exemplo de validação simples (caso adicione um formulário no futuro)
    console.log("Sistema interativo inicializado com sucesso!");
});