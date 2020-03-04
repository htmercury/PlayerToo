import React, { useContext, useRef, createRef } from 'react';
import { AppState } from '../context';
import { Link } from 'react-router-dom';
import {
    Menu,
    Icon,
    Sidebar,
    Header,
    Divider,
    Button,
    Ref,
    Sticky
} from 'semantic-ui-react';
import PageHeader from './PageHeader';

const SideMenuWrapper = ({ user, content }) => {
    const appState = useContext(AppState);
    const { menuVisible, setMenuVisible } = appState;
    
    const closeMenu = () => setMenuVisible(false)
    return (
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            vertical
            visible={menuVisible}
            direction="left"
            onHide={closeMenu}
          >
            <Menu.Header content={user.firstName + " " + user.lastName} />
            <Menu.Item 
              icon="cloud" 
              name="Marketplace"
              as={Link}
              to="/"
              onClick={closeMenu}
            />
            <Menu.Item 
              icon="add circle" 
              name="Add New Listing"
              as={Link} 
              onClick={closeMenu}
              to="/lender/addListing"
            />
            <Menu.Item icon="chess knight" name="My Listings" />
            <Menu.Item icon="arrow alternate circle down" name="My Loans" />
            <Menu.Item icon="setting" name="Settings" />
          </Sidebar>
          <Sidebar.Pusher>
            <PageHeader />
            {content}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenuWrapper;
