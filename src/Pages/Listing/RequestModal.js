import React from 'react';
import { Modal, Grid, Button, Image, Icon, Dropdown } from 'semantic-ui-react';

const RequestModal = ({ open, setIsModalOpen, data, id }) => {
  
  return (
    <Modal 
      closeIcon
      open={open} 
      onClose={() => setIsModalOpen(false)}
    >
      <Modal.Header content="Request Boardgame" />
      <Modal.Content>
        <Grid>
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
          onClick={() => setIsModalOpen(false)}
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