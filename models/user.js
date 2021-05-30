const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
})

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', userSchema)

//My registered Account (Also put in seed/index file)
//_wilson_patyal_
// monkey
// ObjectId 60a89d66a4640d11b43d3268