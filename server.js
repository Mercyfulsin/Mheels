require("dotenv").config();
const express = require('express');
const { join } = require('path');
const morgan = require('morgan');
const routes = require("./utils");
const app = express();
const db = require("./models");

app.use(morgan("dev"));
// Serve the static files from the React app
app.use(express.static(join(__dirname, 'client/build')));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize.sync({ force: false , alter : true });

// Routes
app.use(routes);


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);