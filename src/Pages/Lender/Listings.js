import React, { useState } from 'react';
import { Card, Icon, Header, Button, Image } from 'semantic-ui-react';
import RequestModal from '../Listing/RequestModal';
import { Link } from 'react-router-dom';

const Games = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  return (
    <Card.Group itemsPerRow={1}>
      {data.slice(0,4).map(game => 
        <Card key={game.id}>
          <Card.Content as={Link} to={`/listings/${game.id}`}>
            <Header style={{fontWeight: "lighter", fontSize: "12px"}} floated='right' content={ !game.onLoan ? 
              <Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="remove" /> : ""
            } />
            <Card.Header content={game.game} />
            <Card.Description style={{ color: "grey", fontWeight: "bold", fontSize: "12px" }}>
            {game.lender.requests}  New Loan Requests { game.onLoan ? <span><Icon style={{marginRight: "0px", marginLeft: "10px", color:"orange"}} name="circle" />  Currently on Loan</span> : ""}
            </Card.Description>
          </Card.Content>
          <Image.Group size="tiny" style={{marginLeft:"10px"}}>
            <Image src={"."+game.images[0]} />
            <Image src={"."+game.images[1]} />
            <Image src={"."+game.images[2]} />
          </Image.Group>
          <Card.Content extra>
            <Button
              onClick={() => setIsModalOpen(game.id)} 
              basic
              color="yellow" 
              content= {game.onLoan ? "See Status of Loan" : "See Requests"} 
              fluid 
            />
           
            {game.onLoan ? 
            <span> 
             
            <Button
              onClick={() => setIsModalOpen(game.id)} 
              basic
              color="yellow" 
              content= "See Requests"
              fluid 
            /> </span> : ""
          }
          </Card.Content>
          <RequestModal open={isModalOpen===game.id} setIsModalOpen={() => setIsModalOpen(false)} game={game} />
        </Card>
      )}
    </Card.Group>
  );
};

export default Games