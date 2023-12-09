const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

const htmlFilePath = path.join(__dirname, 'index.html');

app.get('/', (req, res) => {
  res.sendFile(htmlFilePath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
