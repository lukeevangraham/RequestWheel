const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passport = require("./passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");
// const user = require('./routes/api/users')
const match = require("react-router");

// Define middleware here
app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// sessions
app.use(
  session({
    store: new FileStore({
      path: "./sessions", // Sessions go to the disk, not RAM
      ttl: 86400 * 7, // Audo-delete sessions after 7 days
    }),
    secret: "the-natural",
    resave: false,
    saveUninitialized: false,
  }),
);
// app.use( (req, res, next) => {
//   console.log('req.session', req.session);
//   return next();
// });

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Requiring our models
var db = require("./models");

// Define API routes here
app.use(routes);

// app.use((req, res, next) => {
//   match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
//     if (error) {
//       res.status(500).alert(error.message)
//     } else if (redirectLocation) {
//       res.redirect(302, redirectLocation.pathname + redirectLocation.search)
//     } else if(renderProps) {
//       res.status(200)
//     } else {
//       res.status(404).send('Not found')
//     }
//   } )
// })

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
