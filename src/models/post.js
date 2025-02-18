import createModel from './base'

const Post = createModel(
    'Post',
    'posts',// ten collection
    {
        title:{
            type: String,
            required: true

        },
        author:{
            type: String,
            default:'Admin',
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image:{
            type:String,
            default:''
        },
        status:{
            type: String,
            enum:['private', 'public'],
            default: 'public'
        }
    }
)

export default Post
