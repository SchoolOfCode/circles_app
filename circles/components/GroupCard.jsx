import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function GroupCard({ club, setGroupInfo }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [open, setOpen] = useState(false);

  let styleDiv = {
    position: "fixed",
    left: "0",
    top: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "1",
  };

  return (
    <div style={toggleModal ? styleDiv : { gap: "10px" }}>
      <li
        key={club.name}
        className="
      col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow" //keep card size the same
        style={{
          position: toggleModal ? "absolute" : "",
          top: "50%",
          left: toggleModal ? "50%" : "0",
          right: "50%",
          bottom: "50%",
          margin: "auto",
          width: toggleModal ? "400px" : "",
          height: toggleModal ? "fit-content" : "",
          transition: "1s linear",
        }}
        onClick={
          // setToggleModal(!toggleModal);
          // setOpen(!open);
          setGroupInfo
        }
      >
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={club.image}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            {club.name}
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Title</dt>
            <dd className="text-sm text-gray-500">{club.tagline}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                {club.availability}
              </span>
            </dd>
          </dl>
        </div>
        {open ? (
          <div>
            <p className="text-sm text-gray-501">{club.description}</p>
          </div>
        ) : (
          ""
        )}
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${club.email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Email</span>
              </a>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <a
                href={`tel:${club.telephone}`}
                className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
              >
                <PhoneIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
