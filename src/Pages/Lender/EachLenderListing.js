import React, { useContext, useState, createRef, useEffect } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import {
  Grid,
  Image,
  Button,
  Header,
  Container,
  Icon,
  Input,
  Label,
} from 'semantic-ui-react';
import BorrowerCards from './BorrowerCards';
import StatusCard from './StatusCard';

// OLD temp request data
// const borrowerTemp = [
//   {
//     borrower: 'James Smith',
//     borrowerRating: '3.6',
//     duration: '13 March - 17 March',
//     image:
//       'https://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png',
//     meetingLoc: '1560 Maple Avenue',
//     approved: null,
//   },
//   {
//     borrower: 'Angelina Jolie',
//     borrowerRating: '2.6',
//     duration: '11 March - 17 March',
//     image:
//       'https://www.theheadshotguy.co.uk/wp-content/uploads/2014/12/Screen-Shot-2014-12-02-at-11.14.42.png',
//     meetingLoc: '17 Maple Avenue',
//     approved: null,
//   },
// ];

let description =
  'This boardgame set is missing 2 green pieces. Otherwise, it is in good condition!';

// TODO: make these changes actually affect the DB. Right now they're just front end
// As of now, the changes are not saved on front end because description is overwritten
const saveEdits = input => {
  description = input.target.value;
};

const Remarks = ({ isEditing }) => {
  return isEditing ? (
    <Input
      defaultValue={description}
      fluid
      onChange={saveEdits.bind(this)}
    ></Input>
  ) : (
    <Header.Subheader content={description} />
  );
};

const EachLenderListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { games, myRequests, users } = appState;
  const [editingLenderRemarks, setEditingLenderRemarks] = useState(false);
  const toggleEditingLenderRemarks = () => {
    setEditingLenderRemarks(!editingLenderRemarks);
  };

  const contextRef = createRef();
  const { id } = useParams();
  const listing = games[games.findIndex(g => g.id === id)];

  // get requests for this particular game
  const gameRef = myRequests.length > 0 ? myRequests.filter(x => x.game_id === id)[0] : [];

  const gameRequests = 'requests' in gameRef ? gameRef.requests : [];

  // workaround: setting isApproved to null
  gameRequests.forEach(gr => (gr.isApproved = null));

  // need to hook this up to backend
  description = gameRef.additional_details;

  const [requests, setRequests] = useState(gameRequests);

  return (
    <div ref={contextRef}>
      <Container>
        <br />
        <Grid columns={1}>
          {/* Back Button */}
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

          {/* Title */}
          <Grid.Row>
            <Image.Group size="small" style={{ marginLeft: '90px' }}>
              <Image src={Object.values(listing.images)[3]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as={'h2'}>
                {listing.name}
                <Label
                  horizontal
                  circular
                  size="mini"
                  style={{ marginLeft: '6px' }}
                  color={!listing.borrowed ? 'yellow' : 'grey'}
                >
                  {!listing.borrowed ? 'Available' : 'On Loan'}
                </Label>
              </Header>
            </Grid.Column>
          </Grid.Row>

          {/* Approved Requests */}
          <Grid.Row>
            <Grid.Column>
              <Header>Approved Requests</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <StatusCard state={{ requests, setRequests, users }} />
            </Grid.Column>
          </Grid.Row>

          {/* Additional Details */}
          <Grid.Row>
            <Grid.Column>
              <Header>
                Additional Details
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

          {/* Loan Requests */}
          <Grid.Row>
            <Grid.Column>
              <Header>Loan Requests</Header>
              <BorrowerCards state={{ requests, setRequests, users }} />
            </Grid.Column>
          </Grid.Row>

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
