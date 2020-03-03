import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container, Sticky } from 'semantic-ui-react';

const AddListing = () => {
  const appState = useContext(AppState);
  const { data } = appState;
  const contextRef = createRef();
  const { id } = useParams(); 
  const listing = data[id];

  
  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>

        <Grid>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header>
 
              <Header.Subheader

                style={{ fontStyle: "italic", color: "black" }}
              />
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
              </Feed.Content>
            </Feed.Event>
          </Feed>
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

export default AddListing;