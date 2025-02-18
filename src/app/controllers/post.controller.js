import * as postService from '../services/post.service'


export async function create(req,res){
    const newPost = await postService.createPost(req.body)
    res.status(201).jsonify(newPost, 'Tạo bài viết mới thành công.')
}

export async function getAllPost(req,res){
    const posts = await postService.getAllPosts()
    res.json(posts)
    
}

export async function updatePost(req,res){
    const post = await postService.updatePost(req.params.id, req.body)
    res.status(201).jsonify(post, 'Cập nhật bài viết thành công.')
}


export async function deletePost(req,res){
    const deletedPost = await postService.deletePost(req.params.id, req.body)
    res.status(201).jsonify(deletedPost,'Xoá bài viết thành công.')
}