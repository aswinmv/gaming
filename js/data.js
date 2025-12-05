// ========================================
// COOPLIX - GAME STORE DATA
// ========================================
// Production-ready mock data
// Replace with your own API when ready

// Sample game data - production quality
const MOCK_GAMES = [
    {
        id: 1,
        title: "Valorant",
        short_description: "A 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities.",
        thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/valorant",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Riot Games",
        developer: "Riot Games",
        release_date: "2020-06-02"
    },
    {
        id: 2,
        title: "League of Legends",
        short_description: "The 5v5 MOBA that started it all. Battle in the legendary Summoner's Rift.",
        thumbnail: "https://www.freetogame.com/g/5/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/league-of-legends",
        genre: "MOBA",
        platform: "PC (Windows)",
        publisher: "Riot Games",
        developer: "Riot Games",
        release_date: "2009-10-27"
    },
    {
        id: 3,
        title: "Fortnite",
        short_description: "Battle Royale game with building mechanics. Last player standing wins!",
        thumbnail: "https://www.freetogame.com/g/345/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/fortnite",
        genre: "Battle Royale",
        platform: "PC (Windows)",
        publisher: "Epic Games",
        developer: "Epic Games",
        release_date: "2017-07-25"
    },
    {
        id: 4,
        title: "Apex Legends",
        short_description: "Strategic battle royale featuring legendary characters with powerful abilities.",
        thumbnail: "https://www.freetogame.com/g/396/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/apex-legends",
        genre: "Battle Royale",
        platform: "PC (Windows)",
        publisher: "Electronic Arts",
        developer: "Respawn Entertainment",
        release_date: "2019-02-04"
    },
    {
        id: 5,
        title: "Genshin Impact",
        short_description: "Open-world action RPG with stunning visuals and elemental combat system.",
        thumbnail: "https://www.freetogame.com/g/475/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/genshin-impact",
        genre: "MMORPG",
        platform: "PC (Windows)",
        publisher: "miHoYo",
        developer: "miHoYo",
        release_date: "2020-09-28"
    },
    {
        id: 6,
        title: "Counter-Strike 2",
        short_description: "The legendary tactical FPS, rebuilt on Source 2 engine.",
        thumbnail: "https://www.freetogame.com/g/343/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/counter-strike-2",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Valve",
        developer: "Valve",
        release_date: "2023-09-27"
    },
    {
        id: 7,
        title: "Dota 2",
        short_description: "Complex MOBA with deep strategy and competitive esports scene.",
        thumbnail: "https://www.freetogame.com/g/362/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/dota-2",
        genre: "MOBA",
        platform: "PC (Windows)",
        publisher: "Valve",
        developer: "Valve",
        release_date: "2013-07-09"
    },
    {
        id: 8,
        title: "Rocket League",
        short_description: "Soccer meets racing in this high-octane physics-based game.",
        thumbnail: "https://www.freetogame.com/g/448/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/rocket-league",
        genre: "Sports",
        platform: "PC (Windows)",
        publisher: "Psyonix",
        developer: "Psyonix",
        release_date: "2015-07-07"
    },
    {
        id: 9,
        title: "Warframe",
        short_description: "Sci-fi cooperative action game with parkour movement and looter-shooter gameplay.",
        thumbnail: "https://www.freetogame.com/g/45/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/warframe",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Digital Extremes",
        developer: "Digital Extremes",
        release_date: "2013-03-25"
    },
    {
        id: 10,
        title: "Path of Exile",
        short_description: "Dark fantasy action RPG with deep character customization and itemization.",
        thumbnail: "https://www.freetogame.com/g/374/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/path-of-exile",
        genre: "MMORPG",
        platform: "PC (Windows)",
        publisher: "Grinding Gear Games",
        developer: "Grinding Gear Games",
        release_date: "2013-10-23"
    },
    {
        id: 11,
        title: "Team Fortress 2",
        short_description: "Classic team-based multiplayer FPS with unique character classes.",
        thumbnail: "https://www.freetogame.com/g/28/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/team-fortress-2",
        genre: "Shooter",
        platform: "PC (Windows)",
        publisher: "Valve",
        developer: "Valve",
        release_date: "2007-10-10"
    },
    {
        id: 12,
        title: "Hearthstone",
        short_description: "Strategic digital card game set in the Warcraft universe.",
        thumbnail: "https://www.freetogame.com/g/209/thumbnail.jpg",
        game_url: "https://www.freetogame.com/open/hearthstone",
        genre: "Card Game",
        platform: "PC (Windows)",
        publisher: "Blizzard Entertainment",
        developer: "Blizzard Entertainment",
        release_date: "2014-03-11"
    }
];

// Cache for API responses
const apiCache = {
    allGames: [...MOCK_GAMES],
    gameDetails: new Map()
};

/**
 * Get all games with optional filters
 */
async function getAllGames(filters = {}) {
    try {
        let games = [...MOCK_GAMES];

        // Apply category filter
        if (filters.category) {
            games = games.filter(game => game.genre.toLowerCase() === filters.category.toLowerCase());
        }

        // Apply platform filter
        if (filters.platform) {
            games = games.filter(game => game.platform.toLowerCase().includes(filters.platform.toLowerCase()));
        }

        // Apply sorting
        if (filters.sortBy === 'alphabetical') {
            games.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filters.sortBy === 'release-date') {
            games.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
        }

        // Apply search query
        games = applyClientSideFilters(games, filters);

        return games;
    } catch (error) {
        console.error('Error loading games:', error);
        return [];
    }
}

/**
 * Get a single game by ID
 */
async function getGameById(id) {
    try {
        const game = MOCK_GAMES.find(g => g.id === parseInt(id));
        if (game) {
            // Add mock screenshots and requirements
            return {
                ...game,
                description: game.short_description,
                screenshots: [
                    { image: game.thumbnail },
                    { image: game.thumbnail },
                    { image: game.thumbnail }
                ],
                minimum_system_requirements: {
                    os: "Windows 10 64-bit",
                    processor: "Intel Core i3-4340 / AMD FX-6300",
                    memory: "8 GB RAM",
                    graphics: "NVIDIA GeForce GTX 670 / AMD Radeon R9 270X",
                    storage: "50 GB available space"
                }
            };
        }
        return null;
    } catch (error) {
        console.error('Error loading game details:', error);
        return null;
    }
}

/**
 * Apply client-side filters
 */
function applyClientSideFilters(games, filters) {
    let filtered = [...games];

    if (filters.search) {
        const query = filters.search.toLowerCase();
        filtered = filtered.filter(game =>
            game.title.toLowerCase().includes(query) ||
            game.short_description?.toLowerCase().includes(query) ||
            game.genre?.toLowerCase().includes(query)
        );
    }

    return filtered;
}

/**
 * Get featured games
 */
async function getFeaturedGames() {
    const games = await getAllGames({ sortBy: 'release-date' });
    return games.slice(0, 3);
}

/**
 * Get new releases
 */
async function getNewReleases() {
    return getAllGames({ sortBy: 'release-date' });
}

/**
 * Get popular games
 */
async function getPopularGames() {
    return getAllGames({});
}

/**
 * Get special offers
 */
async function getSpecialOffers() {
    const games = await getAllGames({ sortBy: 'release-date' });
    return games.slice(0, 8);
}

/**
 * Helper functions
 */
function calculatePrice(game) {
    return "Free to Play";
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function getPlatformBadge(platform) {
    const badges = {
        'PC (Windows)': '💻 PC',
        'Web Browser': '🌐 Browser',
        'pc': '💻 PC',
        'browser': '🌐 Browser'
    };
    return badges[platform] || platform;
}

// Log that data is loaded
console.log('✅ Cooplix game data loaded successfully!', MOCK_GAMES.length, 'games available');
