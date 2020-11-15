const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello Node.Js React js ')
})

app.listen(process.env.PORT || port)
