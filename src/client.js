import games from './Data/board_games';
import listings from './Data/listings';
import users from './Data/users';

export const getAllGames = async (callback) => {
  // const response = await fetch('./board_games.json');
  // const data = await response.json();
  // console.log(response)
  const data = games;
  const values = Object.values(data);
  return callback(values);
};

export const getGameOptions = async (callback) => {
  // const response = await fetch('./board_games.json');
  // const data = await response.json();
  // console.log(response)
  const data = games;
  const values = Object.values(data);
  return callback(values.slice(0,250));
};

export const getAllListings = async (callback) => {
  // const response = await fetch('./listings.json')
  // const data = await response.json();
  const data = listings;
  const values = Object.values(data);
  return callback(values);
}

export const getAllUsers = async (callback) => {
  // const response = await fetch('./users.json')
  // const data = await response.json();
  const data = users;
  const values = Object.values(data);
  return callback(values);
}