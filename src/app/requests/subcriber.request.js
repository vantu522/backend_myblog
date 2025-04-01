import Joi from 'joi'
import { message } from 'statuses'

export const createSubcriber = Joi.object({
    email:Joi.string().trim().email().required().label('Email'),
    message:Joi.string().trim().required().label('Lời nhắn')
})