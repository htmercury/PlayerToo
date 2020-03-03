import React, { useContext, useRef } from 'react'
import { AppState } from '../context';
import { Menu, Icon, Sidebar, Header, Divider, Button, Ref } from 'semantic-ui-react'

const SideMenuWrapper = ({ user, content }) => {
  const appState = useContext(AppState);
  const { menuVisible, setMenuVisible } = appState;
  const segmentRef = useRef(); 

  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation='overlay'
        vertical
        visible={menuVisible}
        direction='left'
        target={segmentRef}
        onHide={() => { setMenuVisible(false) }}
      >
      <Header content={user.firstName + user.lastName} />
      </Sidebar>
      <Sidebar.Pusher>
        <Ref innerRef={segmentRef}>
        {content}
        </Ref>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default SideMenuWrapper