import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Timeline from "./Timeline";
//import { events } from "../data/events-data.js";
import "react-datepicker/dist/react-datepicker.css";

export default function EventsDisplay({ events, handleDateChange, startDate }) {
  return (
    <div className="flex flex-row-reverse ">
      <div>
        <DatePicker selected={startDate} onChange={handleDateChange} />
      </div>
      <div className="inset-0 bg-slate-400">
        <Timeline items={events} />
      </div>
    </div>
  );
}
