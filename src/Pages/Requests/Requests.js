import React, { useState, useContext } from 'react';
import { AppState } from '../../context';
import { Container, Grid, Input } from 'semantic-ui-react';

const Request = () => {
  const state = useContext(AppState);
  
  return (
    <Container>
      <Grid columns={1} padded>
        <Grid.Row>
          <Grid.Column>
            <Input fluid icon='search' iconPosition='left' placeholder="Search..." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
        
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Request;