import { useSession, getSession } from "next-auth/react";
import Link from 'next/link';

// const data = { user: 'example' };

fetch('/api/admin', {//// Wrap in useEffect
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  // fetch()

export default function Page() {
  const session = useSession();
  console.log("session", session);
  //Optional chaining is required as the session object data is undefined when the page first renders.
  if (session.data?.role === "admin") {
    return (
      <div>
        <h1>Admin Access Only!</h1>
        <p>Welcome to the Admin Dashboard</p>
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
