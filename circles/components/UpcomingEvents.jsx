import React from "react";

export default function UpcomingEvents() {
  const startDate = new Date();

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.setHours(0, 0, 0, 0) < startDate.setHours(0, 0, 0, 0);
  });

  return (
    <div className="bg-slate-400">
      <Timeline items={filteredEvents} />
    </div>
  );
}
