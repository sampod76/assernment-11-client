import React, { useEffect, useState } from 'react';


const Addservice = () => {

    const [service, setService] = useState({})



    const handleAddService = (event) => {
        event.preventDefault()
        const form = event.target;
        const username = form.name.value;

        const name = form.service.value;
        const address = form.addres.value || 'dhaka 1205';
        const email = form.email.value;
        const picture = form.url.value || 'https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=826&t=st=1667954238~exp=1667954838~hmac=42a0bfd5a173f6551077522b60ccd63b3a6d5507664b3bbffd43d1bbdb4c5b07';
        const about = form.commit.value;




        const dataService = {
            name, username, address, email, picture, balance: 0, about, rating: 3
        }


        fetch('https://server-side-rust.vercel.app/delivery', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                authorisation:`${localStorage.getItem("jwt-token")}`
            },
            body: JSON.stringify(dataService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message)
                    form.reset()
                }
                else {
                    alert(data.message)
                }
            })






    }






    return (
        <div>
            <div>
              
            </div>
            <section onSubmit={handleAddService} className="p-6 my-2 dark:bg-gray-800  dark:text-gray-50 bg-gradient-to-r from-cyan-500 to-blue-500">
                <form className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-medium">Service information</p>

                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Your name</label>
                                <input id="username" name='name' type="text" required placeholder="Name" className="w-full  text-black  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="username" className="text-sm">Service Name</label>
                                <input id="username" name='service' type="text" required placeholder="Service Name" className="w-full   text-black rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Your address</label>
                                <input id="website" name='addres' type="text" placeholder="" className="w-full   text-black  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="website" className="text-sm">Your Email</label>
                                <input id="website" type="email" required placeholder="Your Email" name='email' className="w-full   text-black  rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="bio" className="text-sm">Details</label>
                                <textarea required id="bio" name='commit' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-5"></textarea>
                            </div>
                            <div className="col-span-full border-2 border-black p-2 w-fit">

                                <div className="flex items-center space-x-2">
                                    <label htmlFor="url">Photo Url</label>
                                    <input className='rounded-lg  text-black' type="url" name="url" id="url" />
                                </div>
                            </div>

                        </div>
                    </fieldset>
                    <div className='mx-auto'>

                        <button className='bg-indigo-800 p-3 text-white rounded-lg' type="submit">ADD</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Addservice;