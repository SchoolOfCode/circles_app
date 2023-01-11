import Link from 'next/link'
import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import LogoBlack from '../public/images/LogoBlack.png'
import Image from "next/image"

function Navbar (){
    const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

    return(
        <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-200 opacity-80'>
            <div className='pl-10 m-auto flex justify-between items-center p-4 text-black'>
                <Link href='/'>
                    <Image width={90} height={90} src={LogoBlack} className=" scale-125 flex"/>
                </Link>
                <ul className='hidden sm:flex'>
                    <li className='p-4 hover:bg-gray-700 hover:text-white
'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 hover:bg-gray-700 hover:text-white
'>
                        <Link href='/groups'>Groups</Link>
                    </li>
                    <li className='p-4 hover:bg-gray-700 hover:text-white
'>
                        <Link href='/profile'>Profile</Link>
                    </li>
                    <li className='p-4 hover:bg-gray-700 hover:text-white
'>
                        <Link href='/faq'>FAQs</Link>
                    </li>
                </ul>

                 {/* mobile button */}
                 <div onClick={handleNav} className='block sm:hidden z-10'>
                     {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                 </div>

                 {/* mobile Menu */}
                 <div className={ nav ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white ease-in duration-300'}>
                 
                 <ul>
                     <li className='p-4 text-4xl hover:text-gray-500'>
                         <Link href='/'>Home</Link>
                    </li>
                     <li className='p-4 text-4xl hover:text-gray-500'>
                         <Link href='/'>Events</Link>
                     </li>
                    <li className='p-4 text-4xl hover:text-gray-500'>
                         <Link href='/'>Profile</Link>
                     </li>
                     <li className='p-4 text-4xl hover:text-gray-500'>
                         <Link href='/'>FAQs</Link>
                     </li>
                 </ul>
                 </div>

            </div>
        </div>
    )
}
export default Navbar

                // {/* mobile button */}
                // <div className='block sm:hidden z-10'>
                //     <AiOutlineMenu size={20}/>
                // </div>

                // {/* mobile Menu */}
                // <div className='sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300'>
                // <ul>
                //     <li className='p-4 text-4xl hover:text-gray-500'>
                //         <Link href='/'>Home</Link>
                //     </li>
                //     <li className='p-4 text-4xl hover:text-gray-500'>
                //         <Link href='/'>Events</Link>
                //     </li>
                //     <li className='p-4 text-4xl hover:text-gray-500'>
                //         <Link href='/'>Profile</Link>
                //     </li>
                //     <li className='p-4 text-4xl hover:text-gray-500'>
                //         <Link href='/'>FAQs</Link>
                //     </li>
                // </ul>
                // </div>