import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import RequestModal from './RequestModal';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container, Sticky } from 'semantic-ui-react';

const ListingPage = () => {
  const appState = useContext(AppState);
  const { data } = appState;
  const contextRef = createRef();
  const { id } = useParams(); 
  const listing = data[id];

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>
        <RequestModal 
          open={isModalOpen} 
          setIsModalOpen={setIsModalOpen}
          game={listing} 
        />
        <Grid>
          <Grid.Row style={{ textAlign: "center"}}>
            <Image.Group size="small">
              <Image src={listing.images[0]} />
              <Image src={listing.images[1]} />
              <Image src={listing.images[2]} />
            </Image.Group>
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header>
              {listing.game}
              <Header.Subheader
                content={`${listing.minPlayers}-${listing.maxPlayers} Players`}
                style={{ fontStyle: "italic", color: "black" }}
              />
              <Header.Subheader content={listing.description} />
            </Header>
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header size="small">
              Tags:
              {listing.tags.map(g => <Label content={g} />)}
            </Header>
          </Grid.Row>
          <Feed>
            <Header size="small">
              Owner
            </Header>
            <Feed.Event>
              <Feed.Label image='./assets/images/default.jpg' />
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
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Button fluid color='yellow' onClick={() => setIsModalOpen(true)}>Borrow Now</Button>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
};

const PageHeader = () => (
  <Segment
    basic
    attached='top'
    style={{ backgroundColor: "orange"}}
    fluid="true"
  >
    <Header content="" size="large">
      <Button 
        style={{ backgroundColor: "orange"}}
        icon="arrow left" 
        as={Link}
        to='/'
      />
    </Header>
  </Segment>
);

export default ListingPage;