const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  //MongoDB  dummy data user info
  mongoURI: `mongodb+srv://AlexandruBudaca:${process.env.password}@alex.njtpl.mongodb.net/${process.env.mongoCollection}?retryWrites=true&w=majority`,
  JWT_KEY: "secret",
};
