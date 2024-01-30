function genererTexte(texteBrut) {
    const content = texteBrut.split(';');
    let resume = '';
    resume += `<section class="${content[0]}" id="${content[1]}">`;
    resume += `<div class="${content[2]}">`;
    resume += `<img src="${content[3]}" alt="${content[4]}">`;
    resume += `<div class="${content[5]}">`;
    resume += `<h1>${content[6]}</h1>`;
    resume += `<p>${content[7]}</p>`;
    resume += `<div class="${content[8]}">`;
    resume += `<a class="${content[9]}" href="${content[10]}" target="${content[11]}">${content[12]}</a>`;
    resume += `<a class="${content[13]}" href="${content[14]}" target="${content[15]}">${content[16]}</a>`;
    resume += '</div> </div> </div> </section>';
    return resume;
}

// Récupérer le corps du document
var corpsDuDocument = document.body;

// Création du texte brut
let texteBrute;


// Derriere nos écrans de fumées
texteBrute = `cine;
dnedf;
cine-content;
images/cinema-series/films/derriere-nos-ecrans-de-fumees-horizontal-0.jpg;
illustration;
cine-text;
Derriere nos écrans de fumées;
À l'heure où les plateformes numériques deviennent essentielles pour rester en contact, les experts révèlent comment elles sont en train de reprogrammer notre civilisation en montrant ce qui se cache derrière nos écrans.;
cine-links;
cine-link;
https://www.netflix.com/fr/title/81254224;
_blank;
Voir sur Netflix;
cine-link;
https://www.imdb.com/title/tt11464826/;
_blank;
Voir sur IMDB
`.trim();

// Création du nouveau texte
nouveauTexte = genererTexte(texteBrute);
// Utiliser insertAdjacentHTML pour ajouter le texte à la fin du corps
corpsDuDocument.insertAdjacentHTML('beforeend', nouveauTexte);


//The Great Hack
texteBrute = `cine;
tgh;
cine-content;
images/cinema-series/films/the-great-hack-horizontal-0.jpg;
illustration;
cine-text;
The Great Hack;
Le scandale de Cambridge Analytica est examiné à travers les rôles de plusieurs personnes affectées.;
cine-links;
cine-link;
https://www.netflix.com/fr/title/80117542;
_blank;
Voir sur Netflix;
cine-link;
https://www.imdb.com/title/tt9358204/;
_blank;
Voir sur IMDB
`.trim();

// Création du nouveau texte
nouveauTexte = genererTexte(texteBrute);
// Utiliser insertAdjacentHTML pour ajouter le texte à la fin du corps
corpsDuDocument.insertAdjacentHTML('beforeend', nouveauTexte);

// The social network
texteBrute = `cine;
tsn;
cine-content;
images/cinema-series/films/the-social-network-horizontal-0.jpg;
illustration;
cine-text;
The social network;
Mark Zuckerberg, étudiant à Harvard, crée le site de réseau social qui deviendra Facebook,
il se retrouve poursuivi en justice par deux frères qui l'accusent d'avoir volé leur idée
ainsi que par le co-fondateur de Facebook qui fut par la suite évincé de l'entreprise.;
cine-links;
cine-link;
https://www.netflix.com/fr/title/70132721;
_blank;
Voir sur Netflix;
cine-link;
https://www.imdb.com/title/tt1285016/;
_blank;
Voir sur IMDB
`.trim();

// Création du nouveau texte
nouveauTexte = genererTexte(texteBrute);
// Utiliser insertAdjacentHTML pour ajouter le texte à la fin du corps
corpsDuDocument.insertAdjacentHTML('beforeend', nouveauTexte);
