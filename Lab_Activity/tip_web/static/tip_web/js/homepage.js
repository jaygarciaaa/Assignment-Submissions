document.addEventListener('DOMContentLoaded', () => {
    console.log('TIP homepage loaded');

    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', () => {
            logo.style.transform = 'scale(1.15) rotate(5deg)';
        });
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    }

    // Animate hero text letters one by one
    const heroTitle = document.querySelector('.hero-text h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        text.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.opacity = 0;
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `opacity 0.4s ${i * 0.05}s ease, transform 0.4s ${i * 0.05}s ease`;
            heroTitle.appendChild(span);
        });
        requestAnimationFrame(() => {
            heroTitle.querySelectorAll('span').forEach(span => {
                span.style.opacity = 1;
                span.style.transform = 'translateY(0)';
            });
        });
    }
});
