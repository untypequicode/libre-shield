/**
 * Génère le HTML pour un élément de contenu avec des classes spécifiques.
 *
 * @param {Object} contenu - L'objet contenant les informations de l'élément à afficher.
 * @param {String} prefixeClasse - Préfixe à ajouter aux classes de l'élément pour une personnalisation CSS.
 * @param {String} classeAlternee - Détermine la position de l'image ('left' ou 'right') pour alterner l'affichage.
 * @return {String} Le HTML généré pour l'élément de contenu.
 */
export function genererTexte(contenu, prefixeClasse, classeAlternee) {
    // Début de la construction du HTML avec les classes dynamiques et l'ID de l'élément
    let resume = `<section class="${prefixeClasse}${contenu.classe} ${contenu.type}" id="${contenu.id}"><div class="${prefixeClasse}${contenu.contenuClasse}">`;

    // Condition pour ajouter l'image à gauche si classeAlternee est 'left'
    if(classeAlternee === 'left') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }

    // Ajout du titre, de la description et des liens
    resume += `<div class="${prefixeClasse}${contenu.texteClasse}">`;
    resume += `<h1>${contenu.titre}</h1>`;
    resume += `<p>${contenu.description}</p>`;
    resume += `<div class="${prefixeClasse}${contenu.liensClasse}">`;
    contenu.liens.forEach(lien => {
        resume += `<a class="${prefixeClasse}${lien.classe}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
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
