# RESTful API server with Express 4 and MongoDB

## Features

* Handle [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) for an item (let's use Dino for the case)
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
$ npm run dev
```

## Development

`npm run dev` - start the server in live-reload mode (will be automatically relaunched on sourcechanges)

`npm start` - start the server, alias for _node server.js_

`npm clean` - remove *node_modules*



