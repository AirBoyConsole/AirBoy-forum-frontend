# API AirBoy Forum

## Major info

* All requests return JSON array or objects
* Essential entities `article`, `user`.

## Response codes used in this api
Every error has unique code ane message about details

* HTTP `4XX` - client-side error
* HTTP `400` - bad request
* HTTP `401` - authorization failed
* HTTP `403` - forbidden - you dont have access to this resource
* HTTP `404` - `GET` resource does not exist
* HTTP `409` - `POST` resource already exists
* HTTP `5XX` - server-side error

## Data format

* Data in `GET` and `DELETE` requests should be send in URI as parameter (for example `mydomain.com/article?search=1`)
* Data in `POST` and `PUT` requests should be send in `request body` in JSON (`application/json`). Order doesn't matter.

## Security

* Every endpoint is secured by NTLM protocol. You simply have to be logged on your windows account.

## Endpoints


| Zasób             | POST        | PUT          | GET                  | DELETE         |
|-------------------|-------------|--------------|----------------------|----------------|
| /api/article      | add article | Error        | list of all articles | Error          |
| /api/article/{id} | Error       | edit article | get article          | delete article |
| /api/user         | add user    | Error        | list of all users    | Error          |
| /api/user/{id}    | Error       | edit user    | get user             | delete user    |

### enums

SortUserEnum

| Value   | Comment    |
|---------|------------|
| NAME    | by name    |
| SURNAME | by surname |
| EMAIL   | by surname |
| ID      |  by id     | 


SortArticleEnum

| Value | Comment            |
|-------|--------------------|
| NAME  | by name            |
| DATE  | by date added      |
| TODAY | most popular today |
| VIEWS | by views           |
| ID    | by id              | 


#### Get list of vessels

Returns full vesel list

```
GET /api/article
```

URI parameters


| Name   | Type            | Required | Comment             | Default if not added |
|--------|-----------------|----------|---------------------|----------------------|
| sortBy | SortArticleEnum | no       | changes sort method | DATE                 |
| search | string          | no       | search phrase       |                      |


Response

HTTP `200`

```javascript
[
    {
      "id": 1,                                   // id
      "title": "Article 1",                      // title
      "content": "Hello world...",               // content with special signs and html marks
      "download_url": "mydowain.com/files/1",    // url to file
      "added": "YYYY-MM-DDThh:mm:ssZ",           // iso 8601
      "author": {                                // major info about author
          "id": 1, 
          "name": "John", 
          "surname": "Doe",
      },
      "tags":[ "food", "drink" ],                 // tags
    },
]
```

#### Get article

Get specific article by id

```
GET /api/article/{id}
```

Response

HTTP `200`

```javascript

{
    "id": 1,                                   // id
    "title": "Article 1",                      // title
    "content": "Hello world...",               // content with special signs and html marks
    "download_url": "mydowain.com/files/1",    // url to file
    "added": "YYYY-MM-DDThh:mm:ssZ",           // iso 8601
    "author": {                                // major info about author
    "id": 1,
        "name": "John",
        "surname": "Doe",
},
    "tags":[ "food", "drink" ],                 // tags
}
```

#### Edit vessel data

Update vessel data

```
PUT /api/article/{id}
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment              |
|------------|--------------|------------|----------------------|
| title      | string       | no         | new title            |
| content    | string       | no         | new content (edited) |
| file       | file         | no         | file                 |
| tags       | string[]     | no         | array with tag names |


Response

HTTP `200`

#### Remove article

Remove vessel totally

```
DELETE /api/article/{id}
```

Response

HTTP `204`


#### Add new article

```
POST /api/article
```

Request body parameters (should be sent as form)


| Name       | Type         | Required   | Comment              |
|------------|--------------|------------|----------------------|
| title      | string       | no         | new title            |
| content    | string       | no         | new content (edited) |
| file       | file         | no         | file                 |
| tags       | string[]     | no         | array with tag names |


Response

HTTP `200`
