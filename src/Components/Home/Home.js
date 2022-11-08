import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Services from './section/Services';

const Home = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/delivery', {
            headers: {
                pages: 3
            }
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    setServices(data.data)
                }
            })
    }, [])

    return (
        <div>

            <div className='mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
           

        </div>
    );
};

export default Home;