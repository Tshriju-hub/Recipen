const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  data: Buffer, // To store the image binary data
  contentType: String, // To store the MIME type of the image
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
