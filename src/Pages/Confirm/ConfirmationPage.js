import React, { useContext, createRef } from 'react';
import { AppState } from '../../context';
import { Link, useParams } from 'react-router-dom';
import { Header, Segment, Button, Icon, Container, Sticky } from 'semantic-ui-react';

const ConfirmationPage = () => {
  const state = useContext(AppState);
  const { data } = state;
  const { id } = useParams(); 
  const listing = data[id];
  const contextRef = createRef();
  console.log(id)

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
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
    </div>
  );
};

const PageHeader = () => {
  return (
    <Segment
      basic
      attached='top'
      style={{ backgroundColor: "orange", textAlign: "center" }}
      fluid="true"
    >
      <Header content="Confirmation" inverted size="large" />
    </Segment>
  );
};

export default ConfirmationPage;