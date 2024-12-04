
function checkPassword() {
    const passwordInput = document.getElementById("password").value;
    const correctPassword = "natale2024";

    if (passwordInput === correctPassword) {
        document.getElementById("download-section").style.display = "block";
    } else {
        alert("Password errata. Riprova!");
    }
}
