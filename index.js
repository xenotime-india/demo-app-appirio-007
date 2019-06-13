const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/user', (req, res) =>
  res.json({ name: 'ram', age: 23, city: 'jaipur' })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
