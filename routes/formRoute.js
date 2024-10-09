const { Router } = require("express");
const postForm = require("../controllers/formController");

const formRouter = Router();

formRouter.get("/", (req, res) => res.render("form", {})
);

formRouter.post('/', postForm)


module.exports = formRouter;