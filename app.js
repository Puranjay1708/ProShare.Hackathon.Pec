const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
mongoose.connect('mongodb+srv://puranjaybt22ele:cyl0Ww39mziebs6L@testproject.rimm4rt.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

app.use(bodyParser.json());

// Routes
app.use('/auth', require('./routes/auth.js'));
app.use('/trading', require('./routes/trading.js'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
