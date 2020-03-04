import React, { useEffect, createContext, useState } from 'react';
import { db } from './firebase';
import { getAllGames, getAllListings, getAllUsers } from './client';

const AppState = createContext(null);
const { Provider } = AppState; 


const StateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [games, setGames] = useState([]);
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setData(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    getAllListings(setListings);
    getAllGames(setGames);
    getAllUsers(setUsers);
    
    return () => { db.off('value', handleData); };

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
          lender: {
            username: user.id.slice(0, -2),
            firstname: user.name.split(" ")[0],
            lastname: user.name.split(" ")[1],
            email: user.email,
          }
        }
      }
    ) : [];
  console.log(marketplaceListings);


  const api = { data, setMenuVisible, menuVisible, marketplaceListings };
  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };