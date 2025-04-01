import Joi from 'joi'
import { message } from 'statuses'

export const validSubcriber = Joi.object({
    email:Joi.string().trim().email().required().label('Email'),
    message:Joi.string().trim().required().label('Lời nhắn'),
    status:Joi.string().valid('pending','completed').label('Trạng thái')
})