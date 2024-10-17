document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    form.addEventListener("submit", function(event) {
        let valid = true;

        // Basic username validation (length check)
        if (usernameInput.value.trim().length < 4) {
            alert("Username must be at least 4 characters long.");
            valid = false;
        }

        // Password validation (already has pattern in HTML)
        if (!passwordInput.checkValidity()) {
            alert(passwordInput.title);
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
