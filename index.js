const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')


const userRouter = require('./api/routes/user')
const roomsRouter = require('./api/routes/rooms')


const {MongoURL, port} = require('./config/mLabConfig');

// mongodb://<dbuser>:<dbpassword>@ds153974.mlab.com:53974/cinema
mongoose.connect(MongoURL, { useNewUrlParser: true })
    .then(() => console.log('connected to mLab DB'))
    .catch(error => console.error('Could not connect to mLab DB', error));

const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/collections/users', userRouter);
app.use('/collections/rooms', roomsRouter);

app.listen(port, () => console.log('listening on port ' + port));

app.get('/collections/test', (req, res) => {
    res.send('yep im running')
    console.log('yep im running')
})