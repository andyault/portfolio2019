const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

//
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.ca-bundle')),
  key: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.key'))
};

const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

app.use((req, res, next) => {
  if (req.protocol === 'http') {
    res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
});

app.use(express.static(path.join(__dirname, 'docs')));

//
const index = path.join(__dirname, 'docs/index.html');
app.get('*', (req, res) => res.sendFile(index));

//
httpServer.listen(80);
httpsServer.listen(443);