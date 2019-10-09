const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-f-A-F]{24}$/);

const createUserSchema = {
    nombre: joi.string().max(100).required(),
    email: joi.string.email().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean()
};

module.exports = {
    userIdSchema,
    createUserSchema
}