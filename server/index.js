const express = require('express')
const messages = require('./controllers/messages_controller')

const app = express()
app.use(express.json())

app.get('/api/messages', messages.read)
app.post('/api/messages', messages.create)
app.delete('/api/messages/:id', messages.delete)
app.put('/api/messages/:id', messages.update)

const port = 3001;

app.listen(port, () => {
    console.log(`Server running on ${port}`)
})