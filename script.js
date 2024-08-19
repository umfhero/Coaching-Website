document.addEventListener("DOMContentLoaded", function () {
    const hoverElements = document.querySelectorAll(".hover-effect");

    hoverElements.forEach(element => {
        const overlay = document.createElement("div");
        overlay.classList.add("overlay-effect");
        element.style.position = 'relative';  // Ensure the parent element is positioned
        element.appendChild(overlay);

        element.addEventListener("mousemove", (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            overlay.style.setProperty('--x', `${x}px`);
            overlay.style.setProperty('--y', `${y}px`);
            overlay.style.setProperty('--opacity', '1');
        });

        element.addEventListener("mouseleave", () => {
            overlay.style.setProperty('--opacity', '0');
        });
    });
});
