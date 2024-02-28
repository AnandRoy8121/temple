import React from "react";

const AddToCalender = ({ data }) => {
  const locateStartDatetime = new Date(
    data.startDate.substring(0,10).split("-").reverse().join("/") + " " + data.startTime
  );
  const locateEndDatetime = new Date(
    data.endDate.substring(0,10).split("-").reverse().join("/") + " " + data.endTime
  );
  console.log(locateStartDatetime)
  const utcStartTime = new Date(locateStartDatetime.toUTCString())
    // .toISOString()
    // .replace(/-|:|\.\d+/g, "");
  const utcEndTime = new Date(locateEndDatetime.toUTCString())
    // .toISOString()
    // .replace(/-|:|\.\d+/g, "");

  return (
    <div >
      <a
        href={`https://www.google.com/calendar/event?action=TEMPLATE&dates=${utcStartTime}/${utcEndTime}&text=${data.title}&details=Your%20Event%20Description&location=${data.location}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Add to Google Calendar
      </a>
    </div>
  );
};

export default AddToCalender;
