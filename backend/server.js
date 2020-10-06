const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000

// Middleware
app.use(cors());
app.use(express.json());

// DB config
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Require Routes
const movieRoute = require('./routes/movie.route');

// Use Routes
app.use('movies/', movieRoute);

app.listen(port, (req, res) => {
    console.log(`Server started on port: ${port}`);
})
