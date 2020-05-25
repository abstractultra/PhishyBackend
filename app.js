const express = require('express');
const app = express();
const port = process.env.PORT || 4001;
const fetch = require('node-fetch');

app.get('/', (req, res) => {
    res.end("Phishy Server.");
});

app.use(express.json());

app.post('/process-url', (req, res) => {
    fetch(req.body.url)
        .then(res => res.text())
        .then(body => console.log(body));
});

app.listen(port, () => console.log(`Listening on port: ${port}`))