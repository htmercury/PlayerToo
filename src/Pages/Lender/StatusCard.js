import React, {useState} from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import AcceptModal from './AcceptModal';

const OnLoanCard = ({ item, action, setLocation }) => {

  function launchModal() {
    action(true);
    setLocation(item.meetingLoc);
  }
 
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
        <Button fluid color="yellow" onClick={() => launchModal()} >
          Additional Details
        </Button>
      </Card.Content>
    </Card>
  );
};

const AvailableCard = ({ item }) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header as={Header} icon textAlign="center">
          <Icon name="user outline" circular />
          There are no approved requests for your game yet!
        </Card.Header>
      </Card.Content>
    </Card>
  );
};

const StatusCard = ({ state }) => {
  const approved = state.borrowers.filter(x => x.approved === true);
  const [modalOpen, setModalOpen] = useState(false);
  const [meetUplocation,setmeetUpLocation]=useState(0);
  return approved.length > 0 ? (
    <div>
    <AcceptModal open={modalOpen} setModalOpen={setModalOpen} meetUpLocation={meetUplocation} />
    <Card.Group centered itemsPerRow="1">
      {approved.map(i => (
        <OnLoanCard key={i.borrower} item={i} action={setModalOpen} setLocation = {setmeetUpLocation}/>
      ))}
    </Card.Group>
    </div>
  ) : (
    <Card.Group centered itemsPerRow="1">
      <AvailableCard />
    </Card.Group>
  );
};

export default StatusCard;