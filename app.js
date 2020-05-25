const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

app.get('/', (req, res) => {
    res.end("Phishy Server.");
});

app.post('/process-url', (req, res) => {
    fetch(req.body.url)
        .then(res => res.text())
        .then(body => console.log(body));
});

app.listen(port, () => console.log(`Listening on port: ${port}`))