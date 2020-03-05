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

const user = {
  userName: "johnsmith53",
  firstName: "John",
  lastName: "Smith",
  rating: "3.6",
  profilePic: "https://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png",
}

function App() {
  const appState = useContext(AppState);
  const { marketplaceListings } = appState;
  

  const withHeader = (page) => {
    return (
      <SideMenuWrapper
        content={page}
        user={user}
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
    </BrowserRouter>
    : <Container><Loader /></Container>
  );
};

export default App;
