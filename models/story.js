/**
 * user model
 */
const mongoose = require("mongoose");

const storySchema = mongoose.Schema({
  storyId: { type: mongoose.Schema.ObjectId },
  description: String,
  storypoint: Number,
  status: String,
  assignedTo: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model("story", storySchema);
