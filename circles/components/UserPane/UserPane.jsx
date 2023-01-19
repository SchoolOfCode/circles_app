import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function UserPane({ visible, data, closePane }) {
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
          <h1>{`${data.user}`}</h1>
          <p>{`Your link worker is: ${data.linkWorker}`}</p>
          <a href="../pages/account/events.jsx">Upcoming Events</a>
        </div>
      ) : (
        ""
      )}
    </SlidingPane>
  );
}
