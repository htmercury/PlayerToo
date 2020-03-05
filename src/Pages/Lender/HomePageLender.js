import React, { useState, useContext, createRef } from 'react';
import { AppState } from '../../context';
import Listings from './Listings';
import { Link } from 'react-router-dom';
import { Button, Header, Container, Segment, Sticky, Grid, Input, Icon, IconGroup } from 'semantic-ui-react';



const HomePageLender= () => {
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
  const state = useContext(AppState);
  const { data } = state;
  const [relevantGames, setRelevantGames]= useState(data);
  const [searched, setSearched]=useState("");

  return(
    <Container>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" color="yellow"  content="My Listings" dividing />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={13}>
            <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search..." />
          </Grid.Column>
          <Grid.Column width={3}>
            <Button color="yellow" icon="plus" as={Link} to="/lender/addListing1" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Listings />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HomePageLender;

