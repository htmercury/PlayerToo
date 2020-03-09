import React, { useState } from 'react';
import { Card, Icon, Button, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DeclineModal from './DeclineModal';

// function to handle approval of requests. interim until backend for requests is done
const approve = (item, isApproved) => {
  item.approved = isApproved;
  return item;
};

// MONTH ENUM
const MONTH = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
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
  console.log(user);

  const start = new Date(request.startDate._seconds / 1000);
  const end = new Date(
    request.startDate._seconds / 1000 + request.duration * 86400000
  );
  const duration =
    start.getDate().toString() +
    ' ' +
    MONTH[start.getMonth().toString()] +
    ' - ' +
    end.getDate().toString() +
    ' ' +
    MONTH[end.getMonth().toString()];

  return (
    <Card>
      <Card.Content>
        <Image circular floated="right" size="mini" src={user.display_pic} />
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <Icon name="star" /> {user.rating}
        </Card.Meta>
        <Card.Description>Duration:</Card.Description>
        <Card.Description as={Header.Subheader}>{duration}</Card.Description>
        <Card.Description>Proposed Meeting Location:</Card.Description>
        <Card.Description as={Header.Subheader}>
          {request.meetingLoc}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group fluid>
          <Button
            color="yellow"
            onClick={() =>
              state.setBorrowers(
                state.requests.map(x =>
                  x.borrower === request.borrower ? approve(x, true) : x
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
              state.setBorrowers(
                state.requests.map(x =>
                  x.borrower === request.borrower ? approve(x, false) : x
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
        {state.gameRequests
          .filter(x => x.isApproved === true)
          .map(r => (
            <BorrowerCard key={r.borrower} request={r} state={state} />
          ))}
      </Card.Group>
    </div>
  );
};

export default BorrowerCards;
