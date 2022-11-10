import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Home/section/Services';
import toast, { Toaster } from 'react-hot-toast';
import { Audio, ColorRing } from 'react-loader-spinner'


const Delivery = () => {
    const [services, setServices] = useState([])
    const [looding, setLooading] = useState(true)

    useEffect(() => {
        fetch('https://server-side-rust.vercel.app/delivery')
            .then(res => res.json())
            .then(data => {
                
                if (data.success) {
                    setLooading(false)
                    setServices(data.data)
                }else {
                    toast.error(data.message)
                }
            })
    }, [])
    // console.log(services)
    if (looding) {
        return <div className='w-fit mx-auto'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    }
    return (
        <div>
           
            <Link to='/addservices' className='flex justify-center items-center gap-3 bg-slate-400 rounded-lg w-fit px-2
            mx-auto'>
                <p className='text-3xl '>ADD YOUR DEMAND SERVICE </p>
                <p><kbd className="kbd text-3xl">+</kbd></p>
            </Link>
             <div className='mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        services.map(service => <Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Delivery;