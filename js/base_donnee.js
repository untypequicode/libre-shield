const contenus = [
    {
        classe: "cine",
        id: "dnedf",
        contenuClasse: "cine-content",
        imageSrc: "images/cinema-series/films/derriere-nos-ecrans-de-fumees-horizontal-0.jpg",
        imageAlt: "illustration",
        texteClasse: "cine-text",
        titre: "Derriere nos écrans de fumées",
        description: "À l'heure où les plateformes numériques deviennent essentielles pour rester en contact...",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.netflix.com/fr/title/81254224", target: "_blank", texte: "Voir sur Netflix" },
            { classe: "cine-link", href: "https://www.imdb.com/title/tt11464826/", target: "_blank", texte: "Voir sur IMDB" }
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
        description: "Mark Zuckerberg, étudiant à Harvard, crée le site de réseau social qui deviendra Facebook...",
        liensClasse: "cine-links",
        liens: [
            { classe: "cine-link", href: "https://www.netflix.com/fr/title/70132721", target: "_blank", texte: "Voir sur Netflix" },
            { classe: "cine-link", href: "https://www.imdb.com/title/tt1285016/", target: "_blank", texte: "Voir sur IMDB" }
        ]
    }
];


document.addEventListener('DOMContentLoaded', () => {
    contenus.forEach((contenu, index) => {
        // Ajoute une classe basée sur l'index pair ou impair
        const classeAlternée = index % 2 === 0 ? 'gauche' : 'droite';
        document.body.insertAdjacentHTML('beforeend', genererTexte(contenu, classeAlternée));
    });
});

function genererTexte(contenu, classeAlternée) {
    let resume = `<section class="${contenu.classe} ${classeAlternée}" id="${contenu.id}"><div class="${contenu.contenuClasse}">`;

    if(classeAlternée === 'droite') {
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

    return resume;
}



