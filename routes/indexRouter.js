const { Router } = require("express");
const formRouter = require("./formRoute");
const getMessagesController = require("../controllers/getMessagesController");

const indexRouter = Router();

indexRouter.use('/new', formRouter)

indexRouter.get("/", getMessagesController.getAllMessagesController);

indexRouter.get('/message/:id', getMessagesController.getMessageController)

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  res.send('   <p>Message sent!</p> <a href="/">Home</a> ')
})

module.exports = indexRouter;