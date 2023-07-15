const mongoose = require('mongoose')

const user={
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
}

const User = mongoose.model('Users',user)

module.exports = User;