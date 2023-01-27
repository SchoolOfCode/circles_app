import { useSession, getSession } from "next-auth/react";
import React from "react";

import Table from "../components/table/table";


export async function getServerSideProps() {
  let response = await fetch("http://localhost:3000/api/admin");
  let newData = await response.json();
  console.log(newData)
  return { props: { newData } };
}

console.log()
export default function Admin({newData}) {
  const session = useSession();
  console.log("session", session);
  console.log(newData)

  const getData = () => newData

  const columns = React.useMemo(
    () => [
      {
        Header: "id",
        accessor: "id",
      },
      {
        Header: "First_name",
        accessor: "first_name",
      },
      {
        Header: "Surname",
        accessor: "surname",
      },
      {
        Header: "Email",
        accessor: "email",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  

  






//Optional chaining is required as the session object data is undefined when the page first renders.
if (session.data?.role === "admin") {
  return (
    <div>
    <div className="ml-5">
      <h1>Admin Access Only!</h1>
      <p className="text-2xl">Welcome to the Admin Dashboard</p>
    </div>
    <div className="ml-5">
    <Table columns={columns} data={data} newData={newData}/>
  </div>
  </div>
  );
} else {
  return (
    <div>
      <h1> You are not authorized to view this page!</h1>
      <h3>
        If you require access to this page, please contact
        enquiries@circles.com
      </h3>
      
    </div>
  );
}
}