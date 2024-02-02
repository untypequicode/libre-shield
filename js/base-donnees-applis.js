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
        description: "Dites « Bonjour » à une expérience de messagerie différente." +
            "Un accent inattendu sur la confidentialité et la protection des données personnelles," +
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
        date: "2009-02-00",
        description: "Stockez vos fichiers et dossiers, partagez-les avec vos collaborateurs," +
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
        date: "2009-02-00",
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


function filterContent(selectedType) {
    // Cache tous les éléments initialement
    const sections = document.querySelectorAll('.app');
    sections.forEach(section => {
        section.style.display = 'none';
        // Retire toute classe "second-" précédemment ajoutée
        section.classList.remove(...Array.from(section.classList).filter(c => c.startsWith('second-')));
    });

    // Parcourt le tableau contenus pour trouver et afficher chaque élément principal suivi par ses associés
    contenus.filter(contenu => contenu.type === selectedType).forEach(contenu => {
        // Affiche l'élément principal
        const mainSection = document.getElementById(contenu.id);
        mainSection.style.display = '';

        // Affiche les éléments associés listés dans 'apps'
        contenu.apps.forEach(appId => {
            const appSection = document.getElementById(appId);
            if (appSection) {
                appSection.style.display = '';
                // Ajoute une classe "second-" pour styliser différemment les éléments associés
                appSection.classList.add('second-' + appSection.classList[0]);
            }
        });
    });

    // Met à jour la classe 'active' des boutons de filtrage
    document.querySelectorAll('.filter-option').forEach(button => {
        button.classList.remove('active');
        if(button.id === 'show-' + selectedType) {
            button.classList.add('active');
        }
    });
}







document.addEventListener('DOMContentLoaded', () => {
    // Tri des contenus du plus récent au plus vieux
    contenus.sort((a, b) => new Date(b.date) - new Date(a.date));

    contenus.forEach((contenu, index) => {
        // Ajoute une classe basée sur l'index pair ou impair
        const classeAlternee = index % 2 === 0 ? 'gauche' : 'droite';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, classeAlternee));
    });

    // Ajout des gestionnaires d'événements pour les boutons de filtrage
    document.getElementById('show-origine').addEventListener('click', () => filterContent('origine'));
    document.getElementById('show-alternative').addEventListener('click', () => filterContent('alternative'));
});

function genererTexte(contenu, classeAlternee) {
    let resume = `<section class="${contenu.classe} ${contenu.type}" id="${contenu.id}"><div class="${contenu.contenuClasse}">`;

    if(classeAlternee === 'gauche') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }
    resume += `<div class="${contenu.texteClasse}">`;
    resume += `<h1>${contenu.titre}</h1>`;
    resume += `<p>${contenu.description}</p>`;
    resume += `<div class="${contenu.liensClasse}">`;
    contenu.liens.forEach(lien => {
        resume += `<a class="${lien.classe}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
    });
    resume += `</div>`; // Ferme app-links
    resume += `</div>`; // Ferme app-text
    if(classeAlternee === 'droite') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }


    resume += `</div></section>`; // Ferme app-content et section
    return resume;
}