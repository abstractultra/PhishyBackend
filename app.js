const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const fetch = require("node-fetch");
const cheerio = require("cheerio");

app.get("/", (req, res) => {
  res.end("Phishy Server.");
});

app.use(express.json());

async function getUrlContents(url) {
  const res = await fetch(url);
  const body = await res.text();
  return body;
}

function scrapeFirstParagraph(body) {
  const $ = heerio.load(body);
  const firstParagraph = $("p").eq(0).text();
  return firstParagraph;
}

async function getUrlParagraph(url) {
  const body = await getUrlContents(url);
  const paragraph = scrapeFirstParagraph(body);
  return paragraph;
}

app.post("/process-url", (req, res) => {
  getUrlContents(req.body.url).then((body) => res.json({ data: body }));
});

app.post("/scrape-url", (req, res) => {
  getUrlParagraph(req.body.url).then((paragraph) => res.json({ data: paragraph }));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
