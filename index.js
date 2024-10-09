// Express
const express = require("express");
const app = express();
// Routes
const indexRouter = require('./routes/indexRouter')

//dotenv
require('dotenv').config('../.env')

app.use(express.urlencoded({ extended: true }));

// Views
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/', indexRouter)

// Tell app to listen on PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));