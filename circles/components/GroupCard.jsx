import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { useState } from "react";


export default function GroupCard({ club, setModalInfo }) {
  return (
    
      <li
        key={club.id}
        className=" 
       col-span-1 flex flex-col divide-y divide-gray-200 rounded-2xl bg-white text-center shadow min-h-[250px]"
        onClick={setModalInfo}
      >
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto h-24 w-24 flex-shrink-0 rounded-full"
            src={club.image}
            alt="" //add cub.alt from new field from groups model
          />
          <h3 className="mt-6 mb-6 text-lg font-semibold text-gray-900 pb-1">
            {club.club_name}
          </h3>
          <div className="mb-1">
            <dl className="mt-5 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Days</dt>
              <dd className="text-lg text-gray-500">{club.days}</dd>
              <dt className="sr-only">times</dt>
              <dd className="text-lg text-gray-500">{club.times}</dd>
              <dd className="mt-10">
                <span className="rounded-full bg-teal-100 px-2 py-1 text-sm font-medium text-green-800">
                  {club.availability}
                </span>
              </dd>
            </dl>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <a
                href={`mailto:${club.email}`}
                className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 object-scale-down"
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
                href={`tel: ${club.telephone}`}
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
    
  );
}
