const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOpportunitiesInput(data) {
  let errors = {};
  
  data.company= !isEmpty(data.company)? data.company : '';
  data.role= !isEmpty(data.role)? data.role : '';
  data.type= !isEmpty(data.type)? data.type : '';
  data.minimum_proficiency= !isEmpty(data.minimum_proficiency)? data.minimum_proficiency : '';
  data.location= !isEmpty(data.location)? data.location : '';
  data.description= !isEmpty(data.description)? data.description : '';

  if ((!Validator.isLength(data.company), { min: 2, max: 40 })) {
    errors.company = "Invalid input";
  }

  if ((!Validator.isLength(data.role), { min: 2, max: 40 })) {
    errors.role = "Invalid input";
  }
  if ((!Validator.isLength(data.type), { min: 2, max: 40 })) {
    errors.type = "Invalid input";
  }
  if ((!Validator.isLength(data.minimum_proficiency), { min: 2, max: 40 })) {
    errors.minimum_proficiency = "Invalid input";
  }
  if ((!Validator.isLength(data.location), { min: 2, max: 40 })) {
    errors.location = "Invalid input";
  }
  if (!Validator.isLength(data.description),{ min: 2, max: 40 }) {
    errors.description = 'Invalid input';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
