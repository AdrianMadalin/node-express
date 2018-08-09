/*
NODEJS AND EXPRESS

REST stands for - representational state transfer
                -- a series of rules in place for your server so that everyone that uses your service understands how it works

EXPRESS
installing express npm i --save express

Creating a simple webserver with express:
let express = require('express');
let app = express();
let port = process.env.port || 8080;

app.get('/', (req, res) => {
    res.send({
        key: "Wellcome to express"
    })
});

app.listen(port, () => {
    console.log(`App works on port ${port}`);
});

run the file with node filename.js
Alternativ you can install the nodemon package (npm i -g nodemon) wich will look for changes in your files and restart the server automatically
Add a package.json file with npm init
In the scripts object add "start": "nodemon filename.js"

GETTING DATA
CREATING ROUTES
Routes in express can be created using a router;
let express = require('express');
let app = express();
let router = express.Router();          // instantiate the router

// create a get request to /api/books and send back a json object
router.get('/books', (req, res) => {
    res.send({
        book: 'Eloquent javascript'
    })
});
// tell express to append /api in front of every router request
app.use('/api', router);

INSTALL MONGODB
Mongo db can be downloaded from here: https: //www.mongodb.com/download-center?jmp=nav


More on express framework can be found here https: //expressjs.com/

*/