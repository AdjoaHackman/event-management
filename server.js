const express = require('express');
const session = require('express-session');
const db = require('./config/connection');
const routes = require('./routes');


const PORT = process.env.PORT || 3001;
const app = express();

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);
//require the config connection and the port and call the express server and routes once created

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
