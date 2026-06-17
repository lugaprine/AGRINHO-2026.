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
    const displayArea = document.getElementById('displayArea');
const buttons = document.querySelectorAll('.filter-btn');

const conteudos = {
    sustentabilidade: "<strong>Sustentabilidade:</strong> A agricultura moderna foca em regenerar o solo, economizar água e manter o equilíbrio do ecossistema para as próximas gerações.",
    tecnologia: "<strong>Tecnologia:</strong> O uso de Drones, GPS e Inteligência Artificial permite que agricultores monitorem plantações em tempo real, aumentando a eficiência com menos desperdício.",
    economia: "<strong>Economia:</strong> O agro é um pilar econômico fundamental, responsável por milhões de empregos, exportações recordes e o abastecimento das cidades."
};

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const categoria = btn.getAttribute('data-info');
        
        // Efeito de fade out/in simples
        displayArea.style.opacity = '0';
        
        setTimeout(() => {
            displayArea.innerHTML = `<p>${conteudos[categoria]}</p>`;
            displayArea.style.opacity = '1';
        }, 200);
    });
});
});