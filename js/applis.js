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
        apps: [ "brave", "firefox" ],
        utilisateurs: 3000000000 // Nombre d'utilisateurs en millions
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
        apps: [ "chrome" ],
        utilisateurs: 250000000 // Nombre d'utilisateurs en millions
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
        apps: [ "chrome" ],
        utilisateurs: 25000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "gmail",
        contenuClasse: "app-content",
        imageSrc: "images/apps/gmail.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Gmail",
        type: "origine",
        date: "2004-04-01",
        description: "Gmail est un service de messagerie électronique intuitif, efficace et utile. " +
            "Il est accessible sur n'importe quel appareil.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://mail.google.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "protonmail", "infomaniak", "tutanota" ],
        utilisateurs: 1500000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "protonmail",
        contenuClasse: "app-content",
        imageSrc: "images/apps/proton-mail.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "ProtonMail",
        type: "alternative",
        date: "2014-05-16",
        description: "ProtonMail est le plus grand service de messagerie sécurisée au monde, " +
            "développé par des scientifiques du CERN et du MIT.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://protonmail.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gmail" ],
        utilisateurs: 5000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "infomaniak",
        contenuClasse: "app-content",
        imageSrc: "images/apps/infomaniak.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Infomaniak",
        type: "alternative",
        date: "1994-11-00",
        description: "Infomaniak est le leader suisse de l'hébergement web, " +
            "enregistrement de noms de domaine et solutions cloud.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.infomaniak.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gmail" ],
        utilisateurs: 500000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "tutanota",
        contenuClasse: "app-content",
        imageSrc: "images/apps/tutanota.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Tutanota",
        type: "alternative",
        date: "2011-07-01",
        description: "Tutanota est le service de messagerie électronique sécurisé, " +
            "qui vous permet d'envoyer des e-mails chiffrés à n'importe qui.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://tutanota.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "gmail" ],
        utilisateurs: 5000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "windows",
        contenuClasse: "app-content",
        imageSrc: "images/apps/windows.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Windows",
        type: "origine",
        date: "1985-11-20",
        description: "Windows 10 offre des fonctionnalités de pointe pour vous aider à être plus créatif et productif.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://www.microsoft.com/fr-fr/windows", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "popos", "ubuntu"],
        utilisateurs: 1000000000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "popos",
        contenuClasse: "app-content",
        imageSrc: "images/apps/pop-os.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Pop!_OS",
        type: "alternative",
        date: "2017-10-19",
        description: "Pop!_OS est un système d'exploitation basé sur Ubuntu, conçu pour la créativité " +
            "et la productivité, avec une interface utilisateur élégante et des fonctionnalités avancées.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://pop.system76.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "windows" ],
        utilisateurs: 500000 // Nombre d'utilisateurs
    },
    {
        classe: "app",
        id: "ubuntu",
        contenuClasse: "app-content",
        imageSrc: "images/apps/ubuntu.svg",
        imageAlt: "illustration",
        texteClasse: "app-text",
        titre: "Ubuntu",
        type: "alternative",
        date: "2004-10-20",
        description: "Ubuntu est un système d'exploitation open source, basé sur Linux, " +
            "pour les ordinateurs personnels, les serveurs et les appareils IoT.",
        liensClasse: "app-links",
        liens: [
            { classe: "app-link", href: "https://ubuntu.com/", target: "_blank", texte: "Site officiel" }
        ],
        apps: [ "windows" ],
        utilisateurs: 40000000 // Nombre d'utilisateurs
    }
];