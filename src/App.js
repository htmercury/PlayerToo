import React, { useContext } from 'react';
import HomePage from './Pages/Home/HomePage';
import EachListing from './Pages/AddListing/EachListing';
import HomePageLender from './Pages/Lender/HomePageLender';
import ListingPage from './Pages/Listing/ListingPage';
import ConfirmationPage from './Pages/Confirm/ConfirmationPage';
import FireStoreUsersPage from './Pages/FireStoreExamples/FireStoreUsersPage';
import FireStoreGamesPage from './Pages/FireStoreExamples/FireStoreGamesPage';
import FireStoreListingsPage from './Pages/FireStoreExamples/FireStoreListingsPage';
import AddListing from './Pages/AddListing/AddListing';
import EachLenderListing from './Pages/Lender/EachLenderListing'
import { AppState } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import SideMenuWrapper from './Components/SideMenu';
import { Loader, Container } from 'semantic-ui-react';
import Request from './Pages/Requests/Requests';

function App() {
  const appState = useContext(AppState);
  const { marketplaceListings, users } = appState;
  

  const withHeader = (page) => {
    return (
      <SideMenuWrapper
        content={page}
        user={users[0]}
      />
    );
  };

  return (
    marketplaceListings.length !== 0 ? 
    <BrowserRouter>
      <Route exact path="/" render={() => withHeader(<HomePage />)} />
      <Route exact path="/:id" render={() => withHeader(<ListingPage />) } />
      <Route path="/confirm/:id" render={() => withHeader(<ConfirmationPage />)} />
      <Route path="/lender/addListing1" render={() => withHeader(<AddListing/>)} />
      <Route path="/lender/myListings" render={() => withHeader(<HomePageLender />)} />
      <Route path="/lender/myListing/:id" render={() => withHeader(<EachLenderListing />)} />
      <Route path="/addListing/:id" render={() => withHeader(<EachListing />)} />
      <Route path="/firestore/users" render={() => <FireStoreUsersPage /> } />
      <Route path="/firestore/games" render={() => <FireStoreGamesPage /> } />
      <Route path="/firestore/listings" render={() => <FireStoreListingsPage /> } />
      <Route path="/firestore/requests" render={() => withHeader(<Request />) } />
    </BrowserRouter>
    : <Container><Loader /></Container>
  );
};

export default App;
