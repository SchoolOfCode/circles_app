import GroupsGallery from "../components/GroupsGallery";
import { useSession } from "next-auth/react";
import Link from "next/link";

export async function getServerSideProps() {
  try {
    let response = await fetch("https://circlesapp.netlify.app/api/groups");
    let data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}

export default function GroupsPage({ data }) {
  console.log(data);
  const session = useSession();

  return (
    <div>
      {session.data ? (
        <GroupsGallery data={data} />
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
