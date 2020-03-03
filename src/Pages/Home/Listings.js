import React, { useState } from 'react';
import { Card, Icon, Header, Button, Image } from 'semantic-ui-react';
import RequestModal from '../Listing/RequestModal';
import { Link } from 'react-router-dom';

const Games = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return (
    <Card.Group itemsPerRow={1}>
      {data.map(game => 
        <Card key={game.id}>
          <Card.Content as={Link} to={`/listings/${game.id}`}>
            <Header style={{fontWeight: "lighter", fontSize: "12px"}} floated='right' content={
              <Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="remove" />
            } />
            <Card.Header content={game.game} />
            <Card.Description style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
              New Loan Requests { <Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />}{game.lender.requests}
            </Card.Description>
          </Card.Content>
          <Image.Group size="tiny" style={{marginLeft:"10px"}}>
            <Image src={game.images[0]} />
            <Image src={game.images[1]} />
            <Image src={game.images[2]} />
          </Image.Group>
          <Card.Content extra>
            <Button
              onClick={() => setIsModalOpen(game.id)} 
              basic
              color="yellow" 
              content="Borrow Now" 
              fluid 
            />
          </Card.Content>
          <RequestModal open={isModalOpen===game.id} setIsModalOpen={() => setIsModalOpen(false)} game={game} />
        </Card>
      )}
    </Card.Group>
  );
};

export default Games