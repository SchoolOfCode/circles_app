import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Form = (e) => {
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7d6w8rc', 'template_kgz2wqf', form.current, 'g4O4KOCSWEDTS9FI7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    //   e.target.reset()
  
    return (
<div className="bg-gradient-to-b from-yellow-100 to-blue-200 h-screen w-full pt-0">
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow opacity-95 rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let's get in touch</p>
                    <form ref={form} onSubmit={sendEmail} >  
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">First Name</label>
                            <input type="text" name="from_name" placeholder="first name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Surname</label>
                            <input type="text" name="from_sec_name" placeholder="surname" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input type="email" name="user_email" placeholder="email address" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Contact Number</label>
                            <input type="text" name="tel" placeholder="+1234" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"/>
                        </div>
                    </div>
                    
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea aria-label="leave a message" role="textbox" type="name" name="message" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking send you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <input type="submit" value="Send" className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-black hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none"/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Form;


{/* <div className="bg-gradient-to-b from-yellow-100 to-blue-200 h-screen w-full pt-0">
            <div className="w-full flex items-center justify-center my-12">
                <div className="absolute top-40 bg-white shadow opacity-95 rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Let's get in touch</p>
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">First Name</label>
                            <input type="text" placeholder="first name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Surname</label>
                            <input type="text" placeholder="surname" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                            <input type="email" placeholder="email address" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-gray-800">Contact Number</label>
                            <input type="email" placeholder="+1234" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                            <textarea aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-black hover:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    );
}



<form ref={form} onSubmit={sendEmail} className='flex h-screen justify-center items-center
'>
<label>Name</label>
<input type="text" name="user_name" />
<label>Email</label>
<input type="email" name="user_email" />
<label>Message</label>
<textarea name="message" />
<input type="submit" value="Send" />
</form>
);
}; */}