const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

//
const app = express();

const root = path.join(__dirname, 'docs');
app.use(express.static(root));

//
const index = path.join(root, 'index.html');
app.get('*', (req, res) => res.sendFile(index));

//
const httpsOptions = {
  cert: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.crt')),
  ca: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.ca-bundle')),
  key: fs.readFileSync(path.join(__dirname, 'ssl/andrewault.me.key'))
};

const server = https.createServer(httpsOptions, app);
const port = process.env.PORT || 80;
server.listen(port, () => console.log('running on port ' + port));