import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import AccountView from "../components/AccountView";

export async function getServerSideProps() {
  let responseEvents = await fetch("http://localhost:3000/api/events");
  let events = await responseEvents.json();
  return { props: { events } };
}

export default function Profile({ events }) {
  const session = useSession();
  const [user, setUser] = useState("");
  console.log(user);

  useEffect(() => {
    async function fetchData() {
      let responseUser = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: session.data?.user.email }),
      });

      let userData = await responseUser.json();
      console.log(userData);
      setUser(userData[0]);
    }
    fetchData();
  }, [session.data]);

  return (
    <div className=" font-mons">
      {" "}
      {session.data ? (
        <>
          <div className="">
            <AccountView events={events} user={user} />
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
