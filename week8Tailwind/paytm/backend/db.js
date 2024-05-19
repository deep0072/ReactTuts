const mongoose = require("mongoose");
const uri = ""
mongoose.connect(uri)
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



const accountSchema = new mongoose.Schema({
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

// Create a model from the schema
const User = mongoose.model("User", userSchema);

// Create a model from the bankSchema
const Account = mongoose.model("Account", accountSchema);

module.exports = {
  User,
  Account
};
