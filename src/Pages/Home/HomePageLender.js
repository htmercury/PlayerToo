import React, { useState, useContext, createRef } from 'react';
import { AppState } from '../../context';
import Listings from './Listings';
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
  const contextRef = createRef();
  const [relevantGames, setRelevantGames]= useState(data);
  const [searched, setSearched]=useState("");

  return(
      <div>
      
      <Container>
      <Grid columns={1} padded>
        <Grid.Row>
          <Grid.Column>
            <Input fluid onChange={handleMessage.bind(this)} icon='search' iconPosition='left' placeholder="Search..." />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Listings data={relevantGames} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
    <Sticky> 
          <PageFooter />
    </Sticky>
    </div>

      );


};

const PageFooter = () => {
    return (
      <div 
      basic
      attached='bottom'
      style={{ textAlign: "center" }}
      fluid="true"
      >

        <Icon name="add" bordered circular outline size="huge" style={{ color: "orange", outline:"true" }} >
        </Icon>
       </div>
    );
  };
  export default HomePageLender;

