const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  //MongoDB  dummy data user info
  mongoURI: process.env.MONGOLAB_URI,
  JWT_KEY: process.env.JWT_KEY
};