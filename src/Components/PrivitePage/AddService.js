import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import ReviewAll from './review/ReviewAll';
import ReviewCard from './review/ReviewCard';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleService = () => {
    const [service, setService] = useState({})
    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        fetch(`https://server-side-rust.vercel.app/delivery/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setService(data.data)
                }
                else {
                    toast.error(data.message)
                }
            })
    }, [id])



    return (
        <div>

            <div className='mt-3'>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <PhotoProvider>
                        <PhotoView src={service.picture} >
                            <img src={service.picture} className='w-[100%] md:w-[40%] border-2 border-black rounded-lg ' alt="Album" />
                        </PhotoView>
                    </PhotoProvider>
                    {/* <img src={service.picture} className='w-[100%] md:w-[40%] border-2 border-black rounded-lg ' alt="Album" /> */}
                    <div className="card-body w-[100%] lg:w-[60%]">
                        <div className='block md:flex'>
                            <h2 className="card-title font-bold w-fit hover:bg-sky-600 p-2">{service.name}</h2>
                            <h2 className="card-title font-bold w-fit bg-red-600 rounded-lg p-2">Price : {service.balance}</h2>
                        </div>
                        <hr className='border-2 border-black bg-black' />
                        <p>{service.about}</p>
                        <div className="card-actions justify-between items-center">
                            <div className="rating rating-sm">
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <Link to={`/review/${service._id} `} className="btn btn-primary">Review</Link>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            <div>
                <ReviewCard id={service.id} service={service}></ReviewCard>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />

        </div>
    );
};

export default SingleService;