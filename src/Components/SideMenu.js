import React, { useContext, useRef, createRef } from 'react';
import { AppState } from '../context';
import { Link } from 'react-router-dom';
import {
  Menu,
  Sidebar,
  Grid,
  Image,
  Header,
  Rating,
  Divider,
  Icon,
  Label,
} from 'semantic-ui-react';
import PageHeader from './PageHeader';

const SideMenuWrapper = ({ user, content }) => {
  const appState = useContext(AppState);
  const { menuVisible, setMenuVisible } = appState;

  const closeMenu = () => setMenuVisible(false);
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        vertical
        visible={menuVisible}
        direction="left"
        size="huge"
        onHide={closeMenu}
      >
        <Menu.Header style={{ marginBottom: 50 }}>
          <Grid centered>
            <Grid.Row style={{ marginTop: 50 }}>
              <Image circular size="small" src={user.display_pic} />
            </Grid.Row>
            <Grid.Row>
              <Header as={'h1'} color="yellow">
                {user.name.split(' ')[0] + ' ' + user.name.split(' ')[1]}
                <Header.Subheader content={user.id.slice(0, -2)} />
              </Header>
            </Grid.Row>
            <Grid.Row>
              <Rating
                defaultRating={Math.round(user.rating)}
                maxRating="5"
                disabled
                style={{ marginTop: -20 }}
              />
            </Grid.Row>
          </Grid>
        </Menu.Header>
        <Menu.Item icon="cloud" as={Link} to="/" onClick={closeMenu}>
          <Icon name="cloud"/>Marketplace
        </Menu.Item>
        <Menu.Item
          as={Link}
          onClick={closeMenu}
          to="/lender/addListing1"
        >
          <Icon name="add circle"/>Add New Listing
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/lender/myListings"
          onClick={closeMenu}
        >
          <Icon name="chess knight"/>My Listings
          <Label color="yellow">2</Label>
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/firestore/requests"
          onClick={closeMenu}
        >
          <Icon name="chess bishop"/>Loan Requests
        </Menu.Item>
        <Menu.Item><Icon name="arrow alternate circle down"/>My Loans</Menu.Item>
        <Menu.Item><Icon name="setting"/>Settings</Menu.Item>
      </Sidebar>
      <Sidebar.Pusher dimmed={menuVisible}>
        <PageHeader />
        {content}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SideMenuWrapper;
