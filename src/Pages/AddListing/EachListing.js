import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container, Sticky } from 'semantic-ui-react';

const EachListing = () => {
  const appState = useContext(AppState);

  // Just using the each listing database. Need to change when integrating backend.

  const { data } = appState;
  console.log(data)
  const contextRef = createRef();
  const { id } = useParams();
  console.log(id)
  const listing = data[id];
  console.log(data[id])

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>
        <Grid>
          <Grid.Row style={{ textAlign: "center"}}>
            <Image.Group size="small">
            </Image.Group>
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header>
                gmae
              <Header.Subheader
                content={"3 Players"}
                style={{ fontStyle: "italic", color: "black" }}
              />
              <Header.Subheader content="No Desciption" />
            </Header>
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header size="small">
              Tags:
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
                  Utkarsh Mishra<br />
                  <Feed.Date content={"ut2k"} />
                  <br />
                  <Rating defaultRating={2} maxRating={5} disabled />
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Button fluid color='yellow'>Borrow Now</Button>
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

export default EachListing;