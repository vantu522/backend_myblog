import Subcriber from '@/models/subcriber'

export async function createSubcriber(requestBody){
    const subcriber = new Subcriber(requestBody)
    return await subcriber.save()

}

export async function getAllSubcriber(){
    return await Subcriber.find()
}

export async function deleteSub(id){
    const deletedSub = await Subcriber.findByIdAndDelete(id)
    if(!deleteSub){
        throw new Error('Subcriber not found.')
    }
    return deletedSub
}

export async function updateSub(id,updateData){
    const sub = await Subcriber.findById(id)
    if(!sub){
        throw new Error('Subcriber not found')
    }
    Object.assign(sub,updateData)
    return await sub.save()
}