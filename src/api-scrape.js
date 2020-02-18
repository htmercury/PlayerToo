import { scrapeApiKey } from './api-key';

const fetch = require("node-fetch");

const MAX_COUNT = 5000;
const PAGE_LIMIT = 100;

const scrapeData = async () => {
    const boardGames = {};
    for (let i = 0; i < MAX_COUNT; i += PAGE_LIMIT) {
        const response = await fetch(`https://www.boardgameatlas.com/api/search?pretty=true&client_id=${scrapeApiKey}&order_by=popularity&skip=${i}`);
        const data = await response.json();
        console.log(data.games.length, i);
    }
}

scrapeData();