import Joi from "joi";

const userValidator = Joi.object({
    id: Joi.string().regex(/^[0-1]{1,20}$/).required().messages({
    }),
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]$/).required().messages({
    }),
})


export {
    userValidator
}