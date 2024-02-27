import mongoose, {Schema} from "mongoose";

const userSchema = new Schema (
    {
        username :{
            type : String,
            required : true,
            lowercase : true,
            trim : true,
            unique : true,
            index : true,

        },
        email  :{
            type : String,
            required : true,
            lowercase : true,
            trim : true,
            unique : true,
           

        },
        fullname :{
        type : String,
        required : true,
        trim : true,
        index : true,

        },

        avatar  :{
            type : String, // cloudinary url
            required:   true,


        },
        coverimage  :{
            type : String, // cloudinary url
            

        },

        watchHistory :[
        {
            type : Schema.Types.ObjectId,
            ref : 'Video'

        }

    ],
    password  :{
        type : String,
        required : [true, 'Password is required'],
        

    },
    refreshToken :{
        type : String,

    }

}, {timestamps : true}

)

export const User = mongoose.model('User', userSchema)