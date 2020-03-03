import React, { useContext, useState, createRef } from 'react';
import { AppState } from '../../context';
import Game_List from './GameOptions'
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Input, Button, Header, Label, Container, Sticky, GridRow, Modal } from 'semantic-ui-react';

const AddListing = () => {
  const state = useContext(AppState);
  const { data } = state;
  const contextRef = createRef();
  const [isModalOpen, setIsModalOpen] = useState(null);

  // Using the same data as listings for now
  const [relevantGames, setRelevantGames]= useState(data);
  console.log(relevantGames)
  const [searched, setSearched] = useState("");

  function handleMessage(input) {
    setSearched(input.target.value);
    updateData(input.target.value);
  }
  function updateData(searched) {
    // Filter data here
    console.log("Updated search.")
  }

  return (
    <div ref={contextRef}>

      <Container>
        <br />
        <Grid>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }} centered >
            <Header
              as="h2"
              content="Please select your boardgame from the list below" />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={10}>
              <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
                style={{ backgroundColor: "orange" }}
                onClick={() => setIsModalOpen(true)}
                content="Filter"
              />
            </Grid.Column>
          </Grid.Row>
          <Game_List data={relevantGames} />
          <Grid.Row>

        </Grid.Row>
      </Grid>
      <Modal
        closeIcon
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <Modal.Header>
          <Header as="h3">
            Filter search:
            </Header>
        </Modal.Header><Modal.Content centered>
          <Grid padded="horizontally">
            <Grid.Row>
              <Button.Group>
                <Button>A</Button>
                <Button.Or />
                <Button>B</Button>
                <Button.Or />
                <Button>C</Button>
              </Button.Group>
            </Grid.Row>
            <Grid.Row>
              <Button.Group>
                <Button>A</Button>
                <Button.Or />
                <Button>B</Button>
                <Button.Or />
                <Button>C</Button>
              </Button.Group>
            </Grid.Row>
            <Grid.Row>
              <Button.Group>
                <Button>A</Button>
                <Button.Or />
                <Button>B</Button>
                <Button.Or />
                <Button>C</Button>
              </Button.Group>
            </Grid.Row>
          </Grid>
        </Modal.Content>
      </Modal>
    </Container>
    </div>
  );
};

export default AddListing;