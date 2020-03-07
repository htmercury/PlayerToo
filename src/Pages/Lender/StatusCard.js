import React from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const OnLoanCard = ({ item }) => {
  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={item.image} />
        <Card.Header>{item.borrower}</Card.Header>
        <Card.Meta>
          <Icon name="star" /> {item.borrowerRating}
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {item.duration}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button fluid color="yellow">
          Contact
        </Button>
      </Card.Content>
    </Card>
  );
};

const AvailableCard = ({ item }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>There are no pending requests for your game!</Card.Header>
      </Card.Content>
    </Card>
  );
};

const StatusCard = ({ state }) => {
  const approved = state.borrowers.filter(x => x.approved === true);

  return approved.length > 0 ? (
    <Card.Group centered itemsPerRow="1">
      {approved.map(i => (
        <OnLoanCard key ={i.borrower} item={i} />
      ))}
    </Card.Group>
  ) : (
    <Card.Group centered itemsPerRow="1">
      <AvailableCard />
    </Card.Group>
  );
};

export default StatusCard;
