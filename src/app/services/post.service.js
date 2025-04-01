import Post from '@/models/post'
import { FileUpload } from '@/utils/classes'
 
 
export async function createPost({image,...requestBody}){
    if(image instanceof FileUpload){
        requestBody.image= await image.save() 
    } 

    const post = new Post(requestBody)

    return await post.save()
}

export async function getAllPosts(){
    return await Post.find() 
}
 
export async function getPostById(postId){
    
    const post = await Post.findById(postId)
    if(!post){
        throw new Error('Post not found')
    }

    return post
}

export async function updatePost(postId, {image,...updateData}){
    const post = await Post.findById(postId)
    if(!post ){
        throw new Error('Post not found')
    }
    if(image instanceof FileUpload){
        if(post.image){
            await FileUpload.remove(post.image)
        }
        updateData.image=await image.save() 

    }

    Object.assign(post,updateData)
    return await post.save()
}

export async function deletePost(postId){
    const deletedPost = await Post.findByIdAndDelete(postId)
    if (!deletedPost){
        throw new Error('Post not found.')
    }
    return deletedPost
}

