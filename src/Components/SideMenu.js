import React, { useContext, useRef } from 'react';
import { AppState } from '../context';
import {
    Menu,
    Icon,
    Sidebar,
    Header,
    Divider,
    Button,
    Ref,
} from 'semantic-ui-react';

const SideMenuWrapper = ({ user, content }) => {
    const appState = useContext(AppState);
    const { menuVisible, setMenuVisible } = appState;
    const segmentRef = useRef();

    return (
        <Sidebar.Pushable>
            <Sidebar
                as={Menu}
                animation="overlay"
                vertical
                visible={menuVisible}
                direction="left"
                target={segmentRef}
                onHide={() => {
                    setMenuVisible(false);
                }}
            >
                <Menu.Header
                    content={user.firstName + user.lastName}
                ></Menu.Header>
                <Menu.Item icon="cloud" name="Marketplace"></Menu.Item>
                <Menu.Item icon="add circle" name="Add New Listing"></Menu.Item>
                <Menu.Item icon="chess knight" name="My Listings"></Menu.Item>
                <Menu.Item icon="arrow alternate circle down" name="My Loans" />
                <Menu.Item icon="setting" name="Settings"></Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
                <Ref innerRef={segmentRef}>{content}</Ref>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
};

export default SideMenuWrapper;
