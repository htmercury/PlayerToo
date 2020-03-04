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
    console.log("this is searched")
    console.log(searched); 
    updateData(input.target.value);
  }
  function updateData(searched){
    console.log("reached updateData")
    const temp=data;
    const temp2=data.filter(item=>(item.game.toUpperCase().indexOf(searched.toUpperCase()) !== -1));
    
    setRelevantGames(searched !== "" ? temp2 : temp);
    console.log("new relevant games");
    console.log(relevantGames);
  }

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
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }} centered >
            <Header
              as="h3"
              content="Please select your boardgame from the list below" />
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column>
            <Game_List data={relevantGames} />
          </Grid.Column>
          <Grid.Row>
        </Grid.Row>
      </Grid>
    </Container>
    </div>
  );
};

export default AddListing;