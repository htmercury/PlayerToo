import React from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
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
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>{item.duration}</Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>{item.meetingLoc}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button
            color="yellow"
            as={Link}
            to="/lender/myListings"
          >
            Approve
          </Button>
          <Button
            color="yellow"
            basic
            as={Link}
            to="/lender/myListings"
          >
            Decline
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

const BorrowerCards = ({ data }) => {
  return (
      <Card.Group centered itemsPerRow='1'>
        {data.map(i => 
            <BorrowerCard key={i.borrower} item={i} />)}
      </Card.Group>
  );
};

export default BorrowerCards;
