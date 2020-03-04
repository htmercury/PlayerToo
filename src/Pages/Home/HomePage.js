import React, { useState, useContext, createRef } from 'react';
import { AppState } from '../../context';
import Games from './Games';
import { Button, Header, Container, Segment, Sticky, Grid, Input, Icon } from 'semantic-ui-react';

const HomePage = () => {
  const state = useContext(AppState);
  const { marketplaceListings } = state;
  const [relevantGames, setRelevantGames]= useState(marketplaceListings);
  const contextRef = createRef();
  const [searched, setSearched]=useState("");

  function handleMessage(input) {
    setSearched(input.target.value); 
    console.log("this is searched")
    console.log(searched); 
    updateData(input.target.value);
  }
  function updateData(searched){
    console.log("reached updateData")
    const temp=marketplaceListings;
    const temp2=marketplaceListings.filter(item=>(item.game.toUpperCase().indexOf(searched.toUpperCase()) !== -1));
    
    setRelevantGames(searched !== "" ? temp2 : temp);
    console.log("new relevant games");
    console.log(relevantGames);
  }
  
  return (
    <Container>
      <Grid columns={1} padded>
        <Grid.Row>
          <Grid.Column>
            <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search..." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Games data={relevantGames} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HomePage;