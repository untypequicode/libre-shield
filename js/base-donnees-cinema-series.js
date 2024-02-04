const contenus = [
    {
        classe: "cine",
        id: "dnedf",
        contenuClasse: "cine-content",
        imageSrc: "images/cinema-series/films/derriere-nos-ecrans-de-fumees-horizontal-0.jpg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "Derriere nos écrans de fumées",
        type: "film",
        date: "2020-09-09",
        description: "À l'heure où les plateformes numériques deviennent essentielles pour rester en contact," +
            "les experts révèlent comment elles sont en train de reprogrammer notre civilisation en montrant ce qui se cache derrière nos écrans.",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.netflix.com/fr/title/81254224", target: "_blank", texte: "Voir sur Netflix" },
            { classe: "cine-link", href: "https://www.imdb.com/title/tt11464826/", target: "_blank", texte: "Voir sur IMDB" }
        ]
    },
    {
        classe: "cine",
        id: "s",
        contenuClasse: "cine-content",
        imageSrc: "images/cinema-series/series/stalk-horizontal-0.jpg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "Stalk",
        type: "serie",
        date: "2020-03-13",
        description: "Quand il entre dans une école d'ingénieurs de haut niveau, Lucas alias Lux," +
            "un geek surdoué de 18 ans, est humilié par les autres étudiants." +
            "Il décide de se venger à l'aide de sa plus grande arme: son don pour le cyber-harcèlement.",
        liensClasse: "cine-links",
        liens: [
            {
                classe: "cine-link",
                href: "https://www.france.tv/slash/stalk/",
                target: "_blank",
                texte: "Voir sur France.tv"
            },
            {
                classe: "cine-link",
                href: "https://www.imdb.com/title/tt10133370/",
                target: "_blank",
                texte: "Voir sur IMDB"
            }
        ]
    },
    {
        classe: "cine",
        id: "tgh",
        contenuClasse: "cine-content",
        imageSrc: "images/cinema-series/films/the-great-hack-horizontal-0.jpg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "The Great Hack",
        type: "film",
        date: "2019-07-24",
        description: "Le scandale de Cambridge Analytica est examiné à travers les rôles de plusieurs personnes affectées.",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.netflix.com/fr/title/80117542", target: "_blank", texte: "Voir sur Netflix" },
            { classe: "cine-link", href: "https://www.imdb.com/title/tt9358204/", target: "_blank", texte: "Voir sur IMDB" }
        ]
    },
    {
        classe: "cine",
        id: "tsn",
        contenuClasse: "cine-content",
        imageSrc: "images/cinema-series/films/the-social-network-horizontal-0.jpg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "The Social Network",
        type: "film",
        date: "2010-10-01",
        description: "Mark Zuckerberg, étudiant à Harvard, crée le site de réseau social qui deviendra Facebook," +
            "mais il se retrouve poursuivi en justice par deux frères qui l'accusent d'avoir volé leur idée ainsi que par le co-fondateur de Facebook qui fut par la suite évincé de l'entreprise.",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.netflix.com/fr/title/70132721", target: "_blank", texte: "Voir sur Netflix" },
            { classe: "cine-link", href: "https://www.imdb.com/title/tt1285016/", target: "_blank", texte: "Voir sur IMDB" }
        ]
    },
    {
        classe: "cine",
        id: "t",
        contenuClasse: "cine-content",
        imageSrc: "https://www.techlore.tech/assets/henry.jpeg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "Techlore",
        type: "youtube",
        date: "2012-02-13",
        description: "Techlore - diffuser la confidentialité et la sécurité auprès du grand public." +
            "Nous gérons plusieurs projets, communautés et contenus pour prouver que la confidentialité et la sécurité ne sont pas seulement réalisables, mais aussi simples et accessibles.",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.youtube.com/techlore", target: "_blank", texte: "Voir sur Youtube" },
            { classe: "cine-link", href: "https://www.techlore.tech/", target: "_blank", texte: "Voir sur le site" }
        ]
    },
    {
        classe: "cine",
        id: "tle",
        contenuClasse: "cine-content",
        imageSrc: "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2341552/4b18c8eb0c5743768ebceb3d334aa2a0/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/3.jpg?token-time=1707955200&token-hash=ijHPYyD8do15IhxjoV9K3IsV0uOo6tDial0zeGvPxew%3D",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "The Linux Experiment",
        type: "youtube",
        date: "2018-02-21",
        description: "Rendre Linux accessible : sans jargon technique, sans contenu ultra-technique." +
            "Juste des actualités sur le bureau Linux, des tutoriels simples, des zooms sur des applications, et des articles d'opinion essayant de rester positifs, sans exclusion.",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.youtube.com/@TheLinuxEXP", target: "_blank", texte: "Voir sur Youtube" },
            { classe: "cine-link", href: "https://www.patreon.com/thelinuxexperiment", target: "_blank", texte: "Voir sur Patreon" }
        ]
    }
];


function filterContent(type) {
    // Supprime tous les éléments avec la classe '.cine' pour nettoyer l'affichage précédent.
    document.querySelectorAll('.cine').forEach(element => element.remove());

    // Filtre le contenu par type (ou sélectionne tout si type="all") et le trie par date du plus récent au plus ancien.
    const contenu1 = contenus.filter(contenu => type === "all" || contenu.type === type)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    // Met à jour l'état actif des boutons de filtre basé sur le type sélectionné.
    document.querySelectorAll('.filter-option').forEach(button => {
        button.classList.toggle('active', type === "all" ? button.id === 'show-all' : button.id === 'show-' + type);
    });

    // Affiche le contenu filtré et trié dans le document, alternant la classe pour chaque élément.
    let i = 0;
    contenu1.forEach(contenu => {
        const classeAlternee = i % 2 === 0 ? 'left' : 'right';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, "", classeAlternee));

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