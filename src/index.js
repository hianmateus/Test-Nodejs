const express = require('express')
const uuid = require('uuid')

const app = express()
const PORT = 3001
app.use(express.json())


const users = []

app.get('/users', (request, response) => {

    return response.json(users)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.json(user)
})

app.listen(PORT, () => {
    console.log(`App online na porta ${PORT}`)
})

