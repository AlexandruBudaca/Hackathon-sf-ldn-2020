const mongoose = require("mongoose");
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
    type:String,
    required:true,
  }

})
