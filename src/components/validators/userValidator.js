import Joi from "joi";

const userValidator = Joi.object({
    name: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,40}$/).required().messages({
        'string.pattern.base':'Тільки букви від 1 до 20 символів'
    })
})


export {
    userValidator
}
