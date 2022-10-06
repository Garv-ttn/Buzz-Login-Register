const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type:String,
        unique: true,
        min:3,
        max:20,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        max:50,
        required:true
    },
    password:{
        type: String,
        min:6,
        required:true,
    },
    profilepicture:{
        type : String,
        default:'',
    },
    coverpicture:{
        type : String,
        default:'',
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timestamp : true,}
);

module.exports = mongoose.model('user',userSchema);