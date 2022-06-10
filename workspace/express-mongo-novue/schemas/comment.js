const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId } } = Schema; // Schema.ObjectID로 join됨
const commentSchema = new Schema({
  commenter: { type: ObjectId, required: true, ref: 'User', },
  comment: { type: String, required: true, },
  createdAt: { type: Date, default: Date.now, },
}, {
  versionKey: false
});

module.exports = mongoose.model('Comment', commentSchema);