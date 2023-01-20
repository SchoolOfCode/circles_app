import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import LogoBlack from "../public/images/LogoBlack.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const session = useSession();

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full  ease-in duration-300 bg-white z-50">
      <div className="pl-10 m-auto flex justify-between items-center p-4 text-black">
        <Link href="/">
          <Image width={90} height={90} src={LogoBlack} className="flex" />
        </Link>
        <ul className="hidden sm:flex">
          <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
            <Link href="/">Home</Link>
          </li>
          {session.data ? (
            <ul className="hidden sm:flex">
              <li
                data-cy="groups"
                className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons"
              >
                <Link href="/groups">Groups</Link>
              </li>
              <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                <Link href="/account">Account</Link>
              </li>
            </ul>
          ) : (
            ""
          )}
          <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
            <Link href="/contactus">Contact Us</Link>
          </li>
          <li
            data-cy="help"
            className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons"
          >
            <Link href="/help">Help</Link>
          </li>
          {session.data ? (
            <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
              <button
                href="/"
                onClick={() => {
                  signOut({ callbackUrl: "http://localhost:3000/" });
                }}
              >
                Sign out
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>

        {/* mobile button */}
        <div onClick={handleNav} className="block sm:hidden z-50">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300 z-40"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300 z-40"
          }
        >
          <ul className="font-mons">
            <li className="p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            {session.data ? (
              <ul className="font-mons">
                <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                  <Link href="/groups">Groups</Link>{" "}
                </li>
                <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                  <Link href="/account">Account</Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
              <Link href="/help">Help</Link>
            </li>
            {session.data ? (
              <li className="rounded-md p-4 hover:bg-[#BAE5F3] hover:text-black font-bold font-mons">
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "http://localhost:3000/" });
                  }}
                >
                  Sign out
                </button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
