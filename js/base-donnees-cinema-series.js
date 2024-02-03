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
    const sections = document.querySelectorAll('.cine');
    sections.forEach(section => {
        section.style.display = section.classList.contains(type) || type === 'all' ? '' : 'none';
    });

    const buttons = document.querySelectorAll('.filter-option');
    buttons.forEach(button => {
        if(button.id === 'show-' + type) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
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
    document.getElementById('show-all').addEventListener('click', () => filterContent('all'));
    document.getElementById('show-film').addEventListener('click', () => filterContent('film'));
    document.getElementById('show-serie').addEventListener('click', () => filterContent('serie'));
    document.getElementById('show-youtube').addEventListener('click', () => filterContent('youtube'));
});

function genererTexte(contenu, classeAlternee) {
    let resume = `<section class="${contenu.classe} ${classeAlternee} ${contenu.type}" id="${contenu.id}"><div class="${contenu.contenuClasse}">`;

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
    resume += `</div>`; // Ferme cine-links
    resume += `</div>`; // Ferme cine-text
    if(classeAlternee === 'droite') {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    }

    resume += `</div></section>`; // Ferme cine-content et section
    return resume;
}