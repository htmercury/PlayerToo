import React, { useContext, useState, setState, useRef, useEffect} from 'react';
import { AppState } from '../../context';
import { useParams, Link } from 'react-router-dom';
import { Grid, Feed, Rating, Segment, Image, Button, Header, Label, Container, Icon, Dropdown } from 'semantic-ui-react';

const ListingPage = () => {
  const appState = useContext(AppState);
  const { data } = appState;
  
  const { id } = useParams(); 
  const listing = data[id];

  //Modal Handling
  function useOutsideAlerter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsModalOpen(false)
      }
    }
  
    useEffect(() => {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    });
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rentalDuration = [
    {
      key: '1 Day',
      text: '1 Day',
      value: '1 Day'
    },
    {
      key: '2 Days',
      text: '2 Days',
      value: '2 Days'
    },
    {
      key: '3 Days',
      text: '3 Days',
      value: '3 Days'
    },
    {
      key: '4 Days',
      text: '4 Days',
      value: '4 Days'
    },
    {
      key: '5 Days',
      text: '5 Days',
      value: '5 Days'
    },
    {
      key: '6 Days',
      text: '6 Days',
      value: '6 Days'
    },
    {
      key: '7 Days',
      text: '7 Days',
      value: '7 Days'
    },
    {
      key: '8 Days',
      text: '8 Days',
      value: '8 Days'
    },
    {
      key: '9 Days',
      text: '9 Days',
      value: '9 Days'
    },
    {
      key: '10 Days',
      text: '10 Days',
      value: '10 Days'
    },
    {
      key: '11 Days',
      text: '11 Days',
      value: '11 Days'
    },
    {
      key: '12 Days',
      text: '12 Days',
      value: '12 Days'
    },
    {
      key: '13 Days',
      text: '13 Days',
      value: '13 Days'
    },
    {
      key: '14 Days',
      text: '14 Days',
      value: '14 Days'
    }
  ]

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(0, 0, 0, 0.3)',
    zIndex: '69'
  }

  const dialogStyle = {
      background: 'white',
      borderRadius: '5px',
      padding: '20px',
      margin: 'auto',
      left: '50%',
      marginTop: '20%',
      width: '80%',
      verticalAlign: 'middle',
      zIndex: '69'
  }
  // console.log(id)
  // console.log('DATA:')
  // console.log(data[id])

  return (  
      <Container>
        {isModalOpen && (
                <div style={overlayStyle}>
                  <div ref={wrapperRef} style={dialogStyle}>
                    <Grid>
                    <h1>Rental Request</h1>
                      <Grid.Row>
                        <Grid.Column  width={4}>
                          <Image avatar src="../../assets/images/default.jpg" size='tiny'/>
                        </Grid.Column>
                        <Grid.Column width={12}>
                        <Grid.Row style={{fontWeight: 'bold'}}>
                              John Doe
                          </Grid.Row>
                          <Grid.Row style={{color:'grey'}}>
                              {data[id]['lender']}
                          </Grid.Row>
                          <Grid.Row>
                            <Icon name="star" />{data[id].rating}
                          </Grid.Row>
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column style={{paddingTop:"10", paddingBottom:"10"}}>
                          <Icon name="home"/> Evanston, IL {/* TODO: GET FROM DATABASE */}
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row style={{paddingTop:"10", paddingBottom:"10"}}>
                        <Grid.Column>
                          <Icon name="envelope"/> {data[id]['lender']+'@u.northwestern.edu' /* TODO: GET FROM DATABASE */}
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <h3>Rental Period</h3>
                          <Dropdown
                            placeholder='Select Duration'
                            fluid
                            selection
                            textColor = 'black'
                            options={rentalDuration}
                          />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column>
                          <h3>Recomended Meetup Location</h3>
                          <Grid.Column style={{color:'grey', paddingLeft:'2.5%'}}>
                            Evanston, IL {/* TODO: FETCH FROM BACKEND */}
                          </Grid.Column>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                      <Button style={{marginTop:'2.5%',marginBottom:'2.5%'}}onClick={() => setIsModalOpen(false)}
                                    basic
                                    color="yellow" 
                                    content="Contact" 
                                    fluid/>
                      <Button onClick={() => setIsModalOpen(false)}
                                    color="yellow" 
                                    content="Submit Request" 
                                    fluid/>
                  </div>
                </div>   
              )}
        <Grid>
          <Grid.Row>
            <Segment
              basic
              attached='top'
              style={{ backgroundColor: "orange"}}
              fluid="false"
            >
              <Header content="" size="large">
                <Button 
                style={{ backgroundColor: "orange"}}
                icon="arrow left" 
                as={Link}
                to='/'/>
              </Header>
            </Segment>
            <Image src={listing.images[0]} />
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header>
              {listing.game}
              <Header.Subheader
                content={`${listing.minPlayers}-${listing.maxPlayers} Players`}
                style={{ fontStyle: "italic", color: "black" }}
              />
              <Header.Subheader content={listing.description} />
            </Header>
          </Grid.Row>
          <Grid.Row style={{ margin: "0px 10px 0px 10px " }}>
            <Header size="small">
              Tags:
              {listing.genre.map(g => <Label content={g} />)}
            </Header>
          </Grid.Row>
          <Feed>
            <Header size="small">
              Owner
            </Header>
            <Feed.Event>
              <Feed.Label image='./assets/cards_against_humanity/1.png' />
              <Feed.Content>
                <Feed.Summary>
                  John Smith<br />
                  <Feed.Date content='johnsmith335' />
                  <br />
                  <Rating defaultRating={3} maxRating={5} disabled />
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
          <Grid.Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <Button>Contact User</Button>
            <Button color='yellow' onClick={() => setIsModalOpen(true)}>Request Rental</Button>
          </Grid.Row>
        </Grid>
      </Container>
    );
};

export default ListingPage;
