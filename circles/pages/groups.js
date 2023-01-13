import GroupsGallery from "../components/GroupsGallery";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function GroupsPage() {
  const session = useSession();
  return (
    <div>
      {" "}
      {session.data ? (
        <GroupsGallery />
      ) : (
        <div className="absolute top-24 font-mons">
          <h3>Please log in to view the groups available.</h3>
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
