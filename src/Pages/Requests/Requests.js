import React, { useState, useContext, createRef, useParams } from 'react';
import { AppState } from '../../context';
import { Container, Grid, Input, Header } from 'semantic-ui-react';
import EachRequest from './EachRequest';

const Request = () => {
  const appState = useContext(AppState);
  const { games, myRequests, users } = appState;
  console.log(myRequests)
  return (
    <Container>
      <Grid columns={1} padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" color="yellow" content="Requests" dividing />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input fluid icon='search' iconPosition='left' placeholder="Search" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <EachRequest data={myRequests} games={games} users={users} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Request;