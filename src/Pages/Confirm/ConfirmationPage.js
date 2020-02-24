import React, { useContext, createRef, useEffect, useState } from 'react';
import { AppState } from '../../context';
import { Link, useParams } from 'react-router-dom';
import { Header, Segment, Button, Icon, Container, Sticky, Loader } from 'semantic-ui-react';

const ConfirmationPage = () => {
  const state = useContext(AppState);
  const { data } = state;
  const { id } = useParams(); 
  const listing = data[id];
  const contextRef = createRef();
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div ref={contextRef}>
      <Sticky context={contextRef}>
        <PageHeader />
      </Sticky>
      <Container style={{ marginTop: "15px"}}>
        {loading ? <Loader active style={{marginTop: "15px" }} size="huge">Confirming boardgame request...</Loader> :
          <React.Fragment>
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
          </React.Fragment>
        }
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