var switchmode = document.getElementById("switch-mode");

switchmode.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")) {
        switchmode.src = "images/moon.svg";
    }
    else {
        switchmode.src = "images/sun.svg";
    }
}