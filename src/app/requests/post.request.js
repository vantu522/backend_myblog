import Joi from 'joi'
import { MAX_STRING_SIZE } from '@/configs'


export const createPost = Joi.object({
    title:Joi.string().trim().max(MAX_STRING_SIZE).required().label('Tiêu đề'),
    author: Joi.string().required().label('Tác giả'),
    content:Joi.string().required().label('Nội dung'),
    image: Joi.object({
        mimetype: Joi.valid('image/jpeg', 'image/png', 'image/webp').required().label('Định dạng ảnh'),
    }).unknown(true).label('Ảnh bìa').allow(''),
    status:Joi.string().valid('public', 'private').label('Trạng thái')

})