document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour mettre à jour la taille du SVG
    function updateSvgSize() {
        // Récupérer la taille de l'écran
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        // Modifier la valeur de la viewBox du SVG
        const svgElement = document.getElementById("visual");
        svgElement.setAttribute("viewBox", `0 0 ${screenWidth} ${screenHeight}`);
        svgElement.setAttribute("width", screenWidth);
        svgElement.setAttribute("height", screenHeight);

        // Modifier la valeur du transform du groupe <g> en fonction de la largeur et de la hauteur de l'écran
        const gElementLeft = svgElement.querySelector("g:nth-child(1)"); // Premier groupe
        gElementLeft.setAttribute("transform", `translate(${screenWidth}, 0)`);

        const gElementRight = svgElement.querySelector("g:nth-child(2)"); // Deuxième groupe
        gElementRight.setAttribute("transform", `translate(0, ${screenHeight})`);
    }

    // Appeler la fonction au chargement de la page
    updateSvgSize();

    // Ajouter un écouteur d'événement pour le redimensionnement de la fenêtre
    window.addEventListener("resize", updateSvgSize);
});
