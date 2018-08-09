let express = require('express');
let app = express();
let port = process.env.port || 8080;
let router = express.Router();
let mongoose = require('mongoose');

let db = mongoose.connect('mongodb://localhost/bookApi');

router.get('/books', (req, res) => {
    res.send({
        book: 'Eloquent javascript'
    })
});

app.use('/api', router);

app.get('/', (req, res) => {
    res.send({
        key: "Wellcome to express"
    })
});

app.listen(port, () => {
    console.log(`App works on port ${port}`);
});