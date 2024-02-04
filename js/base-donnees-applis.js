const contenus = [
    {
        classe: "app",
        id: "whatsapp",
        contenuClasse: "app-content",
        imageSrc: "images/apps/whatsapp.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Whatsapp",
        type: "origine",
        date: "2009-02-00",
        description: "Simple, fiable, privé, messagerie et appels gratuits, disponible partout dans le monde.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.whatsapp.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "signal" ]
    },
    {
        classe: "app",
        id: "signal",
        contenuClasse: "app-content",
        imageSrc: "images/apps/signal.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Signal",
        type: "alternative",
        date: "2018-01-10",
        description: "Dites « Bonjour » à une expérience de messagerie différente. " +
            "Un accent inattendu sur la confidentialité et la protection des données personnelles, " +
            "combiné à toutes les fonctions auxquelles vous vous attendez.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.signal.org/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "whatsapp" ]
    },
    {
        classe: "app",
        id: "gdrive",
        contenuClasse: "app-content",
        imageSrc: "images/apps/google-drive.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Google Drive",
        type: "origine",
        date: "2012-05-24",
        description: "Stockez vos fichiers et dossiers, partagez-les avec vos collaborateurs, " +
            "et travaillez dessus depuis votre appareil mobile, tablette ou ordinateur",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.whatsapp.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "mega", "kdrive" ]
    },
    {
        classe: "app",
        id: "mega",
        contenuClasse: "app-content",
        imageSrc: "images/apps/mega.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "MEGA",
        type: "alternative",
        date: "2013-01-19",
        description: "La protection des données personnelles et la confidentialité " +
            "ne sont pas des options avec MEGA, c’est la norme. " +
            "Nous croyons en effet que tout le monde devrait pouvoir stocker des données et " +
            "communiquer en ligne en toute sécurité et confidentialité.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.whatsapp.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gdrive" ]
    },
    {
        classe: "app",
        id: "kdrive",
        contenuClasse: "app-content",
        imageSrc: "images/apps/kdrive.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "KDrive",
        type: "alternative",
        date: "2009-02-00",
        description: "Stockez, partagez et synchronisez vos données dans un cloud éthique.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.whatsapp.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gdrive" ]
    }
];

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
    contenu1.forEach(contenu => {
        const classeAlternee = i % 2 === 0 ? 'left' : 'right';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, "", classeAlternee));

        i++;

        contenu.apps.forEach(app => {
            const contenu2 = contenus.find(contenu => contenu.id === app);
            const classeAlternee = i % 2 === 0 ? 'left' : 'right';
            document.body.insertAdjacentHTML('beforeend', genererTexte(contenu2, "second-", classeAlternee));

            i++;
        });
    });
}



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
 * @param {Object} contenu - L'objet contenant les informations de l'élément à afficher.
 * @param {String} prefixeClasse - Préfixe à ajouter aux classes de l'élément pour une personnalisation CSS.
 * @param {String} classeAlternee - Détermine la position de l'image ('left' ou 'right') pour alterner l'affichage.
 * @return {String} Le HTML généré pour l'élément de contenu.
 */
function genererTexte(contenu, prefixeClasse, classeAlternee) {
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
