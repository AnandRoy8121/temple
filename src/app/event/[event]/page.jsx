"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayBigImage, setDisplayBigImage] = useState(false);
  const [showShimmer, setShowShimmer] = useState(true);
  const [data,setData] = useState([])
  const getUser = useSelector((store) => store.user.currentUser);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/event');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
        // setSelectedFiles([])
        setShowShimmer(false)
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  },[data])

  const pathname = usePathname().split("/")[2];
  const filerData = data.filter((item) => item._id == pathname)[0];

  const handleFileChange = (event) => {
    // Convert FileList to an array
    const filesArray = Array.from(event.target.files);
    setSelectedFiles(filesArray);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      console.error("No files selected");
      return;
    }

    const formData = new FormData();

    // Append each file to the FormData object
    selectedFiles.forEach((file, index) => {
      formData.append(`image`, file);
    });

    try {
      console.log(pathname)
      const response = await fetch(`http://localhost:3000/api/upload-image?pathname=${pathname}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
        // Handle success, e.g., update UI
      } else {
        console.error("File upload failed");
        // Handle error, e.g., show error message
      }
    } catch (error) {
      console.error("Error during file upload", error);
      // Handle error, e.g., show error message
    }
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setDisplayBigImage(true);
  };

  const handleDecrement = () => {
    const isFirst = currentImageIndex === 0;
    const currentSlide = isFirst
      ? filerData.images.length - 1
      : currentImageIndex - 1;
    setImageIndex(currentSlide);
  };

  const handleIncrement = () => {
    const isLast = currentImageIndex === filerData.images.length - 1;
    const currentSlide = isLast ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(currentSlide);
  };

  return (
    <div className={`min-h-[calc(100vh-10rem)] my-4`}>
      <div className="flex w-full items-center justify-evenly mb-4">
        <h1 className="text-center font-bold text-lg text-[#f15c1d]">
          {filerData?.title}
        </h1>
        {getUser && <div className="flex gap-2">
          <div className="flex flex-col gap-1">
          <label
            htmlFor="doc"
            className="border border-1 border-orange-400 hover:bg-orange-100 cursor-pointer p-1 rounded-full flex items-center justify-center gap-1 w-32"
          >
            <Image src={"/upload.png"} height={40} width={40} alt="" />
            <p className="font-semibold text-sm text-[#f15c1d] hidden sm:block">
              Choose Image
            </p>
            <input
              type="file"
              multiple="multiple"
              id="doc"
              onChange={handleFileChange}
              name="doc"
              accept="png, jpg"
              hidden
            />
          </label>
          <div className="md:flex gap-1 hidden">{selectedFiles.length>0 && selectedFiles.map((file,index)=><span key={index} className="text-[10px] text-[#f15c1d] inline">{file.name+","}</span>)}</div>
          </div>
          <button
          className="px-2 font-semibold bg-[#f15c1d] text-white rounded-lg"
          onClick={handleUpload}
        >
          Upload
        </button>
        </div>}
        
      </div>
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
  </div>:<div>
      <div className="px-6 flex text-sm text-[#f15c1d] items-center justify-between font-semibold">
        <p className="">Even Date: {filerData?.startDate}</p>
        <p clas>Location: {filerData?.location}</p>
      </div>
      <div className="flex flex-wrap p-4 gap-3 justify-center">
        {filerData?.images?.map((image, index) => (
          <div
            key={image}
            className="relative h-[300px] w-[90%] sm:w-[40%] md:w-[30%] bg-orange-100 rounded-md cursor-pointer shadow-md"
            onClick={() => handleImageClick(index)}
          >
            <Image className="object-cover" src={image} fill alt="" />
          </div>
        ))}
        {filerData && filerData.images.length === 0 ? (
          <p>No Image to Display for This Event</p>
        ) : (
          ""
        )}
        {/* Big Image Display Logic */}
        {filerData?.images && displayBigImage && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="h-full w-full">
              <p
                className="absolute top-4 md:top-8 right-10 text-white font-semibold text-lg cursor-pointer p-2"
                onClick={() => setDisplayBigImage(false)}
              >
                X
              </p>
              <div className="h-[85%] w-[97%] md:w-[80%] top-16 mx-auto bg-orange-100 inset-0 relative cursor-pointer my-auto rounded-md">
                <Image
                  className="object-cover"
                  src={filerData.images[currentImageIndex]}
                  fill={true}
                  objectFit="cover"
                  alt=""
                />
              </div>
              <div
                className="absolute top-1/2 left-2 text-white font-semibold text-lg cursor-pointer p-2 bg-black/80 rounded-full"
                onClick={handleDecrement}
              >
                {"<"}
              </div>
              <div
                className="absolute top-1/2 right-2 text-white font-semibold text-lg cursor-pointer p-2 bg-black/80 rounded-full"
                onClick={handleIncrement}
              >
                {">"}
              </div>
            </div>
          </div>
        )}
      </div>
      </div>}
    </div>
  );
};

export default page;
