import SlidingPane from "react-sliding-pane";
import Button from "../Button";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export default function UserPane({
  visible,
  user,
  // linkWorkerData,
  closePane,
  handleUpcoming,
  handlePast,
}) {
  const [max, setMax] = useState(false);

  const paneWidth = max || window.innerWidth < 600 ? "100%" : "500px";

  return (
    <SlidingPane
      className="sliding-pane rounded-md"
      isOpen={visible}
      user={user}
      width={paneWidth}
      onRequestClose={closePane}
      hideHeader
      from="left"
    >
      {user ? (
        <div>
          <a onClick={closePane}>
            <GrClose />
          </a>
          <div className="flex flex-col justify-center">
            <img
              className="inline-block h-[180px] w-[180px] rounded-full p-2  bg-gradient-to-b from-yellow-100 to-[#BAE5F3] "
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex flex-col justify-evenly">
              <h1>{`${user.first_name} ${user.surname}`}</h1>
              <h2>Your link worker is:</h2>
            <h3>{`${user.link_worker.first_name} ${user.link_worker.surname}`}</h3>
            <h2>Their contact details are:</h2>
            <h3>{user.link_worker.telephone}</h3>
            <h3>{user.link_worker.email}</h3>
            </div>
            <div className="flex flex-col justify-evenly mt-10">
            </div>
            <div className="flex flex-col justify-evenly">
              <h1 className="text-xl font-bold mt-20 mb-5 flex justify-center">
                Your circles:
              </h1>
             <ul>
              {user.user_circles.map((circle) =>
              <li>{circle.club_name}</li>
              )}
              </ul>
            </div>
            <div className="flex justify-center mb-5">
              <Button
                buttonText="Your upcoming events"
                handleClick={handleUpcoming}
              />
            </div>
            <div className="flex justify-center">
              <Button buttonText="Your past events" handleClick={handlePast} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </SlidingPane>
  );
}
