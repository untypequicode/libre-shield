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

    if(classeAlternee === 'droite') {
        resume += `<div class="${contenu.texteClasse}">`;
        resume += `<h1>${contenu.titre}</h1>`;
        resume += `<p>${contenu.description}</p>`;
        resume += `<div class="${contenu.liensClasse}">`;
        contenu.liens.forEach(lien => {
            resume += `<a class="${lien.classe}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
        });
        resume += `</div>`; // Ferme cine-links
        resume += `</div>`; // Ferme cine-text
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
    } else {
        resume += `<img src="${contenu.imageSrc}" alt="${contenu.imageAlt}">`;
        resume += `<div class="${contenu.texteClasse}">`;
        resume += `<h1>${contenu.titre}</h1>`;
        resume += `<p>${contenu.description}</p>`;
        resume += `<div class="${contenu.liensClasse}">`;
        contenu.liens.forEach(lien => {
            resume += `<a class="${lien.classe}" href="${lien.href}" target="${lien.target}">${lien.texte}</a>`;
        });
        resume += `</div>`; // Ferme cine-links
        resume += `</div>`; // Ferme cine-text
    }


    resume += `</div></section>`; // Ferme cine-content et section

    resume += '</div></section>';
    return resume;
}