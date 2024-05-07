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

const bankSchema  = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User' ,// kind of foreign key that will store  object id
    required:true
  },

  balance:{
    type:Number,
    required:true

  }

})

module.exports = {
  User,
};
