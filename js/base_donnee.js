function genererTexte(texteBrut) {
    const lignes = texteBrut.split('\n');
    let resume = '';
    let content = texteBrut.split(';');
    resume += `<section class="${content[0]}" id="${content[1]}"></section>`;
    resume += `<div class="${content[2]}">`;
    resume += `<img src="${content[3]}" alt="${content[4]}">`;
    resume += `<div class="${content[5]}">`;
    resume += `<h1>${content[6]}</h1>`;
    resume += `<p>${content[7]}</p>`;
    resume += `<div class="${content[8]}">`;
    resume += `<a class="${content[9]}" href="${content[10]}" target="${content[11]}">${content[12]}</a>`;
    resume += `a class="${content[13]}" href="${content[14]}" target="${content[15]}">${content[16]}</a>`;
    resume += '</div> </div> </div> </section>';

    return resume;
}

// Création du texte brute
let texteBrute = ""
// Récupérer le corps du document
var corpsDuDocument = document.body;

// Derriere nos écrans de fumées
texteBrut = `cine
dnedf
cine-content
images/cinema-series/films/derriere-nos-ecrans-de-fumees-horizontal-0.jpg
illustration
cine-text
Derriere nos écrans de fumées
À l'heure où les plateformes numériques deviennent essentielles pour rester en contact, 
les experts révèlent comment elles sont en train de reprogrammer notre civilisation en montrant ce qui se cache derrière nos écrans.
cine-links
cine-link
https://www.netflix.com/fr/title/81254224
_blank
Voir sur Netflix
cine-link
https://www.imdb.com/title/tt11464826/
_blank
Voir sur IMDB
`

nouveauTexte = genererTexte(texteBrute);

// Utiliser insertAdjacentHTML pour ajouter le texte à la fin du corps
corpsDuDocument.insertAdjacentHTML('beforeend', nouveauTexte);