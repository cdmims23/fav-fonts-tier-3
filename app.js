const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})