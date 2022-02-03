const express = require('express');
const app = express()
const port = 8000;

const router = require('./router/routes')

app.use('/', router)

app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`);
})