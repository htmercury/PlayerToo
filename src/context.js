import React, { useEffect, createContext, useState } from 'react';
import { db } from './firebase';

const AppState = createContext(null);
const { Provider } = AppState; 

const StateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleData = snap => {
      if (snap.val()) setData(snap.val());
    }
    db.on('value', handleData, error => alert(error));
    return () => { db.off('value', handleData); };
  }, []);
  console.log(data)

  const api = { data, setMenuVisible, menuVisible };

  return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };