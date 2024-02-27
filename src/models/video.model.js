import mongoose,{Schema} from "mongoose";

const videoSchema = new Schema({

    videofile  :{
        type  : String, // cloudinary url
        required : true,

    },
    thumbnail  :{
        type : String, // cloudinary url
        required : true,

    },
    title :{
        type : String, 
         required:   true,

    },
    description :{
        type : String, 
        required : true,

    },
    duration :{
        type : Number, // cloudinary url
         required:   true,

    },
    views :{
        type  : Number,
        default : 0,

    },
    isPublished  :{
        type : Boolean,
        default : true,

    },

    owner  :{
        type  : Schema.type.ObjectId,
        ref : 'User',
    }

}, {timestamps : true}
)

export const Video = mongoose.model('Video', videoSchema)   