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
                            <Icon size="huge" name='user circle' />
                        </Grid.Row>
                        <Grid.Row>
                            <Header as={'h1'} color="yellow">
                                {user.firstName + ' ' + user.lastName}
                                <Header.Subheader content={user.userName} />
                            </Header>
                        </Grid.Row>
                        <Grid.Row>
                            <Rating
                                defaultRating={user.rating}
                                maxRating="5"
                                disabled
                                style={{ marginTop: -20 }}
                            />
                        </Grid.Row>
                    </Grid>
                </Menu.Header>
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
                    to="/lender/addListing1"
                />
                <Menu.Item 
                  icon="chess knight" 
                  name="My Listings" 
                  as={Link} 
                  to="/lender/myListings" 
                  onClick={closeMenu}
                />
                <Menu.Item icon="arrow alternate circle down" name="My Loans" />
                <Menu.Item icon="setting" name="Settings" />
            </Sidebar>
            <Sidebar.Pusher dimmed={menuVisible}>
                <PageHeader />
                {content}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenuWrapper;
