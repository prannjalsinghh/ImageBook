const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
require("dotenv").config();


const userSchema=new mongoose.Schema({
    registered:{
        type:Boolean,
        default:false
    },
    accountCreationDate:{
        type:Date,
        default:Date.now()
    },
    name:String,
    number:{
        type:String,
        unique:true
    },
    image:{
        type:String,
        default:'https://i.stack.imgur.com/l60Hf.png'
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    contacts:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    verified:{
        type:Boolean,
        default:false
    },
    trustScore:{
        type:Number,
        default:0
    },
    location:{
        longitude:Number,
        latitude:Number
    },
    notifications:[{
        sender:String,
        request:String,
        time:{
            type:Date,
            default:Date.now()
        }
    }],
    dateOfBirth:{
        type:Date,
        default:Date.now()
    },
    gender:String,
    givenRespects:[{
        respectLink:String,
        postedBy:String,
        postedFor:String,
        cameraUsed:String,
        selectedType:String,
        url:String,
        time:{
            type:Date,
            default:Date.now()
        },
        reaction:{
            likes: {
                type:Number,
                default:0
            }
        }

    }],
    recievedRespects: [{
        respectLink:String,
        postedBy:String,
        postedFor:String,
        cameraUsed:String,
        selectedType:String,
        url:String,
        time:{
            type:Date,
            default:Date.now()
        },
        reaction:{
            likes: {
                type:Number,
                default:0
            }
        }

    }]
})

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
}

const User = mongoose.model('Users',userSchema)

module.exports = User;