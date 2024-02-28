"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddEvent = ({ CloseForm }) => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
    title: "",
    desc: "",
    contactPerson: "",
    contactPersonEmail: "",
  });
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    const item = (e.target.files)[0];
    setFile(item);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "eventPreset");
    // formData.append('api_key','123871832713779')

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dta3mcayk/image/upload",
        {
          method: "POST",
          mode: "cors",
          // headers: { "Content-Type": "multipart/form-data" },
          body: formData,
        }
      );
      const data = await res.json();
    //   console.log(data.secure_url)
      return data.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = await upload();
      const res = await fetch("http://localhost:3000/api/event", {
        method: "POST",
        body: JSON.stringify({
          img: url,
          ...formData,
        }),
      });

      const data = await res.json();
      CloseForm(false)
    //   router.push(`/event/${data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed top-9 left-0 w-full h-full flex items-center justify-center bg-black/70">
      <h1
        className="absolute top-10 right-7 text-white font-semibold text-xl cursor-pointer"
        onClick={() => CloseForm(false)}
      >
        X
      </h1>
      <div className="w-[90%] h-[90%] bg-white rounded-md flex flex-col gap-1 px-4 py-4">
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 px-2 py-1 rounded-md md:w-1/2 w-full">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Start Date:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow cursor-pointer px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="date"
            name="startDate"
            id=""
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 md:w-1/2 w-full px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">End Date:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow cursor-pointer px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="date"
            name="endDate"
            id=""
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 w-full md:w-1/2 px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Start Time:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow py-1 focus:border focus:border-orange-400 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="text"
            name="startTime"
            placeholder="hh:mm:ss"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 w-full md:w-1/2 px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">End Time:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="text"
            name="endTime"
            placeholder="hh:mm:ss"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 w-full md:w-1/2 px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Location:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="text"
            name="location"
            placeholder="Enter location"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 w-full md:w-1/2 px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Title:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="text"
            name="title"
            placeholder="Enter Title"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 w-full md:w-1/2 px-2 py-1 rounded-md">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Choose File:</p>
          <input
            className="flex-grow text-[#f15c1d] border border-orange-400 rounded-lg"
            type="file"
            name="img"
            onChange={handleFileChange}
          />
        </div>
        <div className="flex items-center justify-start gap-3 md:gap-2 border-orange-400 px-2 py-1 rounded-md w-full md:w-1/2">
          <p className="w-1/3 font-semibold text-[#f15c1d]">Description:</p>
          <textarea
            className="placeholder:text-[#f15c1d] flex-grow py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            name="desc"
            placeholder="Description about event"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center gap-3 md:gap-2 border-orange-400 px-2 py-1 rounded-md w-full md:w-1/2 justify-between">
          <p className="w-1/3 font-semibold text-[#f15c1d]">End Time:</p>
          <input
            className="placeholder:text-[#f15c1d] flex-grow py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg"
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center gap-3 md:gap-2 border-orange-400 px-2 py-1 rounded-md w-full md:w-1/2 justify-between">
          <p className="w-1/3 font-semibold text-[#f15c1d]">End Time:</p>
          <input
            className="placeholder:text-[#f15c1d] py-1 px-3 text-[#f15c1d] border border-orange-400 rounded-lg flex-grow"
            type="text"
            name="contactPersonEmail"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-center">
        <button className="w-1/2 px-4 py-2 rounded-xl bg-[#f15c1d] text-white " onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
