const {
    validate, Joi
} = require('express-validation');
const validateIDsRequest = validate({
    body: Joi.object({
        count: Joi.number().required().min(1)
    }),
}, {
    statusCode: 422,
})

module.exports = {
    validateIDsRequest
};