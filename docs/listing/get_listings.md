# Listings

Used to retrieve all listings from the database.

**URL** : `/api/v1/listings/`

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "game_id": "uOEGfLoiSK",
    "id": 0,
    "borrowed": false,
    "lender_id": "Silva91_^",
    "game": {
      "id": "uOEGfLoiSK",
      "tags": [
        "Hand Management",
        "Modular Board",
        "Player Elimination"
      ],
      "description": "Draw, play, and move, that's all you've got to do. You can Remove a Space to try to strand your opponent in the corner. Maybe you can have a Party at My Place and then Teleport away. Or if things get desperate, you can always just Catapult someone clear across the board. But no matter what, don't forget to not lose!",
      "min_players": 2,
      "rating": 2,
      "primary_publisher": "Z-Man Games",
      "max_players": 6,
      "name": "Malta",
      "images": {
        "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257913085-51njQqsBNnL.jpg",
        "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257913085-51njQqsBNnL.jpg",
        "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257913085-51njQqsBNnL.jpg",
        "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257913085-51njQqsBNnL.jpg",
        "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257913085-51njQqsBNnL.jpg"
      },
      "year_published": 2010
    },
    "lender": {
      "rating": 3.667024863678935,
      "age": 29,
      "credit_card": {
        "number": "9679-4450-1034-8039",
        "expiration": "11/21",
        "security": 788,
        "pin": 5165
      },
      "email": "andreasilva@example.com",
      "name": "Andrea Silva",
      "distance": "0.9 mi",
      "id": "Silva91_^",
      "birthday": "20/10/1991",
      "display_pic": "https://uinames.com/api/photos/female/23.jpg",
      "phone": "(780) 454 8507",
      "gender": "female"
    }
  },
  {
    "game_id": "0X6NaBNOco",
    "id": 1,
    "borrowed": false,
    "lender_id": "Wood90#+",
    "game": {
      "description": "Hidden in the bushes, a team of scientists are looking for one raptor's family but their survival instinct prevail. They need to be really careful and well-prepared because one mother will make every sacrifice to protect her young.<br />\r\n<br />\r\nIn Raptor, you can play the dinosaur group or the scientists team. Whichever side that you choose you will need plans your tactics and strategy to reach one of your objectives and win the game.",
      "min_players": 2,
      "rating": 3.475609756097561,
      "primary_publisher": "Asmodee Editions",
      "max_players": 2,
      "name": "Raptor",
      "images": {
        "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254977716-61KYbu09vkL.jpg",
        "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254977716-61KYbu09vkL.jpg",
        "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254977716-61KYbu09vkL.jpg",
        "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254977716-61KYbu09vkL.jpg",
        "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254977716-61KYbu09vkL.jpg"
      },
      "year_published": null,
      "id": "0X6NaBNOco",
      "tags": [
        "Animals",
        "Fighting",
        "Sci-Fi",
        "Action Point Allowance System",
        "Grid Movement",
        "Hand Management",
        "Modular Board",
        "Simultaneous Play",
        "Take That",
        "Variable Player Powers"
      ]
    },
    "lender": {
      "id": "Wood90#+",
      "birthday": "24/02/1990",
      "display_pic": "https://uinames.com/api/photos/female/21.jpg",
      "phone": "(415) 687 7726",
      "gender": "female",
      "rating": 0.12763900732097433,
      "age": 30,
      "credit_card": {
        "number": "5765-6348-3669-7987",
        "expiration": "12/25",
        "security": 365,
        "pin": 1241
      },
      "email": "victoria90@example.com",
      "name": "Victoria Wood",
      "distance": "5.9 mi"
    }
  },
  {
    "game_id": "mHJ9Z3sGPo",
    "id": 2,
    "borrowed": false,
    "lender_id": "Phillips95@!",
    "game": {
      "id": "mHJ9Z3sGPo",
      "tags": [
        "Grid Movement",
        "Partnerships",
        "Player Elimination",
        "Press Your Luck",
        "Roll / Spin and Move",
        "Simulation"
      ],
      "description": "<p><em>*The Default edition may be any edition of this game. Designers, publishers and game box may vary.</em></p><table><tbody>\r\n<tr>\r\n<td>Designer(s)</td>\r\n<td>Eric Randall, Laurent Lavaur</td>\r\n</tr>\r\n<tr>\r\n<td>Publisher(s)</td>\r\n<td>Ludodélire, Eurogames, Descartes Editeur</td>\r\n</tr>\r\n<tr>\r\n<td>Players</td>\r\n<td>2-10, <a href=\"https://boardgameco.myshopify.com/collections/best-with-5\" target=\"_self\">Best With 5</a>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td>Play Time</td>\r\n<td><a href=\"https://boardgameco.myshopify.com/collections/medium-1-2-hours\" target=\"_self\">Medium - 1-2 Hours</a></td>\r\n</tr>\r\n<tr>\r\n<td>Suggested Age</td>\r\n<td><a href=\"https://boardgameco.myshopify.com/collections/recommended-age-10\" target=\"_self\">10+</a></td>\r\n</tr>\r\n</tbody></table>Formula Dé is a fast-paced racing game in which the cars' top speeds are limited by having to end a certain number of turns in each curve of the racetrack. This can be tricky, because although players can regulate their speeds by choosing which gear to be in and each gear allows a certain range of movement, the exact amount is determined randomly. Great fun for a big group.",
      "min_players": 2,
      "rating": 2.708333333333333,
      "primary_publisher": null,
      "max_players": 10,
      "name": "Formula Dé",
      "images": {
        "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1543421351599",
        "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1543421351599",
        "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1543421351599",
        "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543421351599",
        "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1543421351599"
      },
      "year_published": 1991
    },
    "lender": {
      "gender": "female",
      "rating": 1.4830556296414321,
      "age": 25,
      "credit_card": {
        "security": 429,
        "pin": 3789,
        "number": "8958-1741-1342-1849",
        "expiration": "7/27"
      },
      "email": "debra-95@example.com",
      "name": "Debra Phillips",
      "distance": "12.9 mi",
      "id": "Phillips95@!",
      "birthday": "09/12/1995",
      "display_pic": "https://uinames.com/api/photos/female/16.jpg",
      "phone": "(914) 589 5203"
    }
  }
]
```
