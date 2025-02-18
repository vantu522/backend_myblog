import * as postService from '../services/post.service'


export async function create(req,res){
    const newPost = await postService.createPost(req.body)
    res.status(201).jsonify(newPost, 'dang ki thanh cong')
}

export async function getAllPost(req,res){
    const posts = await postService.getAllPosts()
    res.json(posts)
    
}

export async function updatePost(req,res){
    const post = await postService.updatePost(req.params.id, req.body)
    res.status(201).jsonify(post, 'Cập nhật bài viết thành công.')
}