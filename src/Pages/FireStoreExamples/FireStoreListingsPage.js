import React, { useEffect, useState } from 'react';
import { fireDb } from '../../firebase';

import { Table } from 'semantic-ui-react';

const ListingsTableExample = () => {
    const [listings, setListings] = useState([]);

    // Querying example for listings
    useEffect(() => {
        fireDb
            .collection('Listings')
            .orderBy('id', 'asc')
            .get()
            .then(docSnaps => {
                const listingsData = [];
                docSnaps.forEach(doc => listingsData.push(doc.data()));

                // do joins on the ids
                const joinAndPushData = async () => {
                    await Promise.all(
                        listingsData.map(async (listing, i) => {
                            const gameDoc = await fireDb
                                .collection('BoardGames')
                                .doc(listing.game_id)
                                .get();
                            listing.game = gameDoc.data();

                            const lenderDoc = await fireDb
                                .collection('Users')
                                .doc(listing.lender_id)
                                .get();
                            listing.lender = lenderDoc.data();

                            console.log(listing);

                            listingsData[i] = listing;
                        })
                    );

                    setListings(listingsData);
                };

                joinAndPushData();
            });
    }, []);

    console.log(listings);

    return (
        <Table celled collapsing>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Listing Id</Table.HeaderCell>
                    <Table.HeaderCell>Lender Id</Table.HeaderCell>
                    <Table.HeaderCell>Raw Lender JSON</Table.HeaderCell>
                    <Table.HeaderCell>Game Id</Table.HeaderCell>
                    <Table.HeaderCell>Raw Game JSON</Table.HeaderCell>
                    <Table.HeaderCell>Borrowed</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {listings.map(l => (
                    <Table.Row key={l.id}>
                        <Table.Cell>{l.id}</Table.Cell>

                        <Table.Cell>{l.lender_id}</Table.Cell>

                        <Table.Cell style={{ width: '600px' }}>
                            <pre
                                style={{
                                    whiteSpace: 'pre-wrap',
                                    maxWidth: '600px',
                                }}
                            >
                                {JSON.stringify(l.lender, null, 2)}
                            </pre>
                        </Table.Cell>

                        <Table.Cell>{l.game_id}</Table.Cell>

                        <Table.Cell style={{ width: '600px' }}>
                            <pre
                                style={{
                                    whiteSpace: 'pre-wrap',
                                    maxWidth: '600px',
                                }}
                            >
                                {JSON.stringify(l.game, null, 2)}
                            </pre>
                        </Table.Cell>

                        <Table.Cell>{l.borrowed ? 'true' : 'false'}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
};

export default ListingsTableExample;
