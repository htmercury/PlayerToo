import React, { useState } from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import AcceptModal from './AcceptModal';
import {getDuration} from '../../utils/TimeFunctions'

// This card shows when on loan
const OnLoanCard = ({ request, action, setLocation, users }) => {
  const user = users.filter(u => request.borrower === u.id)[0];

  const duration = getDuration(request.startDate, request.duration)

  function launchModal() {
    action(true);
    setLocation(request.meetingLoc);
  }

  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={user.display_pic} />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <Icon name="star" /> {user.rating.toFixed(2)}
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>{duration}</Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {request.meetingLoc
            ? request.meetingLoc
            : 'Starbucks, 1901 Dempster St'}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button fluid color="yellow" onClick={() => launchModal()}>
          Additional Details
        </Button>
      </Card.Content>
    </Card>
  );
};

// This card shows when available
const AvailableCard = () => {
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

// Exported cardgroup holder
const StatusCard = ({ state }) => {
  const approvedRequests = state.requests.filter(x => x.isApproved === true);
  const [modalOpen, setModalOpen] = useState(false);
  const [meetUplocation, setmeetUpLocation] = useState(0);
  return approvedRequests.length > 0 ? (
    <div>
      <AcceptModal
        open={modalOpen}
        setModalOpen={setModalOpen}
        meetUpLocation={meetUplocation}
      />
      <Card.Group centered itemsPerRow="1">
        {approvedRequests.map(r => (
          <OnLoanCard
            key={r.borrower}
            request={r}
            action={setModalOpen}
            setLocation={setmeetUpLocation}
            users={state.users}
          />
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
