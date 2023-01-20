import { getCsrfToken } from "next-auth/react"

export default function SignIn({ csrfToken }) {
  return (<div className="bg-gradient-to-b from-yellow-100 to-blue-200 h-screen pt-20 ">
            <div className="w-full flex items-center justify-center my-12 pb-10 ">
                <div className="absolute top-40 left-2/4 bg-white shadow opacity-95 rounded py-28 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-mons font-bold leading-7 text-center text-gray-700 ">Let's get in touch</p>
                    <form method="post" action="/api/auth/callback/credentials">
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-mons font-semibold leading-none text-gray-800">Name</label>
                            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-mons font-semibold leading-none text-gray-800">username</label>
                            <input name="username" type="text" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold font-mons leading-none text-gray-800">Password</label>
                            <input name="password" type="password" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold font-mons leading-none text-gray-800">Contact Number</label>
                            <input type="text" name="tel" placeholder="+1234" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="w-full flex flex-col mt-8 mb-20">
                            <label className="text-base font-semibold font-mons leading-none text-gray-800">Message</label>
                            <textarea aria-label="leave a message" role="textbox" type="name" name="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 font-mons   text-gray-600 mt-4">By clicking send you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <input type="submit" value="Send" className="mt-9 w-64 inline-flex justify-center drop-shadow-xl rounded-md border border-transparent transition ease-in-out delay-150 text-white bg-black hover:-translate-y-1 hover:scale-110 hover:bg-[#80BEAF] duration-300 bg-[#FFD862] px-4 py-2 text-base font-light  shadow-sm hover:bg-[#80BEAF] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"/>
                    </div>
                    </form>

                 
                </div>
            </div>
            <div className='absolute top-1/2 left-60 '>
                   <h2 className='text-2xl font-bold mb-5'>Location</h2>
                    <p>2 Celado sqaure,
                        London,
                        EC4N 7GJ</p>
                        <p className='font-bold '>Find us on Google Maps</p>

                        <h2 className='text-2xl font-bold mt-10 mb-5 '>Phone/Email</h2>
                        <p>Tel: 020 0000 0000</p>
                        <p>Email: npmwin@circle.org.uk</p>

                   </div>
        </div>
        )
    }
    
    export async function getServerSideProps(context) {
      return {
        props: {
          csrfToken: await getCsrfToken(context),
        },
      }
    }