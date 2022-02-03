const express = require('express');
const app = express()
const port = 8000;


app.use('/', router)

app.listen(port, () => {
    console.log(`The server is listening on port http://localhost:${port}`);
})