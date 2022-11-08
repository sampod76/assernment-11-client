import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContex } from '../ContexApi/ContexApi';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const { logOut, user } = useContext(AuthContex)
    const navigete = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(result => {
                navigete('/login')
                toast.success('successfull logout')
            })
            .catch(err => {
                console.log(err.message);
                toast.error(err.message)
            })

    }
    return (
        <div className="navbar bg-blue-600 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/' className='mr-2 bg-green-700 p-3'><span>Home</span></Link>
                        <Link to='/blog' className='mr-2 bg-green-700 p-3'><span>Blog</span></Link>
                        <Link to='/login' className='mr-2 bg-green-700 p-3'><span>Login</span></Link>
                        <Link to='/register' className='mr-2 bg-green-700 p-3'><span>register</span></Link>
                        <Link onClick={handleLogOut} className='mr-2 bg-green-700 p-3'><span>Log Out</span></Link>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">BD Delivery</Link>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link className='mr-2 bg-green-700 p-3' to='/'><span>Home</span></Link>
                    <Link className='mr-2 bg-green-700 p-3' to='/blog'><span>Blog</span></Link>
                    {
                        user?.uid ? <Link onClick={handleLogOut} className='mr-2 bg-green-700 p-3'><span>Log Out</span></Link> :
                            <>
                                <Link className='mr-2 bg-green-700 p-3' to='/login'><span>Login</span></Link>
                                <Link className='mr-2 bg-green-700 p-3' to='/register'><span>register</span></Link>
                            </>
                    }


                </ul>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Header;