import fs from "fs";
import { uploadToCloudinary } from "@/middleware/cloudinary";
import { Event } from "@/utils/models/evenSchema";
import connectDB from "@/utils/connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

// upload images related to the event
export const POST = async (req) => {
  const id = req.nextUrl.searchParams.get("pathname");
  const getEvent = await Event.findById(id);

  try {
    await connectDB();
    const formData = await req.formData();
    const files = formData.getAll("image");

    const responses = [];
    for (let file of files) {
      const fileName = file.name;
      const filePath = `public/upload/${fileName}`;

      const buffer = Buffer.from(await file.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      const response = await uploadToCloudinary(filePath, "test");
      if (response) {
        fs.unlinkSync(filePath);
        if (getEvent) {
          getEvent.images.push(response.url);
          responses.push(response.url);
        } else {
          return new Response(JSON.stringify({ err: "No Event Found" }), {
            status: 404,
          });
        }
      } else {
        return new Response(
          JSON.stringify({
            error:
              "Error Occured While uploading file in CLoudinary " + fileName,
          }),
          { status: 500 }
        );
      }
    }
    getEvent.save();
    return new Response(JSON.stringify({ data: responses }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ err: "Someting went wrong " + error.message }),
      { status: 500 }
    );
  }
};
