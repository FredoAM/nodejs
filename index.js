const express = require('express');
const path = require('path');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const htmlFilePath = path.join(__dirname, 'public/index.html');

app.get('/', (req, res) => {
  res.sendFile(htmlFilePath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
