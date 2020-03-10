import React, { useState, useContext } from 'react';
import { AppState } from '../../context';
import Listings from './Listings';
import { Link } from 'react-router-dom';
import { Button, Header, Container, Grid } from 'semantic-ui-react';
import DeleteModal from './DeleteModal';
import { deleteListing } from '../../client';



const HomePageLender= () => {
  const state = useContext(AppState);
  const { myListings } = state; 

  const [modalOpen, setModalOpen]=useState(false)
  const [listingToDelete, setListingToDelete]=useState({});
  const [relevantListings, setRelevantListings] = useState(myListings)

  
  const selectItemToDelete = (listing) => {
    setModalOpen(true)
    setListingToDelete(listing)
  };

  const deleteItem = (listing) => {
    const list = relevantListings.filter(listing => listing.id !== listingToDelete.id)
    setRelevantListings(list);
    deleteListing(listing.id);
    setModalOpen(false);
  };

  return(
    <Container style={{ marginBottom: "600px" }}>
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as="h2" color="yellow"  content="My Listings" dividing />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Button color="yellow" content="Add Listing" fluid icon="plus" as={Link} to="/lender/addListing1" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <DeleteModal open={modalOpen} setModalOpen={setModalOpen} deleteItem={()=> deleteItem(listingToDelete)} />
            <Listings items={relevantListings} select={selectItemToDelete} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default HomePageLender;

