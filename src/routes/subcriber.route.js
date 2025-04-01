import { Router } from 'express'
import { asyncHandler } from '@/utils/helpers'
import validate from '@/app/middleware/common/validate'
import * as subRequest from '../app/requests/subcriber.request'
import * as subController from '../app/controllers/subcriber.controller'


const subRouter = Router()

subRouter.post(
    '/create',
    asyncHandler(validate(subRequest.validSubcriber)),
    asyncHandler(subController.create)
) 

subRouter.get(
    '/',
    asyncHandler(subController.getAllSub)
)

subRouter.delete(
    '/delete/:id',
    asyncHandler(subController.deleteSub)
)

subRouter.put(
    '/update/:id',
    asyncHandler(validate(subRequest.validSubcriber)),
    asyncHandler(subController.updateSub)
)


export default subRouter