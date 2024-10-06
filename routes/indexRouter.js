const { Router } = require("express");
const formRouter = require("./formRoute");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

indexRouter.use('/new', formRouter)

indexRouter.get("/", (req, res) => {
  res.render("messages", { title: "Mini Message Board", messages: messages })
});

indexRouter.get('/message/:id', (req, res) => {
  const message = messages[req.params.id]
  res.render('message', { title: 'Message Details', message: message });
})

indexRouter.post('/new', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })
  res.send('   <p>Message sent!</p> <a href="http://localhost:3000/">Home</a> ')
})

module.exports = indexRouter;