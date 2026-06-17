// =============================================
// AGRINHO 2026 - JavaScript Principal
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%cAGRINHO 2026 - Sistema carregado com sucesso!', 'color: #0b4d2c; font-weight: bold;');

    // ==================== 1. Menu Mobile ====================
    const navbar = document.querySelector('.navbar');
    let menuOpen = false;

    // Criar botão hamburger
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '☰';
    hamburger.style.cssText = `
        display: none; background: none; border: none; 
        font-size: 1.8rem; color: white; cursor: pointer;
    `;
    navbar.appendChild(hamburger);

    // Responsivo
    function checkMobile() {
        if (window.innerWidth <= 768) {
            hamburger.style.display = 'block';
        } else {
            hamburger.style.display = 'none';
        }
    }
    window.addEventListener('resize', checkMobile);
    checkMobile();

    // ==================== 2. Contador Regressivo Avançado ====================
    function startCountdown() {
        const eventDate = new Date("April 15, 2026 09:00:00").getTime();
        
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            if (distance < 0) {
                document.getElementById("countdown").innerHTML = 
                    `<strong>Evento em andamento!</strong>`;
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `
                <strong>${days}d ${hours}h ${minutes}m ${seconds}s</strong> 
                <span>para o AGRINHO 2026</span>
            `;
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    }

    // ==================== 3. Smooth Scroll ====================
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==================== 4. Active Navigation ====================
    function activeNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav ul li a');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 150) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ==================== 5. Animações ao Scroll ====================
    function scrollAnimations() {
        const cards = document.querySelectorAll('.card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });
    }

    // ==================== 6. Botão Inscrever-se ====================
    function setupButtons() {
        const inscreverBtn = document.querySelector('.btn-inscrever');
        if (inscreverBtn) {
            inscreverBtn.addEventListener('click', () => {
                alert('🎟️ Inscrições para o AGRINHO 2026 em breve!\n\nFique ligado nas nossas redes.');
                // Aqui você pode abrir um modal de inscrição no futuro
            });
        }

        // Botão Quero Participar
        const primaryBtns = document.querySelectorAll('.btn-primary');
        primaryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                document.getElementById('inscricoes')?.scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        });
    }

    // ==================== Inicialização ====================
    function init() {
        startCountdown();
        smoothScroll();
        activeNav();
        scrollAnimations();
        setupButtons();
    }

    init();
});