import games from './Data/board_games';

export const getAllGames = async (callback) => {
  const data = games;
  const values = Object.values(data);
  return callback(values);
};

export const getGameOptions = async (callback) => {
  const data = games;
  const values = Object.values(data);
  return callback(values.slice(0,250));
};

export const getAllListings = async (callback) => {
  const response = await fetch('https://playertoo-43706.firebaseapp.com/api/v1/listings/')
  const data = await response.json();
  const values = Object.values(data);
  console.log(data)
  return callback(values);
}

export const getAllUsers = async (callback) => {
  const response = await fetch('https://playertoo-43706.firebaseapp.com/api/v1/users/')
  const data = await response.json();
  const values = Object.values(data);
  console.log(data)
  return callback(values);
}