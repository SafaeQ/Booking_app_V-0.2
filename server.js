const express = require('express');
const app = express()
const port = 8000;
const connect = require("./connection/db");

const router = require('./router/routes')
const authRouter = require('./router/auth.routes')
const ownerRouter = require('./router/owner.routes')

app.use(express.json())
app.use('/', router)
app.use('/auth', authRouter)
app.use('/api', ownerRouter)

connect()
    .catch((error) => {
        throw error
    })
    .then(() => {
        app.listen(port, () => {
            console.log(`The server is listening on port http://localhost:${port}`);
        })
    })