import connectDB from "@/utils/connect";
import { Event } from "@/utils/models/evenSchema";

// GET all the events
export const GET = async (req, res) => {
  await connectDB();

  const events = await Event.find();
  if (!events) {
    return new Response(JSON.stringify({ msg: "There is no events" }), {
      status: 200,
    });
  }
  return new Response(JSON.stringify(events), { status: 200 });
};

// Create new Event
export const POST = async (req, res) => {
  try {
    await connectDB();
    const body = await req.json();
    const {
      startDate,
      endDate,
      startTime,
      endTime,
      title,
      desc,
      img,
      location,
      contactPerson,
      contactPersonEmail,
    } = body;

    const createEvent = await Event.create({
      startDate,
      endDate,
      startTime,
      endTime,
      title,
      desc,
      location,
      img,
      contactPerson,
      contactPersonEmail,
      images: [],
    });

    if (!createEvent) {
      return new Response(
        JSON.stringify({ err: "Error occured while creating record" }),
        { status: 500 }
      );
    }
    return new Response(
      JSON.stringify({ msg: "Record created Successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ err: error }), { status: 500 });
  }
};
