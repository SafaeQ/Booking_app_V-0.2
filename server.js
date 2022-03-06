const express = require('express');
const app = express()
const port = 8000;
const connect = require("./connection/db");
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())

const router = require('./router/routes')
const authRouter = require('./router/auth.routes')
const ownerRouter = require('./router/owner.routes')
const hotelRouter = require('./router/hotel.routes')
const roomRouter = require('./router/room.routes')
const reserveRouter = require('./router/reservation.routes')


app.use('/', router)
app.use('/auth', authRouter)
app.use('/api', ownerRouter)
app.use('/api', hotelRouter)
app.use('/api', roomRouter)
app.use('/api', reserveRouter)
connect()
    .catch((error) => {
        throw error
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`The server is listening on port http://localhost:${port}`);
        })
    })