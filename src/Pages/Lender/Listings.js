import React, { useState } from 'react';
import { Card, Icon, Header, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AppState } from '../../context';


const Games = ({ data }) => {
  return (
    <Card.Group itemsPerRow={1}>
      {data.slice(0,4).map(game => 
        <Card key={game.id}>
          <Card.Content>
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
        </Card>
      )}
    </Card.Group>
  );
};

export default Games