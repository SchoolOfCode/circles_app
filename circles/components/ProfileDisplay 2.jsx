import Button from "./Button";

export default function ProfileDisplay() {
  return (
    <div className="flex flex-1 flex-col p-8 mt-0 ml-[5px] dark:bg-gray-700 bg-blue-50 min-w-96 min-h-[90vh] rounded-lg w-fit">
      <img
        className="inline-block h-[120px] w-[120px] rounded-full"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <h1>Sadako Takashi</h1>
      <h3>Your Circles</h3>
      <br></br>
      <Button />
      <Button
        buttonText="Upcoming Events"
        handleClick="../pages/account/events.jsx"
      />
      <Link href="../pages/account/events.jsx">Upcoming Events</Link>
      <br></br>
    </div>
  );
}
