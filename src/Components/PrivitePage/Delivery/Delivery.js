import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../Home/section/Services';
import toast, { Toaster } from 'react-hot-toast';

const Delivery = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/delivery')
            .then(res => res.json())
            .then(data => {
                
                if (data.success) {
                    setServices(data.data)
                }else {
                    toast.error(data.message)
                }
            })
    }, [])
    console.log(services)
    return (
        <div>
            <Link to='' className='flex justify-center items-center gap-3 bg-slate-400 rounded-lg w-fit px-2
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