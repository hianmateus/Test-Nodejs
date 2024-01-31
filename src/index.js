const express = require('express')
const uuid = require('uuid')

const app = express()
const PORT = 3001


app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})


const users = []

app.get('/users', (request, response) => {
    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body;

    console.log(uuid.v4())

    return response.json(users)
})
