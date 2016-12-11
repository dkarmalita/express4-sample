# RESTful API server with Express 4 and MongoDB

## Features

* Handle [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) for an item (let's use Dino for the case)
* [CORS](https://ru.wikipedia.org/wiki/Cross-origin_resource_sharing) settings
* Full-Text Search
* Use standard URLs (http://example.com/api/dinos and http://example.com/api/dinos/:dino_id)
* Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
* Return JSON data
* Use ES6 promises
* Log all requests to the console
* Use [MongoDB](https://www.mongodb.com) database ([mLab](https://mlab.com) free sandbox service)

## Overview of the routes

| Route               | HTTP Verb | Description                   |
| ------------------- |:---------:| -----------------------------:|
| /api/bears          | GET       | Get all the bears.            |
| /api/bears          | POST      | Create a bear.                |
| /api/bears/:bear_id | GET       | Get a single bear.            |
| /api/bears/:bear_id | PUT       | Update a bear with new info.  |
| /api/bears/:bear_id | DELETE    | Delete a bear.                |

## Prerequisites

`node -v` - v6.x.x

`npm -v` - 3.x.x

## Installation

```sh
$ git clone https://github.com/dkarmalita/express4-sample.git
$ cd express4-sample/mongodb
$ npm install 
```

## Development

`npm run dev` - start the server in live-reload mode (will be automatically relaunched on sourcechanges)

`npm start` - start the server, alias for _node server.js_

`npm clean` - remove *node_modules*


## Test Queries (cURL)

_Ping API_
```
curl --request GET \
  --url http://localhost:8080/api
```

_Create Dino_
```
curl --request POST \
  --url http://localhost:8080/api/dinos \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data name=Dino
```

_List Dinos_
```
curl --request GET \
  --url http://localhost:8080/api/dinos \
  --header 'content-type: application/x-www-form-urlencoded'
```

_Search (List) Dinos_
```
curl --request GET \
  --url 'http://localhost:8080/api/dinos?q=Mr' \
  --header 'content-type: application/x-www-form-urlencoded'
```

_Get Dino_
```
curl --request GET \
  --url http://localhost:8080/api/dinos/5845472b82e58407ac956f45 \
  --header 'content-type: application/x-www-form-urlencoded'
```

_Update Dino_
```
curl --request PUT \
  --url http://localhost:8080/api/dinos/5845472b82e58407ac956f45 \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data name=Mr.Dino
```

_Delete Dino_
```
curl --request DELETE \
  --url http://localhost:8080/api/dinos/584547f6fe870207c894595f \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data name=Dino
```
