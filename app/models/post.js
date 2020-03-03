const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  name: String,
  id: String
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
