/**
 * Filtre et affiche le contenu basé sur le type spécifié, en supprimant d'abord tout contenu précédent.
 * Ensuite, il trie le contenu filtré par date du plus récent au plus ancien et met à jour l'affichage.
 *
 * @param {String} type - Le type de contenu à filtrer ('origine' ou 'alternative').
 */
function filterContent(type) {
    // Supprime tous les éléments avec la classe '.app' pour nettoyer l'affichage précédent.
    document.querySelectorAll('.app, .second-app').forEach(element => element.remove());


    // Filtre le contenu par type et le trie par date du plus récent au plus ancien.
    const contenu1 = contenus.filter(contenu => contenu.type === type)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Met à jour l'état actif des boutons de filtre basé sur le type sélectionné.
    document.querySelectorAll('.filter-option').forEach(button => {
        button.classList.toggle('active', button.id === 'show-' + type);
    });

    // Affiche le contenu filtré et trié dans le document, alternant la classe pour chaque élément.
    let i = 0;
    let j = 0;
    contenu1.forEach(contenu => {
        const classeAlternee = i % 2 === 0 ? 'left' : 'right';
        const styleAlterne = j % 2 === 0 ? '' : 'second';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, "", styleAlterne, classeAlternee));

        i++;
        j++;

        contenu.apps.forEach(app => {
            const contenu2 = contenus.find(contenu => contenu.id === app);
            const classeAlternee = i % 2 === 0 ? 'left' : 'right';
            document.body.insertAdjacentHTML('beforeend', genererTexte(contenu2, "second-", styleAlterne, classeAlternee));

            i++;
        });
    });
}