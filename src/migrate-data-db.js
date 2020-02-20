import { fireDb } from './firebase';
import * as data from '../public/board_games.json';

const games = Object.values(data);

console.log(games.length);

let count = 1;

const uploadGames = async () => {
    for (let boardGame of games) {
        if (boardGame.id !== undefined) {
            await fireDb
                .collection('BoardGames')
                .doc(boardGame.id)
                .set(boardGame);
            console.log('Entered new data into the collection ' + count);
            
            count++;
        }
    }
};

console.log('migration complete');

uploadGames();
