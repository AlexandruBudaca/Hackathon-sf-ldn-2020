<<<<<<< Updated upstream
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CompanySchema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  password:{
=======
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  companyName:{
    type:String,
    required:true,
  },
  companyEmail:{
    type:String,
    required:true,
  },
  companyPassword:{
>>>>>>> Stashed changes
    type:String,
    required:true,
  },
  date:{
<<<<<<< Updated upstream
    type: String,
    default: Date.now()
  }

})
module.exports = Company = mongoose.model("companies", CompanySchema);
=======
    type:Date,
    default:Date.now
  }
});

module.exports= Company = mongoose.model('company',CompanySchema)
>>>>>>> Stashed changes
