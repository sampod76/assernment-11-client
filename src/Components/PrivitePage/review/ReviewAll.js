import React, { useEffect, useState } from 'react';
import { FcRating } from "react-icons/fc";
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContex } from '../../ContexApi/ContexApi';
import useTitle from '../../Title/useTitle';


const ReviewAll = () => {
    useTitle('Reviews')
    const {user,logOut}=useContext(AuthContex)
    const [defandence,setDefance]=useState(false)

    const [reviewall, setReview] = useState([])

    useEffect(() => {
        fetch(`https://server-side-rust.vercel.app/reviews/${user?.email}`,{
            headers:{
                authorisation:`${localStorage.getItem("jwt-token")}`
            }
        })
            .then(res => {
                if(res.status == 403 || res.status ==401){
                    logOut()
                }
               return res.json()
            })
            .then(data => {
                if (data.success) {
                    // alert(data.message)
                    setReview(data.data)
                } else {
                    alert(data.message)
                    // if(data.status == 403 || data.status ==401){
                    //     logOut()
                    // }
                }
            })
    }, [defandence, user?.email])

   

    const handleDelete = (e) => {
        fetch(`https://server-side-rust.vercel.app/reviews/${e}`, {
            method: 'DELETE',
            headers:{
                authorisation:`${localStorage.getItem("jwt-token")}`,
                email: user.email
            }
        }).then(res => {
            if(res.status == 403 || res.status ==401){
                logOut()
            }
           return res.json()
        })
        .then(data=>{
            if(data.success){
                alert(data.message)
                setDefance(!defandence)
            }
            else{
                alert(data.message)
            }
        })
        
    }

    

    return (
        <div>
           
             {
                reviewall.length ==0 && <div className='flex justify-center items-center h-screen '>
                <div>
                <h1 className='text-5xl font-bold text-red-600 text-center'>No reviews found yet</h1>
                <img className='w-[40%] mx-auto' src="https://cdn.dribbble.com/users/1489103/screenshots/6326497/no-data-found.png" alt="" />
                </div>
            </div>
             }

            {
                reviewall.map(review => <div key={review._id} review={review}>
                    <div className="container flex flex-col w-full mt-1 p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900
                     dark:text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    {
                                       review?.photo ?
                                        <img src={review?.photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 rounded-full" /> :<img src='https://cdn.pixabay.com/photo/2017/02/16/13/42/box-2071537__340.png' alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500 rounded-full" /> 
                                    }
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <span className="text-xs hidden md:block dark:text-gray-400">{review.time}</span>
                                </div>
                            </div>
                            <div className='block md:flex'>
                                <h1 className='text-base md:text-2xl font-bold rounded-lg'>Service : {review.productName}</h1>
                                <img src={review.productImg} alt="" className='w-12 h-12  dark:bg-gray-500 ' />
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
                        <div className='flex justify-end '>
                            <button  onClick={() => handleDelete(review._id)} className='buttonb mt-1 mr-1'>Delete</button>
                            <Link to={`/reviews/updates/${review._id}`} className='buttonb mt-1 mr-1'>Update</Link>
                        </div>
                    </div>



                </div>)
            }
        </div>
    );
};

export default ReviewAll;