let messages = []
let id = 0

module.exports = {
    read: (req, res) => {
        res.status(200).send(messages)
    },
    create: (req, res) => {
        const {text, time} = req.body
        let message = {
            id: id,
            text: text,
            time: time
        }
        messages.push(message)
        id++
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const deleteID = req.params.id
        const deleteIndex = messages.findIndex(message => message.id == deleteID)
        messages.splice(deleteIndex, 1)
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const {text, time} = req.body;

        const updateID = req.params.id;
        const updateIndex = messages.findIndex(message => message.id == updateID)
        let message = messages[updateIndex]

        messages[updateIndex] = {
            id: message.id,
            text: text || message.text,
            time: time || message.time
        }
        res.status(200).send(messages)
    }
}