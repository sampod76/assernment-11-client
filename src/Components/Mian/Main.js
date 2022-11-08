import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer';
import Header from '../Share/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-screen text-black'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;