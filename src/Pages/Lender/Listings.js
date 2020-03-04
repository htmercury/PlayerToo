import React, { useState , useContext} from 'react';
import { Card, Icon, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppState } from '../../context';


const Listings = () => {
  const state = useContext(AppState);
  const { myListings } = state;
  const {games}= state;
  console.log("this is in Listings.js file");
  console.log(myListings);

    return (
    <Card.Group itemsPerRow={1}>
      {myListings.map(listing => 
        <Card key={listing.id}>
          <Card.Content as={Link} to={`/lender/myListing/${listing.game_id}`}>
            <Card.Header content={games[games.findIndex(g => g.id === listing.game_id)].name} />
            <Card.Description style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            4 New Loan Requests { listing.borrowed ? <span><Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />  Currently on Loan</span> : ""}
            </Card.Description>
          </Card.Content>
          <Image.Group size="tiny" style={{marginLeft:"10px"}}>
            <Image src={games[games.findIndex(g => g.id === listing.game_id)].images.small} />
    
          </Image.Group>
        </Card>
      )}
    </Card.Group>
  );
};

export default Listings