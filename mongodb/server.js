// BASIC SERUP
// ===============================================================================

let express    = require('express'),        // call express
    router     = express.Router(),          // get an instance of the express Router
    app        = express(),                 // define our app using express
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose')        // MongoDB ORM

const port = process.env.PORT || 8080
// Set server's port

const MDB_URL = 'mongodb://user:password@ds119548.mlab.com:19548/express4-sample'
// Refer MongoDB host

let Dino       = require('./app/models/dino')
// Refer Dino data model
// more about models: http://mongoosejs.com/docs/2.7.x/docs/model-definition.html

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Configure app to use bodyParser()
// It allows to get all of the data from POST


// SETUP MIDDLEWARE
// ===============================================================================

router.use((req, res, next) => {
// middleware to use for all requests

    res.setHeader("Access-Control-Allow-Origin", /* 'http://localhost:3030' */ "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // CORS filtering

    console.log(req.method, req.url);
    // Job login

    next(); 
    // make sure we go to the next routes and don't stop here
})


// SETUP THE ROUTES
// ===============================================================================

router.get('/', (req, res) => {
// test route to make sure everything is working
// accessed at GET http://localhost:8080/api

    res.json({ message: 'Howdy! Welcome to Dinos! :)' })

})

router.route('/dinos')
// on routes that end with /dinos

    .post((req, res) => {
    // create a dino 
    // accessed at POST http://localhost:8080/dinos
    // Example request params
    //  Body | x-www-form-urlencoded
    //  name: Mr. Dino

        
        var dino = new Dino();      // create a new instance of the Dino model
        dino.name = req.body.name;  // set the dinos name (comes from the request)

        dino.save()
            .catch((err) => {res.send(err)})
            .then(() => {

                res.json({ message: 'Dino created!' })

            })                
    })

    .get((req, res) => {
    // list the dinos 
    // accessed at GET http://localhost:8080/api/dinos

        console.log('q-query:',req.query['q'] != undefined)

        if( !req.query['q'] || req.query['q'] == '' ){

            Dino.find()
                .catch((err) => { res.send(err) })
                .then((dinos) => { res.json(dinos) }) 

        } else {


// FULL-TEXT SEARCH
// ===============================================================================
// GET /dinos?q=dummy%20text

            console.log('query:',req.query)
            Dino.find(
              {$text: {$search: req.query['q']}}
            )
              .catch((err) => { res.send(err) })
              .then((posts) => {
                console.log(posts)
                res.json(posts) })

        }
    })

router.route('/dinos/:dino_id')
// on routes that end in /dinos/:dino_id

    .get((req, res) => {
    // get a dino with given id 
    // accessed at GET http://localhost:8080/api/dinos/:dino_id
    
        Dino.findById(req.params.dino_id)
            .catch((err) => { res.send(err) })
            .then((dino) => { res.json(dino) })                
    })

    .put((req, res) => {
    // update the dino with this id 
    // accessed at PUT http://localhost:8080/api/dinos/:dino_id
    // Example request params
    //  Body | x-www-form-urlencoded
    //  name: Sir. Dino


        Dino.findById(req.params.dino_id)
        // use the dino model to find a dino we want
            .catch((err) => { res.send(err) })
            .then((dino) => { 

                dino.name = req.body.name;  
                // update the dino info

                dino.save()
                    .catch((err) => {res.send(err)})
                    .then(() => {

                        res.json({ message: 'Dino updated!' })

                    })                                

            })
    })

    .delete((req, res) => {
    // delete the dino by id 
    // accessed at DELETE http://localhost:8080/api/dinos/:dino_id

        Dino.remove({
            _id: req.params.dino_id
        })
            .catch((err) => { res.send(err) })
            .then((dino) => { 

                res.json({ message: 'Dino deleted' });

            })
    })

app.use('/api', router)
// Register the routs
// all of the routes will be prefixed with /api


// CONNECTING TO MONGODB
// ===============================================================================

console.log("Mongoose version:", mongoose.version);
// Pront the mongoose version

mongoose.Promise = Promise; 
// Attach ES6 promises to mongoose

mongoose.connect(MDB_URL) // connect to our database
// I've used [Mongolab](https://mlab.com) free account within 500MB of sandbox.

mongoose.connection
// With DB connection...

    .on('error', console.error.bind(console, 'connection error:'))
    // Notify about DB errors is any.

    .once('open', () => {
    // Start the app when (if) DB is ready.  

        console.log('Database is connected')                       

// STARTING THE SERVER
// ===============================================================================

        app.listen(port)
        console.log('Dinos happens on port ' + port)

});
