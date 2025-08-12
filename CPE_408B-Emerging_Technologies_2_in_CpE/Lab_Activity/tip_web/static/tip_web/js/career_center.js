document.addEventListener("DOMContentLoaded", () => {
    // Fade-in animation for header
    const header = document.querySelector(".career-header");
    header.style.opacity = 0;
    header.style.transform = "translateY(-30px)";
    setTimeout(() => {
        header.style.transition = "all 0.8s ease";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 200);

    // Animate intro section
    const intro = document.querySelector(".career-intro");
    const introChildren = intro.children;
    Array.from(introChildren).forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "all 0.6s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 600 + index * 300);
    });

    // Button hover pulse effect
    const tipButton = intro.querySelector("button");
    tipButton.addEventListener("mouseenter", () => {
        tipButton.classList.add("pulse");
    });
    tipButton.addEventListener("mouseleave", () => {
        tipButton.classList.remove("pulse");
    });

    // Optional: Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
