# Retrieve Listing

Used to retrieve a specific listing from the database.

**URL** : `/api/v1/listings/:listingId`

**URL Parameters**: `listingId=[string]` where `listingId` is the ID of the listing on the server.

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "game_id": "H8NoWEbH28",
  "id": 24,
  "borrowed": false,
  "lender_id": "Richardson98__",
  "game": {
    "max_players": 6,
    "name": "Entropy: Worlds Collide",
    "images": {
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540936906201",
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540936906201",
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540936906201",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540936906201",
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540936906201"
    },
    "year_published": 2017,
    "id": "H8NoWEbH28",
    "tags": [
      "Hand Management",
      "Simultaneous Play",
      "Variable Player Powers"
    ],
    "description": "Five parallel worlds have collided, forming a Nexus where time and space is folded unto itself. You play as one of five characters jettisoned from their world and into the Nexus. Through the use of unique character abilities and special actions, players must find fragments of their reality and be the first to piece them back together in order to find their way back home.",
    "min_players": 2,
    "rating": 2.5,
    "primary_publisher": "Passport Game Studios"
  },
  "lender": {
    "id": "Richardson98__",
    "birthday": "24/04/1998",
    "display_pic": "https://uinames.com/api/photos/male/16.jpg",
    "phone": "(516) 147 1965",
    "gender": "male",
    "rating": 1.4553790495309238,
    "age": 22,
    "credit_card": {
      "number": "1398-3352-3196-8432",
      "expiration": "3/28",
      "security": 839,
      "pin": 8479
    },
    "email": "ethan-98@example.com",
    "name": "Ethan Richardson",
    "distance": "16.6 mi"
  }
}
```

## Error Response

**Condition** : If ':listingId' does not exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
false
```
