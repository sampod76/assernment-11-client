
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';
import toast, { Toaster } from 'react-hot-toast';
import Swal from 'sweetalert2'
import useTitle from '../Title/useTitle';


const Register = () => {
    const { setLoading, loading, singUpEmailPassword } = useContext(AuthContex)
    useTitle('Register')
const navigate = useNavigate()
    const handleEmailAndPassword = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        singUpEmailPassword(email, password)
            .then(result => {
                // console.log(result.user)
                Swal.fire(
                    `successfully login`,
                    'You clicked the button!',
                    'success'
                )
                form.reset()
                navigate('/')
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })

    }


    return (

        <div className="w-full h-auto overflow-scroll block h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 p-4 flex items-center justify-center" >
          
            <div className="bg-white py-6 px-10 sm:max-w-md w-full ">
                <div className="sm:text-3xl text-2xl font-semibold text-center text-sky-600  mb-12">
                    Registration Form
                </div>
                <form onSubmit={handleEmailAndPassword} >
                    <div>
                        <input type="text" name='name' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500" placeholder="Name " />
                    </div>
                    <div>
                        <input type="email" name='email' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 my-8" placeholder="Eamil Adress " />
                    </div>

                    <div>
                        <input type="url" name='url' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Photo url " />
                    </div>
                    <div className="">
                        <input type="password" name='password' className="focus:outline-none border-b w-full pb-2 border-sky-400 placeholder-gray-500 mb-8" placeholder="Password " />
                    </div>
                    <div className="flex">
                        <input type="checkbox" className="border-sky-400 " value="" />
                        <div className="px-3 text-gray-500">
                            I accept terms & conditions
                        </div>
                    </div>
                    <div className="flex justify-center my-6">
                        <button type='submit' className=" rounded-full  p-3 w-full sm:w-56   bg-gradient-to-r from-sky-600  to-teal-300 text-white text-lg font-semibold " >
                            Create Account
                        </button>
                    </div>
                    <div className="flex justify-center p-1">
                        <p className="text-gray-500">Already have an acount? </p>
                        <Link to='/login' className="text-sky-600 pl-2 underline decoration-red-800 border-2 border-black font-bold px-2 rounded-lg "> Sign In</Link>
                    </div>
                </form>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Register;