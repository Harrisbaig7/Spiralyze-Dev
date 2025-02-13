document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;
    document.querySelectorAll(".input-container").forEach(container => {
        const input = container.querySelector("input, select");
        const tooltip = container.querySelector(".error-tooltip");

        if (!input.value.trim()) {
            tooltip.style.display = "block";
            isValid = false;
        } else {
            tooltip.style.display = "none";
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        this.reset();
    }
});

document.querySelectorAll("input, select").forEach(input => {
    input.addEventListener("input", function() {
        const tooltip = this.parentElement.querySelector(".error-tooltip");
        if (this.value.trim()) {
            tooltip.style.display = "none";
        }
    });
});