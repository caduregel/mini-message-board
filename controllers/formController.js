const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

const postForm = asyncHandler(async (req, res) => {
    const message = {
        text: req.body.text,
        user: req.body.user,
        added: new Date()
    }
    console.log(message)
    db.postMessage(message.text, message.user, message.added)
    res.send('   <p>Message sent!</p> <a href="/">Home</a> ')
})

module.exports = postForm