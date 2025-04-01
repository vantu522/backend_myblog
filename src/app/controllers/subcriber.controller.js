import * as subcriberService from '../services/subcriber.service'

export async function create(req,res){
    const newSub = await subcriberService.createSubcriber(req.body)
    return res.status(201).jsonify(newSub,'Gửi lời nhắn thành công')
}


export async function getAllSub(req,res){
    const subs = await subcriberService.getAllSubcriber()
    res.json(subs)
}

export async function deleteSub(req,res){
    const deletedSub = await subcriberService.deleteSub(req.params.id, req.body)
    res.status(201).jsonify(deletedSub,'Xoá lời nhắn thành công!')
}

export async function updateSub(req,res){
    const updatedSub = await subcriberService.updateSub(req.params.id,req.body)
    res.status(200).jsonify(updatedSub,'Cập nhật thành công')   
}