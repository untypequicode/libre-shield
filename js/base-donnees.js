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
 * @param {String} styleSection - Classe supplémentaire pour appliquer un style spécifique
 *     à l'ensemble de l'élément. Peut être utilisé pour modifier l'apparence globale de
 *     l'élément de contenu, tel que sa couleur de fond, marges, etc.
 * @param {String} styleBtn - Classe supplémentaire pour appliquer un style spécifique aux
 *     boutons de lien. Peut être utilisé pour modifier l'apparence des boutons de lien
 *     dans l'élément de contenu, tels que la couleur du texte, la taille, etc.
 * @return {String} Le HTML généré pour l'élément de contenu. Ce HTML peut être inséré
 *     directement dans le DOM via des méthodes telles que `innerHTML` ou `insertAdjacentHTML`.
 */
function genererTexte(contenu, prefixeClasse, styleSection, styleBtn) {
    // Début de la construction du HTML avec les classes dynamiques et l'ID de l'élément
    let resume = `<section class="${prefixeClasse}${contenu.classe} ${styleSection} ${contenu.type}" id="${contenu.id}"><div class="${prefixeClasse}${contenu.contenuClasse}">`;

        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}" class="section-img">`;

    // Ajout du titre, de la description et des liens
    resume += `<div class="${prefixeClasse}${contenu.texteClasse}">`;
    resume += `<h1>${contenu.titre}</h1>`;
    resume += `<p>${contenu.description}</p>`;
    resume += `<div class="${prefixeClasse}${contenu.liensClasse}">`;
    contenu.liens.forEach(lien => {
        resume += `<a class="btn-c ${prefixeClasse}${lien.classe} ${styleBtn}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
    });
    resume += `</div></div>`; // Fermeture des divs de texte et de liens

    // Fermeture des balises de contenu et de section, puis retour du HTML généré
    resume += `</div></section>`;
    return resume;
}
