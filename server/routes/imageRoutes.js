const express = require("express");
const multer = require("multer");
const {
  uploadImageToMongo,
  getImageById,
} = require("../controllers/imageController");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Store images in memory

// Route to upload an image
router.post("/", upload.single("file"), uploadImageToMongo);

// Route to retrieve an image by ID
router.get("/:id", getImageById);

module.exports = router;
