const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const getAllMessagesController = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages()
    if (!messages) { res.status(404).send('messages not found') }
    res.render("messages", { title: "Message Board", messages: messages })
})

const getMessageController = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages()
    if (!messages) { res.status(404).send('messages not found') }
    const message = messages[req.params.id]
    res.render('message', { title: 'Message Details', message: message });
})

module.exports = { getAllMessagesController, getMessageController }