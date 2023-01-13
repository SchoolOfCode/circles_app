import React from "react";

export default function Timeline({ items, className }) {
  return (
    <div className={className}>
      <div
        className="flex flex-col justify-evenly top-60 left-50 mt-[7.5vh] h-[100%]"
        id="timeline-container-card"
      >
        {items.map((item) => {
          return (
            <div className="card w-96 bg-base-100 shadow-xl m-4">
              <div className="card-body">
                <h2 className="card-title">{item.clubName}</h2>
                <p>{item.eventName}</p>
                <div className="card-actions justify-end">
                  <h2 className="card-actions">{item.time}</h2>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
