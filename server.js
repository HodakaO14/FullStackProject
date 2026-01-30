const express = require('express')
const app = express()
app.use(express.static('FRONTEND'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/FRONTEND/pages/index.html')
})
app.post('/login', (req, res) => {
  const { email, password } = req.body
  console.log("LOGIN:", email, password)
  res.send("Login success")
})
app.listen(3000, () => console.log("Server running on http://localhost:3000"))
