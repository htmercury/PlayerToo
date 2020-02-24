import React from 'react';
import { Modal, Grid, Button, Image, Icon, Dropdown, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const RequestModal = ({ open, setIsModalOpen, game }) => {
  
  return (
    <Modal 
      closeIcon
      open={open} 
      onClose={() => setIsModalOpen(false)}
    >
      <Modal.Header>
        <Header as="h3">
          Request Boardgame 
          <Header.Subheader content={game.game} />
        </Header>
      </Modal.Header>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column  width={4}>
              <Image avatar src="../../assets/images/default.jpg" size='tiny'/>
            </Grid.Column>
            <Grid.Column width={12}>
            <Grid.Row style={{fontWeight: 'bold'}}>
                {game.lender.firstname} {game.lender.lastname}
              </Grid.Row>
              <Grid.Row style={{color:'grey'}}>
                  {game.lender.username}
              </Grid.Row>
              <Grid.Row>
                <Icon name="star" />{game.rating}
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
              <Icon name="envelope"/> {game.lender.email}
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
                options={options}
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
      </Modal.Content>
      <Modal.Actions>
        <Button 
          as={Link}
          to={`/confirm/${game.id}`}
          color="yellow" 
          content="Submit Request" 
          fluid
        />
      </Modal.Actions>
    </Modal>
  );
};

const rentalDuration = () => {
  let options = [];
  for (let i = 1; i < 15; i++) {
    options.push({ key: i, text: `${i} days`, value: i})
  }
  return options; 
};

const options = rentalDuration();

export default RequestModal;