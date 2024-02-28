"use client";
import AddToCalender from "@/components/AddToCalender";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Link from "next/link";
// import { data } from "@/utils/data";
import AddEvent from "@/components/AddEvent";
import { useDispatch, useSelector } from "react-redux";
import { allTheEvents } from "@/utils/redux/eventSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [showShimmer, setShowShimmer] = useState(true);
  const events = useSelector((store)=>store.event.allEvents)
  const getUser = useSelector((store) => store.user.currentUser);
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/event');
        if (!response.ok) {
          showAddEventForm(false)
          throw new Error('Failed to fetch data');
          
        }

        const result = await response.json();
        // setData(result);
        dispatch(allTheEvents(result))
      } catch (error) {
        console.log(error.message);
      }
    };
    setShowShimmer(false)
    {events.length ? "": fetchData();}
  },[showAddEventForm])

  console.log(events)
  
  return (
    <div className={`${showAddEventForm ? ' relative' :'mt-4'}`}>
      {getUser && <div className="flex items-center">
        <button className="bg-[#f15c1d] text-white font-semibold px-3 py-2 mx-auto rounded-md shadow-md" onClick={()=>setShowAddEventForm(!showAddEventForm)}>
          Add Event
        </button>
      </div>}
      {showShimmer?
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
            <div className="w-full">
                <div className="bg-white rounded">
                    <div className="bg-gray-200 h-48 p-3 overflow-hidden animate-pulse"> </div>
                    <div className="h- p-3">
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 col-span-2 bg-gray-200 rounded animate-pulse"></div>
                            <div className=" h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="..."></div>
                            <div className="col-span-2 ..."></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>:<div className="flex flex-wrap justify-evenly my-4">
        {events.length>0 ?
         events?.map((event) => (
          <div
            key={event._id}
            className="flex flex-col w-full sm:w-2/3 md:w-[45%] bg-orange-50 rounded-lg shadow-lg m-4"
          >
            <Link href={`/event/${event._id}`}>
              <div className="relative h-[50vh] w-full rounded-lg cursor-pointer">
                <Image
                  src={event.img}
                  alt=""
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
            </Link>
            <div className="flex flex-col h-[30vh] justify-evenly p-2 text-xs md:text-sm text-[#f15c1d]">
              <h2 className="text-sm md:text-[20px] text-center font-bold">
                {event.title.replace("%20", " ")}
              </h2>
              <div className="flex items-center justify-evenly">
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h2 className="font-semibold">Event Starts at</h2>
                  <h3>{event.startDate}</h3>
                  <h3>{event.startTime}</h3>
                </div>
                <div className="flex flex-col gap-1 items-center justify-center">
                  <h2 className="font-semibold">Event Ends at</h2>
                  <h3>{event.endDate}</h3>
                  <h3>{event.endTime}</h3>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <h2 className="font-semibold">Location:</h2>
                <p>{event.location}</p>
              </div>
              <div className="flex flex-col md:flex-row gap-2 items-center">
                <a
                  href="https://maps.app.goo.gl/6rwDFFzuTmrcHrsS7"
                  target="_blank"
                  className="bg-lime-100 hover:bg-lime-200 w-full py-2 px-4 rounded-lg font-semibold text-center"
                >
                  <p className="cursor-pointer">
                    <span>
                      <LocationOnIcon />
                    </span>{" "}
                    Get Location
                  </p>
                </a>
                <div className="bg-amber-100 hover:bg-amber-200 w-full py-2 rounded-lg font-semibold text-center">
                  <div className="flex items-center justify-center gap-2 cursor-pointer">
                    <span>
                      <CalendarMonthIcon />
                    </span>
                    <AddToCalender data={event} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )):<p>Currently there are no events</p>}
      </div>}
      {showAddEventForm && <AddEvent CloseForm={setShowAddEventForm}/> }
    </div>
  );
};

export default page;
