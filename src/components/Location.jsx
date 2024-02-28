import React from "react";

const Location = () => {
  return (
    <div className="flex flex-col gap-8 my-4">
      <h2 className="pl-4 text-xl text-orange-500 font-semibold">
        Our Temple Location
      </h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.900642426487!2d76.2737789!3d10.3256415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7f80054de64c5%3A0xefc7d5e99dfb0f4c!2sCheruparambil%20Devasthanam!5e1!3m2!1sen!2sin!4v1707225600356!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        type="satellite"
        className="w-[95%] mx-auto h-[400px] rounded-lg border-[2px] border-orange-200 shadow-lg shadow-orange-300"
      ></iframe>
    </div>
  );
};

export default Location;
