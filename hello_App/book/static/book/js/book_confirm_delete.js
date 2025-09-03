document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            if (!confirm("⚠️ Are you sure you want to delete this book?")) {
                e.preventDefault();
            }
        });
    }
});
