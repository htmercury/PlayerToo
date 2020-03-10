import games from './Data/board_games';
import listings from './Data/listings';
import users from './Data/users';

export const getAllGames = async (callback) => {
  const data = games;
  const values = Object.values(data);
  return callback(values);
};

export const getGameOptions = async (callback) => {
  const data = games;
  const values = Object.values(data);
  console.log(values.slice(0,5));
  return callback(values.slice(0,250));
};

export const getAllListings = async (callback) => {
  // const response = await fetch('https://playertoo-43706.firebaseapp.com/api/v1/listings')
  // const data = await response.json();
  // const values = Object.values(data);
  
  // Lines above commented out for data usage restriction. Line below replaces with static data. 
  const values = Object.values(listings);

  return callback(values);
}

export const getAllUsers = async (callback) => {
  // const response = await fetch('https://playertoo-43706.firebaseapp.com/api/v1/users')
  // const data = await response.json();
  // const values = Object.values(data);

  // Lines above commented out for data usage restriction. Line below replaces with static data. 
  const values = Object.values(users);

  return callback(values);
}

export const postListing = async (body) => {
  // const response = await fetch('https://playertoo-43706.firebaseapp.com/api/v1/listings',
  //   {
  //     method: 'POST',
  //     body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  // )
  // const json = await response.json() 

  console.log("Listing will post when REST routes wired back up.")
};

export const deleteListing = async (id) => {
  // const response = await fetch(`https://playertoo-43706.firebaseapp.com/api/v1/listings/${id}`,
  //   {
  //     method: 'DELETE',
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  // );
  // const json = await response.json()

  console.log("Listing will delete when REST routes wired back up.")
}

export const modifyRequest = async (content, id) => {
  // const response = await fetch(`https://playertoo-43706.firebaseapp.com/api/v1/listings/${id}`,
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify(content),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   }
  // );
  // const json = await response.json()
  // console.log(json)
  // console.log('changed')
}