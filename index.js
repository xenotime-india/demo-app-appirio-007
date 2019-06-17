const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Bug-fix 001!'));
app.get('/user', (req, res) =>
        console.log('h');
  res.json({ name: 'ram', age: 23, city: 'jaipur' })
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
