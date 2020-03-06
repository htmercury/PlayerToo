## REST API Docs

API for the PlayerToo applicaiton.

## Open Endpoints

Open endpoints require no Authentication.

### Board Game related

Get all games.
* [Games](game/get_games.md) : `GET /api/v1/games/`

Get a specific game.
* [Game](game/get_game.md) : `GET /api/v1/games/:gameId`

### User related

Get all users.
* [Users](user/get_users.md) : `GET /api/v1/users/`

Get a specific user.
* [User](user/get_user.md) : `GET /api/v1/users/:userId`

### Listing related

Get all listings.
* [Listings](listing/get_listings.md) : `GET /api/v1/listings/`

Add a listing.
* [Listings](listing/post_listings.md) : `POST /api/v1/listings/`

Edit a listing.
* [Listings](listing/put_listing.md) : `PUT /api/v1/listings/`

Remove a listing.
* [Listing](listing/delete_listing.md) : `DELETE /api/v1/listings/:listingId`

Get a specific listing.
* [Listing](listing/get_listing.md) : `GET /api/v1/listings/:listingId`