import bcrypt from 'bcrypt'
import createModel from './base'

const User = createModel(
    'User',
    'users',
    {
        name: {
            type: String,
            required: true,
        }, 
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength:6,
            set(password) {
                const salt = bcrypt.genSaltSync(10)
                return bcrypt.hashSync(password, salt)
            },
        },
        phone: {
            type: String,
            default: '',
            unique: true
        },
        avatar: {
            type: String,
            default: '',
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        },
    },
    {
        toJSON: {
            virtuals: false,
            transform(doc, ret) {
                // eslint-disable-next-line no-unused-vars
                const {password, ...result} = ret
                return result
            },
        },
        methods: {
            verifyPassword(password) {
                return bcrypt.compareSync(password, this.password)
            },
        },
    }
)

export default User
