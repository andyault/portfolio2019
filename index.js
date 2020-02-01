const express = require('express');
const path = require('path');

const root = path.join(__dirname, 'docs');

const app = express();
app.use(express.static(root));

const index = path.join(root, 'index.html');
app.get('*', (req, res) => res.sendFile(index));

const port = process.env.PORT || 80;
app.listen(port, () => console.log('running on ' + port));