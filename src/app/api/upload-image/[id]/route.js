import fs from "fs";
import { uploadToCloudinary } from "@/middleware/cloudinary";
import { Event } from "@/utils/models/evenSchema";
import connectDB from "@/utils/connect";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req) => {
  // const {pathname} = req.params
  const {pathname} = req.query
  console.log(pathname)
  // const id = pathname
  const getEvent = await Event.findById(id)

  try {
  await connectDB()
  const formData = await req.formData();
  const files = formData.getAll("image");

  const responses = [];
  for (let file of files) {
    const fileName = file.name;
    // const fileBlob = files;
    const filePath = `public/upload/${fileName}`;

    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    const response = await uploadToCloudinary(filePath, "test");
    // console.log(response);
    if (response) {
      // fs.unlinkSync(filePath)
    //   return new Response(JSON.stringify({ response }));
    if(getEvent){
      getEvent.images = [response.url, ...images]
      responses.push(response.url)
    }
    else{
      return new Response(JSON.stringify({err:"No Event Found"}),{status:404})
    }
        
    } else {
      return new Response(
        JSON.stringify({
          error: "Error Occured While uploading file in CLoudinary "+fileName,
        }),
        { status: 500 }
      );
    }
  }
    
    return new Response(JSON.stringify({data:responses}),{status:200})
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({err:"Someting went wrong "+error.message}),{status:500})
  }
};
