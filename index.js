const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('This should be returned... <b>Cool, hu?</b>')
})

app.listen(3000, () => console.log('Server running on port 3000'))