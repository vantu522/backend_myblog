import { Router } from 'express'
import {asyncHandler} from '@/utils/helpers'
import validate from '@/app/middleware/common/validate'
import * as postRequest from '../app/requests/post.request'
import * as postController from '../app/controllers/post.controller'


const postRouter = Router()


postRouter.post(
    '/create',
    asyncHandler(validate(postRequest.createPost)),
    asyncHandler(postController.create)
)

postRouter.get(
    '/',
    asyncHandler(postController.getAllPost)
    
)
 
postRouter.get(
    '/:postId',
    asyncHandler(postController.getPostById)
)


postRouter.put(
    '/update/:id',
    asyncHandler(postController.updatePost)
)

postRouter.delete(
    '/delete/:id',
    asyncHandler(postController.deletePost)
)
 
 
export default postRouter