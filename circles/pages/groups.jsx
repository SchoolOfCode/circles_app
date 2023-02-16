import GroupsGallery from "../components/GroupsGallery";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Footer from "../components/Footer";

export async function getServerSideProps() {
  // let response = await fetch(`${process.env.CIRCLES_GROUPS_API_ENDPOINT}`);
  let response = await fetch("https://circlesapp.netlify.app/api/groups");

  let groups = await response.json();
  return { props: { groups } };
}

export default function GroupsPage({ groups }) {
  console.log(groups);
  const session = useSession();

  return (
    <div>
      {session.data ? (
        <GroupsGallery data={groups} />
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
      <Footer />
    </div>
  );
}
