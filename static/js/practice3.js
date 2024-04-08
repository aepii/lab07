document.getElementById("verifyBtn").addEventListener("click", function() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1.length < 8 || password2.length < 8) {
        alert("Password should be at least eight characters long.");
    } else if (password1 !== password2) {
        alert("Passwords do not match. Please try again.");
    } else {
        alert("Passwords matched!");
    }
});
