import createModel from './base'

const Subcriber = createModel(
    'Subcriber',
    'subcribers',
    {
        email:{
            type:String,
            required:true
        },
        message: {
            type: String,
            required: true
        },
        status:{
            type: String,
            enum:['pending', 'completed'],
            default: 'pending'
        }

        
    }
)

export default Subcriber