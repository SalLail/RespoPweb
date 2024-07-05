document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('anime-list')) {
        loadAnimeList();
    }
    if (document.getElementById('home-anime-list')) {
        loadHomeAnimeList();
    }
    if (document.getElementById('favorites-list')) {
        loadFavorites();
    }
    updateVisitCount();
});

function loadHomeAnimeList() {
    fetch('php/get_anime.php')
        .then(response => response.json())
        .then(animeList => {
            const homeAnimeListElement = document.getElementById('home-anime-list');
            animeList.forEach(anime => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <img src="${anime.image}" alt="${anime.title}">
                    <h3>${anime.title}</h3>
                `;
                homeAnimeListElement.appendChild(div);
            });
        });
}

function loadAnimeList() {
    fetch('php/get_anime.php')
        .then(response => response.json())
        .then(animeList => {
            const animeListElement = document.getElementById('anime-list');
            animeList.forEach(anime => {
                const div = document.createElement('div');
                div.innerHTML = `
                    <img src="${anime.image}" alt="${anime.title}">
                    <h3>${anime.title}</h3>
                    <p>Genre: ${anime.genre}</p>
                    <p>Studio: ${anime.studio}</p>
                    <button onclick="addFavorite('${anime.title}')">Tambah ke Favorit</button>
                `;
                animeListElement.appendChild(div);
            });
        });
}

function addFavorite(animeTitle) {
    fetch('php/add_favorite.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `title=${animeTitle}`
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
        loadFavorites();
    });
}

function loadFavorites() {
    fetch('data/favorites.txt')
        .then(response => response.text())
        .then(favorites => {
            const favoritesListElement = document.getElementById('favorites-list');
            favoritesListElement.innerHTML = '';
            favorites.split('\n').forEach(favorite => {
                if (favorite.trim() !== '') {
                    const div = document.createElement('div');
                    div.textContent = favorite;
                    favoritesListElement.appendChild(div);
                }
            });
        });
}

function updateVisitCount() {
    fetch('php/hit_counter.php')
        .then(response => response.text())
        .then(count => {
            document.getElementById('visit-count').textContent = count;
        });
}
