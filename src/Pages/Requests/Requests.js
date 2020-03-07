import React, { useState, useContext, createRef, useParams } from 'react';
import { AppState } from '../../context';
import { Container, Grid, Input } from 'semantic-ui-react';
import Each_request from './EachRequest';

const Request = () => {
     const appState = useContext(AppState);
     const { games, myRequests, permittedValues } = appState;
    // const listing = games[games.findIndex(g => g.id === id)];
    console.log(myRequests)
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
              <Each_request data={myRequests} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Request;