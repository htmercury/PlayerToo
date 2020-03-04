import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container, Sticky, Input, GridRow, GridColumn } from 'semantic-ui-react';

const EachListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { games } = appState;
  const contextRef = createRef();
  const { id } = useParams();
  console.log(id)
  const listing = games[games.findIndex(g => g.id === id)];

  return (
    <div ref={contextRef}>

      <Container>
        <br />
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
            <Header dividing as="h2" color="yellow" content="Add Listing" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size="small" style={{marginLeft:"90px"}}>
              <Image src={Object.values(listing.images)[3]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Header>
              {listing.game}
            </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header>
              <Header.Subheader content="Players:" />
              <Header.Subheader content={`${listing.min_players}-${listing.min_players} Players`} style={{ fontStyle: "italic", color: "black" }}/>
                </Header>
                
              </Grid.Column>
              <Grid.Column width={8}>
              <Header>
              <Header.Subheader content="Game Time:" />
              <Header.Subheader content="15 minutes" style={{ fontStyle: "italic", color: "black" }} />
                </Header>
              </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
            <Header>
              <Header.Subheader content="Ages:" />
              <Header.Subheader content="7+" style={{ fontStyle: "italic", color: "black" }} />
                </Header>
                </Grid.Column>
              </Grid.Row>
          <Grid.Row>
          <Grid.Column>
            <Header content="About"/>
          <Header.Subheader content={listing.description} />
          </Grid.Column>
          </Grid.Row>
            
            

          <Header size="medium">
            What do borrowers need to know about your game?
            </Header>
          <Grid.Column>
            <Input fluid placeholder="My game set is missing 3 cards etc." />
          </Grid.Column>
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Grid.Column>
              <Button fluid color='yellow'>Add listing</Button>
              <br />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default EachListing;