const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    channelId: {
        type: String,
        required: true,
    }
});

const UserModel = mongoose.model('vloggers', UserSchema);
module.exports = UserModel;