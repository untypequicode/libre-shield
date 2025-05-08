function filterContent(type) {
    // Supprime tous les éléments avec la classe '.cine' pour nettoyer l'affichage précédent.
    document.querySelectorAll('.cine').forEach(element => element.remove());

    // Filtre le contenu par type (ou sélectionne tout si type="all") et le trie par date du plus récent au plus ancien.
    const contenu1 = db_cinema_series.filter(contenu => type === "all" || contenu.type === type)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Met à jour l'état actif des boutons de filtre basé sur le type sélectionné.
    document.querySelectorAll('.filter-option').forEach(button => {
        button.classList.toggle('active', type === "all" ? button.id === 'show-all' : button.id === 'show-' + type);
    });

    // Affiche le contenu filtré et trié dans le document, alternant la classe pour chaque élément.
    let i = 0;
    contenu1.forEach(contenu => {
        const styleSection = i % 2 === 0 ? '' : 's-bg-s';
        const styleBtn = i % 2 === 0 ? '' : 'second';
        const footer = document.querySelector('.footer');
        footer.insertAdjacentHTML('beforebegin', genererTexte(contenu, "", styleSection, styleBtn));

        i++;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    // Filtre initial pour afficher les éléments de type 'all'.
    filterContent('all');

    // Ajout des gestionnaires d'événements pour les boutons de filtrage
    document.getElementById('show-all').addEventListener('click', () => filterContent('all'));
    document.getElementById('show-film').addEventListener('click', () => filterContent('film'));
    document.getElementById('show-serie').addEventListener('click', () => filterContent('serie'));
    document.getElementById('show-youtube').addEventListener('click', () => filterContent('youtube'));
});
