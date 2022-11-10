import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './allCss.css'
import { FcRating } from "react-icons/fc";

import { useContext } from 'react';
import { AuthContex } from '../../ContexApi/ContexApi';
const ReviewUpdate = () => {
    const { id } = useParams()
    const {user,logOut}=useContext(AuthContex)
    const [defandence, setDefance] = useState(false)
    const [review, setReview] = useState({})
    const { _id, name, phone, photo, rating, email,comment
    } = review
    // console.log(review,id)
    const [ratingRv, setRating] = useState(0)
    
    

    useEffect(() => {
        fetch(`https://server-side-rust.vercel.app/reviewsSongle/${id}`)
            .then(res =>res.json())
            .then(data => {
                if (data.success) {
                    // console.log(data.data)
                    setReview(data.data)
                }
                else {
                    alert(data.message)
                    // console.log(data.message);
                }
            })
    }, [defandence,id])


    const handleUpdate = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const phone = event.target.phone.value;
        const comment= event.target.comment.value;

        const updateData = {
            name,
            phone,
            rating:ratingRv,
            comment
        }

        // console.log(updateData);
        fetch(`https://server-side-rust.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorisation:`${localStorage.getItem("jwt-token")}`,
                email:user.email
            },
            body: JSON.stringify(updateData)
        }).then(res => {
            if(res.status == 403 || res.status ==401){
                logOut()
            }
           return res.json()
        })
            .then(data => {
                if (data.success) {
                    alert(data.message)
                    setDefance(!defandence)

                }
                else {
                    alert(data.message)
                }
            })
    }
    return (
        <div className='backgroundG ' >
           
            <div className="w-full h-screen">
                <div className="container mx-auto py-8">
                    <div className=" w-96 md:w-fit mx-auto bg-slate-300
                     rounded shadow">
                        <div className="mx-16 py-4 px-8 text-black text-xl
                         font-bold border-b border-grey-500">Update Your Review
                        </div>
                        <form onSubmit={handleUpdate} >
                            <div className="py-4 px-8">

                                <div className="mb-4">
                                    <label className="block text-grey-darker
                                     text-sm font-bold mb-2">Name:</label>
                                    <input className=" border rounded w-full 
                                    py-2 px-3 text-grey-darker" type="text"
                                        defaultValue={name}
                                        name="name" id="student_id" placeholder="Enter Your Name" />

                                </div>


                                <div className="mb-4">
                                    <label className="block text-grey-darker 
                                    text-sm font-bold mb-2">Phone Number</label>
                                    <input className=" border rounded w-full
                                     py-2 px-3 text-grey-darker" type="number" defaultValue={phone}
                                        name="phone" id="student_name" placeholder="Enter Your Name" />

                                </div>
                                <div className="mb-4">
                                    <label className="block text-grey-darker 
                                    text-sm font-bold mb-2">comment/about</label>
                                    <input className=" border rounded w-full
                                     py-2 px-3 text-grey-darker" type="text" defaultValue={comment}
                                        name="comment" id="student_name" placeholder="Enter Your Name" />

                                </div>

                                <div className="mb-4">
                                    <label className="block text-grey-darker 
                                    text-sm font-bold mb-2">Email:</label>
                                    <input className=" border rounded w-full
                                     py-2 px-3 text-grey-darker" type="email"
                                        name="course_name" id="course_name" readOnly value={email
                                        } placeholder="Enter Your Course Name" />
                                    <p ></p>
                                </div>

                                <div className="col-span-full sm:col-span-3 flex gap-2  items-center  my-4">

                                    <label htmlFor='ratig' className='text-lg font-bold mx-1'>Rating</label>
                                    <select id='ratig' className='p-2' defaultValue='3' onClick={(e) => setRating(e.target.value)} >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    <div className='flex'>

                                        {
                                            [...Array(rating).keys()].map((_, index) => <span key={index}><FcRating className='text-lg'></FcRating></span>)
                                        }
                                    </div>
                                </div>


                                <div className="mb-4">
                                    <button
                                        className="mb-2 mx-16 rounded-full py-1 
                                        px-24 bg-gradient-to-r from-green-400 to-blue-500 ">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>

        </div>

    );
};

export default ReviewUpdate;