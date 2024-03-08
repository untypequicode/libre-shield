let selectedAppColor;

function getColor(notation) {
    if (notation / 10 > .8) {
        return 'green';
    } else if (notation / 10 > .6) {
        return 'yellow';
    }
    else if (notation / 10 > .4) {
        return 'orange';
    }
    else if (notation / 10 > .2) {
        return 'red';
    }
    else {
        return 'purple';
    }
}

function genereContent() {
    document.querySelectorAll('.category').forEach(element => element.remove());

    let i = 0;
    // Calculer le nombre d'applications pour chaque catégorie
    const nbAppsByCategory = categories.map(category => {
        return {
            ...category,
            nbApps: category.apps.length
        };
    });

    // Trier les catégories par nombre d'applications décroissant
    nbAppsByCategory.sort((a, b) => {
        return b.nbApps - a.nbApps;
    });

    // Générer le contenu HTML pour chaque catégorie triée
    nbAppsByCategory.forEach(category => {
        const second = i % 2 === 0 ? '' : ' second';
        let content = `
        <section class="category${second}">
            <div class="category-title" id="${category.id}">
                <h2>${category.name}</h2>
            </div>

            <div class="category-content">
        `;

        // Trier les applications par notation décroissante
        category.apps.sort((a, b) => {
            const appAData = apps.find(appData => appData.id === a);
            const appBData = apps.find(appData => appData.id === b);

            return appBData.notation - appAData.notation;
        });

        category.apps.forEach(app => {
            const appData = apps.find(appData => appData.id === app);

            content += `
            <div class="app ${getColor(appData.notation)}" id="${appData.id}">
                <img src="${appData.icon}" alt="${appData.name}">
                <h3>${appData.name}</h3>
            </div>
            `;
        });

        content += `</div>
        </section>`;
        document.body.insertAdjacentHTML('beforeend', content);
        i++;
    });
}

// Attente que le document soit entièrement chargé pour assurer que tous les éléments sont accessibles.
document.addEventListener('DOMContentLoaded', () => {
    genereContent();

    document.getElementById('app-hidden').addEventListener('click', () => {
        document.getElementById('app-hidden').classList.toggle('hidden');
        document.getElementById('app-content').classList.toggle('hidden');
    });
    
    document.querySelectorAll('.app').forEach(app => {
        app.addEventListener('click', (event) => {
            const appId = event.currentTarget.id;
    
            const appData = apps.find(appData => appData.id === appId);
    
            // Mettre à jour la variable selectedAppColor avec la couleur de l'application cliquée
            selectedAppColor = getColor(appData.notation);
    
            document.getElementById('app-hidden').classList.toggle('hidden');
            document.getElementById('app-content').classList.toggle('hidden');
    
            // Enlever toutes les classes de couleur de l'élément app-content
            document.getElementById('app-content').classList.remove('green', 'yellow', 'orange', 'red', 'purple');
    
            // Ajouter la classe correspondant à la couleur de l'application à l'élément app-content
            document.getElementById('app-content').classList.add(selectedAppColor);
        });
    });
});