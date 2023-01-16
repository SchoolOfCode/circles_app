import GroupsGallery from "../components/GroupsGallery";
import { useSession } from "next-auth/react";
import Link from "next/link";


async function fetchGroups() {
  let response = await fetch('/api/hello');
  let data = await response.text();
  console.log(data);
}

export default function GroupsPage() {
  const session = useSession();
  return (
    <div>
      {" "}
      {session.data ? (
        <GroupsGallery />
      ) : (
        <div className="font-mons bg-gradient-to-b from-yellow-100 to-blue-200 min-h-screen min-w-screen">
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
