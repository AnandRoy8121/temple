import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_APIKEY,
  api_secret: process.env.NEXT_PUBLIC_APISECRET,
});

const uploadToCloudinary = async (localFilePath, folder) => {
  try {
    if (!localFilePath) return null;
    // upload to cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: folder,
    });
    // file uploaded to cloudinary
    return response;
  } catch (error) {
    // remove the locally saved temporary file
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadToCloudinary };
