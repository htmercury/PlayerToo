import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Image, Button, Header, Container, Input, Modal } from 'semantic-ui-react';
import { postListing } from '../../client';

const EachListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { games, myListings } = appState;
  const contextRef = createRef();
  const { id } = useParams();
  const listing = games[games.findIndex(g => g.id === id)];

  
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [details, setDetails] = useState("");
  if (listing === undefined) {
    return (<p>undefined listing</p>)
  }
  else {
    console.log('changed DOM')
  }
  // console.log(details)
  function Add() {
    setIsModalOpen(true);
    const body = {
      game_id: listing.id,
      user_id: "Silva91_^",
      additional_details: details,
      requests: []
    };
    myListings.push({
      "lender_id": "Silva91_^",
      "game_id": listing.id,
      "borrowed": false,
      "requests": []
    });
    postListing(body)
    // console.log(myListings)
  };


  return (
    <div ref={contextRef}>

      <Container>
        <Modal
          open={isModalOpen}
          closeIcon
          onClose={() => setIsModalOpen(false)}
        >
          <Modal.Header>
            <Header as="h3">
              Added
          <Header.Subheader content={"Added the Listing to your Listings Page"} />
            </Header>
          </Modal.Header>
          <Modal.Actions centered>
            <Grid.Column>
        <Button 
          as={Link}
          to={'../lender/myListings'}
          color="yellow" 
          content="Go to Listings Page" 
          fluid
        />
        </Grid.Column>
        <br />
      </Modal.Actions>
        </Modal>
        <br />
        <Grid columns={1}>
          <Grid.Row>
            <Grid.Column>
              <Header data-testid="display" dividing as="h2" color="yellow" content="Add Listing" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button
                content="Back to Game List"
                icon='arrow left'
                color="yellow"
                fluid
                as={Link}
                to="/lender/addListing1"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Image.Group size="small" style={{ marginLeft: "90px" }}>
              <Image src={Object.values(listing.images)[3]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header>
                {listing.name}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header>
                <Header.Subheader content="Players:" />
                <Header.Subheader content={`${listing.min_players}-${listing.max_players} Players`} style={{ fontStyle: "italic", color: "black" }} />
              </Header>

            </Grid.Column>
            <Grid.Column width={8}>
              <Header>
                <Header.Subheader content="Estimated Game Time:" />
                <Header.Subheader content="At least 15 minutes" style={{ fontStyle: "italic", color: "black" }} />
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
              <Header content="About" />
              <Header.Subheader content={listing.description} />
            </Grid.Column>
          </Grid.Row>


          <Header size="medium">
            What do borrowers need to know about your game?
            </Header>
          <Grid.Column>
            <Input 
              fluid 
              placeholder="My game set is missing 3 cards etc."  
              onChange={e  => setDetails(e.target.value)}
            />
          </Grid.Column>
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Grid.Column>
              {/*as={Link} to={"/lender/addListing1"}*/}
              <Button fluid color='yellow' onClick={() => Add()}>Add listing</Button>
              <br />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

export default EachListing;