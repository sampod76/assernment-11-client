import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Offer from '../Offer/Offer';
import Services from './section/Services';
import { Helmet } from "react-helmet";

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
            <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home</title>
                </Helmet>

            <div className='mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        services.map(service => <Services key={service._id} service={service}></Services>)
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                <Link to='/delivery' className='w-fit buttonb' >See all ..... </Link>
            </div>
            <div className='bg-cyan-400 block md:flex  '>
                <div className='flex items-center' >
                    <img className='h-24 sm:hidden md:block  rounded-lg ' src="https://media.tenor.com/GzOGkwM4EvcAAAAM/popcorn-delivery.gif" alt=""  />
                </div>

                <div className='w-[100] lg:w-[40%] mx-auto my-2 '>
                    <div className="carousel w-full ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={`${services[1]?.picture}`} className="w-full rounded-t-lg" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={`${services[2]?.picture}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={`${services[0]?.picture}`} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex items-center' >
                    <img className='h-24 sm:hidden md:block  rounded-lg ' src="https://media.tenor.com/GzOGkwM4EvcAAAAM/popcorn-delivery.gif" alt=""  />
                </div>

            </div>

            <div>
                <Offer></Offer>
            </div>

        </div>
    );
};

export default Home;