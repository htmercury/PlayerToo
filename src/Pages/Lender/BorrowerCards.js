import React, { useState } from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeclineModal from './DeclineModal';
import {getDuration} from '../../utils/TimeFunctions'

// function to handle approval of requests.frontend interim until backend for requests is done
// TODO: post actual db change
const approve = (request, approveBool) => {
  
  request.isApproved = approveBool;
  console.log(request);
  return request;
};

// TODO: error checking for double booking of dates

// OLD: individual requests from borrowers
// const BorrowerCard = ({ item, state }) => {

//   return (
//     <Card>
//       <Card.Content>
//         <Image circular floated="right" size="mini" src={item.image} />
//         <Card.Header>{item.borrower}</Card.Header>
//         <Card.Meta>
//           <Icon name="star" /> {item.borrowerRating}
//         </Card.Meta>
//         <Card.Description>Duration:</Card.Description>
//         <Card.Description as={Header.Subheader}>
//           {item.duration}
//         </Card.Description>
//         <Card.Description>Proposed Meeting Location:</Card.Description>
//         <Card.Description as={Header.Subheader}>
//           {item.meetingLoc}
//         </Card.Description>
//       </Card.Content>
//       <Card.Content extra>
//         <Button.Group fluid>
//           <Button
//             color="yellow"
//             onClick={() =>
//               state.setBorrowers(
//                 state.requests.map(x =>
//                   x.borrower === item.borrower ? approve(x, true) : x
//                 )
//               )
//             }
//           >
//             Approve
//           </Button>
//           <Button
//             color="yellow"
//             basic
//             onClick={() =>
//               state.setBorrowers(
//                 state.requests.map(x =>
//                   x.borrower === item.borrower ? approve(x, false) : x
//                 )
//               )
//             }
//           >
//             Decline
//           </Button>
//         </Button.Group>
//       </Card.Content>
//     </Card>
//   );
// };

// individual requests from borrowers
const BorrowerCard = ({ request, state }) => {
  const user = state.users.filter(u => request.borrower === u.id)[0];

  const duration = getDuration(request.startDate, request.duration)

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
        <Button.Group fluid>
          <Button
            color="yellow"
            onClick={() =>
              state.setRequests(
                state.requests.map(r =>
                  r.borrower === request.borrower ? approve(r, true) : r
                )
              )
            }
          >
            Approve
          </Button>
          <Button
            color="yellow"
            basic
            onClick={() =>
              state.setRequests(
                state.requests.map(r =>
                  r.borrower === request.borrower ? approve(r, false) : r
                )
              )
            }
          >
            Decline
          </Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

// Exported Card group and modal
const BorrowerCards = ({ state }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <DeclineModal open={modalOpen} setModalOpen={setModalOpen} />
      {/* <Card.Group centered itemsPerRow="1">
        {state.requests
          .filter(x => x.approved === null)
          .map(i => (
            <BorrowerCard key={i.borrower} item={i} state={state} />
          ))}
      </Card.Group> */}

      <Card.Group centered itemsPerRow="1">
        {state.requests
          .filter(x => x.isApproved === null)
          .map(r => (
            <BorrowerCard key={r.borrower} request={r} state={state} />
          ))}
      </Card.Group>
    </div>
  );
};

export default BorrowerCards;
