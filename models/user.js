const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, trim: true, index: true, unique: true, sparse: true}, 
    password: String,
});

module.exports = mongoose.model('User', userSchema);
