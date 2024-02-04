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

function filterContent(type) {
    document.querySelectorAll('.app').forEach(function(element) {
        element.remove();
    });

    const contenu1 = contenus.filter(contenu => contenu.type === type);

    // Tri de contenu1 par date du plus récent au plus ancien
    contenu1.sort((a, b) => new Date(b.date) - new Date(a.date));


    // Mise à jour des boutons actifs
    const buttons = document.querySelectorAll('.filter-option');
    buttons.forEach(button => {
        if(button.id === 'show-' + type) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    let i = 0;
    contenu1.forEach(contenu => {
        const classeAlternee = i % 2 === 0 ? 'gauche' : 'droite';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, "", classeAlternee));
        i++;
    });
}


document.addEventListener('DOMContentLoaded', () => {
    filterContent('alternative')
    document.getElementById('show-alternative').addEventListener('click', () => filterContent('alternative'));
    document.getElementById('show-origine').addEventListener('click', () => filterContent('origine'));
});


function genererTexte(contenu, prefixeClasse, classeAlternee) {
    let resume = `<section class="${prefixeClasse}${contenu.classe} ${classeAlternee} ${contenu.type}" id="${contenu.id}"><div class="${prefixeClasse}${contenu.contenuClasse}">`;

    if(classeAlternee === 'gauche') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }
    resume += `<div class="${prefixeClasse}${contenu.texteClasse}">`;
    resume += `<h1>${contenu.titre}</h1>`;
    resume += `<p>${contenu.description}</p>`;
    resume += `<div class="${prefixeClasse}${contenu.liensClasse}">`;
    contenu.liens.forEach(lien => {
        resume += `<a class="${prefixeClasse}${lien.classe}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
    });
    resume += `</div>`; // Ferme app-links
    resume += `</div>`; // Ferme app-text
    if(classeAlternee === 'droite') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }

    resume += `</div></section>`; // Ferme app-content et section
    return resume;
}