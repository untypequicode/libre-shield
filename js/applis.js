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
        apps: [ "signal" ],
        utilisateurs: 2000000000 // Nombre d'utilisateurs en millions
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
        apps: [ "whatsapp" ],
        utilisateurs: 4000000 // Nombre d'utilisateurs
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
            { classe: "app-link", href: "https://www.google.com/intl/fr/drive/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "mega", "kdrive" ],
        utilisateurs: 1000000000 // Nombre d'utilisateurs en millions
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
            { classe: "app-link", href: "https://mega.io/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gdrive" ],
        utilisateurs: 250000000 // Nombre d'utilisateurs en millions
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
            { classe: "app-link", href: "https://www.infomaniak.com/fr/kdrive", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gdrive" ],
        utilisateurs: 0 // Nombre d'utilisateurs (inconnu)
    },
    {
        classe: "app",
        id: "chrome",
        contenuClasse: "app-content",
        imageSrc: "images/apps/chrome.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Google Chrome",
        type: "origine",
        date: "2008-09-02",
        description: "Un navigateur rapide, sécurisé et gratuit, conçu pour le Web d'aujourd'hui.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.google.com/intl/fr/chrome/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "brave", "firefox" ]
    },
    {
        classe: "app",
        id: "firefox",
        contenuClasse: "app-content",
        imageSrc: "images/apps/firefox.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Mozilla Firefox",
        type: "alternative",
        date: "2002-09-23",
        description: "Le navigateur web libre et gratuit, conçu pour vous offrir une expérience de navigation plus rapide, plus sûre et plus personnalisée.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.mozilla.org/fr/firefox/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "chrome" ]
    },
    {
        classe: "app",
        id: "brave",
        contenuClasse: "app-content",
        imageSrc: "images/apps/brave.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Brave",
        type: "alternative",
        date: "2016-01-20",
        description: "Naviguez plus rapidement et en toute sécurité avec un navigateur qui respecte votre vie privée.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://brave.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "chrome" ]
    },
    {
        classe: "app",
        id: "photoshop",
        contenuClasse: "app-content",
        imageSrc: "images/apps/photoshop.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Adobe Photoshop",
        type: "origine",
        date: "1988-02-19",
        description: "Le logiciel de retouche photo le plus avancé au monde.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.adobe.com/fr/products/photoshop.html", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gimp" ],
        utilisateurs: 10000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "gimp",
        contenuClasse: "app-content",
        imageSrc: "images/apps/gimp.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "GIMP",
        type: "alternative",
        date: "1995-11-21",
        description: "GIMP est un programme de création graphique et de retouche photo très puissant. " +
            "Il comporte l'ensemble des outils nécessaires à la création de dessins ainsi qu'à la retouche d'images.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.gimp.org/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "photoshop" ],
        utilisateurs: 1000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "vscode",
        contenuClasse: "app-content",
        imageSrc: "images/apps/vscode.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Visual Studio Code",
        type: "origine",
        date: "2015-04-29",
        description: "Visual Studio Code est un éditeur de code source léger mais puissant qui s'exécute sur votre bureau et est disponible pour Windows, macOS et Linux.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://code.visualstudio.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "vscodium" ],
        utilisateurs: 15000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "vscodium",
        contenuClasse: "app-content",
        imageSrc: "images/apps/vscodium.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "VSCodium",
        type: "alternative",
        date: "2019-04-18",
        description: "VSCodium est un fork de Visual Studio Code qui respecte la vie privée des utilisateurs.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://vscodium.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "vscode" ],
        utilisateurs: 1000000 // Nombre d'utilisateurs
    }
];