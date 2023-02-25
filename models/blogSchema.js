const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    boddy: {
        type: String,
        required: true
    }
}, { timestamps: true});

exports.Blog = mongoose.model('Blog', blogSchema);
