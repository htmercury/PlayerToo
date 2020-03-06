import React, { useState , useContext} from 'react';
import { Card, Icon, Button, Grid, Header, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppState } from '../../context';

const Listings = ({ select, items }) => {
  const state = useContext(AppState);
  const { games } = state;

  console.log("this is in Listings.js file");

    return (
    <Card.Group itemsPerRow={1}>
      {items.map(listing => 
        <Card key={listing.id}>
          <Card.Content as={Link} to={`/lender/myListing/${listing.game_id}`}>
            <Grid columns={2}>
            <Grid.Column width={3}>
              <Image.Group size="tiny">
                <Image src={games[games.findIndex(g => g.id === listing.game_id)].images.thumb} />
              </Image.Group>
            </Grid.Column>
            <Grid.Column width={13}>
            <Header as="h3"> 
              {games[games.findIndex(g => g.id === listing.game_id)].name} 
              <Label horizontal circular size='mini' style={{ marginLeft: "6px" }}color={!listing.borrowed ? 'yellow' : 'grey'}>
                {!listing.borrowed ? 'Available' : 'On Loan'}
              </Label>
            <Header.Subheader style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            1 New Loan Request { listing.borrowed ? <span><Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />  Currently on Loan</span> : ""}
            </Header.Subheader> 
            </Header>
            </Grid.Column>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <Button
              onClick={() => select(listing)} 
              basic
              color="red" 
              content= "Delete" 
              icon='close'
              size='tiny'
              compact
            />
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
};

export default Listings