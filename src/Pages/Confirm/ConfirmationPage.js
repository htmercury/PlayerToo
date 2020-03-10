import React, { useContext, createRef, useEffect, useState } from 'react';
import { AppState } from '../../context';
import { Link, useParams } from 'react-router-dom';
import { Header, Segment, Button, Icon, Container, Sticky, Loader } from 'semantic-ui-react';

const ConfirmationPage = () => {
  const state = useContext(AppState);
  const { marketplaceListings } = state;
  const { id } = useParams(); 
  const listing = marketplaceListings[marketplaceListings.findIndex(x => x.id == id)];

  return (
    <Container style={{ marginTop: "15px"}}>
      <Header as="h1" icon>
        <Icon color="yellow" name='check circle' />
        We've notified {listing.lender.firstname} that you would like to borrow their game: <p style={{color: "orange" }}>{listing.game}</p>
        <Header.Subheader>
          If {listing.lender.firstname} accepts your booking, you will get a notification so you can arrange a meetup!
        </Header.Subheader>
        <br />
        <Header.Subheader>
          Happy playing!
        </Header.Subheader>
      </Header>
      <br />
      <br />
      <Button content="Back to Listings" as={Link} to="/" fluid color="yellow" />
    </Container>
  );
};

export default ConfirmationPage;