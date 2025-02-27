const Image = require("../models/imageModel");

// Function to upload an image to MongoDB
const uploadImageToMongo = async (req, res) => {
  try {
    const { buffer, mimetype } = req.file; // Get the file buffer and MIME type from multer

    // Save the image buffer to the database
    const newImage = new Image({
      data: buffer, // Store the binary data
      contentType: mimetype, // Store the MIME type
    });

    const savedImage = await newImage.save();
    res.status(201).json({ success: true, imageId: savedImage._id });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload image", error });
  }
};

// Function to retrieve an image by ID
const getImageById = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.set("Content-Type", image.contentType); // Set the content type for the response
    res.send(image.data); // Send the binary data
  } catch (error) {
    res.status(500).json({ message: "Error retrieving image", error });
  }
};

module.exports = {
  uploadImageToMongo,
  getImageById,
};
