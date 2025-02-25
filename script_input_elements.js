function validateAndStore() {
    const telInput = document.getElementById("telInput");
    const message = document.getElementById("message");
    const pattern = /^[0-9]{2}-[0-9]{9}$/; // Regex pattern for validation

    if (pattern.test(telInput.value)) {
        localStorage.setItem("storedTel", telInput.value); // Store in localStorage
        message.style.color = "green";
        message.textContent = "Valid number! Stored successfully.";
    } else {
        message.style.color = "red";
        message.textContent = "Invalid format! Please use XX-XXXXXXXXX.";
    }
}