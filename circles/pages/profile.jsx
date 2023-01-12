import EventsView from "../components/EventsView";
import ProfileDisplay from "../components/ProfileDisplay";

export default function Profile() {
  return (
    <>
      <div className="flex flex-row- justify-evenly">
        <ProfileDisplay />
        <EventsView />
      </div>
    </>
  );
}
