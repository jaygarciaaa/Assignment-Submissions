document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", () => {
            row.classList.toggle("highlight");
        });
    });
});
