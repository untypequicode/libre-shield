var switchmode = document.getElementById("switch-mode");

// Fonction pour détecter le mode de thème préféré de l'utilisateur
function detectPreferredTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark-mode");
        switchmode.src = "images/moon.svg";
    } else {
        document.body.classList.remove("dark-mode");
        switchmode.src = "images/sun.svg";
    }

    // Vérifie si le choix de l'utilisateur est stocké dans sessionStorage
    const userTheme = sessionStorage.getItem("theme");
    if (userTheme === "dark") {
        document.body.classList.add("dark-mode");
        switchmode.src = "images/moon.svg";
    } else if (userTheme === "light") {
        document.body.classList.remove("dark-mode");
        switchmode.src = "images/sun.svg";
    }
}

// Appel initial pour détecter le thème au chargement de la page
detectPreferredTheme();

// Gestionnaire de clic pour basculer entre les modes clair et sombre
switchmode.onclick = function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        switchmode.src = "images/moon.svg";
        sessionStorage.setItem("theme", "dark");
    } else {
        switchmode.src = "images/sun.svg";
        sessionStorage.setItem("theme", "light");
    }
};