import authRouter from './auth.router'
import userRouter from './user.router'
import postRouter from './post.route'
import subRouter from './subcriber.route'
function route(app) {
    app.use('/auth', authRouter)
    app.use('/users', userRouter)
    app.use('/post', postRouter)
    app.use('/subcriber',subRouter)
}

export default route 
