import SlidingPane from "react-sliding-pane";
import Button from "../Button";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function UserPane({
  visible,
  data,
  linkWorkerData,
  closePane,
  handleUpcoming,
  handlePast,
}) {
  const [max, setMax] = useState(false);

  const paneWidth = max || window.innerWidth < 600 ? "100%" : "500px";

  return (
    <SlidingPane
      className="sliding-pane"
      isOpen={visible}
      user={data?.user}
      width={paneWidth}
      onRequestClose={closePane}
      hideHeader
      from="left"
    >
      {data ? (
        <div>
          <a onClick={closePane}>
            <GrClose />
          </a>
          <img
            className="inline-block h-[120px] w-[120px] rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="flex flex-col justify-evenly">
            <h1>{`${data.user}`}</h1>
            <h2>Your link worker is:</h2>
            <h3>{data?.linkWorker}</h3>
            <h2>Their contact details are:</h2>
            <h3>{linkWorkerData?.phone}</h3>
            <h3>{linkWorkerData?.email}</h3>
          </div>
          <div className="flex flex-col justify-evenly">
            <h1>Your circles</h1>
          </div>
          <div className="flex flex-col justify-evenly">
            <Button
              buttonText="Your upcoming events"
              handleClick={handleUpcoming}
            />
            <Button buttonText="Your past events" handleClick={handlePast} />
          </div>
        </div>
      ) : (
        ""
      )}
    </SlidingPane>
  );
}
