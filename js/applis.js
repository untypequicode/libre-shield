const categories = [
    {
        id: "navigateur",
        name: "Navigateur",
        apps: [ "chrome", "firefox", "brave", "edge" ]
    },
    {
        id: "messagerie-instantanee",
        name: "Messagerie instantanée",
        apps: [ "whatsapp", "telegram", "signal" ]
    },
    {
        id: "stockage-fichiers",
        name: "Stockage de fichiers",
        apps: [ "gdrive", "mega", "kdrive" ]
    },
    {
        id: "messagerie-electronique",
        name: "Messagerie électronique",
        apps: [ "gmail", "protonmail", "infomaniak", "tutanota" ]
    },
    {
        id: "systeme-exploitation",
        name: "Système d'exploitation",
        apps: [ "windows", "popos", "ubuntu" ]
    },
    {
        id: "retouche-images",
        name: "Retouche d'images",
        apps: [ "photoshop", "gimp" ]
    },
    {
        id: "editeur-code",
        name: "Éditeur de code source",
        apps: [ "vscode", "vscodium" ]
    }
]

const apps = [
    {
        id: "chrome",
        name: "Google Chrome",
        icon: "images/apps/chrome.svg",
        description: "Navigateur web développé par Google.",
        liens: [
            { name: "Site officiel", url: "https://www.google.com/chrome/" }
        ],
        notation: 1,
        features: [
            
        ]
    },
    {
        id: "firefox",
        name: "Mozilla Firefox",
        icon: "images/apps/firefox.svg",
        description: "Navigateur web développé par la fondation Mozilla.",
        liens: [
            { name: "Site officiel", url: "https://www.mozilla.org/fr/firefox/new/" }
        ],
        notation: 9,
        features: [

        ]
    },
    {
        id: "brave",
        name: "Brave",
        icon: "images/apps/brave.svg",
        description: "Navigateur web open-source basé sur Chromium.",
        liens: [
            { name: "Site officiel", url: "https://brave.com/" }
        ],
        notation: 8,
        features: [
            { name: "positive", content: "+ Bloqueur de publicités et de traqueurs intégré"},
            { name: "negative", content: "- Basé sur Chromium"}
        ]
    },
    {
        id: "edge",
        name: "Microsoft Edge",
        icon: "images/apps/edge.svg",
        description: "Navigateur web développé par Microsoft.",
        liens: [
            { name: "Site officiel", url: "https://www.microsoft.com/fr-fr/edge" }
        ],
        notation: 1,
        features: [

        ]
    },
    {
        id: "whatsapp",
        name: "WhatsApp",
        icon: "images/apps/whatsapp.svg",
        description: "Application de messagerie instantanée.",
        liens: [
            { name: "Site officiel", url: "https://www.whatsapp.com/" }
        ],
        notation: 3,
        features: [

        ]
    },
    {
        id: "telegram",
        name: "Telegram",
        icon: "images/apps/telegram.svg",
        description: "Application de messagerie instantanée.",
        liens: [
            { name: "Site officiel", url: "https://telegram.org/" }
        ],
        notation: 8,
        features: [

        ]
    },
    {
        id: "signal",
        name: "Signal",
        icon: "images/apps/signal.svg",
        description: "Application de messagerie instantanée.",
        liens: [
            { name: "Site officiel", url: "https://signal.org/" }
        ],
        notation: 9,
        features: [

        ]
    },
    {
        id: "gdrive",
        name: "Google Drive",
        icon: "images/apps/google-drive.svg",
        description: "Service de stockage et de partage de fichiers.",
        liens: [
            { name: "Site officiel", url: "https://www.google.com/drive/" }
        ],
        notation: 1,
        features: [

        ]
    },
    {
        id: "mega",
        name: "Mega",
        icon: "images/apps/mega.svg",
        description: "Service de stockage et de partage de fichiers.",
        liens: [
            { name: "Site officiel", url: "https://mega.nz/" }
        ],
        notation: 9,
        features: [

        ]
    },
    {
        id: "kdrive",
        name: "KDrive",
        icon: "images/apps/kdrive.svg",
        description: "Service de stockage et de partage de fichiers.",
        liens: [
            { name: "Site officiel", url: "https://www.infomaniak.com/fr/kdrive" }
        ],
        notation: 7,
        features: [

        ]
    },
    {
        id: "gmail",
        name: "Gmail",
        icon: "images/apps/gmail.svg",
        description: "Service de messagerie électronique.",
        liens: [
            { name: "Site officiel", url: "https://mail.google.com/" }
        ],
        notation: 1,
        features: [

        ]
    },
    {
        id: "protonmail",
        name: "ProtonMail",
        icon: "images/apps/proton-mail.svg",
        description: "Service de messagerie électronique.",
        liens: [
            { name: "Site officiel", url: "https://protonmail.com/" }
        ],
        notation: 9,
        features: [

        ]
    },
    {
        id: "infomaniak",
        name: "Infomaniak",
        icon: "images/apps/infomaniak.svg",
        description: "Service de messagerie électronique.",
        liens: [
            { name: "Site officiel", url: "https://www.infomaniak.com/fr/mail" }
        ],
        notation: 4,
        features: [

        ]
    },
    {
        id: "tutanota",
        name: "Tutanota",
        icon: "images/apps/tutanota.svg",
        description: "Service de messagerie électronique.",
        liens: [
            { name: "Site officiel", url: "https://tutanota.com/" }
        ],
        notation: 8,
        features: [
        
        ]
    },
    {
        id: "windows",
        name: "Windows",
        icon: "images/apps/windows.svg",
        description: "Système d'exploitation.",
        liens: [
            { name: "Site officiel", url: "https://www.microsoft.com/fr-fr/windows" }
        ],
        notation: 1,
        features: [

        ]
    },
    {
        id: "popos",
        name: "Pop!_OS",
        icon: "images/apps/pop-os.svg",
        description: "Système d'exploitation.",
        liens: [
            { name: "Site officiel", url: "https://pop.system76.com/" }
        ],
        notation: 8,
        features: [

        ]
    },
    {
        id: "ubuntu",
        name: "Ubuntu",
        icon: "images/apps/ubuntu.svg",
        description: "Système d'exploitation.",
        liens: [
            { name: "Site officiel", url: "https://ubuntu.com/" }
        ],
        notation: 8,
        features: [

        ]
    },
    {
        id: "photoshop",
        name: "Adobe Photoshop",
        icon: "images/apps/photoshop.svg",
        description: "Logiciel de retouche d'images.",
        liens: [
            { name: "Site officiel", url: "https://www.adobe.com/fr/products/photoshop.html" }
        ],
        notation: 2,
        features: [

        ]
    },
    {
        id: "gimp",
        name: "GIMP",
        icon: "images/apps/gimp.svg",
        description: "Logiciel de retouche d'images.",
        liens: [
            { name: "Site officiel", url: "https://www.gimp.org/" }
        ],
        notation: 7,
        features: [

        ]
    },
    {
        id: "vscode",
        name: "Visual Studio Code",
        icon: "images/apps/vscode.svg",
        description: "Éditeur de code source.",
        liens: [
            { name: "Site officiel", url: "https://code.visualstudio.com/" }
        ],
        notation: 3,
        features: [

        ]
    },
    {
        id: "vscodium",
        name: "VSCodium",
        icon: "images/apps/vscodium.svg",
        description: "Éditeur de code source.",
        liens: [
            { name: "Site officiel", url: "https://vscodium.com/" }
        ],
        notation: 9,
        features: [

        ]
    }
]