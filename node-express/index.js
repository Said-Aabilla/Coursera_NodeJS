const express = require('express'),
    http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const dishRouter = require('./routes/dishRouter');
app.use('/dishes', dishRouter);

const promotionRouter = require('./routes/promotionRouter');
app.use('/promotions', promotionRouter);

const leaderRouter = require('./routes/leaderRouter');
app.use('/leaders', leaderRouter);



app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});