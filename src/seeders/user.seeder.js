import {User} from '@/models'

async function userSeeder(session) {
    const email = 'tuduongvan2305@gmail.com'
    const password = '12345678Dt@'
    let superAdmin = await User.findOne({email})
    if (!superAdmin) {
        superAdmin = new User({name: 'Super Admin', email, password})
        await superAdmin.save({session})
    }
}

export default userSeeder
