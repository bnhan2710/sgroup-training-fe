const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Hello World hihi!')
})

app.get('/test',(req,res)=>{
  res.send('Test')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

