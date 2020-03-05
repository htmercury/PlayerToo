# Retrieve Games

Used to retrieve a specific board game from the database.

**URL** : `/api/v1/games/:gameId`

**URL Parameters**: `gameId=[string]` where `gameId` is the ID of the board game on the server.

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
  "description": "<p>The thrill of bankrupting an opponent, the possibility of playing a 9 hour game, and the absolution between winning and losing, could change with the roll of the dice. Experience the ups and downs by collecting property color’s sets to build houses, and hopefully upgrading to a hotel. But don’t play just for certain colors, or else your opponent may change their strategy. </p><p>The more properties each player owns, the more rent can be charged, but trading is where the game can help you, or hurt you. So, be wise!</p><p>Chance cards could be worth money, like $10 for winning second place in a beauty pageant or sending you to “Go” for an extra $200; but you might just get the one that says, “Go To Jail”.</p><p>Buy, Sell, Dream and Scheme to Win it All!</p><p>Turn a debt into an ultimate victory!</p>",
  "min_players": 2,
  "rating": 1.6454545454545455,
  "primary_publisher": "Hasbro Games",
  "max_players": 8,
  "name": "Monopoly",
  "images": {
    "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1543278754636",
    "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543278754636",
    "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1543278754636",
    "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1543278754636",
    "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1543278754636"
  },
  "year_published": 1933,
  "id": "fG5Ax8PA7n",
  "tags": [
    "Economic",
    "Negotiation",
    "Auction",
    "Player Elimination",
    "Roll / Spin and Move",
    "Set Collection",
    "Trading"
  ]
}
```

## Error Response

**Condition** : If ':gameId' does not exist.

**Code** : `400 BAD REQUEST`

**Content** :

```json
false
```
