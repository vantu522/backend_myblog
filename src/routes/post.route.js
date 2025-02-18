import { Router } from 'express'
import {asyncHandler} from '@/utils/helpers'
import validate from '@/app/middleware/common/validate'
import * as postRequest from '../app/requests/post.request'
import * as postController from '../app/controllers/post.controller'


const postRouter = Router()


postRouter.post(
    '/create-post',
    asyncHandler(validate(postRequest.createPost)),
    asyncHandler(postController.create)
)

postRouter.get(
    '/',
    asyncHandler(postController.getAllPost)
    
)

postRouter.put(
    '/update-post/:id',
    asyncHandler(postController.updatePost)
)

postRouter.delete(
    '/delete-post/:id',
    asyncHandler(postController.deletePost)
)
 
 
export default postRouter