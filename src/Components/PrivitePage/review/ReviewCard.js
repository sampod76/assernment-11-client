import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../../ContexApi/ContexApi';
import Swal from 'sweetalert2'
import toast, { Toaster } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcRating } from "react-icons/fc";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useEffect } from 'react';

const ReviewCard = ({ service, id }) => {

    const { user, logOut } = useContext(AuthContex);
    const [reviewSingel, setReviewSingle] = useState([])
    const [review, setReview] = useState(5);
    const [defandence, setDefance] = useState(false)



    const navigate = useNavigate()

    const handleLogin = () => {
        if (!user?.uid) {
            Swal.fire({
                icon: 'error',
                title: 'At fast Login',
                text: 'Then reviews this item',
                footer: '<a href="">Why do I have this issue?</a>'
            })
            navigate('/login')
        }
    }

    const handleRewied = (event) => {
        event.preventDefault()
        const time = new Date()

        const reviewData = {
            productId: service._id,
            time,
            name: event.target.name.value,
            phone: event.target.phone.value,
            comment: event.target.comment.value,
            photo: user.photoURL,
            rating: review,
            email: user.email,
            productName: service.name,
            productImg: service.picture

        }

        // console.log(reviewData);

        fetch('https://server-side-rust.vercel.app/reviews', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                authorisation:`${localStorage.getItem("jwt-token")}`,
                email: user.email,
            },
            body: JSON.stringify(reviewData)
        }).then(res => {
            if (res.status == 403 || res.status == 401) {
                logOut()
            }
            return res.json()
        })
            .then(data => {
                if (data.success) {
                    // toast("Wow so easy !")
                    setDefance(!defandence)
                    alert(`${data.message} review submit`)
                    event.target.reset()

                }
                else {
                    alert(data.message)
                }
            })


    }


    // get singel review to id 

    useEffect(() => {
        fetch(`https://server-side-rust.vercel.app/reviewsId/${service._id}`)
            .then(res => {

                return res.json()
            })
            .then(data => {
                if (data.success) {
                    // console.log(data.data)
                    setReviewSingle(data.data)
                }
                else {
                    alert(data.message)
                }
            })
    }, [defandence, service._id])


    // console.log(review);
    return (

        <div>

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
                                            {/* <div className="col-span-full sm:col-span-3">
                                            <label htmlFor="url"> Uplode Your Photo</label>
                                            <input type="url" name="url" id="url" placeholder='Enter your photo link' className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2" />


                                        </div> */}

                                            <div className="col-span-full sm:col-span-3 flex gap-2 justify-center items-center  mt-4">

                                                <div>
                                                    <label htmlFor='ratig' className='text-lg font-bold mx-1'>Rating</label>
                                                    <select id='ratig' className='p-2' defaultValue='5' onClick={(e) => setReview(e.target.value)} >
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                                <div className='flex'>
                                                    {
                                                        [...Array(Number(review)).keys()].map((_, index) => <span key={index}><FcRating className='text-lg'></FcRating></span>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className='flex justify-center items-center'> <button className='bg-red-500 p-2 rounded-lg text-white text-center' type="submit">Submit</button></div>
                        </form>
                    </section>
                </div>


            </div>

            <div>
                {
                    reviewSingel.length == 0 && <div className='flex justify-center items-center '>
                        <div>
                            <h1 className='text-5xl font-bold text-red-600 text-center'>No reviews found yet</h1>
                            <img className='w-[40%] mx-auto' src="https://cdn.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png" alt="" />
                        </div>
                    </div>
                }

                <h1 className='bg-purple-600 p-2 rounded-t-lg w-fit mx-auto mt-2'>This is all review this product</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
                    {
                        reviewSingel.map(review => <div key={review._id} review={review}>
                            <div className="container flex flex-col w-full mt-1 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900
                     dark:text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            {
                                                review?.photo ?
                                                    <img src={review?.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 rounded-full" /> : <img src='https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537__340.png' alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 rounded-full" />
                                            }
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{review.name}</h4>
                                            <span className="text-xs hidden md:block dark:text-gray-400">{review.time}</span>
                                        </div>
                                    </div>
                                    <div className='block md:flex'>
                                        <h1 className='text-base md:text-2xl font-bold rounded-lg'>{review.productName}</h1>

                                    </div>
                                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                                        <div className='flex'>
                                            {
                                                [...Array(Number(review.rating)).keys()].map((_, index) => <span key={index}><FcRating className=''></FcRating></span>)
                                            }
                                        </div>
                                        <span className="text-xl font-bold">{review.rating}</span>
                                    </div>
                                </div>
                                <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                                    <p>{review.comment}</p>
                                </div>

                            </div>



                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;