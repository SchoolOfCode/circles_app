import { useSession } from "next-auth/react";
import Link from "next/link";
import AccountView from "../components/AccountView";

export async function getServerSideProps() {
  let responseEvents = await fetch("http://localhost:3000/api/events");
  let events = await responseEvents.json();
  // const session1 = useSession();
  // console.log(session1);

  // let responseUser = await fetch("/api/users", {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ email: session.data.user.email }),
  // });

  // let user = await responseUser.json();
  return { props: { events } };
}


export default function Profile({ events }) {

  const session = useSession();
  console.log(session);

  return (
    <div className="absolute top-24 font-mons">
      {" "}
      {session.data ? (
        <>
          {/* <div className="flex flex-row- justify-evenly font-mons bg-gradient-to-b from-yellow-100 to-blue-200 min-h-screen min-w-screen"> */}
          <div>
            <AccountView events={events} user={session.data.user} />
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
