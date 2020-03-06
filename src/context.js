import React, { useEffect, createContext, useState } from 'react';
import { getAllGames, getAllListings, getAllUsers, getGameOptions } from './client';

const AppState = createContext(null);
const { Provider } = AppState; 


const StateProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  const [options, setOptions] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    getAllListings(setListings);
    getAllGames(setGames);
    getAllUsers(setUsers);
    getGameOptions(setOptions);
    //postListing();
  }, []);
  
  const marketplaceListings = 
    listings.length > 0 && users.length > 0 && games.length > 0 ? 
    listings.map(
      listing => {
        const user = users[users.findIndex(u => u.id === listing.lender_id)];
        const game = games[games.findIndex(g => g.id === listing.game_id)];
        return { 
          game: game.name, 
          description: game.description,
          images: Object.values(game.images),
          id: listing.id, 
          rating: Math.round(user.rating),
          tags: game.tags,
          minPlayers: game.min_players,
          maxPlayers: game.max_players,
          distance: user.distance, 
          borrowed: listing.borrowed,
          lender: {
            username: user.id.slice(0, -2),
            firstname: user.name.split(" ")[0],
            lastname: user.name.split(" ")[1],
            email: user.email,
          }
        }
      }
    ) : [];


  const myListings = 
    listings.length > 0 && users.length > 0 && games.length > 0 ? 
    listings.filter(
    listing => { return listing.lender_id=="Silva91_^" }) : [];
    console.log("this is mylistings for Silva91_^")
    console.log(myListings)

  console.log(marketplaceListings);

  const api = { setMenuVisible, menuVisible, marketplaceListings, myListings, games, options, users };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };