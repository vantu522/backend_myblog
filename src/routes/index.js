import authRouter from './auth.router'
import userRouter from './user.router'
import postRouter from './post.route'

function route(app) {
    app.use('/auth', authRouter)
    app.use('/users', userRouter)
    app.use('/p', postRouter)
}

export default route 
