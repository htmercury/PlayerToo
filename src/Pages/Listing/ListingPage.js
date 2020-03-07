import React, { useContext, useState } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import RequestModal from './RequestModal';
import { Grid, Feed, Rating, Image, Button, Header, Label, Container } from 'semantic-ui-react';

const ListingPage = () => {
  const appState = useContext(AppState);
  const { marketplaceListings } = appState;
  const { id } = useParams();
  const listing = marketplaceListings[marketplaceListings.findIndex(x => x.id == id)];
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <Container>
      <RequestModal 
        open={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        game={listing} 
      />
      <Grid columns={1} style={{ margin: "5px 10px 0px 10px " }}>
        <Grid.Row>
          <Button 
            fluid 
            color="yellow" 
            content="Back to Listings" 
            as={Link} to="/" 
            icon='arrow left'
          />
        </Grid.Row>
        <Grid.Row style={{ textAlign: "center"}}>
          <Image.Group style={{marginLeft: "90px"}}>
          <Image 
            size="small"
            src={listing.images[3]}
          >
          </Image>
          </Image.Group>
        </Grid.Row>
        <Grid.Row>
          <Header>
            {listing.game}
            <Header.Subheader
              content={`${listing.minPlayers}-${listing.maxPlayers} Players`}
              style={{ fontStyle: "italic", color: "black" }}
            />
            <Header.Subheader content={listing.description} />
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Header size="small">
            Tags:
          </Header>
          <Label.Group size="small">
            {listing.tags.map(g => <Label content={g} />)}
            </Label.Group>
        </Grid.Row>
        <Grid.Row>
          <Feed>
          <Header size="small">
            Owner:
          </Header>
          <Feed.Event>
            <Feed.Label image={listing.lender.profile} />
            <Feed.Content>
              <Feed.Summary>
                {listing.lender.firstname} {listing.lender.lastname}<br />
                <Feed.Date content={listing.lender.username} />
                <br />
                <Rating defaultRating={listing.rating} maxRating={5} disabled />
              </Feed.Summary>
            </Feed.Content>
          </Feed.Event>
          </Feed>
        </Grid.Row>
        <Grid.Row style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Button fluid color='yellow' onClick={() => setIsModalOpen(true)}>Borrow Now</Button>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default ListingPage;