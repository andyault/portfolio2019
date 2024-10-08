const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const https = require('https');

// config
require('dotenv').config();

const useHttps = process.env.PORTFOLIO_USE_HTTPS;
const certPath = process.env.PORTFOLIO_CERT_PATH;
const caPath = process.env.PORTFOLIO_CA_PATH;
const keyPath = process.env.PORTFOLIO_KEY_PATH;

//
const app = express();

// redirect to https
if (useHttps) {
  app.use((req, res, next) => {
    if (req.protocol === 'http') {
      res.redirect(301, `https://${req.headers.host}${req.url}`);
    }
    next();
  });
}

app.use(express.static(path.join(__dirname, '../dist')));

// SPA
const index = path.join(__dirname, '../dist/index.html');
app.get('*', (_, res) => res.sendFile(index));

// run server
const httpServer = http.createServer(app);
httpServer.listen(80);

if (useHttps) {
  const httpsOptions = {
    cert: fs.readFileSync(certPath),
    ca: caPath ? fs.readFileSync(caPath) : undefined,
    key: fs.readFileSync(keyPath),
  };

  const httpsServer = https.createServer(httpsOptions, app);
  httpsServer.listen(443);
}
