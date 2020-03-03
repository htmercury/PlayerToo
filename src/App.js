import React, { useContext, createRef, useRef } from 'react';
import HomePage from './Pages/Home/HomePage';
import ListingPage from './Pages/Listing/ListingPage';
import ConfirmationPage from './Pages/Confirm/ConfirmationPage';
import FireStoreUsersPage from './Pages/FireStoreExamples/FireStoreUsersPage';
import FireStoreGamesPage from './Pages/FireStoreExamples/FireStoreGamesPage';
import FireStoreListingsPage from './Pages/FireStoreExamples/FireStoreListingsPage';
import AddListing from './Pages/AddListing/AddListing';
import { AppState } from './context';
import { BrowserRouter, Route } from 'react-router-dom';
import PageHeader from './Components/PageHeader';
import { Sticky, Ref } from 'semantic-ui-react';
import SideMenuWrapper from './Components/SideMenu';

const user = {
  firstName: "John",
  lastName: "Smith",
}

function App() {
  const appState = useContext(AppState);
  const { data, setMenuVisible, menuVisible } = appState;
  const contextRef = createRef();

  const withHeader = (page) => {
    return (
      <SideMenuWrapper
        content={
          <div ref={contextRef}>
            <Sticky context={contextRef}>
              <PageHeader setMenuVisible={setMenuVisible} />
            </Sticky>
            {page}
          </div>
        }
        user={user}
      />
    );
  };
  console.log(menuVisible)

  return (
    data.length !== 0 ? 
    <BrowserRouter>
      <Route exact path="/" render={() => withHeader(<HomePage />)} />
      <Route exact path="/:id" render={() => withHeader(<ListingPage />) } />
      <Route exact path="/confirm/:id" render={() => withHeader(<ConfirmationPage />)} />
      <Route exact path="/firestore/users" render={() => <FireStoreUsersPage /> } />
      <Route exact path="/firestore/games" render={() => <FireStoreGamesPage /> } />
      <Route exact path="/firestore/listings" render={() => <FireStoreListingsPage /> } />
    </BrowserRouter>
    : null
  );
}

export default App;
