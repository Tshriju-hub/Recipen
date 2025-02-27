import axios from "axios";

const uploadImage = async (e, setProgress, setFormDetails, formDetails) => {
  if (
    e.target.files[0].type === "image/jpeg" ||
    e.target.files[0].type === "image/png"
  ) {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    const config = {
      onUploadProgress: (e) => {
        const { loaded, total } = e;
        setProgress((loaded / total) * 100);
      },
    };

    const {
      data: { imageId },
    } = await axios.post(
      "http://localhost:5000/api/images", // Update with your actual endpoint
      data,
      config
    );

    // Use the imageId or fetch the image later if needed
    setFormDetails({ ...formDetails, [e.target.id]: imageId });
  } else {
    console.error("Please select an image in jpeg or png format");
  }
};

export default uploadImage;
