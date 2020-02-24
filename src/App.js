import React, { useContext } from 'react';
import HomePage from './Pages/Home/HomePage';
import ListingPage from './Pages/Listing/ListingPage';
import ConfirmationPage from './Pages/Confirm/ConfirmationPage';
import FireStoreUsersPage from './Pages/FireStoreExamples/FireStoreUsersPage';
import FireStoreGamesPage from './Pages/FireStoreExamples/FireStoreGamesPage';
import FireStoreListingsPage from './Pages/FireStoreExamples/FireStoreListingsPage';
import { AppState } from './context';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const appState = useContext(AppState);
  const { data } = appState;

  return (
    data.length !== 0 ? 
    <BrowserRouter>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/:id" render={() => <ListingPage /> } />
      <Route exact path="/confirm/:id" render={() => <ConfirmationPage />} />
      <Route exact path="/firestore/users" render={() => <FireStoreUsersPage /> } />
      <Route exact path="/firestore/games" render={() => <FireStoreGamesPage /> } />
      <Route exact path="/firestore/listings" render={() => <FireStoreListingsPage /> } />
    </BrowserRouter>
    : null
  );
}

export default App;
