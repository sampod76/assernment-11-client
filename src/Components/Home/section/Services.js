import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    const { about, balance, name, picture, _id } = service
    return (
        <div className="card card-compact w-full h-[90%]   bg-base-100 shadow-2xl">
            <img className='h-[50%] rounded-t-lg' src={picture} alt="Shoes" />
            <div className="card-body ">
                <h2 className="card-title">{name} <span className='text-blue-700'>price:{balance}</span></h2>
                <p>{about.slice(0, 100)}</p>
                <div className="card-actions justify-between items-center">
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <Link to={`/delivery/${_id}`} className="btn btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Services;