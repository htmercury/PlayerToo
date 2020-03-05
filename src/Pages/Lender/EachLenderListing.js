import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Image,
  Button,
  Header,
  Container,
  Label,
  Icon,
  Input,
} from 'semantic-ui-react';
import Bookings from './Borrowers';

const borrowers = [
  {
    borrower: 'James Smith',
    borrowerRating: '3.6',
    duration: '13 March - 17 March',
    image:
      'https://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png',
  },
];

let description =
  'This boardgame set is missing 2 green pieces. Otherwise, it is in good condition!';

const Status = ({ available }) => (
  <Label horizontal circular color={available ? 'yellow' : 'grey'}>
    {' '}
    {available ? 'Available' : 'On Loan'}{' '}
  </Label>
);

// TODO: make these changes actually affect the DB. Right now they're just front end

const saveEdits = (input) => {
  description = input.target.value;
}

const Remarks= ({isEditing}) => {   
  return(isEditing ? (<Input defaultValue={description} fluid onChange={saveEdits.bind(this)}></Input>) : (
    <Header.Subheader content={description} />
  ))
}

const EachLenderListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { games, editingLenderRemarks, toggleEditingLenderRemarks } = appState;
  const contextRef = createRef();
  const { id } = useParams();
  const listing = games[games.findIndex(g => g.id === id)];

  return (
    <div ref={contextRef}>
      <Container>
        <br />
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Back to Game List"
                icon="arrow left"
                color="yellow"
                fluid
                as={Link}
                to="/lender/myListings"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size="small" style={{ marginLeft: '90px' }}>
              <Image src={Object.values(listing.images)[3]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as={'h2'}>
                {listing.name}
                <Status available={true} />
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header>
                <Header.Subheader content="Return Date" />
                <Header.Subheader
                  content="10 March"
                  style={{ fontStyle: 'italic', color: 'black' }}
                />
              </Header>
            </Grid.Column>
            <Grid.Column width={8}>
              <Header>
                <Header.Subheader content="Next Lending:" />
                <Header.Subheader
                  content="None yet"
                  style={{ fontStyle: 'italic', color: 'black' }}
                />
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>
                My Remarks
                <Icon
                  style={{ float: 'right' }}
                  name={editingLenderRemarks ? 'close' : 'edit outline'}
                  size="small"
                  onClick={() => toggleEditingLenderRemarks()}
                />
              </Header>
              <Remarks isEditing={editingLenderRemarks} />
            </Grid.Column>
          </Grid.Row>

          <Grid.Column>
            <Header>Loan Requests</Header>
            <Bookings data={borrowers} />
          </Grid.Column>
          <Grid.Row
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default EachLenderListing;
