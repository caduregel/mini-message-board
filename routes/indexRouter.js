const { Router } = require("express");
const formRouter = require("./formRoute");
const getMessagesController = require("../controllers/getMessagesController");

const indexRouter = Router();

indexRouter.use('/new', formRouter)

indexRouter.get("/", getMessagesController.getAllMessagesController);

indexRouter.get('/message/:id', getMessagesController.getMessageController)



module.exports = indexRouter;