const uploadImageToCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "sdl-doctor");
  uploadData.append("cloud_name", "date7oy2u");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/date7oy2u/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
