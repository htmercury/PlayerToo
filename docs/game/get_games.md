# Games

Used to retrieve board games from the database.

**URL** : `/api/v1/games/`

**URL Parameters**: Optional `limit=[integer]` where `limit` is the amount of games to return in the response (default: 20, max: 100). Optional `name=[string]` where `name` is the name of the game being searched for.

**Method** : `GET`

**Auth required** : NO

**Data**: `{}`

## Success Response

**Code** : `200 OK`

**Content example**

```json
[
  {
    "description": "<div><p>A thousand years of Skeksis rule has ravaged Thra, leaving it as harsh and twisted as the Skeksis themselves. The Emperor lies on his deathbed, a dying leader of a dying race. SkekSil the Chamberlain and skekUng the Garthim-Master argue in the throne room. Their stakes are the highest there can be, for the winner shall become an immortal emperor once he absorbs the power of the stars. The other shall be cast out into the very land they ruined.</p><p><br />\r\nA world away, Jen the Gelfling mourns. He mourns the sickness of his oldest friend, the wise elder of the Mystic village. Though the Mystics are peaceful, they cannot stop the ravages of time and they prepare for the passing of their leader. Jen is told of a prophecy, told that he is the only one alive who can stop the Skeksis from using the power of the stars to gain untold power. He is told that he must leave the Mystic village and find a shard of the Dark Crystal. He is told to make the world whole once more.<br />\r\n</p><p>Jen and Kira are the last of the Gelflings. Kira's family was destroyed by the Skeksis and their Garthim. She has lived among the Podlings and animals of the jungle her entire life, knowing nothing of the Gelfling prophecy, a prophecy that the Skeksis are desparate to prevent.<br />\r\nIn the dark castle of the Skeksis, steel hits stone and sparks fly forth. SkekSil strikes with conviction, skekUng strikes with rage. Ringing is heard throughout the Crystal Castle and the fate of Thra is decided.</p>\r\n</div>",
    "min_players": 2,
    "primary_publisher": "River Horse",
    "max_players": 4,
    "name": "Jim Henson's The Dark Crystal Board Game",
    "images": {
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1540938756468",
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1540938756468",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1540938756468",
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540938756468",
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1540938756468"
    },
    "year_published": 2018,
    "id": "022oQk0sYu",
    "tags": [
      "Area Movement",
      "Cooperative Play",
      "Dice Rolling",
      "Time Track"
    ]
  },
  {
    "description": "",
    "min_players": 2,
    "rating": 3,
    "primary_publisher": null,
    "max_players": 4,
    "name": "Papillon",
    "images": {
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1554409723373",
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1554409723373",
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1554409723373",
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1554409723373",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1554409723373"
    },
    "year_published": 2019,
    "id": "02L6yp8LAa",
    "tags": []
  },
  {
    "id": "02PVTOKqhe",
    "tags": [
      "Hand Management",
      "Player Elimination",
      "Take That"
    ],
    "description": "It�s been a tough day in the monkey cage and something in the food tonight wasn�t quite right. In monkey world, there�s only one thing that can be done about it � fling poo! Poo is a fast-paced card game for two to eight players, requiring anywhere from five to fifteen minutes to play. It�s fast and furious � something you can play while waiting in line or on lunch break. Each player takes on the role of a monkey. You fling poo and mess with each other until only one monkey is left standing. That monkey, of course, is the cleanest one. Each turn, every player gets to draw and play a card, usually either to fling poo at another player or to clean himself off. Out of turn, each player gets to play cards to defend himself or foil other players� poo flinging.",
    "min_players": 2,
    "rating": 1.6666666666666667,
    "primary_publisher": "Publisher Services Inc (PSI)",
    "max_players": 2,
    "name": "Poo",
    "images": {
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559257168802-51HkrzKLTjL.jpg",
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559257168802-51HkrzKLTjL.jpg",
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559257168802-51HkrzKLTjL.jpg",
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559257168802-51HkrzKLTjL.jpg",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559257168802-51HkrzKLTjL.jpg"
    },
    "year_published": 2009
  },
  {
    "max_players": 4,
    "name": "Ascending Empires",
    "images": {
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1543380477640",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1543380477640",
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1543380477640",
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1543380477640",
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1543380477640"
    },
    "year_published": 2011,
    "id": "060LSi2szR",
    "tags": [
      "Set Collection"
    ],
    "description": "<p>Humanity has been at each others throats since time immemorial. Now, in another galaxy, humans wage war amongst themselves again, but this time, with the aid of alien technology found on other planets. Ascending Empires offers a nice mixture of building, exploring, and development, along with combat via a simple dexterity element. Players flick their starships into orbits around planets to defend or attack them or surround enemy ships to destroy them. Ascending Empires is sure to sate the desire for a space empire building game that plays simply yet deeply.<br /></p>",
    "min_players": 2,
    "rating": 3.333333333333333,
    "primary_publisher": "Z-Man Games"
  },
  {
    "id": "07FXm6tX4o",
    "tags": [
      "Adventure",
      "Fantasy",
      "Deck Building",
      "Player Elimination",
      "Point to Point Movement",
      "Press Your Luck"
    ],
    "description": "Burgle your way to adventure in Clank!, the new deck-building board game.<br />\r\n<br />\r\nSneak into an angry dragon's mountain lair to steal precious artifacts. Delve deeper to find more valuable loot. Acquire cards for your deck and watch your thievish abilities grow.<br />\r\n<br />\r\nBe quick and be quiet. One false-step and --CLANK! Each careless sound draws the attention of the dragon, and each artifact stolen increases its rage. You can only enjoy your plunder if you make it out of the depths alive!",
    "min_players": 2,
    "rating": 3.611633372502937,
    "primary_publisher": "Renegade Game Studios",
    "max_players": 4,
    "name": "Clank! A Deck-Building Adventure",
    "images": {
      "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254970101-61gHdS3ds2L.jpg",
      "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254970101-61gHdS3ds2L.jpg",
      "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254970101-61gHdS3ds2L.jpg",
      "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254970101-61gHdS3ds2L.jpg",
      "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254970101-61gHdS3ds2L.jpg"
    },
    "year_published": 2012
  }
]
```

## Error Response

**Condition** : If 'limit' and 'name' parameters are invalid.

**Code** : `400 BAD REQUEST`

**Content** :

```json
Cannot get games: Error: Value for argument "limit" is not a valid integer.
```
