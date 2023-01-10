import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import {data} from './events-data'
import { useState } from 'react'


export default function Card() {
  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState(-1)
  
  // console.log(data)


  return (
    <div className='boxes'>
    <ul role="list" className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((club) => (
        <li
          key={club.name}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div  onClick={() => setOpen(!open)} className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[2.5] hover:bg-indigo-500 duration-300 flex flex-1 flex-col p-8">
            <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={club.image} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{club.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{club.description}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                  {club.availability}
                </span>
              </dd>
            </dl>
          </div>
          {open && (
          <div>
          <p className="text-sm text-gray-501">{club.description}</p>
          </div>)}
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${club.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Email</span>
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${club.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <span className="ml-3">Call</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}