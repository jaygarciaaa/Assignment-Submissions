document.addEventListener("DOMContentLoaded", () => {
    console.log("ARIS page loaded with black/white/yellow theme.");

    // Button click animation
    const arisBtn = document.querySelector(".btn");
    if (arisBtn) {
        arisBtn.addEventListener("click", () => {
            arisBtn.classList.add("clicked");
            setTimeout(() => arisBtn.classList.remove("clicked"), 300);
        });
    }

    // Smooth fade-in animation for content
    const introSection = document.querySelector(".intro");
    if (introSection) {
        introSection.style.opacity = 0;
        introSection.style.transition = "opacity 1s ease-in-out";
        setTimeout(() => {
            introSection.style.opacity = 1;
        }, 200);
    }
});
