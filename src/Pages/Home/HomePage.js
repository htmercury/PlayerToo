import React, { useState, useContext } from 'react';
import { AppState } from '../../context';
import Games from './Games';
import { Header, Container, Grid, Input } from 'semantic-ui-react';

const HomePage = () => {
  const state = useContext(AppState);
  const { marketplaceListings } = state;
  const [relevantGames, setRelevantGames]= useState(marketplaceListings);
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
    <Container style={{marginBottom:"600px"}}>
      <Header dividing as="h2" color="yellow" content="Marketplace" style={{margin: "15px 0"}} />
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