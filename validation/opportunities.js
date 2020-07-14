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

  if (!Validator.isLength(data.company)) {
    errors.company = 'Invalid input';
  }

  if (!Validator.isLength(data.role)) {
    errors.role = 'Invalid input';
  }
  if (!Validator.isLength(data.type)) {
    errors.type = 'Invalid input';
  }
  if (!Validator.isLength(data.minimum_proficiency)) {
    errors.minimum_proficiency = 'Invalid input';
  }
  if (!Validator.isLength(data.location)) {
    errors.location = 'Invalid input';
  }
  if (!Validator.isLength(data.description)) {
    errors.description = 'Invalid input';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
