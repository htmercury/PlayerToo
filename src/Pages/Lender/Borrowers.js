import React, { useState } from 'react';
import { Card, Icon, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BorrowerCard = ({ item }) => {
  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={item.image} />
        <Card.Header>{item.borrower}</Card.Header>
        <Card.Meta>
          <Icon name="star" /> {item.borrowerRating}
        </Card.Meta>
        <Card.Description>{item.duration}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button
            color="yellow"
            labelPosition="left"
            icon
            as={Link}
            to="/lender/myListings"
          >
            <Icon name="check" />
            Approve
          </Button>
          <Button
            color="grey"
            labelPosition="right"
            icon
            as={Link}
            to="/lender/myListings"
          >
            <Icon name="close" />
            Decline
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

const Borrowers = ({ data }) => {
  return (
    <div>
      <Card.Group centered itemsPerRow='1'>
        {data.map(i => 
            <BorrowerCard item={i} />)}
      </Card.Group>
    </div>
  );
};

export default Borrowers;
