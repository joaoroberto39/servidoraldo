const express = require('express')

const app = express()

const port = process.env.port || 3000

app.listen(port)

console.log('servidor funcionando', port)