const boom = require('@hapi/boom');

function validate(body, schema) {
  console.log(body);
  console.log(schema);
  return false;
}

function validationHandler(schema, check = 'body') {
  return function(req, res, next) {
    const error = validate(req[check], schema);
    error ? next(boom.badRequest(error)) : next();

  };
}

module.exports = validationHandler;
