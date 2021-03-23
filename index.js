const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('How are you everyone. I am learning Node Express')
})

app.listen(4200, () => console.log('listening to port 4200'))