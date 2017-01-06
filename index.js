const express = require('express')
const User = require('./users.json')
const app = express()


app.get('/:username', (req, res) => {
  const user = req.params.username
  for (i = 0; i < User.length; i++ ) {
    if (User[i].username === user) {
      res.json(User[i])
    }
  }  
})

app.listen(3000)