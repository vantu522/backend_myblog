import Post from '@/models/post'
import { FileUpload } from '@/utils/classes'


export async function createPost({image,...requestBody}){
    if(image instanceof FileUpload){
        requestBody.image= image.save()
    }

    const post = new Post(requestBody)
    return await post.save()
}


