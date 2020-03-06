import React, { useState , useContext} from 'react';
import { Card, Icon, Button, Grid, Header, Image } from 'semantic-ui-react';
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
            <Grid columns={2}>
            <Grid.Column width={3}>
              <Image.Group size="tiny">
                <Image src={games[games.findIndex(g => g.id === listing.game_id)].images.thumb} />
              </Image.Group>
            </Grid.Column>
            <Grid.Column width={13}>
            <Header as="h3"> 
              {games[games.findIndex(g => g.id === listing.game_id)].name} 
              <LoanStatusLabel available={true} />
            
            <Header.Subheader style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            1 New Loan Request { listing.borrowed ? <span><Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />  Currently on Loan</span> : ""}
            </Header.Subheader> 
            </Header>
            </Grid.Column>
            </Grid>
          </Card.Content>
          <Card.Content extra>
          <Button.Group>
            <Button
              onClick={() => setIsModalOpen(listing.game_id)} 
              basic
              color="yellow" 
              content= {listing.borrowed ? "See Status of Loan" : "See Requests"} 
              fluid 
              compact
            />
            {listing.borrowed ? 
            <span> 
            <Button
              onClick={() => setIsModalOpen(listing.game_id)} 
              basic
              color="yellow" 
              content= "See Requests"
              fluid 
              compact
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