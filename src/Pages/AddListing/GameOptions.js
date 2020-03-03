import React, { useState } from 'react';
import { Card, Icon, Header, Button, Image } from 'semantic-ui-react';
import RequestModal from '../Listing/RequestModal';
import { Link } from 'react-router-dom';
import AddListing from './AddListing';

const Game_List = ({ data }) => {

    function Add_Listing (game){
        console.log("Added the listing to the databse " + game);
    //Code to add listing to the databse
    }

    return (
        <Card.Group itemsPerRow={1} as={Link} to={'../firestore/addlisting/eachlisting'}>
            {data.map(game =>
                <Card fluid header={game} onClick={() => Add_Listing(game)}>
                </Card>
            )}
        </Card.Group>
    );
};

export default Game_List;