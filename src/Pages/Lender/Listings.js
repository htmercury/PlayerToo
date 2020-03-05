import React, { useState , useContext} from 'react';
import { Card, Icon, Button, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppState } from '../../context';
import { LoanStatusLabel } from './LoanStatusLabel';


const Listings = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const state = useContext(AppState);
  const { myListings, games } = state;

  console.log("this is in Listings.js file");

    return (
    <Card.Group itemsPerRow={1}>
      {myListings.map(listing => 
        <Card key={listing.id}>
          <Card.Content as={Link} to={`/lender/myListing/${listing.game_id}`}>
            <Card.Header> {games[games.findIndex(g => g.id === listing.game_id)].name} <LoanStatusLabel available={true} /></ Card.Header>
            <Card.Description style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            1 New Loan Request { listing.borrowed ? <span><Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />  Currently on Loan</span> : ""}
            </Card.Description>
          
          <Image.Group size="tiny" style={{marginLeft:"10px"}}>
            <Image src={games[games.findIndex(g => g.id === listing.game_id)].images.small} />
          </Image.Group>
          <Button.Group>
            <Button
              onClick={() => setIsModalOpen(listing.game_id)} 
              basic
              color="yellow" 
              content= {listing.borrowed ? "See Status of Loan" : "See Requests"} 
              fluid 
            />
            {listing.borrowed ? 
            <span> 
            <Button
              onClick={() => setIsModalOpen(listing.game_id)} 
              basic
              color="yellow" 
              content= "See Requests"
              fluid 
            /> </span> : ""
          }
          </Button.Group>
          </Card.Content>
        </Card>
      )}
    </Card.Group>
  );
};

export default Listings