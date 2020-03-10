import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Grid, Icon, Menu } from 'semantic-ui-react';
import { AppState } from '../context';

const PageHeader = () => {
  const appState = useContext(AppState);
  const { menuVisible, setMenuVisible } = appState;
  return (
    <Segment
      basic
      style={{ backgroundColor: "orange", textAlign: "center", marginBottom: "0px" }}
      fluid="true"
    >
      <Grid columns={2}>
        <Grid.Column width='3'> 
          <Icon 
            inverted 
            size='large' 
            name='list' 
            onClick={() => setMenuVisible(!menuVisible) }
          />
        </Grid.Column>
        <Grid.Column width='10'>
          <Header
            as={Link}
            to="/"
            inverted 
            content="Player, Too" 
            size="large" 
            color="black"
            style={{cursor: "default"}}
          />
        </Grid.Column>
        <Grid.Column width='3'/>
      </Grid>
    </Segment>
  );
};

export default PageHeader