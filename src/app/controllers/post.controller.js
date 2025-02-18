import * as postService from '../services/post.service'


export async function create(req,res){
    const newPost = await postService.createPost(req.body)
    res.status(201).jsonify(newPost, 'dang ki thanh cong')
}