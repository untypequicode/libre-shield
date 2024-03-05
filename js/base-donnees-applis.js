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

        let maxNotation = 0;
        category.apps.forEach(app => {
            const appData = apps.find(appData => appData.id === app);
            if (appData.notation > maxNotation) {
                maxNotation = appData.notation;
            }
        });

        // Trier les applications par notation décroissante
        category.apps.sort((a, b) => {
            const appAData = apps.find(appData => appData.id === a);
            const appBData = apps.find(appData => appData.id === b);

            return appBData.notation - appAData.notation;
        });

        category.apps.forEach(app => {
            const appData = apps.find(appData => appData.id === app);

            let color = '';
            if (appData.notation / maxNotation > .8) {
                color = 'green';
            } else if (appData.notation / maxNotation > .6) {
                color = 'yellow';
            } else if (appData.notation / maxNotation > .4) {
                color = 'orange';
            } else if (appData.notation / maxNotation > .2) {
                color = 'red';
            } else {
                color = 'purple';
            }

            content += `
            <div class="app ${color}">
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
        document.querySelectorAll('.app-hidden, .app-content').forEach(element => element.remove());
    });
});