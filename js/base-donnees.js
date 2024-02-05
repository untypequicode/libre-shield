// Attente que le document soit entièrement chargé pour assurer que tous les éléments sont accessibles.
document.addEventListener('DOMContentLoaded', () => {
    // Filtre initial pour afficher les éléments de type 'alternative'.
    filterContent('alternative');

    // Attache un gestionnaire d'événement au clic sur l'élément avec l'ID 'show-alternative'.
    // Cela déclenche la fonction filterContent pour afficher les éléments de type 'alternative'.
    document.getElementById('show-alternative').addEventListener('click', () => filterContent('alternative'));

    // Attache un gestionnaire d'événement au clic sur l'élément avec l'ID 'show-origine'.
    // Cela déclenche la fonction filterContent pour afficher les éléments de type 'origine'.
    document.getElementById('show-origine').addEventListener('click', () => filterContent('origine'));
});


/**
 * Génère le HTML pour un élément de contenu avec des classes spécifiques.
 *
 * Cette fonction construit un élément de contenu HTML en utilisant des informations
 * fournies dans l'objet `contenu`, tout en permettant une personnalisation poussée
 * grâce à des classes CSS dynamiques. Les classes sont déterminées par les paramètres
 * de la fonction, permettant une flexibilité dans la mise en forme et l'affichage.
 *
 * @param {Object} contenu - L'objet contenant les informations de l'élément à afficher.
 *     Les propriétés attendues incluent `classe`, `type`, `id`, `imageSrc`, `imageAlt`,
 *     `titre`, `description`, `liens`, etc.
 * @param {String} prefixeClasse - Préfixe à ajouter aux classes de l'élément pour une
 *     personnalisation CSS. Ce préfixe est appliqué devant chaque classe spécifique à l'élément.
 * @param {String} styleClasse - Classe supplémentaire pour appliquer un style spécifique
 *     à l'ensemble de l'élément. Peut être utilisé pour modifier l'apparence globale de
 *     l'élément de contenu, tel que sa couleur de fond, marges, etc.
 * @param {String} classeAlternee - Détermine la position de l'image ('left' ou 'right') pour
 *     alterner l'affichage des images dans une liste d'éléments. Permet de créer un effet
 *     visuel alterné dans la mise en page.
 * @return {String} Le HTML généré pour l'élément de contenu. Ce HTML peut être inséré
 *     directement dans le DOM via des méthodes telles que `innerHTML` ou `insertAdjacentHTML`.
 */
function genererTexte(contenu, prefixeClasse, styleClasse, classeAlternee) {
    // Début de la construction du HTML avec les classes dynamiques et l'ID de l'élément
    let resume = `<section class="${prefixeClasse}${contenu.classe} ${styleClasse} ${contenu.type}" id="${contenu.id}"><div class="${prefixeClasse}${contenu.contenuClasse}">`;

    // Condition pour ajouter l'image à gauche si classeAlternee est 'left'
    if(classeAlternee === 'left') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }

    // Ajout du titre, de la description et des liens
    resume += `<div class="${prefixeClasse}${contenu.texteClasse} ${styleClasse}">`;
    resume += `<h1>${contenu.titre}</h1>`;
    resume += `<p>${contenu.description}</p>`;
    resume += `<div class="${prefixeClasse}${contenu.liensClasse} ${styleClasse}">`;
    contenu.liens.forEach(lien => {
        resume += `<a class="${prefixeClasse}${lien.classe} ${styleClasse}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
    });
    resume += `</div></div>`; // Fermeture des divs de texte et de liens

    // Condition pour ajouter l'image à droite si classeAlternee est 'right'
    if(classeAlternee === 'right') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }

    // Fermeture des balises de contenu et de section, puis retour du HTML généré
    resume += `</div></section>`;
    return resume;
}
