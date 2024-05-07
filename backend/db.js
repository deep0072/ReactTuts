const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paytm")
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    miniLength: 3,
    maxLength: 33,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxLength: 33,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,   
    maxLength: 33,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,   
    maxLength: 33,
  },
});

// Create a model from the schema
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
