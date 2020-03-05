import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Image, Button, Header, Container, Input } from 'semantic-ui-react';

const EachLenderListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { games } = appState;
  const contextRef = createRef();
  const { id } = useParams();
  console.log("Open EachLenderListing ", id)
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
                icon='arrow left' 
                color="yellow" 
                fluid
                as={Link}
                to="/lender/myListings"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size="small" style={{marginLeft:"90px"}}>
              <Image src={Object.values(listing.images)[3]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Header as={"h2"}>
              {listing.name}
            </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
          <Grid.Column>
            <Header content="Remarks"/>
            {/* Take note that this needs to get information from when the listing is added */}
            <Header.Subheader content={listing.description} />
          </Grid.Column>
          </Grid.Row>
            

          <Header size="medium">
            Current Booking Dates
          </Header>
          <Grid.Column>
            <Input fluid placeholder="My game set is missing 3 cards etc." />
          </Grid.Column>
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default EachLenderListing;