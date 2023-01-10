import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/20/solid'
import {data} from './events-data'
import { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'


console.log(data)
export default function Card2() {
    const [selectedId, setSelectedId] = useState(null)


    return (

        <div className='boxes'>
        <ul role="list" className="mt-40 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((club) => (
            <motion.li
            layoutId={club.id} onClick={() => setSelectedId(club.id)}
              key={club.name}
              className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">

        <motion.div className="card w-96 bg-base-100 shadow-xl">
        <motion.figure><motion.img src={club.image} alt="Shoes" /></motion.figure>
        <motion.div className="card-body">
          <motion.h2 className="card-title">{club.name}</motion.h2>
          <motion.p>{club.description}</motion.p>
          <motion.div>
          <motion.p>Location: {club.location}</motion.p>
          <motion.p>Time: {club.time}</motion.p>
          </motion.div>
          <motion.div className="card-actions justify-end">
            <motion.button className="btn btn-primary">Join Now!</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
      </motion.li>
            ))}



      </ul>
      </div>
    )
}


// const [selectedId, setSelectedId] = useState(null)
 
// {items.map(item => (
//   <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
//     <motion.h5>{item.subtitle}</motion.h5>
//     <motion.h2>{item.title}</motion.h2>
//   </motion.div>
// ))}

// <AnimatePresence>
//   {selectedId && (
//     <motion.div layoutId={selectedId}>
//       <motion.h5>{item.subtitle}</motion.h5>
//       <motion.h2>{item.title}</motion.h2>
//       <motion.button onClick={() => setSelectedId(null)} />
//     </motion.div>
//   )}
// </AnimatePresence>