function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerText = "☀️ Tema Claro";
    } else {
        button.innerText = "🌙 Tema Escuro";
    }
}