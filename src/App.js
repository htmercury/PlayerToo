import React, { useContext } from 'react';
import HomePage from './Pages/Home/HomePage';
import ListingPage from './Pages/Listing/ListingPage';
import FireStoreExamplesPage from './Pages/FireStoreExamples/FireStoreExamplesPage';
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
      <Route exact path="/firestore/examples" render={() => <FireStoreExamplesPage /> } />
    </BrowserRouter>
    : null
  );
}

export default App;
