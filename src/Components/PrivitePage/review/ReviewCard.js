import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContex } from '../../ContexApi/ContexApi';
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { FcRating } from "react-icons/fc";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ReviewCard = ({ service, id }) => {
    const { user } = useContext(AuthContex);
    const [review, setReview] = useState(1);
    

    
    const navigate = useNavigate()

    const handleLogin = () => {
        if (!user?.uid) {
            Swal.fire({
                icon: 'error',
                title: 'At fast Login',
                text: 'Then ',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            navigate('/login')
        }
    }

    const handleRewied = (event) => {
        event.preventDefault()
        const time = new Date()

        const reviewData = {
            id: service._id,
            time,
            name: event.target.name.value,
            phone: event.target.phone.value,
            comment: event.target.comment.value,
            photo: user.photoURL,
            rating: review,
            email:user.email,
            productName:service.name,
            productImg:service.picture

        }

        // console.log(reviewData);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reviewData)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(`${data.message} review submit`)
                    event.target.reset()

                }
                else {

                }
            })


    }

    // console.log(review);
    return (
        <div onClick={handleLogin}>
            <h1 className='bg-violet-600 rounded-t-2xl p-2 text-2xl font-bold text-center'>Please write my delivery review</h1>
            <div className='border-2 border-amber-900 '>

                <section className="p-6 bg-blue-400 dark:bg-gray-800 dark:text-gray-50">
                    <form onSubmit={handleRewied} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">

                        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                            <div className="space-y-2 col-span-full lg:col-span-1">
                                <p className="font-medium">Profile</p>
                                <p className="text-xs">Adipisci fuga autem eum!</p>
                            </div>
                            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="username" className="text-sm">Full Name</label>
                                    <input required id="username" name='name' type="text" placeholder="Full Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="Phone number" className="text-sm">Phone number</label>
                                    <input required id="Phone number" name='phone' type="number" placeholder="0170000000" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                                </div>
                                <div className="col-span-full sm:col-span-3">
                                    <label htmlFor="email" className="text-sm">email</label>
                                    <input required id="email" name='email' readOnly type="email" value={user?.email} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Comment </label>
                                    <textarea id="bio" name='comment' placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"></textarea>
                                </div>
                                <div className="col-span-full">
                                    <label htmlFor="bio" className="text-sm">Photo</label>
                                    <div className="flex items-center space-x-2">
                                        {
                                            user?.photoURL ? <div> <img src={`${user?.photoURL}`} alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700 mt-3" />
                                            </div> : <div><img src="https://source.unsplash.com/30x30/?random" alt="" className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700 mt-3" /></div>
                                        }
                                        <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="url"> Uplode Your Photo</label>
                                            <input type="url" name="url" id="url" placeholder='Enter your photo link' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />


                                        </div>

                                        <div className="col-span-full sm:col-span-3   mt-4">

                                            <label htmlFor='ratig' className='text-lg font-bold mx-1'>Rating</label>
                                            <select id='ratig' className='p-2' defaultValue='1' onClick={(e) => setReview(e.target.value)} >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <div className='flex'>
                                                {
                                                    [...Array(Number(review)).keys()].map((_,index)=><span key={index}><FcRating className='text-lg'></FcRating></span>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className='bg-red-500 p-2 rounded-lg text-white' type="submit">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </section>
            </div>


        </div>
    );
};

export default ReviewCard;