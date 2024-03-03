function genereContent() {
    document.querySelectorAll('.category').forEach(element => element.remove());

    
}

// Attente que le document soit entièrement chargé pour assurer que tous les éléments sont accessibles.
document.addEventListener('DOMContentLoaded', () => {
    genereContent();
});