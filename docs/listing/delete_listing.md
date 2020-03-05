# Delete Listing

Used to remove a specific listing from the database.

**URL** : `/api/v1/listings/:listingId`

**URL Parameters**: `listingId=[string]` where `listingId` is the ID of the listing on the server.

**Method** : `DELETE`

**Auth required** : NO

**Data** : `{}`

## Success Response

**Condition** : If the listing exists.

**Code** : `200 OK`

**Content** : 
```json
{
    "message": "listing successfully deleted.",
    "success": true
}
```

## Error Responses

**Condition** : If the listing does not exist.

**Code** : `500 BAD REQUEST`

**Content** : 
```json
{
    "message": "listing_id does not exist.",
    "success": false
}
```