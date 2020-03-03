import React from 'react';
import { Header, Segment, Grid, Icon, Ref } from 'semantic-ui-react';

const PageHeader = ({ setMenuVisible, menuVisible }) => {
  return (
    <Segment
      basic
      attached='top'
      style={{ backgroundColor: "orange", textAlign: "center" }}
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
            inverted 
            content="Player, Too" 
            size="large" 
            color="black"
          />
        </Grid.Column>
        <Grid.Column width='3'/>
      </Grid>
    </Segment>
  );
};

export default PageHeader