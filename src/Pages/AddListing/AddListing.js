import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Input, Button, Header, Label, Container, Sticky } from 'semantic-ui-react';

const AddListing = () => {
  const appState = useContext(AppState);
  const { data } = appState;
  const contextRef = createRef();
  const { id } = useParams();
  const listing = data[id];

  const [searched, setSearched] = useState("");

  function handleMessage(input) {
    setSearched(input.target.value);
    console.log("this is searched")
    console.log(searched);
    updateData(input.target.value);
  }
  function updateData(searched) {
    console.log("reached updateData")
    const temp = data;
    // Do something with the data here
  }

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container>
        <Grid>
          <br />
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }} centered >
            <Header
              as="h2"
              content="Please select your boardgame from the list below" />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search..." />
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
                style={{ backgroundColor: "orange" }}

                content="Filter"
              />
            </Grid.Column>
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
    style={{ backgroundColor: "orange" }}
    fluid="true"
  >
    <Header size="large">
      <Button
        style={{ backgroundColor: "orange" }}
        icon="arrow left"
        as={Link}
        to='/'
      />
      Add New Listing
    </Header>
  </Segment>
);

export default AddListing;