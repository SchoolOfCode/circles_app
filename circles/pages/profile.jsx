import EventsView from "../components/EventsView";
import ProfileDisplay from "../components/ProfileDisplay";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const session = useSession();
  return (

    <div className="absolute top-24 font-mons">
      {" "}
      {session.data ? (
        <>
      <div className="flex flex-row- justify-evenly">
        <ProfileDisplay />
        <EventsView />
      </div>
    </>
      ) : (
        <div>
          <h3>Please log in to view your profile.</h3>
          <h3>
            Click here to return to the{" "}
            <Link className="font-bold" href="/">
              Circles Home.
            </Link>
          </h3>
        </div>
      )}{" "}
    </div>
  );
}
