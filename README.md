# RESTful API server with Express 4

## Features

* Handle [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) for an item (let's use Dino for the case)
* Use standard URLs (http://example.com/api/dinos and http://example.com/api/dinos/:dino_id)
* Use the proper HTTP verbs to make it RESTful (GET, POST, PUT, and DELETE)
* Return JSON data
* Use ES6 promises
* Log all requests to the console

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

## Variants

* __mongodb__ - [MongoDB](https://www.mongodb.com) ([mLab](https://mlab.com) free sandbox service) based sample. See _mongodb/README.md_ for details.

