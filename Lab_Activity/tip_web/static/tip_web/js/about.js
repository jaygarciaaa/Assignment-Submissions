document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    const headerTitle = document.querySelector(".header h1");
    const sections = document.querySelectorAll(".content section");

    // Animate logo
    setTimeout(() => {
        logo.classList.add("animate");
    }, 100);

    // Animate header title
    setTimeout(() => {
        headerTitle.classList.add("animate");
    }, 500);

    // Intersection Observer for scrolling animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
