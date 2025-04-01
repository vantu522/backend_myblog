import createModel from './base'

const Subcriber = createModel(
    'Subcriber',
    'subcribers',
    {
        email:{
            type:String,
            required:true
        },
        messgae: {
            type: String,
            required: true
        }

        
    }
)

export default Subcriber