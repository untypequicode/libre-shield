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
    }
];