import { scrapeApiKey } from './api-key';

const fetch = require('node-fetch');
const fs = require('fs');

const MAX_COUNT = 5000;
const PAGE_LIMIT = 100;

const scrapeData = async () => {
    const categories = {};

    const categoriesResponse = await fetch(
        `https://www.boardgameatlas.com/api/game/categories?pretty=true&client_id=${scrapeApiKey}`
    );
    const categoriesData = await categoriesResponse.json();
    categoriesData.categories.map(c => (categories[c.id] = c.name));

    const mechanics = {};

    const mechanicsResponse = await fetch(
        `https://www.boardgameatlas.com/api/game/mechanics?pretty=true&client_id=${scrapeApiKey}`
    );
    const mechanicsData = await mechanicsResponse.json();
    mechanicsData.mechanics.map(c => (mechanics[c.id] = c.name));

    console.log(mechanics);

    const boardGames = {};
    for (let i = 0; i < MAX_COUNT; i += PAGE_LIMIT) {
        const response = await fetch(
            `https://www.boardgameatlas.com/api/search?pretty=true&client_id=${scrapeApiKey}&limit=${PAGE_LIMIT}&order_by=popularity&skip=${i}`
        );
        const data = await response.json();
        console.log(data.games.length, i);

        data.games.map(
            g =>
                (boardGames[g.id] = {
                    id: g.id,
                    name: g.name,
                    year_published: g.year_published,
                    primary_publisher: g.primary_publisher,
                    max_players: g.max_players,
                    min_players: g.min_players,
                    images: g.images,
                    description: g.description,
                    tags: g.categories
                        .map(c => categories[c.id])
                        .concat(g.mechanics.map(m => mechanics[m.id])),
                    rating: g.average_user_rating,
                })
        );
    }

    // scraping is done, write to file
    fs.writeFile('../public/board_games.json', JSON.stringify(boardGames), function(err) {
        if (err) throw err;
        console.log('complete');
    });
};

scrapeData();
