// const mongoose = require('mongoose') ;
import mongoose from 'mongoose';
const postSchema = mongoose.Schema({
    fullName: String,
    class: String,
    course: String,
    title: String,
    note: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

// module.exports =  PostMessage;
export default PostMessage;