import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'/upload/')
    },

    filename: function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname)
    }
})

// file validation

const fileFilter = (req,file,cb)=>{

    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png'){
        cb(null,true)
    }
    else{
        // prevent file upload

        cb({message:"unsupported file format"},false)
    }
}

const upload = multer({
    storage,
    limits:{fileSize: 1024*1024},
    fileFilter
})

export default upload;