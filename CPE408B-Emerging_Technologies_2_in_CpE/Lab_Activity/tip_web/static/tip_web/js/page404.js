console.log("404 page loaded successfully.");

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");

    // Animate the button on hover (optional)
    const btn = document.querySelector(".btn");
    if (btn) {
        btn.addEventListener("mouseenter", () => {
            btn.style.transform = "scale(1.05)";
            btn.style.boxShadow = "0 0 15px rgba(255, 215, 0, 0.8)";
        });

        btn.addEventListener("mouseleave", () => {
            btn.style.transform = "scale(1)";
            btn.style.boxShadow = "none";
        });
    }

    // Simple background animation effect
    const body = document.body;
    let hue = 0;
    setInterval(() => {
        hue = (hue + 1) % 360;
        body.style.background = `linear-gradient(135deg, hsl(${hue}, 40%, 5%), hsl(${(hue + 60) % 360}, 40%, 10%))`;
    }, 50);

    // Add a fade-in effect for content
    const content = document.querySelector(".content");
    if (content) {
        content.style.opacity = "0";
        content.style.transition = "opacity 1.5s ease";
        setTimeout(() => {
            content.style.opacity = "1";
        }, 200);
    }
});
