import bytes from 'bytes'
import mime from 'mime-types'
import { UUID_TRANSLATOR} from '@/configs'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


class FileUpload {
    static UPLOAD_FOLDER = 'post_files' 

    //nhận file từ request và tạo tên file mới
    constructor({originalname, mimetype, buffer}) {
        this.originalname = originalname
        this.mimetype = mimetype
        this.buffer = buffer
        this.filename = `${UUID_TRANSLATOR.generate()}.${mime.extension(this.mimetype)}`
    }

    //trả thông tin file dạng Json
    toJSON() {
        const {buffer, ...rest} = this
        rest.filesize = bytes(Buffer.byteLength(buffer))
        return rest
    }

    // chuyển đổi file về url
    toString() {
        return this.filepath || this.originalname
    }

    
    // upload file lên cloudinary và lấy url
    save(...paths) {
        if (!this.filepath) {
            return new Promise((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: `${FileUpload.UPLOAD_FOLDER}/${paths.join('/')}` },
                    (error, result) => {
                        if (error) return reject(error)
                        this.filepath = result.secure_url // Lưu URL ảnh Cloudinary
                        resolve(this.filepath)
                    }
                )
                uploadStream.end(this.buffer)
            })
        } else {
            throw new Error('File saved. Use the "filepath" attribute to retrieve the file path.')
        }
    }

    // Xóa file khỏi Cloudinary theo URL
    static remove(filepath) {
        if (!filepath) return Promise.reject(new Error('Filepath is required'))

        // Lấy phần đường dẫn sau thư mục "upload/" trên Cloudinary (bỏ domain)
        const publicId = filepath
            .split('/')
            .slice(-2) // Lấy thư mục + tên file
            .join('/')
            .split('.')[0] // Bỏ phần mở rộng

        return cloudinary.uploader.destroy(publicId)
    }

}

export default FileUpload
 