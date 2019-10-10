const express = require("express");
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Define middleware here
app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Requiring our models
var db = require("./models");

// Define API routes here
// app.use(routes);

app.post('/', (req, res, next) =>{
  console.log('user/signup, req.body.username: ')
  console.log(req.body.username)
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})

