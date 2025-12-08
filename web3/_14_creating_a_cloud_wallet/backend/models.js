const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydatabase');

const UserSchema = mongoose.Schema({
    username: String,
    password: String,
    privateKey: String,
    publicKey: String
})

const userModel = mongoose.model('users', UserSchema);

module.exports = {
    userModel
}